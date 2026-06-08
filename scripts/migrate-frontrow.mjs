/*
 * FrontRow Platform / Road Crew Engagement Program
 * Copyright © 2026 Hallowfield Building Group, LLC.
 * All rights reserved.
 *
 * Endless Detour name, logo, and band-specific branding are separate marks
 * owned by their respective rights holders and used by permission.
 */

import { applicationDefault, initializeApp } from "firebase-admin/app";
import { FieldValue, getFirestore } from "firebase-admin/firestore";

const APPLY = process.argv.includes("--apply");
const PLATFORM_ID = "frontrow";
const PROGRAM_ID = "road-crew";
const COMMUNITY_ID = "community-endless-detour";
const ARTIST_ID = "endless-detour";

initializeApp({ credential: applicationDefault() });
const db = getFirestore();

const community = {
  platformId: PLATFORM_ID,
  programId: PROGRAM_ID,
  artistId: ARTIST_ID,
  artistName: "Endless Detour",
  name: "Endless Detour Road Crew",
  type: "artist",
  foundingCommunity: true,
  status: "active",
};

function cumulativeMilemarkers(profile = {}) {
  return Math.max(profile.lifetimePoints || 0, profile.totalPoints || 0, profile.points || 0);
}

function statusFor(milemarkers) {
  if (milemarkers >= 650) return { id: "endless-legend", name: "Endless Legend" };
  if (milemarkers >= 450) return { id: "road-captain", name: "Road Captain" };
  if (milemarkers >= 300) return { id: "crew-member", name: "Crew Member" };
  if (milemarkers >= 150) return { id: "roadie", name: "Roadie" };
  if (milemarkers >= 100) return { id: "new-traveler", name: "New Traveler" };
  return { id: "road-crew-rookie", name: "Road Crew Rookie" };
}

function inferRewardLevel(claim = {}) {
  const value = `${claim.rewardId || ""} ${claim.rewardName || ""}`.toLowerCase();
  if (claim.statusLevel) return claim.statusLevel;
  if (value.includes("welcome") || value.includes("koozie") || value.includes("sticker") || value.includes("magnet")) return "new-traveler";
  if (value.includes("shirt") || value.includes("pint") || value.includes("hat")) return "roadie";
  if (value.includes("vip") || value.includes("rehearsal") || value.includes("karaoke")) return "crew-member";
  if (value.includes("dinner") || value.includes("pickguard")) return "road-captain";
  if (value.includes("drumhead") || value.includes("legend")) return "endless-legend";
  return null;
}

async function write(ref, data, options = { merge: true }) {
  if (!APPLY) return;
  await ref.set(data, options);
}

async function migrate() {
  const users = await db.collection("users").get();
  const events = await db.collection("events").get();
  const rewards = await db.collection("rewards").get();
  let writes = 1;

  await write(db.collection("communities").doc(COMMUNITY_ID), {
    ...community,
    migratedAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  });

  for (const doc of users.docs) {
    const user = doc.data();
    const milemarkers = cumulativeMilemarkers(user);
    const status = statusFor(milemarkers);
    await write(db.collection("roadCrewProfiles").doc(doc.id), {
      userId: doc.id,
      displayName: user.displayName || "FrontRow Member",
      email: user.email || "",
      lifetimeMilemarkers: milemarkers,
      totalMilemarkers: milemarkers,
      totalCheckIns: user.totalCheckIns || 0,
      currentStatusId: status.id,
      currentStatusName: status.name,
      leaderboardOptOut: user.leaderboardOptOut || false,
      foundingMember: Boolean(user.foundingMember),
      foundingMemberNumber: user.foundingMemberNumber || null,
      platformId: PLATFORM_ID,
      programId: PROGRAM_ID,
      communityId: COMMUNITY_ID,
      artistId: ARTIST_ID,
      artistName: "Endless Detour",
      migrationSource: "scripts/migrate-frontrow.mjs",
      migratedAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });
    await write(db.collection("milemarkerLedger").doc(`${doc.id}_migration-baseline_legacy-total`), {
      userId: doc.id,
      displayName: user.displayName || "FrontRow Member",
      type: "migration_baseline",
      title: "Legacy Milemarker Baseline",
      description: "Backfilled from existing Road Crew totals during the FrontRow migration.",
      milemarkers,
      amount: milemarkers,
      status: "posted",
      source: "migration",
      referenceId: "legacy-total",
      platformId: PLATFORM_ID,
      programId: PROGRAM_ID,
      communityId: COMMUNITY_ID,
      artistId: ARTIST_ID,
      artistName: "Endless Detour",
      awardedAt: FieldValue.serverTimestamp(),
      createdAt: FieldValue.serverTimestamp(),
    });
    writes += 2;
  }

  for (const doc of events.docs) {
    const event = doc.data();
    await write(doc.ref, {
      platformId: event.platformId || PLATFORM_ID,
      communityId: event.communityId || COMMUNITY_ID,
      artistId: event.artistId || ARTIST_ID,
      artistName: event.artistName || "Endless Detour",
      venueId: event.venueId || "",
      migratedAt: FieldValue.serverTimestamp(),
    });
    writes += 1;
  }

  for (const doc of rewards.docs) {
    const statusLevel = inferRewardLevel(doc.data());
    if (!statusLevel) continue;
    await write(doc.ref, { statusLevel, migratedAt: FieldValue.serverTimestamp() });
    writes += 1;
  }

  console.log(`${APPLY ? "Applied" : "Dry run complete for"} ${writes} additive FrontRow writes.`);
  console.log(`Users: ${users.size}; events: ${events.size}; reward claims: ${rewards.size}.`);
  if (!APPLY) console.log("No Firestore data changed. Run again with --apply after reviewing this output.");
}

migrate().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
