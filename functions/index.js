/*
 * FrontRow Platform / Road Crew Engagement Program
 * Copyright © 2026 Hallowfield Building Group, LLC.
 * All rights reserved.
 *
 * Endless Detour name, logo, and band-specific branding are separate marks
 * owned by their respective rights holders and used by permission.
 */

const { initializeApp } = require("firebase-admin/app");
const { FieldValue, getFirestore } = require("firebase-admin/firestore");
const { HttpsError, onCall } = require("firebase-functions/v2/https");

initializeApp();
const db = getFirestore();

function statusFor(milemarkers) {
  if (milemarkers >= 650) return { id: "endless-legend", name: "Endless Legend" };
  if (milemarkers >= 450) return { id: "road-captain", name: "Road Captain" };
  if (milemarkers >= 300) return { id: "crew-member", name: "Crew Member" };
  if (milemarkers >= 150) return { id: "roadie", name: "Roadie" };
  if (milemarkers >= 100) return { id: "new-traveler", name: "New Traveler" };
  return { id: "road-crew-rookie", name: "Road Crew Rookie" };
}

function cumulativeMilemarkers(profile = {}) {
  return Math.max(profile.lifetimePoints || 0, profile.totalPoints || 0, profile.points || 0);
}

exports.awardMilemarkers = onCall(async (request) => {
  if (!request.auth) throw new HttpsError("unauthenticated", "Sign in to continue.");

  const caller = await db.collection("users").doc(request.auth.uid).get();
  if (!caller.exists || caller.data().isAdmin !== true) {
    throw new HttpsError("permission-denied", "Admin permission required.");
  }

  const { userId, amount, type, title, description = "", referenceId } = request.data || {};
  if (!userId || !Number.isFinite(amount) || amount <= 0 || !type || !referenceId) {
    throw new HttpsError("invalid-argument", "userId, positive amount, type, and referenceId are required.");
  }

  const userRef = db.collection("users").doc(userId);
  const profileRef = db.collection("roadCrewProfiles").doc(userId);
  const ledgerRef = db.collection("milemarkerLedger").doc(`${userId}_${type}_${referenceId}`.replace(/[^a-zA-Z0-9_-]/g, "-").slice(0, 240));

  return db.runTransaction(async (transaction) => {
    const [userSnapshot, ledgerSnapshot] = await Promise.all([
      transaction.get(userRef),
      transaction.get(ledgerRef),
    ]);
    if (!userSnapshot.exists) throw new HttpsError("not-found", "FrontRow member not found.");
    if (ledgerSnapshot.exists) return { awarded: false, duplicate: true };

    const user = userSnapshot.data();
    const milemarkers = cumulativeMilemarkers(user) + amount;
    const status = statusFor(milemarkers);
    const scope = {
      platformId: "frontrow",
      programId: "road-crew",
      communityId: request.data.communityId || "community-endless-detour",
      artistId: request.data.artistId || "endless-detour",
      artistName: request.data.artistName || "Endless Detour",
    };

    transaction.set(userRef, {
      totalPoints: milemarkers,
      lifetimePoints: milemarkers,
      rewardTier: status.name,
      leaderboardTitle: status.name,
      updatedAt: FieldValue.serverTimestamp(),
    }, { merge: true });
    transaction.set(profileRef, {
      userId,
      displayName: user.displayName || "FrontRow Member",
      email: user.email || "",
      lifetimeMilemarkers: milemarkers,
      totalMilemarkers: milemarkers,
      totalCheckIns: user.totalCheckIns || 0,
      currentStatusId: status.id,
      currentStatusName: status.name,
      ...scope,
      updatedAt: FieldValue.serverTimestamp(),
    }, { merge: true });
    transaction.create(ledgerRef, {
      userId,
      displayName: user.displayName || "FrontRow Member",
      type,
      title: title || "Milemarker Award",
      description,
      milemarkers: amount,
      amount,
      status: "posted",
      source: "cloud_function",
      referenceId,
      awardedBy: request.auth.uid,
      ...scope,
      awardedAt: FieldValue.serverTimestamp(),
      createdAt: FieldValue.serverTimestamp(),
    });
    return { awarded: true, milemarkers, status: status.name };
  });
});
