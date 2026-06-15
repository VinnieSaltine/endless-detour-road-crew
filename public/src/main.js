/*
 * FrontRow Platform / Road Crew Engagement Program
 * Copyright © 2026 Hallowfield Building Group, LLC.
 * All rights reserved.
 *
 * Endless Detour name, logo, and band-specific branding are separate marks
 * owned by their respective rights holders and used by permission.
 */

const { useEffect, useMemo, useState } = React;

function makeIcon(paths) {
  return function Icon({ size = 20 }) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {paths.map((path, index) => (
          <path key={index} d={path} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ))}
      </svg>
    );
  };
}

const CalendarDays = makeIcon(["M8 2v4", "M16 2v4", "M3 10h18", "M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z"]);
const Check = makeIcon(["M20 6 9 17l-5-5"]);
const ClipboardList = makeIcon(["M9 5h6", "M9 3h6v4H9z", "M7 5H5v16h14V5h-2", "M8 12h.01", "M11 12h5", "M8 16h.01", "M11 16h5"]);
const Compass = makeIcon(["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z", "m16 8-2.5 5.5L8 16l2.5-5.5L16 8Z"]);
const Building2 = makeIcon(["M3 21h18", "M6 21V3h12v18", "M9 7h.01", "M15 7h.01", "M9 11h.01", "M15 11h.01", "M9 15h.01", "M15 15h.01"]);
const Edit3 = makeIcon(["M12 20h9", "M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"]);
const Download = makeIcon(["M12 3v12", "m7 10 5 5 5-5", "M5 21h14"]);
const ExternalLink = makeIcon(["M15 3h6v6", "M10 14 21 3", "M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"]);
const Gift = makeIcon(["M20 12v10H4V12", "M2 7h20v5H2z", "M12 22V7", "M12 7H8a2.5 2.5 0 1 1 2.5-2.5C10.5 7 12 7 12 7Z", "M12 7h4a2.5 2.5 0 1 0-2.5-2.5C13.5 7 12 7 12 7Z"]);
const Home = makeIcon(["M3 10.5 12 3l9 7.5", "M5 10v11h14V10", "M9 21v-6h6v6"]);
const Lock = makeIcon(["M6 10V8a6 6 0 0 1 12 0v2", "M5 10h14v11H5z"]);
const LogOut = makeIcon(["M10 17l5-5-5-5", "M15 12H3", "M21 3v18"]);
const MapPin = makeIcon(["M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z", "M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"]);
const Megaphone = makeIcon(["M3 11v3a2 2 0 0 0 2 2h2l4 4v-4l8-3V7l-8-3v4H5a2 2 0 0 0-2 2Z", "M19 8a4 4 0 0 1 0 4"]);
const Music2 = makeIcon(["M9 18V5l12-2v13", "M9 18a3 3 0 1 1-2-2.83", "M21 16a3 3 0 1 1-2-2.83"]);
const Plus = makeIcon(["M12 5v14", "M5 12h14"]);
const Radio = makeIcon(["M4.9 19.1a10 10 0 0 1 0-14.2", "M7.8 16.2a6 6 0 0 1 0-8.4", "M10.6 13.4a2 2 0 1 1 2.8-2.8", "M13 13l5 7"]);
const Save = makeIcon(["M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z", "M17 21v-8H7v8", "M7 3v5h8"]);
const Shield = makeIcon(["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"]);
const Star = makeIcon(["M12 2l3 6 6.5.9-4.7 4.6 1.1 6.5L12 17l-5.9 3 1.1-6.5L2.5 8.9 9 8z"]);
const Trash2 = makeIcon(["M3 6h18", "M8 6V4h8v2", "M6 6l1 15h10l1-15", "M10 11v6", "M14 11v6"]);
const Trophy = makeIcon(["M8 21h8", "M12 17v4", "M7 4h10v6a5 5 0 0 1-10 0Z", "M7 6H4a3 3 0 0 0 3 3", "M17 6h3a3 3 0 0 1-3 3"]);
const Users = makeIcon(["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z", "M22 21v-2a4 4 0 0 0-3-3.87"]);
const Vote = makeIcon(["M9 12l2 2 4-4", "M5 4h14v16H5z", "M3 20h18"]);

const APP_CONFIG = {
  version: "v1.4.2",
  foundingSeason: "Founding Season 2026",
  platformOwner: "Hallowfield Building Group, LLC",
  platformName: "FrontRow",
  engagementProgramName: "Road Crew",
  primaryArtistId: "endless-detour",
  primaryArtistName: "Endless Detour",
  bandMarksNotice: "Endless Detour name and logo used by permission.",
};
const POINTS = { account: 25, facebook: 50, instagram: 25, checkIn: 25, referral: 15, songRequest: 2, pollVote: 2, pollPredictionBonus: 10 };
const EVENT_SOURCE = "https://endlessdetourband.com/events";
const FRONTROW_PLATFORM_ID = "frontrow";
const ROAD_CREW_PROGRAM_ID = "road-crew";
const FOUNDING_COMMUNITY = {
  id: "community-endless-detour",
  platformId: FRONTROW_PLATFORM_ID,
  programId: ROAD_CREW_PROGRAM_ID,
  artistId: APP_CONFIG.primaryArtistId,
  artistName: APP_CONFIG.primaryArtistName,
  name: "Endless Detour Road Crew",
  type: "artist",
  foundingCommunity: true,
  status: "active",
};
const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/search/top?q=endless%20detour%20band",
  instagram: "https://www.instagram.com/explore/search/keyword/?q=endless%20detour%20band",
};

const seedArtists = [
  {
    id: "endless-detour",
    name: "Endless Detour",
    members: ["Matt", "Endless Detour"],
    genre: "Rock / Pop / Alternative Covers",
    homeMarket: "Greater Philadelphia",
    activeStatus: "Active",
    type: "Cover Band",
    location: "Greater Philadelphia",
    description: "Local live music, road-tested favorites, and the founding artist community on FrontRow.",
    imageUrl: "/assets/endless-detour-logo-wide.jpg",
    featured: true,
  },
];

const SONG_STATUSES = ["Active", "Learning", "Retired"];
const SONG_CSV_HEADERS = ["Song Title", "Original Artist", "Duration", "Key", "Lead Vocal", "Harmony Vocal", "Genre", "Decade", "Energy Level", "Status", "Notes"];

const seedSongLibrary = [
  songSeed("endless-detour-hey-jealousy", "Hey Jealousy", "Gin Blossoms", "3:56", "D", "Matt", "Band", "Alternative Rock", "1990s", 4, "Active", "Bright mid-set singalong."),
  songSeed("endless-detour-mr-brightside", "Mr. Brightside", "The Killers", "3:43", "D-flat", "Matt", "Band", "Alternative Rock", "2000s", 5, "Active", "High-energy closer candidate."),
  songSeed("endless-detour-everlong", "Everlong", "Foo Fighters", "4:10", "D", "Matt", "Band", "Rock", "1990s", 5, "Active", "Works best late in the set."),
  songSeed("endless-detour-dont-stop-believin", "Don't Stop Believin'", "Journey", "4:11", "E", "Matt", "Band", "Classic Rock", "1980s", 5, "Learning", "Big chorus; confirm vocal handoff."),
  songSeed("endless-detour-you-shook-me-all-night-long", "You Shook Me All Night Long", "AC/DC", "3:30", "G", "Matt", "Band", "Classic Rock", "1980s", 5, "Active", "Reliable bar-room lift."),
  songSeed("endless-detour-wagon-wheel", "Wagon Wheel", "Old Crow Medicine Show", "3:52", "A", "Matt", "Band", "Country Rock", "2000s", 3, "Active", "Good early crowd warmup."),
  songSeed("endless-detour-learn-to-fly", "Learn to Fly", "Foo Fighters", "3:55", "B", "Matt", "Band", "Rock", "1990s", 4, "Active", "Pairs well after mid-tempo songs."),
  songSeed("endless-detour-semi-charmed-life", "Semi-Charmed Life", "Third Eye Blind", "4:28", "G", "Matt", "Band", "Alternative Rock", "1990s", 4, "Active", "Watch tempo drift."),
  songSeed("endless-detour-just-like-heaven", "Just Like Heaven", "The Cure", "3:32", "A", "Matt", "Band", "New Wave", "1980s", 4, "Learning", "Good dance-floor option once locked."),
  songSeed("endless-detour-all-the-small-things", "All the Small Things", "blink-182", "2:48", "C", "Matt", "Band", "Pop Punk", "1990s", 5, "Active", "Short punchy reset."),
  songSeed("endless-detour-free-fallin", "Free Fallin'", "Tom Petty", "4:16", "F", "Matt", "Band", "Classic Rock", "1980s", 3, "Active", "Good acoustic-feeling breather."),
  songSeed("endless-detour-sweet-caroline", "Sweet Caroline", "Neil Diamond", "3:21", "A", "Matt", "Crowd", "Pop", "1960s", 4, "Retired", "Keep archived for request history."),
];

function songSeed(id, title, originalArtist, duration, key, leadVocal, harmonyVocal, genre, decade, energyLevel, status, notes) {
  return {
    id,
    platformId: FRONTROW_PLATFORM_ID,
    artistId: APP_CONFIG.primaryArtistId,
    artistName: APP_CONFIG.primaryArtistName,
    title,
    originalArtist,
    duration,
    key,
    leadVocal,
    harmonyVocal,
    genre,
    decade,
    energyLevel,
    status,
    notes,
  };
}

const seedVenues = [
  { id: "stove-tap", name: "Stove & Tap", location: "Lansdale, PA", type: "Restaurant & Live Music" },
  { id: "dutch-tavern", name: "The Dutch Tavern", location: "Schwenksville, PA", type: "Live Music Tavern" },
  { id: "villa-capri", name: "Villa Capri", location: "Doylestown, PA", type: "Restaurant & Live Music" },
  { id: "chambers-19", name: "Chambers 19", location: "Doylestown, PA", type: "Restaurant & Live Music" },
  { id: "stray-dog-tavern", name: "Stray Dog Tavern", location: "Skippack, PA", type: "Live Music Tavern" },
];

const earningOpportunities = [
  { id: "account", name: "Create FrontRow Account", points: 25, detail: "Awarded automatically when you join FrontRow and enter Road Crew.", route: "#/auth", oneTime: true, awardMode: "automatic" },
  { id: "facebook", name: "Facebook Follow", points: 50, detail: "Submit a verification request after following the band.", url: SOCIAL_LINKS.facebook, oneTime: true, awardMode: "verification" },
  { id: "instagram", name: "Instagram Follow", points: 25, detail: "Submit a verification request after following the band.", url: SOCIAL_LINKS.instagram, oneTime: true, awardMode: "verification" },
  { id: "referral", name: "Refer a Friend", points: 15, detail: "Awarded automatically when a new member signs up with your code.", route: "#/rewards", awardMode: "automatic" },
  { id: "checkIn", name: "Check In at a Show", points: 25, detail: "Awarded automatically after a verified show check-in.", route: "#/checkin", awardMode: "automatic" },
  { id: "songRequest", name: "Submit a Song Request", points: 2, detail: "Awarded automatically on your first request for each show.", route: "#/requests", awardMode: "automatic" },
  { id: "pollVote", name: "Vote in a Poll", points: 2, detail: "Awarded automatically the first time you vote in each poll. Winning predictions can earn a 10-Milemarker bonus after the poll closes.", route: "#/polls", awardMode: "automatic" },
  { id: "tip", name: "Tip Jar Contribution", pointsLabel: "1 per $1", points: 1, detail: "Submit the tip amount for admin verification.", route: "#/tips", awardMode: "verification" },
  { id: "manual", name: "Promotional Activity or Band Bonus", pointsLabel: "Variable", points: 0, detail: "Future campaigns and bonuses are reviewed by the band.", awardMode: "verification" },
];

const seedEvents = [
  eventSeed("stove-tap-2026-03-14", "Endless Detour Band at The Stove & Tap", "Stove & Tap", "2026-03-14", "16:00", "18:00", "329 W Main St, Lansdale, PA 19446"),
  eventSeed("dutch-tavern-2026-03-21", "Endless Detour Band at the Dutch Tavern", "The Dutch Tavern", "2026-03-21", "19:00", "22:00", "1264 Bridge Rd, Schwenksville, PA 19473"),
  eventSeed("villa-capri-2026-03-28", "Endless Detour Band at Villa Capri", "Villa Capri", "2026-03-28", "20:00", "23:00", "51 West Court Street, Doylestown, PA"),
  eventSeed("chambers-19-2026-04-11", "Endless Detour Band at Chambers 19", "Chambers 19", "2026-04-11", "18:00", "21:00", "Doylestown, PA 18901"),
  eventSeed("stray-dog-2026-04-25", "Endless Detour Band at The Stray Dog Tavern", "Stray Dog Tavern", "2026-04-25", "19:00", "23:00", "Skippack, PA"),
];

function eventSeed(id, title, venue, date, startTime, endTime, address) {
  return {
    id,
    platformId: FRONTROW_PLATFORM_ID,
    communityId: FOUNDING_COMMUNITY.id,
    artistId: APP_CONFIG.primaryArtistId,
    artistName: APP_CONFIG.primaryArtistName,
    venueId: slugify(venue),
    title,
    venue,
    date,
    startTime,
    endTime,
    address,
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
    notes: "Endless Detour live show.",
    active: true,
  };
}

const seedPolls = [
  {
    id: "next-song",
    question: "What song should Endless Detour add next?",
    options: ["Don't Stop Believin'", "Mr. Brightside", "You Shook Me All Night Long", "Everlong"],
    active: true,
  },
];

const seedAnnouncements = [
  {
    id: "welcome-road-crew",
    title: "Welcome to the Road Crew",
    body: "Check in at shows, request songs, vote in polls, and climb the Milemarker Rewards Program.",
    date: "2026-06-05",
  },
];

const STATUS_LEVELS = [
  { id: "road-crew-rookie", name: "Road Crew Rookie", min: 0, max: 99, legacyTierIds: [] },
  { id: "new-traveler", name: "New Traveler", min: 100, max: 149, legacyTierIds: ["tier-1"] },
  { id: "roadie", name: "Roadie", min: 150, max: 299, legacyTierIds: ["tier-2"] },
  { id: "crew-member", name: "Crew Member", min: 300, max: 449, legacyTierIds: ["tier-3"] },
  { id: "road-captain", name: "Road Captain", min: 450, max: 649, legacyTierIds: ["tier-4"] },
  { id: "endless-legend", name: "Endless Legend", min: 650, max: null, legacyTierIds: [] },
];

const seedRewardCatalog = [
  rewardSeed("welcome-pack", "Road Crew Welcome Pack", "new-traveler", 100, "Your starter kit for life on the Endless Detour.", "individual"),
  rewardSeed("t-shirt", "Endless Detour T-Shirt", "roadie", 150, "Official Endless Detour T-shirt.", "individual"),
  rewardSeed("pint-glass", "Engraved Pint Glass", "roadie", 200, "An engraved pint glass for the brewery stops.", "individual"),
  rewardSeed("trucker-hat", "Trucker Hat", "roadie", 250, "Official Road Crew trucker hat.", "individual"),
  rewardSeed("vip-badge-lanyard", "Road Crew VIP Badge & Lanyard", "crew-member", 300, "Wear your Road Crew VIP status."),
  rewardSeed("rehearsal-access", "Attend a Rehearsal", "crew-member", 300, "Sit in on an Endless Detour practice."),
  rewardSeed("karaoke-experience", "Karaoke Experience", "crew-member", 300, "On-stage sing-along for one song, subject to band approval."),
  rewardSeed("pre-show-dinner", "Pre-Show Dinner with the Band", "road-captain", 450, "Join the band for dinner before a show."),
  rewardSeed("signed-pickguard", "Signed Pickguard", "road-captain", 450, "A pickguard signed by the band."),
  rewardSeed("signed-drumhead", "Signed Drumhead", "endless-legend", 650, "A drumhead signed by the band."),
  rewardSeed("legend-exclusives", "Future Legend Exclusive", "endless-legend", 650, "Future experiences and rewards reserved for Endless Legends."),
];
const LEGACY_NEW_TRAVELER_REWARDS = ["guitar-pick", "koozie", "sticker-pack", "car-magnet"];

function rewardSeed(id, name, statusId, requiredMilemarkers, description, claimMode = "status") {
  return { id, name, statusId, requiredMilemarkers, description, claimMode, active: true, maxPerUser: 1 };
}

const defaultTipJar = {
  venmo: "https://venmo.com/",
  paypal: "https://paypal.me/",
  cashApp: "https://cash.app/",
};

const seedAchievementDefinitions = [
  { id: "founding-member", name: "Founding Member", scope: "artist", description: "One of the first 100 members in a founding Road Crew community." },
  { id: "first-check-in", name: "First Check-In", scope: "platform", description: "Checked in at a FrontRow event." },
  { id: "roadie-status", name: "Roadie Status", scope: "program", description: "Reached Roadie status through cumulative Milemarkers." },
  { id: "crew-member-status", name: "Crew Member Status", scope: "program", description: "Reached Crew Member status through cumulative Milemarkers." },
  { id: "five-shows", name: "Five Shows Attended", scope: "platform", description: "Checked in at five shows." },
  { id: "ten-shows", name: "Ten Shows Attended", scope: "platform", description: "Checked in at ten shows." },
  { id: "first-referral", name: "First Referral", scope: "platform", description: "Invited a friend who joined FrontRow." },
  { id: "first-song-request", name: "First Song Request", scope: "artist", description: "Submitted a song request for an artist community." },
  { id: "first-poll-vote", name: "First Poll Vote", scope: "platform", description: "Voted in a community poll." },
];

const firebaseConfigured =
  window.firebase &&
  window.firebaseConfig &&
  window.firebaseConfig.apiKey &&
  !window.firebaseConfig.apiKey.includes("PASTE_");

let firebaseApp = null;
let auth = null;
let db = null;
let FieldValue = null;
let Timestamp = null;

if (firebaseConfigured) {
  firebaseApp = firebase.initializeApp(window.firebaseConfig);
  auth = firebase.auth();
  db = firebase.firestore();
  FieldValue = firebase.firestore.FieldValue;
  Timestamp = firebase.firestore.Timestamp;
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" }).format(new Date(`${date}T12:00:00`));
}

function formatTime(time) {
  if (!time) return "";
  const [hour, minute] = time.split(":");
  return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" }).format(new Date(2026, 0, 1, Number(hour), Number(minute)));
}

function dateKey(value) {
  const date = value?.toDate?.() || (value ? new Date(value) : null);
  if (!date || Number.isNaN(date.getTime())) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function eventDateTime(event, time) {
  return new Date(`${event.date}T${time || "00:00"}:00`);
}

function checkInWindow(event) {
  const showStart = eventDateTime(event, event.startTime);
  const rawEnd = eventDateTime(event, event.endTime || event.startTime);
  const showEnd = rawEnd <= showStart ? new Date(rawEnd.getTime() + (24 * 60 * 60 * 1000)) : rawEnd;
  const start = event.checkInOpensAt?.toDate?.() || new Date(showStart.getTime() - (2 * 60 * 60 * 1000));
  const end = event.checkInClosesAt?.toDate?.() || new Date(showEnd.getTime() + (30 * 60 * 1000));
  return { start, end };
}

function checkInAvailability(event, now = new Date()) {
  if (!event.checkInOpensAt || !event.checkInClosesAt) return { state: "setup", message: "Check-in setup is pending. Ask the band for help.", ...checkInWindow(event) };
  const window = checkInWindow(event);
  if (now < window.start) return { state: "early", message: "Check-in opens 2 hours before showtime.", ...window };
  if (now > window.end) return { state: "closed", message: "Check-in for this show has closed.", ...window };
  return { state: "open", message: "Check-in is open.", ...window };
}

function randomEventCode() {
  const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => characters[byte % characters.length]).join("");
}

async function hashEventCode(code) {
  const bytes = new TextEncoder().encode(code.trim().toUpperCase());
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function secureEventData(event) {
  const { code, ...publicEvent } = event;
  const window = checkInWindow(event);
  return {
    ...publicEvent,
    code: FieldValue.delete(),
    checkInOpensAt: Timestamp.fromDate(window.start),
    checkInClosesAt: Timestamp.fromDate(window.end),
  };
}

function cumulativePoints(profile) {
  return Math.max(profile?.lifetimePoints || 0, profile?.totalPoints || 0, profile?.points || 0);
}

function frontRowScope(overrides = {}) {
  return {
    platformId: FRONTROW_PLATFORM_ID,
    programId: ROAD_CREW_PROGRAM_ID,
    communityId: FOUNDING_COMMUNITY.id,
    artistId: APP_CONFIG.primaryArtistId,
    artistName: APP_CONFIG.primaryArtistName,
    ...overrides,
  };
}

function eventScope(event = {}) {
  return frontRowScope({
    communityId: event.communityId || FOUNDING_COMMUNITY.id,
    artistId: event.artistId || APP_CONFIG.primaryArtistId,
    artistName: event.artistName || APP_CONFIG.primaryArtistName,
    venueId: event.venueId || (event.venue ? slugify(event.venue) : ""),
    venueName: event.venueName || event.venue || "",
    eventId: event.id || event.eventId || "",
    eventTitle: event.title || event.eventTitle || event.venue || "",
    eventDate: event.date || event.eventDate || "",
  });
}

function memberProfilePayload(userId, profile, milemarkers = cumulativePoints(profile), checkIns = profile?.totalCheckIns || 0) {
  const status = statusForMilemarkers(milemarkers);
  return {
    userId,
    displayName: profile?.displayName || "FrontRow Member",
    email: profile?.email || "",
    lifetimeMilemarkers: milemarkers,
    totalMilemarkers: milemarkers,
    totalCheckIns: checkIns,
    currentStatusId: status.id,
    currentStatusName: status.name,
    leaderboardOptOut: profile?.leaderboardOptOut || false,
    foundingMember: Boolean(profile?.foundingMember),
    foundingMemberNumber: profile?.foundingMemberNumber || null,
    ...frontRowScope(),
    updatedAt: FieldValue.serverTimestamp(),
  };
}

function ledgerEntryId(userId, type, referenceId = "") {
  const cleanType = slugify(type || "milemarker-award") || "milemarker-award";
  const cleanRef = slugify(String(referenceId || Date.now())) || Date.now();
  return `${userId}_${cleanType}_${cleanRef}`.slice(0, 240);
}

function statusForMilemarkers(milemarkers) {
  return [...STATUS_LEVELS].reverse().find((status) => milemarkers >= status.min) || STATUS_LEVELS[0];
}

function nextStatus(milemarkers) {
  return STATUS_LEVELS.find((status) => status.min > milemarkers) || null;
}

function leaderboardTitle(milemarkers) {
  return statusForMilemarkers(milemarkers).name;
}

function rewardStatusId(reward) {
  if (reward.statusId) return reward.statusId;
  return STATUS_LEVELS.find((status) => status.legacyTierIds.includes(reward.tierId))?.id || "new-traveler";
}

function rewardClaimStatusId(claim) {
  const explicitLevel = claim.statusLevel || claim.rewardLevel;
  if (STATUS_LEVELS.some((status) => status.id === explicitLevel)) return explicitLevel;
  const catalogReward = seedRewardCatalog.find((reward) => reward.id === claim.rewardId || reward.name === claim.rewardName);
  if (catalogReward) return catalogReward.statusId;
  if (LEGACY_NEW_TRAVELER_REWARDS.includes(claim.rewardId)) return "new-traveler";
  if (STATUS_LEVELS.some((status) => status.id === claim.statusId)) return claim.statusId;
  const namedStatus = STATUS_LEVELS.find((status) => [claim.statusName, claim.tierName, explicitLevel].includes(status.name));
  if (namedStatus) return namedStatus.id;
  return STATUS_LEVELS.find((status) => status.legacyTierIds.includes(claim.tierId))?.id || null;
}

function rewardClaimStatusName(claim) {
  return STATUS_LEVELS.find((status) => status.id === rewardClaimStatusId(claim))?.name || claim.statusName || claim.tierName || "Legacy claim";
}

function claimUsesStatusLevel(claim, statusId) {
  return !["cancelled", "denied", "rejected"].includes(claim.status) && rewardClaimStatusId(claim) === statusId;
}

function claimMatchesReward(claim, reward) {
  if (["cancelled", "denied", "rejected"].includes(claim.status)) return false;
  if (claim.rewardId === reward.id || claim.rewardName === reward.name) return true;
  if (reward.id === "welcome-pack") return rewardClaimStatusId(claim) === "new-traveler";
  return false;
}

function nextAvailableReward(milemarkers, claims = []) {
  return seedRewardCatalog
    .filter((reward) => reward.claimMode === "individual"
      ? !claims.some((claim) => claimMatchesReward(claim, reward))
      : !claims.some((claim) => claimUsesStatusLevel(claim, reward.statusId)))
    .sort((a, b) => a.requiredMilemarkers - b.requiredMilemarkers)[0] || null;
}

function verificationStatus(claim) {
  return claim?.status || (claim ? "approved" : null);
}

function verificationClaimFor(actionClaims, actionId) {
  return actionClaims.find((claim) => claim.actionId === actionId && verificationStatus(claim) === "pending")
    || actionClaims.find((claim) => claim.actionId === actionId && verificationStatus(claim) === "approved")
    || actionClaims.find((claim) => claim.actionId === actionId && verificationStatus(claim) === "denied");
}

function isVerificationRequest(claim) {
  return claim.requestType === "verification" || ["facebook", "instagram", "tip", "promotion"].includes(claim.actionId || claim.actionType);
}

function getRecommendedAction(profile, actionClaims) {
  if (!profile) return earningOpportunities.find((item) => item.id === "account");
  return earningOpportunities
    .filter((item) => {
      if (item.id === "account") return !profile;
      if (item.oneTime) return !["pending", "approved"].includes(verificationStatus(verificationClaimFor(actionClaims, item.id)));
      return ["checkIn", "referral", "songRequest", "pollVote", "tip"].includes(item.id);
    })
    .sort((a, b) => b.points - a.points)[0] || earningOpportunities.find((item) => item.id === "checkIn");
}

function pollResultSummary(poll, votes = []) {
  const counts = (poll.options || []).map((option) => ({ option, count: votes.filter((vote) => vote.option === option).length }));
  const winningCount = Math.max(0, ...counts.map((item) => item.count));
  const leaders = counts.filter((item) => item.count === winningCount && winningCount > 0);
  return {
    counts,
    totalVotes: votes.length,
    winningOption: leaders.length === 1 ? leaders[0].option : "",
    winningCount,
    isTie: leaders.length > 1,
  };
}

function predictionBonusClaimId(pollId, userId) {
  return `${pollId}_${userId}_prediction_bonus`;
}

function isPredictionBonus(claim) {
  return claim?.actionType === "poll_prediction_bonus" || claim?.type === "poll_prediction_bonus";
}

function predictionBonusClaims(actionClaims, pollId) {
  return actionClaims.filter((claim) => isPredictionBonus(claim) && claim.pollId === pollId && verificationStatus(claim) === "approved");
}

function getAchievements(profile, referrals, songRequests) {
  const checkIns = profile?.totalCheckIns || 0;
  const referralCount = referrals.length;
  return [
    { id: "founding", name: "Founding Member", detail: "One of the first 100 Road Crew members.", earned: Boolean(profile?.foundingMember) },
    { id: "first-checkin", name: "First Check-In", detail: "Checked in at your first show.", earned: checkIns >= 1 },
    { id: "five-shows", name: "Five Shows Attended", detail: "Showed up five times.", earned: checkIns >= 5 },
    { id: "song-played", name: "Requested a Song That Got Played", detail: "A request made the setlist.", earned: songRequests.some((item) => item.played) },
    { id: "travel-25", name: "Traveled 25+ Miles To A Show", detail: "Band-awarded travel achievement.", earned: Boolean(profile?.traveled25Miles) },
    { id: "five-referrals", name: "Referred 5 Members", detail: "Brought five fans into the Road Crew.", earned: referralCount >= 5 },
    { id: "ten-shows", name: "Attended 10 Shows", detail: "A true Milemarker VIP.", earned: checkIns >= 10 },
  ];
}

function isUpcoming(event) {
  return new Date(`${event.date}T23:59:00`) >= new Date();
}

function classNames(...names) {
  return names.filter(Boolean).join(" ");
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function referralCode(displayName, uid) {
  const prefix = (displayName || "ROADCREW").replace(/[^a-z0-9]/gi, "").slice(0, 5).toUpperCase() || "ROAD";
  return `${prefix}${uid.slice(0, 5).toUpperCase()}`;
}

function useHashRoute() {
  const [route, setRoute] = useState(window.location.hash || "#/");
  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return route;
}

function useNow() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function navigate(hash) {
  window.location.hash = hash;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function docData(doc) {
  return { id: doc.id, ...doc.data() };
}

function useCollection(name, fallback = [], authKey = "") {
  const [items, setItems] = useState(fallback);
  useEffect(() => {
    if (!db) return undefined;
    return db.collection(name).onSnapshot(
      (snapshot) => setItems(snapshot.docs.map(docData)),
      () => setItems(fallback),
    );
  }, [name, authKey]);
  return items;
}

function useUserCollection(name, userId, fallback = []) {
  const [items, setItems] = useState(fallback);
  useEffect(() => {
    if (!db || !userId) {
      setItems(fallback);
      return undefined;
    }
    return db.collection(name).where("userId", "==", userId).onSnapshot(
      (snapshot) => setItems(snapshot.docs.map(docData)),
      () => setItems(fallback),
    );
  }, [name, userId]);
  return items;
}

function App() {
  const route = useHashRoute();
  const [toast, setToast] = useState("");
  const [authUser, setAuthUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(Boolean(auth));
  const [tipJar, setTipJar] = useState(defaultTipJar);

  const events = useCollection("events", seedEvents);
  const artists = useCollection("artists", seedArtists);
  const venues = useCollection("venues", seedVenues);
  const songLibrary = useCollection("songLibrary", seedSongLibrary);
  const polls = useCollection("polls", seedPolls);
  const announcements = useCollection("announcements", seedAnnouncements);
  const users = useCollection("users", []);
  const checkIns = useCollection("checkIns", []);
  const songRequests = useCollection("songRequests", []);
  const pollVotes = useCollection("pollVotes", []);
  const referrals = useCollection("referrals", []);
  const rewards = useCollection("rewards", []);
  const rewardCatalog = useCollection("rewardCatalog", seedRewardCatalog);
  const manualBonuses = useCollection("manualBonuses", []);
  const actionClaims = useCollection("actionClaims", []);
  const notifications = useUserCollection("notifications", authUser?.uid || "");
  const follows = useUserCollection("follows", authUser?.uid || "");
  const eventInterest = useCollection("eventInterest", [], authUser?.uid || "");
  const eventSecrets = useCollection("eventSecrets", [], profile?.isAdmin ? authUser?.uid || "" : "");

  useEffect(() => {
    if (!auth) return undefined;
    return auth.onAuthStateChanged((user) => {
      setAuthUser(user);
      setLoadingAuth(false);
    });
  }, []);

  useEffect(() => {
    if (!db || !authUser) {
      setProfile(null);
      return undefined;
    }
    return db.collection("users").doc(authUser.uid).onSnapshot((doc) => {
      setProfile(doc.exists ? { id: doc.id, ...doc.data() } : null);
    });
  }, [authUser?.uid]);

  useEffect(() => {
    if (!db) return undefined;
    return db.collection("tips").doc("tipJar").onSnapshot((doc) => {
      setTipJar(doc.exists ? { ...defaultTipJar, ...doc.data() } : defaultTipJar);
    });
  }, []);

  useEffect(() => {
    if ("serviceWorker" in navigator) navigator.serviceWorker.register("/service-worker.js");
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const id = setTimeout(() => setToast(""), 3200);
    return () => clearTimeout(id);
  }, [toast]);

  const sortedEvents = useMemo(() => [...events].sort((a, b) => `${a.date}${a.startTime}`.localeCompare(`${b.date}${b.startTime}`)), [events]);
  const activeEvents = sortedEvents.filter((event) => event.active !== false);
  const nextEvent = activeEvents.find(isUpcoming) || activeEvents[0];
  const myCheckIns = checkIns.filter((item) => item.userId === authUser?.uid);
  const myRequests = songRequests.filter((item) => item.userId === authUser?.uid);
  const leaderboard = useMemo(
    () => users.filter((user) => !user.leaderboardOptOut).sort((a, b) => cumulativePoints(b) - cumulativePoints(a)),
    [users],
  );

  const context = {
    authUser,
    profile,
    setProfile,
    loadingAuth,
    events: activeEvents,
    allEvents: sortedEvents,
    artists,
    venues,
    songLibrary,
    follows,
    polls,
    announcements: [...announcements].filter((item) => item.published !== false).sort((a, b) => String(b.createdAt || b.date).localeCompare(String(a.createdAt || a.date))),
    allAnnouncements: [...announcements].sort((a, b) => String(b.createdAt || b.date).localeCompare(String(a.createdAt || a.date))),
    users,
    checkIns,
    songRequests,
    pollVotes,
    referrals,
    rewards,
    rewardCatalog,
    manualBonuses,
    actionClaims: actionClaims.filter((item) => item.userId === authUser?.uid),
    allActionClaims: actionClaims,
    notifications: [...notifications].sort((a, b) => String(b.createdAt || b.awardedAt || "").localeCompare(String(a.createdAt || a.awardedAt || ""))),
    eventInterest,
    eventSecrets,
    tipJar,
    leaderboard,
    nextEvent,
    myCheckIns,
    myRequests,
    setToast,
  };

  const page = getPage(route, context);

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand-button" onClick={() => navigate("#/")} aria-label="Go home">
          <img className="frontrow-nav-logo" src="/assets/brand/frontrow-logo-tagline.png" alt="FrontRow" />
          <span className="brand-context"><strong>{authUser ? profile?.displayName || authUser.email : "Live entertainment communities"}</strong><small>Powered by FrontRow</small></span>
        </button>
        <div className="topbar-actions">
          {authUser && <button className="icon-button" onClick={() => auth.signOut()} aria-label="Sign out"><LogOut size={18} /></button>}
          <button className="icon-button" onClick={() => navigate("#/admin")} aria-label="Admin"><Shield size={19} /></button>
        </div>
      </header>
      <PlatformNav route={route} />
      {!firebaseConfigured && <FirebaseSetupNotice />}
      <main>{page}</main>
      <AppFooter />
      <BottomNav route={route} />
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

function getPage(route, props) {
  if (!firebaseConfigured) return <HomePage {...props} />;
  if (route.startsWith("#/artists/")) return <ArtistDetailPage {...props} id={route.replace("#/artists/", "")} />;
  if (route === "#/artists") return <ArtistsPage {...props} />;
  if (route === "#/venues") return <VenuesPage {...props} />;
  if (route === "#/community") return <MorePage {...props} />;
  if (route === "#/roadcrew") return requireUser(props, <ProfilePage {...props} />);
  if (route.startsWith("#/events/")) return <EventDetail {...props} id={route.replace("#/events/", "")} />;
  if (route === "#/events") return <EventsPage {...props} />;
  if (route === "#/my-events") return requireUser(props, <MyEventsPage {...props} />);
  if (route === "#/checkin") return requireUser(props, <CheckInPage {...props} />);
  if (route === "#/rewards") return requireUser(props, <RewardsPage {...props} />);
  if (route === "#/requests") return requireUser(props, <RequestsPage {...props} />);
  if (route === "#/polls") return requireUser(props, <PollsPage {...props} />);
  if (route === "#/profile") return requireUser(props, <ProfilePage {...props} />);
  if (route === "#/leaderboard") return requireUser(props, <LeaderboardPage {...props} />);
  if (route === "#/announcements") return <AnnouncementsPage {...props} />;
  if (route === "#/tips") return <TipJarPage {...props} />;
  if (route === "#/earn") return <EarnMilemarkersPage {...props} />;
  if (route === "#/about") return <AboutPage />;
  if (route.startsWith("#/auth")) return <AuthPage setToast={props.setToast} />;
  if (route === "#/more") return <MorePage {...props} />;
  if (route === "#/admin") return requireUser(props, <AdminPage {...props} />);
  return <HomePage {...props} />;
}

function requireUser(props, page) {
  if (props.loadingAuth) return <EmptyState title="Loading FrontRow" body="Checking your account." />;
  if (!props.authUser) return <AuthPage setToast={props.setToast} />;
  return page;
}

function BottomNav({ route }) {
  const items = [
    ["#/my-events", CalendarDays, "My Events"],
    ["#/rewards", Gift, "Rewards"],
    ["#/profile", Users, "Profile"],
  ];
  return (
    <nav className="bottom-nav" aria-label="My FrontRow navigation">
      <span className="nav-section-label">My FrontRow</span>
      <div className="bottom-nav-items">
        {items.map(([hash, Icon, label]) => (
          <button key={hash} className={classNames("nav-item", (route === hash || (hash === "#/my-events" && route === "#/checkin") || (hash === "#/rewards" && ["#/rewards", "#/earn", "#/leaderboard"].includes(route))) && "active")} onClick={() => navigate(hash)}>
            <Icon size={20} /><span>{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

function PlatformNav({ route }) {
  const items = [["#/", "Home"], ["#/artists", "Artists"], ["#/events", "Events"], ["#/venues", "Venues"]];
  return <nav className="platform-nav" aria-label="Discover navigation"><span className="nav-section-label discover-label">Discover</span><div className="platform-nav-items">{items.map(([hash, label]) => <button key={hash} className={(route === hash || (hash === "#/artists" && route.startsWith("#/artists/")) || (hash === "#/events" && route.startsWith("#/events/"))) ? "active" : ""} onClick={() => navigate(hash)}>{label}</button>)}</div></nav>;
}

function FirebaseSetupNotice() {
  return (
    <section className="panel setup-panel">
      <p className="section-kicker">Firebase setup needed</p>
      <h2>Add your web app config</h2>
      <p className="muted">Open <strong>public/firebase-config.js</strong> and replace the placeholder values from Firebase Console before using Auth and Firestore.</p>
    </section>
  );
}

function followId(userId, entityType, entityId) {
  return `${userId}_${entityType}_${entityId}`;
}

async function toggleFollow({ authUser, follows, entityType, entity, setToast }) {
  if (!authUser) return navigate("#/auth");
  const id = followId(authUser.uid, entityType, entity.id);
  const existing = follows.find((item) => item.id === id);
  if (existing) {
    await db.collection("follows").doc(id).delete();
    return setToast(`Unfollowed ${entity.name}.`);
  }
  await db.collection("follows").doc(id).set({
    userId: authUser.uid,
    entityType,
    entityId: entity.id,
    entityName: entity.name,
    createdAt: FieldValue.serverTimestamp(),
  });
  setToast(`Following ${entity.name} on FrontRow.`);
}

function FollowButton({ authUser, follows, entityType, entity, setToast }) {
  const following = follows.some((item) => item.entityType === entityType && item.entityId === entity.id);
  return <button className={following ? "secondary-button" : "primary-button"} onClick={() => toggleFollow({ authUser, follows, entityType, entity, setToast })}>{following ? <Check size={18} /> : <Plus size={18} />}{following ? "Following" : "Follow"}</button>;
}

function ArtistsPage({ artists, events, songLibrary, authUser, follows, setToast }) {
  return (
    <section className="page">
      <PageTitle icon={Music2} eyebrow="FrontRow discovery" title="Artists" />
      <p className="page-intro">Follow artists to build a personalized FrontRow feed and participate in their Road Crew programs.</p>
      <div className="directory-grid">{artists.map((artist) => {
        const artistEvents = events.filter((event) => (event.artistId || APP_CONFIG.primaryArtistId) === artist.id);
        const artistSongs = songsForArtist(songLibrary, artist.id);
        return <article className="directory-card artist-directory-card" key={artist.id}><div className="directory-media">{artist.imageUrl ? <img src={artist.imageUrl} alt={artist.name} /> : <Music2 size={34} />}</div><button className="directory-card-main" onClick={() => navigate(`#/artists/${artist.id}`)}><p className="section-kicker">{artist.type || "Artist"}</p><h2>{artist.name}</h2><p className="muted">{artist.description}</p><small>{artistEvents.length} listed events · {artistSongs.length} catalog songs · {artist.homeMarket || artist.location || "FrontRow market"}</small></button><div className="artist-card-actions"><button className="secondary-button" onClick={() => navigate(`#/artists/${artist.id}`)}><ExternalLink size={18} />View Artist</button><FollowButton authUser={authUser} follows={follows} entityType="artist" entity={artist} setToast={setToast} /></div></article>;
      })}</div>
    </section>
  );
}

function ArtistDetailPage({ id, artists, events, songLibrary, authUser, profile, follows, rewards, checkIns, setToast }) {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [songDraft, setSongDraft] = useState(null);
  const [songImport, setSongImport] = useState(null);
  const [overwriteDuplicates, setOverwriteDuplicates] = useState(false);
  const artist = artists.find((item) => item.id === id);
  if (!artist) return <EmptyState title="Artist not found" body="That artist is not available in FrontRow yet." />;
  const canManageSongs = Boolean(profile?.isAdmin);
  const artistEvents = events.filter((event) => (event.artistId || APP_CONFIG.primaryArtistId) === artist.id);
  const upcomingEvents = artistEvents.filter(isUpcoming).slice(0, 4);
  const allSongs = songsForArtist(songLibrary, artist.id);
  const visibleSongs = allSongs.filter((song) => {
    const text = `${song.title} ${song.originalArtist} ${song.leadVocal} ${song.genre} ${song.decade}`.toLowerCase();
    const matchesQuery = !query.trim() || text.includes(query.trim().toLowerCase());
    const matchesStatus = statusFilter === "All" || song.status === statusFilter;
    return matchesQuery && matchesStatus;
  });
  const averageEnergy = allSongs.length ? (allSongs.reduce((total, song) => total + Number(song.energyLevel || 0), 0) / allSongs.length).toFixed(1) : "0";

  async function saveSong(event) {
    event.preventDefault();
    if (!songDraft?.title?.trim()) return setToast("Song title is required.");
    const id = songDraft.id || `${artist.id}-${slugify(songDraft.title)}-${Date.now()}`;
    await db.collection("songLibrary").doc(id).set({
      id,
      platformId: FRONTROW_PLATFORM_ID,
      artistId: artist.id,
      artistName: artist.name,
      title: songDraft.title.trim(),
      originalArtist: songDraft.originalArtist?.trim() || "",
      duration: songDraft.duration?.trim() || "",
      key: songDraft.key?.trim() || "",
      leadVocal: songDraft.leadVocal?.trim() || "",
      harmonyVocal: songDraft.harmonyVocal?.trim() || "",
      genre: songDraft.genre?.trim() || "",
      decade: songDraft.decade?.trim() || "",
      energyLevel: Number(songDraft.energyLevel || 1),
      status: songDraft.status || "Active",
      notes: songDraft.notes?.trim() || "",
      updatedAt: FieldValue.serverTimestamp(),
      createdAt: songDraft.id ? songDraft.createdAt || FieldValue.serverTimestamp() : FieldValue.serverTimestamp(),
    }, { merge: true });
    setSongDraft(null);
    setToast(songDraft.id ? "Song updated." : "Song added.");
  }

  async function duplicateSong(song) {
    const id = `${artist.id}-${slugify(song.title)}-copy-${Date.now()}`;
    await db.collection("songLibrary").doc(id).set({
      ...song,
      id,
      title: `${song.title} Copy`,
      status: song.status || "Active",
      artistId: artist.id,
      artistName: artist.name,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });
    setToast("Song duplicated.");
  }

  async function retireSong(song) {
    await db.collection("songLibrary").doc(song.id).set({ status: "Retired", updatedAt: FieldValue.serverTimestamp() }, { merge: true });
    setToast(`${song.title} moved to Retired.`);
  }

  function exportSongsCsv() {
    const rows = allSongs.map((song) => [song.title, song.originalArtist, song.duration, song.key, song.leadVocal, song.harmonyVocal, song.genre, song.decade, song.energyLevel, song.status, song.notes]);
    downloadCsv(`${slugify(artist.name)}-song-library.csv`, [SONG_CSV_HEADERS, ...rows]);
  }

  function downloadSongTemplate() {
    downloadCsv(`${slugify(artist.name)}-song-library-template.csv`, [SONG_CSV_HEADERS, ["Hey Jealousy", "Gin Blossoms", "3:56", "D", "Matt", "Band", "Alternative Rock", "1990s", "4", "Active", "Bright mid-set singalong."]]);
  }

  async function previewSongImport(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = buildSongImportPreview(text, allSongs);
      setSongImport(parsed);
      setOverwriteDuplicates(false);
      setToast(parsed.headerError ? "CSV headers do not match the required template." : `Preview ready: ${parsed.validRows.length} valid rows.`);
    } catch (error) {
      setSongImport({ headerError: error.message, rows: [], validRows: [], invalidRows: [], duplicateRows: [] });
      setToast(error.message);
    }
  }

  async function confirmSongImport() {
    if (!songImport || songImport.headerError) return;
    const rowsToSave = songImport.validRows.filter((row) => overwriteDuplicates || !row.duplicate);
    if (!rowsToSave.length) return setToast("No importable rows selected.");
    const batch = db.batch();
    rowsToSave.forEach((row) => {
      const id = row.existingId || `${artist.id}-${slugify(row.song.title)}-${Date.now()}-${row.rowNumber}`;
      batch.set(db.collection("songLibrary").doc(id), {
        id,
        platformId: FRONTROW_PLATFORM_ID,
        artistId: artist.id,
        artistName: artist.name,
        ...row.song,
        updatedAt: FieldValue.serverTimestamp(),
        ...(row.existingId ? {} : { createdAt: FieldValue.serverTimestamp() }),
      }, { merge: true });
    });
    await batch.commit();
    const skipped = songImport.validRows.filter((row) => row.duplicate && !overwriteDuplicates).length + songImport.invalidRows.length;
    setToast(`Import complete: ${rowsToSave.length} saved, ${skipped} skipped, ${songImport.invalidRows.length} errors.`);
    setSongImport({ ...songImport, imported: true, savedCount: rowsToSave.length, skippedCount: skipped });
  }

  return (
    <section className="page artist-detail-page">
      <button className="text-link" onClick={() => navigate("#/artists")}>Back to artists</button>
      <section className="artist-profile-hero">
        <div className="directory-media artist-profile-image">{artist.imageUrl ? <img src={artist.imageUrl} alt={artist.name} /> : <Music2 size={40} />}</div>
        <div>
          <p className="eyebrow">Artist</p>
          <h1>{artist.name}</h1>
          <p>{artist.description}</p>
          <div className="artist-meta-grid">
            <ProfileStat label="Genre" value={artist.genre || artist.type || "Artist"} />
            <ProfileStat label="Home market" value={artist.homeMarket || artist.location || "FrontRow"} />
            <ProfileStat label="Status" value={artist.activeStatus || "Active"} />
          </div>
          <div className="button-row">
            <FollowButton authUser={authUser} follows={follows} entityType="artist" entity={artist} setToast={setToast} />
            <button className="secondary-button" onClick={() => navigate("#/tips")}><Gift size={18} />Tip Artist</button>
            <button className="secondary-button" onClick={() => navigate(authUser ? "#/earn" : "#/auth")}><Star size={18} />Claim Milemarkers</button>
            {artist.website && <a className="secondary-button" href={artist.website} target="_blank" rel="noreferrer"><ExternalLink size={18} />Website</a>}
          </div>
        </div>
      </section>
      <ArtistFanEngagement artist={artist} artistEvents={artistEvents} authUser={authUser} profile={profile} follows={follows} rewards={rewards} checkIns={checkIns} />
      <section className="panel">
        <div className="home-section-heading"><h2>Upcoming Shows</h2><button className="text-button" onClick={() => navigate("#/events")}>All events</button></div>
        {upcomingEvents.length ? <div className="home-event-grid">{upcomingEvents.map((event) => <HomeEventCard key={event.id} event={event} />)}</div> : <p className="muted">No upcoming shows listed for this artist yet.</p>}
      </section>
      <details className="panel song-library-panel song-catalog-accordion">
        <summary>
          <span><p className="section-kicker">Song Catalog</p><h2>Browse the artist archive</h2></span>
          <span className="song-library-summary">{allSongs.length} songs · {averageEnergy} avg energy</span>
        </summary>
        <div className="song-library-controls">
          <label>Search songs<input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search title, original artist, genre..." /></label>
          <label>Status<select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}><option>All</option>{SONG_STATUSES.map((status) => <option key={status}>{status}</option>)}</select></label>
          {canManageSongs && <div className="song-management-actions"><button className="primary-button" onClick={() => setSongDraft(blankSongDraft(artist))}><Plus size={18} />Add Song</button><button className="secondary-button" onClick={downloadSongTemplate}><Download size={18} />CSV Template</button><label className="secondary-button file-button"><Download size={18} />Import CSV<input type="file" accept=".csv,text/csv" onChange={previewSongImport} /></label><button className="secondary-button" onClick={exportSongsCsv}><Download size={18} />Export CSV</button></div>}
        </div>
        {songDraft && <SongEditorPanel songDraft={songDraft} setSongDraft={setSongDraft} saveSong={saveSong} />}
        {canManageSongs && songImport && <SongImportPreview importState={songImport} overwriteDuplicates={overwriteDuplicates} setOverwriteDuplicates={setOverwriteDuplicates} confirmSongImport={confirmSongImport} clearImport={() => setSongImport(null)} />}
        <SongCatalogTable songs={visibleSongs} canManageSongs={canManageSongs} onEdit={setSongDraft} onDuplicate={duplicateSong} onRetire={retireSong} />
        <div className="archive-note"><strong>Setlist Archive</strong><span>Coming later: searchable performances, setlists used, frequently played songs, and venue history.</span></div>
      </details>
    </section>
  );
}

function ArtistFanEngagement({ artist, artistEvents, authUser, profile, follows, rewards, checkIns }) {
  const milemarkers = profile ? cumulativePoints(profile) : 0;
  const currentStatus = statusForMilemarkers(milemarkers);
  const upcomingStatus = nextStatus(milemarkers);
  const myClaims = rewards.filter((claim) => claim.userId === profile?.id);
  const upcomingReward = nextAvailableReward(milemarkers, myClaims);
  const artistEventIds = new Set(artistEvents.map((event) => event.id));
  const artistCheckIns = checkIns.filter((item) => item.userId === authUser?.uid && (item.artistId === artist.id || artistEventIds.has(item.eventId)));
  const following = follows.some((item) => item.entityType === "artist" && item.entityId === artist.id);
  const milestones = [
    { name: "Follow Artist", detail: `Follow ${artist.name} on FrontRow.`, earned: following },
    { name: "First Show Check-In", detail: `Check in at a ${artist.name} show.`, earned: artistCheckIns.length > 0 },
    { name: "Roadie Status", detail: "Reach 150 Milemarkers.", earned: milemarkers >= 150 },
    { name: "Crew Member Status", detail: "Reach 300 Milemarkers.", earned: milemarkers >= 300 },
  ];
  return (
    <section className="artist-fan-engagement">
      <div className="artist-rewards-card">
        <p className="section-kicker">{artist.name} Road Crew</p>
        <h2>Rewards, status, and fan milestones</h2>
        <p className="muted">Earn Milemarkers by following artists, checking in at shows, requesting songs, voting in polls, and supporting the scene.</p>
        {profile ? <MilemarkerStatusProgress profile={profile} rewards={rewards} /> : <button className="primary-button full" onClick={() => navigate("#/auth")}><Lock size={18} />Join FrontRow to earn rewards</button>}
      </div>
      <div className="artist-milestone-card">
        <div className="profile-stat-grid">
          <ProfileStat label="Current status" value={profile ? currentStatus.name : "Guest"} />
          <ProfileStat label="Milemarkers" value={profile ? milemarkers : 0} />
          <ProfileStat label="Artist check-ins" value={artistCheckIns.length} />
          <ProfileStat label="Next status" value={upcomingStatus?.name || "Maxed"} />
        </div>
        <div className="next-available-reward compact"><small>Next reward</small><strong>{upcomingReward ? `${upcomingReward.name} at ${upcomingReward.requiredMilemarkers} Milemarkers` : "Current catalog complete"}</strong></div>
        <div className="artist-milestone-list">{milestones.map((milestone) => <div key={milestone.name} className={classNames("artist-milestone", milestone.earned && "earned")}><Star size={18} /><span><strong>{milestone.name}</strong><small>{milestone.earned ? "Unlocked" : milestone.detail}</small></span></div>)}</div>
        <div className="button-row">
          <button className="primary-button" onClick={() => navigate("#/rewards")}><Gift size={18} />View Rewards</button>
          <button className="secondary-button" onClick={() => navigate("#/earn")}><Star size={18} />How to Earn</button>
        </div>
      </div>
    </section>
  );
}

function SongEditorPanel({ songDraft, setSongDraft, saveSong }) {
  const fields = [
    ["title", "Song Title", true],
    ["originalArtist", "Original Artist"],
    ["duration", "Duration"],
    ["key", "Key"],
    ["leadVocal", "Lead Vocal"],
    ["harmonyVocal", "Harmony Vocal"],
    ["genre", "Genre"],
    ["decade", "Decade"],
  ];
  return (
    <form className="song-editor-panel" onSubmit={saveSong}>
      <div className="home-section-heading"><span><p className="section-kicker">{songDraft.id ? "Edit Song" : "Add Song"}</p><h2>{songDraft.title || "New repertoire record"}</h2></span><button className="text-button" type="button" onClick={() => setSongDraft(null)}>Cancel</button></div>
      <div className="song-editor-grid">
        {fields.map(([field, label, required]) => <label key={field}>{label}<input value={songDraft[field] || ""} onChange={(event) => setSongDraft({ ...songDraft, [field]: event.target.value })} required={Boolean(required)} /></label>)}
        <label>Energy Level<input type="number" min="1" max="5" value={songDraft.energyLevel || 1} onChange={(event) => setSongDraft({ ...songDraft, energyLevel: event.target.value })} /></label>
        <label>Status<select value={songDraft.status || "Active"} onChange={(event) => setSongDraft({ ...songDraft, status: event.target.value })}>{SONG_STATUSES.map((status) => <option key={status}>{status}</option>)}</select></label>
        <label className="song-editor-notes">Notes<textarea value={songDraft.notes || ""} onChange={(event) => setSongDraft({ ...songDraft, notes: event.target.value })} /></label>
      </div>
      <button className="primary-button full" type="submit"><Save size={18} />Save Song</button>
    </form>
  );
}

function SongImportPreview({ importState, overwriteDuplicates, setOverwriteDuplicates, confirmSongImport, clearImport }) {
  const validNew = importState.validRows.filter((row) => !row.duplicate).length;
  const duplicates = importState.duplicateRows.length;
  const importable = importState.validRows.filter((row) => overwriteDuplicates || !row.duplicate).length;
  return (
    <section className="song-import-panel">
      <div className="home-section-heading"><span><p className="section-kicker">CSV Import Preview</p><h2>{importState.headerError ? "Template mismatch" : `${importable} rows ready to import`}</h2></span><button className="text-button" type="button" onClick={clearImport}>Close</button></div>
      {importState.headerError ? <p className="error-text">{importState.headerError}</p> : (
        <>
          <div className="profile-stat-grid">
            <ProfileStat label="New songs" value={validNew} />
            <ProfileStat label="Duplicates" value={duplicates} />
            <ProfileStat label="Invalid rows" value={importState.invalidRows.length} />
            <ProfileStat label="Will save" value={importable} />
          </div>
          {duplicates > 0 && <label className="toggle-row"><span>Overwrite duplicate Song Title + Original Artist matches</span><input type="checkbox" checked={overwriteDuplicates} onChange={(event) => setOverwriteDuplicates(event.target.checked)} /></label>}
          <div className="song-import-list">
            {importState.rows.slice(0, 24).map((row) => <div key={row.rowNumber} className={classNames("song-import-row", row.errors.length && "invalid", row.duplicate && "duplicate")}><strong>Row {row.rowNumber}: {row.song?.title || "Untitled"}</strong><small>{row.errors.length ? row.errors.join(" · ") : row.duplicate ? "Duplicate found; skipped unless overwrite is checked." : "Ready to import."}</small></div>)}
          </div>
          {importState.rows.length > 24 && <p className="muted compact">Showing first 24 rows of {importState.rows.length}.</p>}
          {importState.imported ? <p className="success-text">Import complete: {importState.savedCount} saved, {importState.skippedCount} skipped, {importState.invalidRows.length} errors.</p> : <button className="primary-button full" type="button" disabled={!importable} onClick={confirmSongImport}><Save size={18} />Confirm Import</button>}
        </>
      )}
    </section>
  );
}

function SongCatalogTable({ songs, canManageSongs = false, onEdit, onDuplicate, onRetire }) {
  if (!songs.length) return <p className="muted">No songs match that search.</p>;
  const headings = ["Song", "Key", "Lead", "Harmony", "Duration", "Status", "Original Artist", "Genre", "Decade", "Energy"];
  if (canManageSongs) headings.push("Actions");
  return (
    <div className="song-table-wrap" role="region" aria-label="Song catalog table" tabIndex="0">
      <table className="song-table">
        <thead>
          <tr>
            {headings.map((heading) => <th key={heading}>{heading}</th>)}
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song.id}>
              <td data-label="Song"><strong>{song.title}</strong></td>
              <td data-label="Key">{song.key || "TBD"}</td>
              <td data-label="Lead">{song.leadVocal || "TBD"}</td>
              <td data-label="Harmony">{song.harmonyVocal || "TBD"}</td>
              <td data-label="Duration">{song.duration || "TBD"}</td>
              <td data-label="Status"><span className={classNames("status-pill", song.status === "Retired" && "muted-pill", song.status === "Learning" && "learning-pill")}>{song.status || "Active"}</span></td>
              <td data-label="Original Artist">{song.originalArtist || "TBD"}</td>
              <td data-label="Genre">{song.genre || "TBD"}</td>
              <td data-label="Decade">{song.decade || "TBD"}</td>
              <td data-label="Energy">{song.energyLevel || 0}/5</td>
              {canManageSongs && <td data-label="Actions"><div className="song-row-actions"><button className="admin-event-action" title="Edit song" aria-label={`Edit ${song.title}`} onClick={() => onEdit(song)}><Edit3 size={16} /><span>Edit</span></button><button className="admin-event-action" title="Duplicate song" aria-label={`Duplicate ${song.title}`} onClick={() => onDuplicate(song)}><ClipboardList size={16} /><span>Duplicate</span></button><button className="admin-event-action" title="Retire song" aria-label={`Retire ${song.title}`} disabled={song.status === "Retired"} onClick={() => onRetire(song)}><Lock size={16} /><span>Retire</span></button></div></td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function songsForArtist(songLibrary, artistId) {
  return [...songLibrary]
    .filter((song) => (song.artistId || APP_CONFIG.primaryArtistId) === artistId)
    .sort((a, b) => String(a.title).localeCompare(String(b.title)));
}

function blankSongDraft(artist) {
  return {
    id: "",
    artistId: artist.id,
    artistName: artist.name,
    title: "",
    originalArtist: "",
    duration: "",
    key: "",
    leadVocal: "",
    harmonyVocal: "",
    genre: "",
    decade: "",
    energyLevel: 3,
    status: "Active",
    notes: "",
  };
}

function csvCell(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function downloadCsv(filename, rows) {
  const csv = rows.map((row) => row.map(csvCell).join(",")).join("\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];
    if (char === '"' && quoted && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell);
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  row.push(cell);
  if (row.some((value) => value.trim())) rows.push(row);
  return rows;
}

function buildSongImportPreview(text, existingSongs) {
  const rows = parseCsv(text);
  if (!rows.length) return { headerError: "CSV is empty.", rows: [], validRows: [], invalidRows: [], duplicateRows: [] };
  const headers = rows[0].map((header) => header.trim());
  const headerError = validateSongCsvHeaders(headers);
  if (headerError) return { headerError, rows: [], validRows: [], invalidRows: [], duplicateRows: [] };
  const headerIndex = Object.fromEntries(headers.map((header, index) => [header, index]));
  const existingByKey = new Map(existingSongs.map((song) => [songDuplicateKey(song.title, song.originalArtist), song]));
  const seenKeys = new Set();
  const previewRows = rows.slice(1).map((values, index) => {
    const data = Object.fromEntries(SONG_CSV_HEADERS.map((header) => [header, values[headerIndex[header]]?.trim() || ""]));
    const energy = Number(data["Energy Level"] || 0);
    const status = data.Status || "Active";
    const song = {
      title: data["Song Title"],
      originalArtist: data["Original Artist"],
      duration: data.Duration,
      key: data.Key,
      leadVocal: data["Lead Vocal"],
      harmonyVocal: data["Harmony Vocal"],
      genre: data.Genre,
      decade: data.Decade,
      energyLevel: energy,
      status,
      notes: data.Notes,
    };
    const errors = [];
    if (!song.title) errors.push("Song Title is required");
    if (song.energyLevel < 1 || song.energyLevel > 5 || !Number.isFinite(song.energyLevel)) errors.push("Energy Level must be 1-5");
    if (!SONG_STATUSES.includes(song.status)) errors.push("Status must be Active, Learning, or Retired");
    const key = songDuplicateKey(song.title, song.originalArtist);
    const duplicateInCsv = seenKeys.has(key);
    if (duplicateInCsv) errors.push("Duplicate Song Title + Original Artist in this CSV");
    const duplicate = Boolean(existingByKey.has(key));
    const existing = existingByKey.get(key);
    if (key) seenKeys.add(key);
    return { rowNumber: index + 2, song, errors, duplicate, existingId: existing?.id || "" };
  });
  return {
    headerError: "",
    rows: previewRows,
    validRows: previewRows.filter((row) => !row.errors.length),
    invalidRows: previewRows.filter((row) => row.errors.length),
    duplicateRows: previewRows.filter((row) => row.duplicate && !row.errors.length),
  };
}

function validateSongCsvHeaders(headers) {
  const missing = SONG_CSV_HEADERS.filter((header) => !headers.includes(header));
  const extra = headers.filter((header) => !SONG_CSV_HEADERS.includes(header));
  if (missing.length || extra.length) return `Required headers: ${SONG_CSV_HEADERS.join(", ")}. Missing: ${missing.join(", ") || "none"}. Extra: ${extra.join(", ") || "none"}.`;
  return "";
}

function songDuplicateKey(title, originalArtist) {
  return `${String(title || "").trim().toLowerCase()}::${String(originalArtist || "").trim().toLowerCase()}`;
}

function VenuesPage({ venues, events, authUser, follows, setToast }) {
  return (
    <section className="page">
      <PageTitle icon={Building2} eyebrow="FrontRow discovery" title="Venues" />
      <p className="page-intro">Follow the places where live communities gather and keep upcoming shows close at hand.</p>
      <div className="directory-grid">{venues.map((venue) => <article className="directory-card" key={venue.id}><div className="directory-media"><Building2 size={34} /></div><div><p className="section-kicker">{venue.type || "Live music venue"}</p><h2>{venue.name}</h2><p className="muted">{venue.location}</p><small>{events.filter((event) => (event.venueId || slugify(event.venue)) === venue.id).length} listed events</small></div><FollowButton authUser={authUser} follows={follows} entityType="venue" entity={venue} setToast={setToast} /></article>)}</div>
    </section>
  );
}

function CommunityPage({ announcements }) {
  return (
    <section className="page">
      <PageTitle icon={Users} eyebrow="FrontRow" title="Community" />
      <p className="page-intro">Join the conversation around artists, venues, events, and the people who make live music matter.</p>
      <div className="platform-action-grid">
        <PlatformAction icon={Megaphone} title="Announcements" body="Updates from artists and FrontRow communities." route="#/announcements" />
        <PlatformAction icon={Vote} title="Polls" body="Help shape songs, shows, and community decisions." route="#/polls" />
        <PlatformAction icon={Music2} title="Song Requests" body="Send a request for an upcoming event." route="#/requests" />
      </div>
      {announcements[0] && <section className="panel"><p className="section-kicker">Latest community update</p><h2>{announcements[0].title}</h2><p className="muted">{announcements[0].body}</p></section>}
    </section>
  );
}

function PlatformAction({ icon: Icon, title, body, route }) {
  return <button className="platform-action" onClick={() => navigate(route)}><Icon size={24} /><span><strong>{title}</strong><small>{body}</small></span><ExternalLink size={17} /></button>;
}

function RoadCrewPage({ authUser, profile, rewards, referrals, actionClaims }) {
  return (
    <section className="page">
      <PageTitle icon={Trophy} eyebrow="FrontRow engagement program" title="Road Crew" />
      <section className="road-crew-intro"><span className="program-badge">FrontRow Road Crew</span><h2>Rewards, recognition, loyalty, and participation.</h2><p>Road Crew turns the ways you support live entertainment into Milemarkers, status, badges, achievements, and unlocked experiences.</p></section>
      {authUser && profile ? <MilemarkerStatusProgress profile={profile} rewards={rewards} /> : <button className="primary-button full" onClick={() => navigate("#/auth")}>Create a FrontRow account</button>}
      <div className="platform-action-grid">
        <PlatformAction icon={Gift} title="Road Crew Rewards" body="See unlocked merchandise and experiences." route="#/rewards" />
        <PlatformAction icon={MapPin} title="Check In" body="Record event attendance and earn Milemarkers." route="#/checkin" />
        <PlatformAction icon={Star} title="Milemarkers & Status" body="Learn how to earn and track your next status." route="#/earn" />
        <PlatformAction icon={Trophy} title="Leaderboard" body="Compare Road Crew participation." route="#/leaderboard" />
        <PlatformAction icon={Users} title="Referrals" body={`${referrals.filter((item) => item.referrerId === authUser?.uid).length} friends joined through you.`} route="#/rewards" />
        <PlatformAction icon={ClipboardList} title="Loyalty History" body={`${actionClaims.length} recorded Milemarker activities.`} route="#/profile" />
      </div>
    </section>
  );
}

function HomePage({ events, artists }) {
  const upcomingEvents = events.filter(isUpcoming).slice(0, 3);
  const featuredArtists = artists.filter((artist) => artist.featured !== false).slice(0, 3);
  return (
    <section className="page home-page">
      <div className="hero">
        <div className="frontrow-hero-lockup" aria-label="FrontRow. The platform where artists earn loyalties.">
          <strong><span>FRONT</span><span>ROW</span></strong>
          <small>THE PLATFORM WHERE ARTISTS EARN LOYALTIES</small>
        </div>
        <p className="hero-supporting-title">The live entertainment loyalty platform.</p>
        <div className="hero-actions">
          <button className="primary-button" onClick={() => navigate("#/events")}><CalendarDays size={18} />Explore Events</button>
          <button className="secondary-button" onClick={() => navigate("#/artists")}><Music2 size={18} />Find Artists</button>
        </div>
      </div>
      <section className="home-discovery-section">
        <div className="home-section-heading"><h2>Upcoming Events</h2><button className="text-button" onClick={() => navigate("#/events")}>View all</button></div>
        <div className="home-event-grid">{upcomingEvents.length ? upcomingEvents.map((event) => <HomeEventCard key={event.id} event={event} />) : <p className="muted">New events are coming soon.</p>}</div>
      </section>
      <section className="home-discovery-section">
        <div className="home-section-heading"><h2>Featured Artists</h2><button className="text-button" onClick={() => navigate("#/artists")}>View all</button></div>
        <div className="home-artist-grid">{featuredArtists.length ? featuredArtists.map((artist) => <HomeArtistCard key={artist.id} artist={artist} />) : <p className="muted">Featured artists are coming soon.</p>}</div>
      </section>
    </section>
  );
}

function HomeEventCard({ event }) {
  return (
    <button className="home-event-card" onClick={() => navigate(`#/events/${event.id}`)}>
      <div className="date-badge"><span>{new Date(`${event.date}T12:00:00`).toLocaleString("en-US", { month: "short" })}</span><strong>{new Date(`${event.date}T12:00:00`).getDate()}</strong></div>
      <span><small>{event.artistName || APP_CONFIG.primaryArtistName}</small><strong>{event.venue}</strong><em>{formatDate(event.date)} · {formatTime(event.startTime)}</em></span>
      <ExternalLink size={18} />
    </button>
  );
}

function HomeArtistCard({ artist }) {
  return (
    <button className="home-artist-card" onClick={() => navigate(`#/artists/${artist.id}`)}>
      <div className="directory-media">{artist.imageUrl ? <img src={artist.imageUrl} alt="" /> : <Music2 size={34} />}</div>
      <span><small>{artist.type || "Artist community"}</small><strong>{artist.name}</strong><em>{artist.location || "FrontRow community"}</em></span>
      <ExternalLink size={18} />
    </button>
  );
}

function EarnCallout() {
  return (
    <section className="earn-callout">
      <Star size={30} />
      <div><p className="section-kicker">Earn Milemarkers</p><h2>More support. More Milemarkers. More Road Crew rewards.</h2></div>
      <button className="primary-button" onClick={() => navigate("#/earn")}>View All Ways to Earn</button>
    </section>
  );
}

function MilemarkerStatusProgress({ profile, rewards = [] }) {
  const milemarkers = cumulativePoints(profile);
  const currentStatus = statusForMilemarkers(milemarkers);
  const upcomingStatus = nextStatus(milemarkers);
  const myClaims = rewards.filter((claim) => claim.userId === profile?.id);
  const upcomingReward = nextAvailableReward(milemarkers, myClaims);
  const progressStart = currentStatus.min;
  const progressTarget = upcomingStatus?.min || milemarkers;
  const progress = upcomingStatus ? Math.min(((milemarkers - progressStart) / (progressTarget - progressStart)) * 100, 100) : 100;
  return (
    <section className="panel next-reward-card">
      <div className="next-reward-stats"><span><small>Current Milemarkers</small><strong>{milemarkers}</strong></span><span><small>Current Status</small><strong>{currentStatus.name}</strong></span></div>
      <p className="section-kicker">Next status</p>
      <h2>{upcomingStatus ? upcomingStatus.name : "Endless Legend"}</h2>
      <p className="muted">{upcomingStatus ? `${milemarkers} / ${upcomingStatus.min} Milemarkers` : "You have reached the highest Road Crew status."}</p>
      <div className="progress-track"><div style={{ width: `${progress}%` }} /></div>
      <strong className="remaining-points">{upcomingStatus ? `${upcomingStatus.min - milemarkers} Milemarkers to go` : "Endless Legend unlocked"}</strong>
      <div className="next-available-reward"><small>Next available reward</small><strong>{upcomingReward ? `${upcomingReward.name} at ${upcomingReward.requiredMilemarkers} Milemarkers` : "All current rewards claimed"}</strong></div>
    </section>
  );
}

function RecommendedAction({ action }) {
  if (!action) return null;
  const verificationRoute = action.id === "tip" ? "#/tips" : "#/earn";
  return (
    <section className="panel recommended-action">
      <p className="section-kicker">Next best action</p>
      <h2>Earn {action.pointsLabel || `${action.points} Milemarker${action.points === 1 ? "" : "s"}`} by {action.name.toLowerCase()}.</h2>
      <p className="muted">{action.detail}</p>
      {(action.route || action.url) && <button className="primary-button full" onClick={() => navigate(action.awardMode === "verification" ? verificationRoute : action.route)}><Star size={18} />{action.awardMode === "verification" ? "Submit verification" : "Go earn Milemarkers"}</button>}
    </section>
  );
}

function NextShow({ event }) {
  return (
    <section className="panel next-show">
      <div><p className="section-kicker">{isUpcoming(event) ? "Next stop" : "Latest listed stop"}</p><h2>{event.venue}</h2><p>{formatDate(event.date)} · {formatTime(event.startTime)}</p><p className="muted">{event.address}</p></div>
      <button className="icon-button bright" onClick={() => navigate(`#/events/${event.id}`)} aria-label="Open event"><ExternalLink size={20} /></button>
    </section>
  );
}

function InfoTile({ icon: Icon, label, value }) {
  return <div className="info-tile"><Icon size={21} /><strong>{value}</strong><span>{label}</span></div>;
}

function AuthPage({ setToast }) {
  const [mode, setMode] = useState("signup");
  const initialReferral = new URLSearchParams((window.location.hash.split("?")[1] || "")).get("ref") || "";
  const [form, setForm] = useState({ displayName: "", email: "", password: "", referralCode: initialReferral.toUpperCase() });

  async function submit(event) {
    event.preventDefault();
    try {
      if (mode === "signup") {
        const cred = await auth.createUserWithEmailAndPassword(form.email, form.password);
        await createUserProfile(cred.user, form.displayName, form.referralCode);
        await cred.user.updateProfile({ displayName: form.displayName });
        setToast("Welcome to FrontRow.");
        navigate("#/profile");
      } else {
        await auth.signInWithEmailAndPassword(form.email, form.password);
        setToast("Signed in.");
        navigate("#/");
      }
    } catch (error) {
      setToast(error.message);
    }
  }

  async function googleLogin() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const cred = await auth.signInWithPopup(provider);
      await createUserProfile(cred.user, cred.user.displayName || "FrontRow Member", form.referralCode);
      setToast("Signed in with Google.");
      navigate("#/");
    } catch (error) {
      setToast(error.message);
    }
  }

  return (
    <section className="page">
      <PageTitle icon={Lock} eyebrow="FrontRow account" title={mode === "signup" ? "Join FrontRow" : "Welcome back"} />
      <section className="frontrow-auth-hero">
        <div className="frontrow-platform-intro">
          <img src="/assets/brand/frontrow-logo-tagline.png" alt="FrontRow. The platform where artists earn loyalties." />
          <strong>Connect. Engage. Reward. Grow Together.</strong>
          <p>Fans get a persistent FrontRow identity. Road Crew tracks loyalty, Milemarkers, status, rewards, and live participation.</p>
        </div>
      </section>
      <form className="form panel auth-card" onSubmit={submit}>
        <div className="segmented">
          <button type="button" className={mode === "signup" ? "active" : ""} onClick={() => setMode("signup")}>Sign up</button>
          <button type="button" className={mode === "login" ? "active" : ""} onClick={() => setMode("login")}>Log in</button>
        </div>
        {mode === "signup" && <label>Display name<input value={form.displayName} onChange={(event) => setForm({ ...form, displayName: event.target.value })} required /></label>}
        <label>Email<input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required /></label>
        <label>Password<input type="password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} required minLength="6" /></label>
        {mode === "signup" && <label>Referral code<input value={form.referralCode} onChange={(event) => setForm({ ...form, referralCode: event.target.value.toUpperCase() })} placeholder="Optional" /></label>}
        <button className="primary-button full" type="submit"><Lock size={18} />{mode === "signup" ? "Create account" : "Log in"}</button>
        <button className="secondary-button full" type="button" onClick={googleLogin}>Continue with Google</button>
      </form>
    </section>
  );
}

async function createUserProfile(user, displayName, enteredReferralCode = "") {
  const ref = db.collection("users").doc(user.uid);
  const existing = await ref.get();
  if (existing.exists) return;

  const cleanName = displayName || user.displayName || "FrontRow Member";
  const firstHundred = await db.collection("users").limit(100).get();
  const foundingMember = firstHundred.size < 100;
  const profile = {
    uid: user.uid,
    platformId: FRONTROW_PLATFORM_ID,
    displayName: cleanName,
    email: user.email || "",
    totalPoints: POINTS.account,
    lifetimePoints: POINTS.account,
    totalCheckIns: 0,
    referralCode: referralCode(cleanName, user.uid),
    rewardTier: statusForMilemarkers(POINTS.account).name,
    leaderboardTitle: statusForMilemarkers(POINTS.account).name,
    leaderboardOptOut: false,
    accountType: "frontrow_member",
    roadCrewEnrolled: true,
    foundingMember,
    foundingMemberNumber: foundingMember ? firstHundred.size + 1 : null,
    isAdmin: false,
    createdAt: FieldValue.serverTimestamp(),
  };
  await ref.set(profile);
  await db.collection("roadCrewProfiles").doc(user.uid).set({
    ...memberProfilePayload(user.uid, profile, POINTS.account, 0),
    enrolledAt: FieldValue.serverTimestamp(),
    createdAt: FieldValue.serverTimestamp(),
  }, { merge: true });
  await db.collection("milemarkerLedger").doc(ledgerEntryId(user.uid, "account", "frontrow-account")).set({
    userId: user.uid,
    displayName: cleanName,
    type: "account",
    title: "Create FrontRow Account",
    description: "Welcome bonus for creating a FrontRow account and joining Road Crew.",
    milemarkers: POINTS.account,
    amount: POINTS.account,
    status: "posted",
    source: "automatic",
    referenceId: "frontrow-account",
    ...frontRowScope(),
    awardedAt: FieldValue.serverTimestamp(),
    createdAt: FieldValue.serverTimestamp(),
  }, { merge: true });
  await db.collection("actionClaims").doc(`${user.uid}_account`).set({
    userId: user.uid,
    displayName: cleanName,
    actionId: "account",
    actionType: "account",
    actionName: "Create FrontRow Account",
    milemarkers: POINTS.account,
    pointsAwarded: POINTS.account,
    status: "approved",
    submittedAt: FieldValue.serverTimestamp(),
    approvedAt: FieldValue.serverTimestamp(),
    approvedBy: "automatic",
    createdAt: FieldValue.serverTimestamp(),
  });

  const code = enteredReferralCode.trim().toUpperCase();
  if (!code) return;
  const matches = await db.collection("users").where("referralCode", "==", code).limit(1).get();
  if (matches.empty) return;
  const referrer = matches.docs[0];
  if (referrer.id === user.uid) return;
  await db.collection("referrals").add({
    referralCode: code,
    referrerId: referrer.id,
    newUserId: user.uid,
    newUserEmail: user.email || "",
    pointsAwarded: POINTS.referral,
    milemarkersAwarded: POINTS.referral,
    ...frontRowScope(),
    createdAt: FieldValue.serverTimestamp(),
  });
  await updateUserStats(referrer.id, {
    points: POINTS.referral,
    type: "referral_signup",
    title: "Referral Signup",
    description: `${cleanName} joined FrontRow with your referral code.`,
    referenceId: user.uid,
    scope: frontRowScope(),
  });
}

function EventsPage({ events, authUser, profile, eventInterest, setToast }) {
  return (
    <section className="page">
      <PageTitle icon={CalendarDays} eyebrow="FrontRow events" title="Upcoming events" />
      <div className="source-note">FrontRow currently features the Endless Detour schedule from <a href={EVENT_SOURCE} target="_blank" rel="noreferrer">endlessdetourband.com/events</a>. Additional artists and venues can use the same event model.</div>
      <div className="event-list">{events.map((event) => <EventCard key={event.id} event={event} authUser={authUser} profile={profile} eventInterest={eventInterest} setToast={setToast} />)}</div>
    </section>
  );
}

function MyEventsPage({ authUser, allEvents, eventInterest, checkIns }) {
  const myInterests = eventInterest.filter((item) => item.userId === authUser.uid && item.status === "interested");
  const myCheckIns = checkIns.filter((item) => item.userId === authUser.uid);
  const interestedIds = new Set(myInterests.map((item) => item.eventId));
  const checkedInIds = new Set(myCheckIns.map((item) => item.eventId));
  const upcoming = allEvents.filter((event) => interestedIds.has(event.id) && isUpcoming(event));
  const attended = allEvents.filter((event) => checkedInIds.has(event.id)).sort((a, b) => `${b.date}${b.startTime}`.localeCompare(`${a.date}${a.startTime}`));

  function MyEventRows({ items, empty, status }) {
    return items.length ? <div className="profile-history">{items.map((event) => <button className="profile-history-row text-row-button" key={event.id} onClick={() => navigate(`#/events/${event.id}`)}><CalendarDays size={19} /><span><strong>{event.venue}</strong><small>{formatDate(event.date)} · {formatTime(event.startTime)} · {event.address}</small></span><b>{status}</b><ExternalLink size={17} /></button>)}</div> : <p className="muted compact">{empty}</p>;
  }

  return (
    <section className="page">
      <PageTitle icon={CalendarDays} eyebrow="My FrontRow" title="My Events" />
      <section className="panel"><div className="profile-stat-grid"><ProfileStat label="Upcoming interests" value={upcoming.length} /><ProfileStat label="Shows attended" value={myCheckIns.length} /><ProfileStat label="All RSVPs" value={myInterests.length} /></div><div className="button-row"><button className="primary-button" onClick={() => navigate("#/checkin")}><Check size={18} />Check In</button><button className="secondary-button" onClick={() => navigate("#/events")}><Compass size={18} />Discover Events</button></div></section>
      <section className="panel"><p className="section-kicker">Upcoming</p><h2>Events you're interested in</h2><MyEventRows items={upcoming} empty="Mark events as interested to build your personal event dashboard." status="Interested" /></section>
      <section className="panel"><p className="section-kicker">History</p><h2>Attended and checked in</h2><MyEventRows items={attended} empty="Your verified check-in history will appear here." status="Checked In" /></section>
    </section>
  );
}

function eventInterestId(eventId, userId) {
  return `${eventId}_${userId}`;
}

function eventInterestCount(eventInterest, eventId) {
  return eventInterest.filter((item) => item.eventId === eventId && item.status === "interested").length;
}

async function toggleEventInterest({ event, authUser, profile, eventInterest, setToast }) {
  if (!authUser) {
    navigate("#/auth");
    return;
  }
  const id = eventInterestId(event.id, authUser.uid);
  const existing = eventInterest.find((item) => item.id === id || (item.eventId === event.id && item.userId === authUser.uid));
  try {
    if (existing) {
      await db.collection("eventInterest").doc(existing.id || id).delete();
      setToast(`Removed interest in ${event.venue}.`);
      return;
    }
    await db.collection("eventInterest").doc(id).set({
      eventId: event.id,
      userId: authUser.uid,
      displayName: profile?.displayName || authUser.displayName || "Road Crew member",
      email: authUser.email || profile?.email || "",
      eventTitle: event.title || event.venue,
      eventDate: event.date,
      artistId: event.artistId || APP_CONFIG.primaryArtistId,
      artistName: event.artistName || APP_CONFIG.primaryArtistName,
      venueId: event.venueId || slugify(event.venue),
      status: "interested",
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });
    setToast(`You're interested in ${event.venue}.`);
  } catch (error) {
    setToast(error.message);
  }
}

function InterestButton({ event, authUser, profile, eventInterest, setToast }) {
  const interested = eventInterest.some((item) => item.eventId === event.id && item.userId === authUser?.uid && item.status === "interested");
  return (
    <button
      className={classNames("secondary-button", "interest-button", interested && "interested")}
      onClick={() => toggleEventInterest({ event, authUser, profile, eventInterest, setToast })}
    >
      {interested ? <Check size={18} /> : <Star size={18} />}
      {interested ? "You're Interested" : "I'm Interested"}
    </button>
  );
}

function EventCard({ event, authUser, profile, eventInterest, setToast }) {
  const count = eventInterestCount(eventInterest, event.id);
  return (
    <article className="event-card">
      <button className="event-card-main" onClick={() => navigate(`#/events/${event.id}`)}>
        <div className="date-badge"><span>{new Date(`${event.date}T12:00:00`).toLocaleString("en-US", { month: "short" })}</span><strong>{new Date(`${event.date}T12:00:00`).getDate()}</strong></div>
        <div className="event-card-body"><span className={classNames("status-pill", isUpcoming(event) ? "live" : "muted-pill")}>{isUpcoming(event) ? "Upcoming" : "Listed"}</span><h2>{event.venue}</h2><p>{event.title}</p><small>{formatTime(event.startTime)} · {event.address}</small></div>
        <ExternalLink size={18} />
      </button>
      <div className="event-interest-row">
        <span>{count} FrontRow {count === 1 ? "member" : "members"} interested</span>
        <InterestButton event={event} authUser={authUser} profile={profile} eventInterest={eventInterest} setToast={setToast} />
      </div>
    </article>
  );
}

function EventDetail({ id, events, authUser, profile, eventInterest, setToast }) {
  const now = useNow();
  const event = events.find((item) => item.id === id);
  if (!event) return <EmptyState title="Show not found" body="That stop is no longer on the route." />;
  const count = eventInterestCount(eventInterest, event.id);
  const checkInStatus = checkInAvailability(event, now);
  return (
    <section className="page">
      <button className="text-link" onClick={() => navigate("#/events")}>Back to shows</button>
      <div className="detail-hero"><p className="eyebrow">{formatDate(event.date)}</p><h1>{event.venue}</h1><p>{formatTime(event.startTime)} to {formatTime(event.endTime)} · {event.address}</p></div>
      <section className="panel"><p className="section-kicker">{event.artistName || APP_CONFIG.primaryArtistName} at {event.venue}</p><h2>{event.title}</h2><p className="muted">{event.notes}</p><p className="interest-count">{count} FrontRow {count === 1 ? "member" : "members"} interested</p><p className={classNames("checkin-window-message", checkInStatus.state)}>{checkInStatus.message}</p><div className="button-row"><InterestButton event={event} authUser={authUser} profile={profile} eventInterest={eventInterest} setToast={setToast} /><a className="secondary-button" href={event.mapUrl} target="_blank" rel="noreferrer"><MapPin size={18} />Map</a><button className="primary-button" disabled={checkInStatus.state !== "open"} onClick={() => navigate("#/checkin")}><Check size={18} />Check in</button></div></section>
    </section>
  );
}

function CheckInPage({ authUser, profile, events, checkIns, setToast }) {
  const now = useNow();
  const [eventId, setEventId] = useState(events.find((event) => checkInAvailability(event).state !== "closed")?.id || events[0]?.id || "");
  const [code, setCode] = useState("");
  const [geoStatus, setGeoStatus] = useState("Not checked");
  const selected = events.find((event) => event.id === eventId) || events[0];
  const availability = selected ? checkInAvailability(selected, now) : null;

  async function submitCheckIn(method) {
    if (!selected) return;
    const currentAvailability = checkInAvailability(selected);
    if (currentAvailability.state !== "open") return setToast(currentAvailability.message);
    let submittedCodeHash = "";
    if (method === "code") {
      if (!code.trim()) return setToast("Enter the event code from the band.");
      submittedCodeHash = await hashEventCode(code);
    }
    const existing = checkIns.some((item) => item.userId === authUser.uid && item.eventId === selected.id);
    if (existing) {
      setToast("You already checked in for this show.");
      return;
    }
    try {
      await db.collection("checkIns").doc(`${selected.id}_${authUser.uid}`).set({
        userId: authUser.uid,
        userDisplayName: profile.displayName,
        eventId: selected.id,
        eventTitle: selected.venue,
        artistId: selected.artistId || APP_CONFIG.primaryArtistId,
        artistName: selected.artistName || APP_CONFIG.primaryArtistName,
        venueId: selected.venueId || slugify(selected.venue),
        venueName: selected.venue,
        points: POINTS.checkIn,
        method,
        eventCodeHash: submittedCodeHash,
        createdAt: FieldValue.serverTimestamp(),
      });
      await updateUserStats(authUser.uid, {
        points: POINTS.checkIn,
        checkIns: 1,
        type: "check_in",
        title: "Show Check-In",
        description: `Checked in at ${selected.venue}.`,
        referenceId: selected.id,
        scope: eventScope(selected),
      });
      setCode("");
      setToast(`Checked in at ${selected.venue}. +${POINTS.checkIn} Milemarkers`);
    } catch (error) {
      setToast("Check-in was rejected. Confirm the show window and event code.");
    }
  }

  function useLocation() {
    if (!navigator.geolocation) return setGeoStatus("Geolocation is not available on this device.");
    setGeoStatus("Checking your location...");
    navigator.geolocation.getCurrentPosition(
      () => { setGeoStatus("Location confirmed. Venue radius rules can be added later."); submitCheckIn("geolocation"); },
      () => setGeoStatus("Could not confirm location. Use the event code at the show."),
      { enableHighAccuracy: true, timeout: 8000 },
    );
  }

  return (
    <section className="page">
      <PageTitle icon={MapPin} eyebrow="Show check-in" title="Stamp your Milemarker" />
      {selected && <SelectedEventPanel event={selected} />}
      <div className="form panel">
        <label>Event<select value={selected?.id || ""} onChange={(event) => setEventId(event.target.value)}>{events.map((event) => <option key={event.id} value={event.id}>{event.venue} · {formatDate(event.date)}</option>)}</select></label>
        <p className={classNames("checkin-window-message", availability?.state)}>{availability?.message}</p>
        <button className="primary-button full" disabled={availability?.state !== "open"} onClick={useLocation}><MapPin size={18} />Use my location</button>
        <p className="muted compact">{geoStatus}</p>
        <div className="divider">or</div>
        <label>Event code<input value={code} disabled={availability?.state !== "open"} onChange={(event) => setCode(event.target.value.toUpperCase())} maxLength="8" placeholder="Ask the band for tonight's code" /></label>
        <button className="secondary-button full" disabled={availability?.state !== "open"} onClick={() => submitCheckIn("code")}><Check size={18} />Manual check-in</button>
      </div>
    </section>
  );
}

async function updateUserStats(userId, {
  points = 0,
  checkIns = 0,
  type = "milemarker_award",
  title = "Milemarker Award",
  description = "",
  referenceId = "",
  scope = frontRowScope(),
  metadata = {},
} = {}) {
  const ref = db.collection("users").doc(userId);
  const ledgerRef = db.collection("milemarkerLedger").doc(ledgerEntryId(userId, type, referenceId || `${Date.now()}`));
  const ledgerSnap = await ledgerRef.get();
  if (ledgerSnap.exists) return false;
  const snap = await ref.get();
  const current = snap.data() || {};
  const totalCheckIns = (current.totalCheckIns || 0) + checkIns;
  const milemarkers = cumulativePoints(current) + points;
  const status = statusForMilemarkers(milemarkers);
  const batch = db.batch();
  batch.set(ref, {
    totalPoints: milemarkers,
    lifetimePoints: milemarkers,
    totalCheckIns,
    rewardTier: status.name,
    leaderboardTitle: status.name,
    accountType: current.accountType || "frontrow_member",
    roadCrewEnrolled: current.roadCrewEnrolled !== false,
    updatedAt: FieldValue.serverTimestamp(),
  }, { merge: true });
  batch.set(db.collection("roadCrewProfiles").doc(userId), {
    ...memberProfilePayload(userId, { ...current, totalCheckIns }, milemarkers, totalCheckIns),
    updatedAt: FieldValue.serverTimestamp(),
  }, { merge: true });
  batch.set(ledgerRef, {
    userId,
    displayName: current.displayName || "FrontRow Member",
    type,
    title,
    description,
    milemarkers: points,
    amount: points,
    status: "posted",
    source: metadata.source || "automatic",
    referenceId: referenceId || "",
    ...scope,
    metadata,
    awardedAt: FieldValue.serverTimestamp(),
    createdAt: FieldValue.serverTimestamp(),
  });
  await batch.commit();
  return true;
}

function RewardsPage({ profile, authUser, referrals, rewards, rewardCatalog, songRequests, actionClaims, setToast }) {
  const checkInCount = profile?.totalCheckIns || 0;
  const milemarkers = cumulativePoints(profile);
  const currentStatus = statusForMilemarkers(milemarkers);
  const link = `${location.origin}/#/auth?ref=${profile?.referralCode || ""}`;
  const myReferrals = referrals.filter((item) => item.referrerId === authUser.uid);
  const myRewards = rewards.filter((item) => item.userId === authUser.uid);
  const myRequests = songRequests.filter((item) => item.userId === authUser.uid);
  const achievements = getAchievements(profile, myReferrals, myRequests);
  const activeCatalog = seedRewardCatalog.map((seed) => ({ ...rewardCatalog.find((item) => item.id === seed.id), ...seed, active: rewardCatalog.find((item) => item.id === seed.id)?.active ?? seed.active })).filter((item) => item.active !== false);
  const recommended = getRecommendedAction(profile, actionClaims);

  async function claimReward(reward, status) {
    const required = reward.requiredMilemarkers || status.min;
    const blocksClaim = (claims) => reward.claimMode === "individual"
      ? claims.some((claim) => claimMatchesReward(claim, reward))
      : claims.some((claim) => claimUsesStatusLevel(claim, status.id));
    if (milemarkers < required) return setToast(`Earn ${required - milemarkers} more Milemarkers to unlock ${reward.name}.`);
    if (blocksClaim(myRewards)) return setToast(reward.claimMode === "individual" ? `You've already claimed ${reward.name}.` : `You've already claimed your ${status.name} reward.`);
    try {
      const latestClaims = await db.collection("rewards").where("userId", "==", authUser.uid).get();
      if (blocksClaim(latestClaims.docs.map(docData))) return setToast(reward.claimMode === "individual" ? `You've already claimed ${reward.name}.` : `You've already claimed your ${status.name} reward.`);
      await db.collection("rewards").add({
        userId: authUser.uid,
        userDisplayName: profile.displayName,
        rewardId: reward.id,
        rewardName: reward.name,
        statusLevel: status.id,
        statusId: status.id,
        statusName: status.name,
        requiredMilemarkers: required,
        userMilemarkersAtClaim: milemarkers,
        milemarkersAtClaim: milemarkers,
        pointsAtClaim: milemarkers,
        status: "pending",
        fulfilled: false,
        createdAt: FieldValue.serverTimestamp(),
      });
      setToast(`${reward.name} requested. The band will review your claim.`);
    } catch (error) {
      setToast(error.message);
    }
  }

  return (
    <section className="page">
      <PageTitle icon={Gift} eyebrow="FrontRow Road Crew" title="Road Crew Rewards" />
      <EarnCallout />
      <div className="reward-card">
        <img src="/assets/brand/frontrow-logo-tagline.png" alt="FrontRow Road Crew" />
        <Trophy size={42} />
        <strong>{milemarkers} Milemarkers</strong>
        <span>{currentStatus.name} · {checkInCount} check-ins</span>
        <p>Milemarkers are cumulative. Claiming rewards never reduces your total.</p>
      </div>
      <MilemarkerStatusProgress profile={profile} rewards={rewards} />
      <RecommendedAction action={recommended} />
      <button className="secondary-button full" onClick={() => navigate("#/leaderboard")}><Trophy size={18} />View Road Crew Leaderboard</button>
      <div className="tier-store">
        <section className="tier-section"><header><span><p className="section-kicker">0-99 Milemarkers</p><h2>Road Crew Rookie</h2></span><strong>Getting Started</strong></header><p className="tier-lock-message">Earn 100 Milemarkers to unlock your Road Crew Welcome Pack.</p></section>
        {STATUS_LEVELS.filter((status) => status.id !== "road-crew-rookie").map((status) => <RewardStatusSection key={status.id} status={status} rewards={activeCatalog.filter((reward) => rewardStatusId(reward) === status.id)} milemarkers={milemarkers} claims={myRewards} claimReward={claimReward} />)}
      </div>
      <section>
        <p className="section-kicker">Road Crew achievements</p>
        <div className="achievement-grid">{achievements.map((achievement) => <div key={achievement.id} className={classNames("achievement", achievement.earned && "earned")}><Star size={20} /><span><strong>{achievement.name}</strong><small>{achievement.detail}</small></span></div>)}</div>
      </section>
      <section className="panel">
        <p className="section-kicker">Referral code</p><h2>{profile?.referralCode}</h2>
        <p className="muted">Share your code. You earn {POINTS.referral} Milemarkers when a new fan signs up with it.</p>
        <input readOnly value={link} />
        <p className="compact">{myReferrals.length} referral signup{myReferrals.length === 1 ? "" : "s"}</p>
      </section>
      <section className="panel"><p className="section-kicker">My reward claims</p>{myRewards.length ? myRewards.map((item) => <AdminRow key={item.id} title={item.rewardName} subtitle={`${rewardClaimStatusName(item)} · ${item.status === "denied" ? "Denied" : item.status === "fulfilled" || item.fulfilled ? "Fulfilled" : "Pending band follow-up"}`} />) : <p className="muted">Claimed rewards will appear here.</p>}</section>
    </section>
  );
}

function RewardStatusSection({ status, rewards, milemarkers, claims, claimReward }) {
  const unlocked = milemarkers >= status.min;
  const levelClaim = claims.find((claim) => claimUsesStatusLevel(claim, status.id));
  const range = `${status.min}+ Milemarkers`;
  const pickOne = rewards.some((reward) => reward.claimMode !== "individual");
  return (
    <section className={classNames("tier-section", unlocked && "unlocked")}>
      <header><span><p className="section-kicker">{range}</p><h2>{status.name} Rewards</h2></span><strong>{unlocked ? "Unlocked" : "Locked"}</strong></header>
      {!unlocked && <p className="tier-lock-message">Earn more Milemarkers to unlock {status.name} Rewards.</p>}
      {pickOne && <p className="muted compact">Pick one reward from this status level.</p>}
      {unlocked && pickOne && levelClaim && <p className="tier-lock-message">You've already claimed your {status.name} reward.</p>}
      <div className="reward-store">{rewards.map((reward) => {
        const required = reward.requiredMilemarkers || status.min;
        const rewardClaim = claims.find((claim) => claimMatchesReward(claim, reward));
        const blockedByLevel = pickOne && levelClaim && !rewardClaim;
        const rewardUnlocked = milemarkers >= required;
        const claimLabel = rewardClaim ? (rewardClaim.status === "fulfilled" || rewardClaim.fulfilled ? "Claimed" : "Pending") : blockedByLevel ? "Unavailable" : rewardUnlocked ? "Claim Reward" : "Locked";
        return <article className="store-item" key={reward.id}><div><small>Unlocked at {required} Milemarkers</small><h2>{reward.name}</h2><p className="muted">{reward.description}</p>{reward.id === "welcome-pack" && <p className="welcome-pack-list">Includes Koozie · Coaster · Keychain · Guitar Pick · Car Magnet · Sticker Pack · Founding Member Wooden Token, if eligible</p>}</div><div className="store-item-footer"><strong>{required} Miles</strong><button className={rewardUnlocked && !rewardClaim && !blockedByLevel ? "primary-button" : "secondary-button"} disabled={!rewardUnlocked || Boolean(rewardClaim) || Boolean(blockedByLevel)} onClick={() => claimReward(reward, status)}>{claimLabel}</button></div></article>;
      })}</div>
    </section>
  );
}

function EarnMilemarkersPage({ authUser, profile, rewards, actionClaims, setToast }) {
  const recommended = getRecommendedAction(profile, actionClaims);

  async function submitVerification(action) {
    if (!authUser) {
      navigate("#/auth");
      return;
    }
    const existing = verificationClaimFor(actionClaims, action.id);
    if (["pending", "approved"].includes(verificationStatus(existing))) return setToast(`This verification request is already ${verificationStatus(existing)}.`);
    window.open(action.url, "_blank", "noopener,noreferrer");
    try {
      await db.collection("actionClaims").add({
        userId: authUser.uid,
        displayName: profile?.displayName || authUser.email,
        actionId: action.id,
        actionType: action.id,
        actionName: action.name,
        requestType: "verification",
        milemarkers: action.points,
        pointsAwarded: action.points,
        status: "pending",
        submittedAt: FieldValue.serverTimestamp(),
        createdAt: FieldValue.serverTimestamp(),
      });
      setToast("Verification request submitted. Milemarkers will be awarded after approval.");
    } catch (error) {
      setToast(error.message);
    }
  }

  function EarningGroup({ title, mode }) {
    const actions = earningOpportunities.filter((action) => action.awardMode === mode);
    return <section><p className="section-kicker">{title}</p><div className="earning-grid">{actions.map((action) => {
      const claim = verificationClaimFor(actionClaims, action.id);
      const status = verificationStatus(claim);
      const isAutomaticComplete = action.id === "account" && Boolean(profile);
      const canSubmitVerification = ["facebook", "instagram"].includes(action.id);
      return (
        <article className={classNames("earning-card", (isAutomaticComplete || status === "approved") && "claimed")} key={action.id}>
          <div className="earning-points"><strong>{action.pointsLabel || action.points}</strong><small>{action.pointsLabel ? "Milemarkers" : `Milemarker${action.points === 1 ? "" : "s"}`}</small></div>
          <div><h2>{action.name}</h2><p className="muted">{action.detail}</p></div>
          {mode === "automatic" && <span className="earned-label"><Check size={16} />{isAutomaticComplete ? "Awarded" : "Automatic"}</span>}
          {mode === "verification" && status && <span className={classNames("verification-status", status)}>{status}</span>}
          {canSubmitVerification && !["pending", "approved"].includes(status) && <button className="secondary-button full" onClick={() => submitVerification(action)}>Submit {action.name} Verification</button>}
          {action.route && action.id !== "tip" && <button className="secondary-button full" onClick={() => navigate(action.route)}>Go</button>}
          {action.id === "tip" && <button className="secondary-button full" onClick={() => navigate("#/tips")}>Submit Tip Verification</button>}
        </article>
      );
    })}</div></section>;
  }

  return (
    <section className="page">
      <PageTitle icon={Star} eyebrow="FrontRow Road Crew" title="How to Earn Milemarkers" />
      <section className="panel"><p className="lead-copy">Earn Milemarkers by attending FrontRow events, supporting artists, interacting with communities, and inviting friends.</p></section>
      <section className="panel"><p className="muted">Some Milemarkers are awarded automatically. Activities that occur outside the app require admin approval.</p></section>
      {authUser && profile && <MilemarkerStatusProgress profile={profile} rewards={rewards} />}
      {authUser && profile && <RecommendedAction action={recommended} />}
      <EarningGroup title="Automatic Milemarkers" mode="automatic" />
      <EarningGroup title="Verification Required Milemarkers" mode="verification" />
    </section>
  );
}

function RequestsPage({ authUser, profile, events, songRequests, setToast }) {
  const [form, setForm] = useState({ eventId: events[0]?.id || "", song: "", message: "" });
  const selected = events.find((event) => event.id === form.eventId) || events[0];
  async function submit(event) {
    event.preventDefault();
    if (!form.song.trim()) return setToast("Add a song request first.");
    const alreadyAwarded = songRequests.some((item) => item.userId === authUser.uid && item.eventId === selected.id && item.pointsAwarded);
    await db.collection("songRequests").add({
      userId: authUser.uid,
      userDisplayName: profile.displayName,
      eventId: selected.id,
      eventTitle: selected.venue,
      artistId: selected.artistId || APP_CONFIG.primaryArtistId,
      artistName: selected.artistName || APP_CONFIG.primaryArtistName,
      venueId: selected.venueId || slugify(selected.venue),
      song: form.song,
      message: form.message,
      pointsAwarded: alreadyAwarded ? 0 : POINTS.songRequest,
      createdAt: FieldValue.serverTimestamp(),
    });
    if (!alreadyAwarded) {
      await updateUserStats(authUser.uid, {
        points: POINTS.songRequest,
        type: "song_request",
        title: "Song Request",
        description: `Requested ${form.song} for ${selected.venue}.`,
        referenceId: selected.id,
        scope: eventScope(selected),
      });
    }
    setForm({ ...form, song: "", message: "" });
    setToast(alreadyAwarded ? "Request sent." : `Request sent. +${POINTS.songRequest} Milemarkers`);
  }
  return (
    <section className="page">
      <PageTitle icon={Music2} eyebrow="Requests" title="Call the next tune" />
      {selected && <SelectedEventPanel event={selected} />}
      <form className="form panel" onSubmit={submit}>
        <label>Show<select value={selected?.id || ""} onChange={(event) => setForm({ ...form, eventId: event.target.value })}>{events.map((event) => <option key={event.id} value={event.id}>{event.venue} · {formatDate(event.date)}</option>)}</select></label>
        <label>Song request<input value={form.song} onChange={(event) => setForm({ ...form, song: event.target.value })} placeholder="Song and artist" /></label>
        <label>Message<textarea value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Optional shout-out" /></label>
        <button className="primary-button full" type="submit"><Music2 size={18} />Send request</button>
      </form>
    </section>
  );
}

function PollsPage({ authUser, polls, pollVotes, setToast }) {
  async function vote(poll, option) {
    const id = `${poll.id}_${authUser.uid}`;
    const existing = await db.collection("pollVotes").doc(id).get();
    if (existing.exists) return setToast("You already voted in this poll.");
    await db.collection("pollVotes").doc(id).set({ pollId: poll.id, userId: authUser.uid, option, awardType: "poll_participation", pointsAwarded: POINTS.pollVote, milemarkers: POINTS.pollVote, createdAt: FieldValue.serverTimestamp() });
    await updateUserStats(authUser.uid, {
      points: POINTS.pollVote,
      type: "poll_participation",
      title: "Poll Participation",
      description: "Voted in a FrontRow community poll.",
      referenceId: poll.id,
      scope: frontRowScope({ pollId: poll.id }),
    });
    setToast(`Vote counted. +${POINTS.pollVote} Milemarkers`);
  }
  return (
    <section className="page">
      <PageTitle icon={Vote} eyebrow="Polls" title="Help steer the setlist" />
      <div className="stack">{polls.map((poll) => {
        const votes = pollVotes.filter((vote) => vote.pollId === poll.id);
        const mine = votes.find((vote) => vote.userId === authUser.uid);
        const total = Math.max(votes.length, 1);
        const result = pollResultSummary(poll, votes);
        return (
          <section className="panel poll-card" key={poll.id}>
            <p className="section-kicker">{poll.active ? "Open poll" : "Closed poll"}</p><h2>{poll.question}</h2>
            <div className="poll-options">{(poll.options || []).map((option) => {
              const count = votes.filter((vote) => vote.option === option).length;
              return <button key={option} disabled={Boolean(mine) || !poll.active} onClick={() => vote(poll, option)}><span>{option}</span><strong>{Math.round((count / total) * 100)}%</strong><i style={{ width: `${(count / total) * 100}%` }} /></button>;
            })}</div>
            {mine && <p className="vote-confirmation"><Check size={16} /> You voted for {mine.option}.</p>}
            {!poll.active && result.winningOption && <p className="vote-confirmation"><Trophy size={16} /> Winning option: {result.winningOption}</p>}
            {!poll.active && result.isTie && <p className="vote-confirmation"><Vote size={16} /> This poll ended in a tie. No Prediction Bonus has been awarded.</p>}
          </section>
        );
      })}</div>
    </section>
  );
}

function LeaderboardPage({ leaderboard, profile, referrals }) {
  const [view, setView] = useState("milemarkers");
  const referralCounts = referrals.reduce((counts, referral) => ({ ...counts, [referral.referrerId]: (counts[referral.referrerId] || 0) + 1 }), {});
  const ranked = [...leaderboard]
    .filter((user) => view !== "founders" || user.foundingMember)
    .sort((a, b) => {
      if (view === "checkins") return (b.totalCheckIns || 0) - (a.totalCheckIns || 0);
      if (view === "referrals") return (referralCounts[b.id] || 0) - (referralCounts[a.id] || 0);
      if (view === "founders") return (a.foundingMemberNumber || Number.MAX_SAFE_INTEGER) - (b.foundingMemberNumber || Number.MAX_SAFE_INTEGER);
      return cumulativePoints(b) - cumulativePoints(a);
    });
  return (
    <section className="page">
      <PageTitle icon={Trophy} eyebrow="Leaderboard" title="Road Crew rankings" />
      <section className="panel">
        <label className="toggle-row"><span>Hide me from public leaderboard</span><input type="checkbox" checked={Boolean(profile?.leaderboardOptOut)} onChange={(event) => db.collection("users").doc(profile.id).update({ leaderboardOptOut: event.target.checked })} /></label>
      </section>
      <div className="filter-tabs" role="tablist">{[["milemarkers", "Top Milemarkers"], ["checkins", "Most Check-Ins"], ["referrals", "Most Referrals"], ["founders", "Founding Members"]].map(([id, label]) => <button key={id} className={view === id ? "active" : ""} onClick={() => setView(id)}>{label}</button>)}</div>
      <div className="stack">{ranked.map((user, index) => {
        const milemarkers = cumulativePoints(user);
        const trailing = view === "checkins" ? `${user.totalCheckIns || 0} check-ins` : view === "referrals" ? `${referralCounts[user.id] || 0} referrals` : view === "founders" ? `Founding #${user.foundingMemberNumber || "—"}` : `${milemarkers} Milemarkers`;
        return <div className="leader-row" key={user.id}><strong>#{index + 1}</strong><span>{user.displayName}<small>{statusForMilemarkers(milemarkers).name}{user.foundingMember ? ` · Founding #${user.foundingMemberNumber || "—"}` : ""}</small></span><b>{trailing}</b></div>;
      })}</div>
    </section>
  );
}

function memberSince(value) {
  const date = value?.toDate?.() || (value ? new Date(value) : null);
  return date && !Number.isNaN(date.getTime()) ? new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(date) : "FrontRow member";
}

function profileRewardMilestones(milemarkers, claims) {
  const milestones = [
    { id: "welcome-pack", name: "Road Crew Welcome Pack", required: 100, rewardIds: ["welcome-pack"], statusId: "new-traveler" },
    { id: "t-shirt", name: "T-Shirt", required: 150, rewardIds: ["t-shirt"] },
    { id: "pint-glass", name: "Pint Glass", required: 200, rewardIds: ["pint-glass"] },
    { id: "trucker-hat", name: "Trucker Hat", required: 250, rewardIds: ["trucker-hat"] },
    { id: "crew-member", name: "Crew Member reward choice", required: 300, statusId: "crew-member" },
    { id: "road-captain", name: "Road Captain reward choice", required: 450, statusId: "road-captain" },
    { id: "endless-legend", name: "Endless Legend reward choice", required: 650, statusId: "endless-legend" },
  ];
  return milestones.map((milestone) => {
    const claim = claims.find((item) => milestone.rewardIds?.includes(item.rewardId) || (milestone.statusId && claimUsesStatusLevel(item, milestone.statusId)));
    const state = claim
      ? claim.status === "fulfilled" || claim.fulfilled ? "Fulfilled" : claim.status === "denied" ? "Locked" : claim.status === "approved" ? "Claimed" : "Pending"
      : milemarkers >= milestone.required ? "Unlocked" : "Locked";
    return { ...milestone, state };
  });
}

function ProfilePage({ authUser, profile, allEvents, checkIns, eventInterest, referrals, songRequests, pollVotes, rewards, actionClaims, notifications, leaderboard, follows }) {
  const milemarkers = cumulativePoints(profile);
  const myCheckIns = checkIns.filter((item) => item.userId === authUser.uid);
  const myInterests = eventInterest.filter((item) => item.userId === authUser.uid && item.status === "interested");
  const myReferrals = referrals.filter((item) => item.referrerId === authUser.uid);
  const myRequests = songRequests.filter((item) => item.userId === authUser.uid);
  const myVotes = pollVotes.filter((item) => item.userId === authUser.uid);
  const myRewards = rewards.filter((item) => item.userId === authUser.uid);
  const approvedClaims = actionClaims.filter((item) => verificationStatus(item) === "approved" && isVerificationRequest(item));
  const pendingClaims = actionClaims.filter((item) => verificationStatus(item) === "pending" && isVerificationRequest(item));
  const myPredictionBonuses = actionClaims.filter((item) => isPredictionBonus(item) && verificationStatus(item) === "approved");
  const followedArtistCount = new Set([...follows.filter((item) => item.entityType === "artist").map((item) => item.entityId), ...(profile?.followedArtistIds || [])]).size;
  const venuesVisited = new Set(myCheckIns.map((item) => item.venueId || slugify(item.eventTitle || ""))).size;
  const rankIndex = leaderboard.findIndex((item) => item.id === authUser.uid);
  const rewardMilestones = profileRewardMilestones(milemarkers, myRewards);
  const historyIds = [...new Set([...myCheckIns.map((item) => item.eventId), ...myInterests.map((item) => item.eventId)])];
  const showHistory = historyIds.map((eventId) => {
    const event = allEvents.find((item) => item.id === eventId);
    const checkIn = myCheckIns.find((item) => item.eventId === eventId);
    const interest = myInterests.find((item) => item.eventId === eventId);
    return {
      id: eventId,
      title: event?.title || checkIn?.eventTitle || interest?.eventTitle || "Endless Detour show",
      venue: event?.venue || checkIn?.eventTitle || interest?.eventTitle || "Venue",
      date: event?.date || interest?.eventDate || "",
      status: checkIn ? "Checked In" : "Interested",
    };
  }).sort((a, b) => String(b.date).localeCompare(String(a.date)));
  const achievements = [
    { name: "Founding Member", earned: Boolean(profile?.foundingMember) },
    { name: "First Check-In", earned: myCheckIns.length >= 1 },
    { name: "Roadie Status", earned: milemarkers >= 150 },
    { name: "Crew Member Status", earned: milemarkers >= 300 },
    { name: "Road Captain Status", earned: milemarkers >= 450 },
    { name: "Endless Legend Status", earned: milemarkers >= 650 },
    { name: "Five Shows Attended", earned: myCheckIns.length >= 5 },
    { name: "Ten Shows Attended", earned: myCheckIns.length >= 10 },
    { name: "First Referral", earned: myReferrals.length >= 1 },
    { name: "First Song Request", earned: myRequests.length >= 1 },
    { name: "First Poll Vote", earned: myVotes.length >= 1 },
  ];
  return (
    <section className="page profile-page">
      <PageTitle icon={Users} eyebrow="FrontRow identity" title="FrontRow Profile" />
      <section className="panel profile-identity">
        <div className="profile-avatar">{(profile?.displayName || authUser.email || "R").slice(0, 1).toUpperCase()}</div>
        <div><p className="section-kicker">FrontRow Member</p><h2>{profile?.displayName || "FrontRow Member"}</h2><p className="muted">{profile?.email || authUser.email}</p><small>Member since {memberSince(profile?.createdAt)}</small>{profile?.foundingMember && <strong>Road Crew Founding Member #{profile.foundingMemberNumber || "—"}</strong>}</div>
      </section>
      <MilemarkerStatusProgress profile={profile} rewards={rewards} />
      <section className="panel"><div className="profile-section-heading"><span><p className="section-kicker">Road Crew Status</p><h2>{statusForMilemarkers(milemarkers).name}</h2></span><strong>{rankIndex >= 0 ? `#${rankIndex + 1}` : "Private"}</strong></div><p className="muted compact">{rankIndex >= 0 ? `${milemarkers} Milemarkers · FrontRow Road Crew leaderboard` : "You are currently hidden from the public leaderboard."}</p></section>
      <section><p className="section-kicker">Fan Stats</p><div className="profile-stat-grid">
        <ProfileStat label="Shows attended" value={myCheckIns.length} />
        <ProfileStat label="Artists followed" value={followedArtistCount} />
        <ProfileStat label="Venues visited" value={venuesVisited} />
        <ProfileStat label="Shows interested" value={myInterests.length} />
        <ProfileStat label="Referrals" value={myReferrals.length} />
        <ProfileStat label="Song requests" value={myRequests.length} />
        <ProfileStat label="Polls joined" value={myVotes.length} />
        <ProfileStat label="Prediction bonuses" value={myPredictionBonuses.length} />
        <ProfileStat label="Rewards claimed" value={myRewards.filter((item) => item.status !== "denied").length} />
        <ProfileStat label="Pending rewards" value={myRewards.filter((item) => !["fulfilled", "denied"].includes(item.status)).length} />
        <ProfileStat label="Approved verifications" value={approvedClaims.length} />
        <ProfileStat label="Pending verifications" value={pendingClaims.length} />
      </div></section>
      {myPredictionBonuses.length > 0 && <section className="panel"><p className="section-kicker">Milemarker Activity</p><h2>Prediction wins</h2><div className="profile-history">{myPredictionBonuses.map((bonus) => <div className="profile-history-row" key={bonus.id}><Trophy size={19} /><span><strong>{bonus.title || "Road Crew Prediction Bonus"}</strong><small>{bonus.description || "You voted for the winning poll option."}</small></span><b>+{bonus.milemarkers || POINTS.pollPredictionBonus} Milemarkers</b></div>)}</div></section>}
      {notifications.length > 0 && <section className="panel"><p className="section-kicker">Notifications</p><h2>Road Crew updates</h2><div className="profile-history">{notifications.slice(0, 5).map((notification) => <div className="profile-history-row" key={notification.id}><Megaphone size={19} /><span><strong>{notification.title || "Road Crew update"}</strong><small>{notification.message || notification.body}</small></span><b>{notification.read ? "Read" : "New"}</b></div>)}</div></section>}
      <section className="panel"><div className="profile-section-heading"><span><p className="section-kicker">Rewards Progress</p><h2>Your unlocks</h2></span><button className="text-button" onClick={() => navigate("#/rewards")}>Open Rewards</button></div><div className="profile-progress-list">{rewardMilestones.map((item) => <div className={classNames("profile-progress-item", item.state.toLowerCase())} key={item.id}><span><strong>{item.name}</strong><small>{item.required} Milemarkers</small></span><b>{item.state}</b></div>)}</div></section>
      <section className="panel"><p className="section-kicker">Show History</p><h2>Your stops</h2><div className="profile-history">{showHistory.length ? showHistory.map((item) => <div className="profile-history-row" key={item.id}><CalendarDays size={19} /><span><strong>{item.title}</strong><small>{item.venue}{item.date ? ` · ${formatDate(item.date)}` : ""}</small></span><b>{item.status}</b></div>) : <p className="muted">Your interested shows and check-ins will appear here.</p>}</div></section>
      <section><p className="section-kicker">Achievements</p><div className="achievement-grid">{achievements.map((achievement) => <div key={achievement.name} className={classNames("achievement", achievement.earned && "earned")}><Star size={20} /><span><strong>{achievement.name}</strong><small>{achievement.earned ? "Earned" : "Locked"}</small></span></div>)}</div></section>
      <div className="stack">
        <button className="primary-button full" onClick={() => navigate("#/rewards")}><Gift size={18} />Road Crew Rewards</button>
        <button className="secondary-button full" onClick={() => navigate("#/checkin")}><MapPin size={18} />Check In at a Show</button>
        <button className="secondary-button full" onClick={() => navigate("#/leaderboard")}><Trophy size={18} />Road Crew Leaderboard</button>
        <button className="secondary-button full" onClick={() => navigate("#/earn")}><Star size={18} />How to Earn Milemarkers</button>
        <button className="secondary-button full" onClick={() => navigate("#/about")}><Radio size={18} />About Road Crew</button>
      </div>
    </section>
  );
}

function ProfileStat({ label, value }) {
  return <div className="profile-stat"><strong>{value}</strong><span>{label}</span></div>;
}

function AnnouncementsPage({ announcements }) {
  return (
    <section className="page">
      <PageTitle icon={Megaphone} eyebrow="FrontRow community" title="Announcements" />
      <div className="stack">{announcements.map((item) => <section className="panel" key={item.id}><p className="section-kicker">{item.date || "Road Crew update"}</p><h2>{item.title}</h2><p className="muted">{item.body}</p></section>)}</div>
    </section>
  );
}

function TipJarPage({ tipJar, authUser, profile, actionClaims, setToast }) {
  const [amount, setAmount] = useState("");
  const tipRequests = actionClaims.filter((claim) => claim.actionId === "tip");

  async function submitTipVerification(event) {
    event.preventDefault();
    if (!authUser) return navigate("#/auth");
    const dollars = Math.floor(Number(amount));
    if (!dollars || dollars < 1) return setToast("Enter the confirmed tip amount.");
    if (tipRequests.some((claim) => verificationStatus(claim) === "pending")) return setToast("You already have a pending tip verification request.");
    await db.collection("actionClaims").add({
      userId: authUser.uid,
      displayName: profile?.displayName || authUser.email,
      actionId: "tip",
      actionType: "tip",
      actionName: "Tip Jar Contribution",
      requestType: "verification",
      amount: dollars,
      milemarkers: dollars,
      pointsAwarded: dollars,
      status: "pending",
      submittedAt: FieldValue.serverTimestamp(),
      createdAt: FieldValue.serverTimestamp(),
    });
    setAmount("");
    setToast("Verification request submitted. Milemarkers will be awarded after approval.");
  }

  return (
    <section className="page">
      <PageTitle icon={Star} eyebrow="Virtual Tip Jar" title="Support the band" />
      <section className="panel"><p className="muted">Earn 1 Milemarker per $1 tipped. Submit the amount after tipping and the band will verify it before Milemarkers are awarded.</p></section>
      <div className="stack">
        <a className="primary-button full" href={tipJar.venmo} target="_blank" rel="noreferrer">Venmo</a>
        <a className="secondary-button full" href={tipJar.paypal} target="_blank" rel="noreferrer">PayPal</a>
        <a className="secondary-button full" href={tipJar.cashApp} target="_blank" rel="noreferrer">Cash App</a>
      </div>
      <form className="form panel" onSubmit={submitTipVerification}>
        <h2>Submit Tip Verification</h2>
        <label>Tip amount<input type="number" min="1" step="1" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Amount in dollars" /></label>
        <button className="primary-button full" type="submit">Submit Verification Request</button>
      </form>
      <section className="panel"><p className="section-kicker">Tip verification history</p>{tipRequests.length ? tipRequests.map((claim) => <AdminRow key={claim.id} title={`$${claim.amount || claim.milemarkers || claim.pointsAwarded || 0} tip`} subtitle={`${verificationStatus(claim)} · ${claim.milemarkers || claim.pointsAwarded || 0} Milemarkers`} />) : <p className="muted">No tip verification requests yet.</p>}</section>
    </section>
  );
}

function MorePage({ profile }) {
  return (
    <section className="page">
      <PageTitle icon={Home} eyebrow="FrontRow" title="More" />
      <div className="stack menu-grid">
        <button className="primary-button full" onClick={() => navigate("#/profile")}><Users size={18} />FrontRow Profile</button>
        <button className="secondary-button full" onClick={() => navigate("#/artists")}><Music2 size={18} />Artists</button>
        <button className="secondary-button full" onClick={() => navigate("#/venues")}><Building2 size={18} />Venues</button>
        <button className="secondary-button full" onClick={() => navigate("#/leaderboard")}><Trophy size={18} />Leaderboard & Privacy</button>
        <button className="secondary-button full" onClick={() => navigate("#/earn")}><Star size={18} />How to Earn Milemarkers</button>
        <button className="secondary-button full" onClick={() => navigate("#/requests")}><Music2 size={18} />Song Requests</button>
        <button className="secondary-button full" onClick={() => navigate("#/polls")}><Vote size={18} />Polls</button>
        <button className="secondary-button full" onClick={() => navigate("#/announcements")}><Megaphone size={18} />Announcements</button>
        <button className="secondary-button full" onClick={() => navigate("#/tips")}><Gift size={18} />Tip Jar / Support the Band</button>
        <button className="secondary-button full" onClick={() => navigate("#/about")}><Radio size={18} />About Road Crew</button>
        <button className="secondary-button full" onClick={() => navigate("#/admin")}><Shield size={18} />Admin</button>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="page">
      <PageTitle icon={Radio} eyebrow="About" title="About Road Crew" />
      <section className="panel about-road-crew">
        <img src="/assets/brand/frontrow-logo-tagline.png" alt="FrontRow" />
        <p><strong>FrontRow</strong> is the operating system for live entertainment communities: discovery, events, community, and fan identity in one place.</p>
        <p><strong>Road Crew</strong> is FrontRow's loyalty and engagement program. Members earn Milemarkers, status, badges, achievements, rewards, and recognition by participating in live entertainment communities.</p>
        <p>Endless Detour is the founding artist community on FrontRow. Future artists and venues can operate their own communities and Road Crew experiences within the same platform.</p>
        <strong>Founded in 2026.</strong>
      </section>
    </section>
  );
}

function AppFooter() {
  return (
    <footer className="app-footer">
      <strong>FrontRow {APP_CONFIG.version}</strong>
      <span>Road Crew loyalty and engagement program</span>
      <span>© 2026 {APP_CONFIG.platformOwner}. FrontRow platform and software.</span>
      <span>Endless Detour name, logo, and related band marks used by permission.</span>
      <span>Live communities, powered by FrontRow.</span>
    </footer>
  );
}

function buildEventReports({ events, eventInterest, checkIns, users, songRequests, pollVotes, referrals, rewards }) {
  return events.map((event) => {
    const interests = eventInterest.filter((item) => item.eventId === event.id && item.status === "interested");
    return {
      event,
      interests,
      interestedCount: interests.length,
      checkInCount: checkIns.filter((item) => item.eventId === event.id).length,
      newSignupCount: users.filter((item) => dateKey(item.createdAt) === event.date).length,
      songRequestCount: songRequests.filter((item) => item.eventId === event.id).length,
      pollVoteCount: pollVotes.filter((item) => item.eventId === event.id).length,
      referralCount: referrals.filter((item) => dateKey(item.createdAt) === event.date).length,
      rewardClaimCount: rewards.filter((item) => dateKey(item.createdAt) === event.date).length,
    };
  }).sort((a, b) => String(b.event.date).localeCompare(String(a.event.date)));
}

function downloadEventReportsCsv(reports) {
  const headers = ["eventId", "eventTitle", "eventDate", "venue", "interestedCount", "checkInCount", "newSignupCount", "songRequestCount", "pollVoteCount", "referralCount", "rewardClaimCount"];
  const escapeCsv = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`;
  const rows = reports.map((report) => [
    report.event.id,
    report.event.title,
    report.event.date,
    report.event.venue,
    report.interestedCount,
    report.checkInCount,
    report.newSignupCount,
    report.songRequestCount,
    report.pollVoteCount,
    report.referralCount,
    report.rewardClaimCount,
  ].map(escapeCsv).join(","));
  const blob = new Blob([[headers.join(","), ...rows].join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `endless-detour-event-reports-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function EventReports({ reports, expanded, onToggle }) {
  return (
    <section className={classNames("panel", "event-reports", !expanded && "collapsed")}>
      <div className="report-heading report-toggle-heading">
        <span><p className="section-kicker">Forecast vs Attendance</p><h2>{expanded ? "Event Reports" : "Show event interest, check-ins, and signup reporting"}</h2></span>
        <div className="report-heading-actions">
          {expanded && <button className="secondary-button" onClick={() => downloadEventReportsCsv(reports)}><Download size={18} />Download CSV</button>}
          <button className="secondary-button report-toggle" aria-expanded={expanded} onClick={onToggle}>{expanded ? "Collapse" : "Expand"}</button>
        </div>
      </div>
      {expanded && (
        <>
          <p className="muted">Interested is a turnout forecast. Check-ins are proof of attendance.</p>
          <div className="report-grid">
            {reports.map((report) => (
              <article className="event-report-card" key={report.event.id}>
                <header><span><strong>{report.event.venue}</strong><small>{formatDate(report.event.date)} · {report.event.title}</small></span></header>
                <div className="report-metrics">
                  <ReportMetric label="Interested" value={report.interestedCount} />
                  <ReportMetric label="Check-ins" value={report.checkInCount} />
                  <ReportMetric label="New signups" value={report.newSignupCount} />
                  <ReportMetric label="Song requests" value={report.songRequestCount} />
                  <ReportMetric label="Poll votes" value={report.pollVoteCount} />
                  <ReportMetric label="Referrals" value={report.referralCount} />
                  <ReportMetric label="Reward claims" value={report.rewardClaimCount} />
                </div>
                <div className="interested-members">
                  <strong>Interested Road Crew</strong>
                  <span>{report.interests.length ? report.interests.map((item) => item.displayName || item.email || "Road Crew member").join(" · ") : "No interested members yet."}</span>
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

function ReportMetric({ label, value }) {
  return <div className="report-metric"><strong>{value}</strong><span>{label}</span></div>;
}

function useAdminSectionState(defaults) {
  const [sections, setSections] = useState(() => {
    try {
      return { ...defaults, ...JSON.parse(sessionStorage.getItem("roadCrewAdminSections") || "{}") };
    } catch {
      return defaults;
    }
  });
  function toggle(id) {
    setSections((current) => {
      const next = { ...current, [id]: !current[id] };
      sessionStorage.setItem("roadCrewAdminSections", JSON.stringify(next));
      return next;
    });
  }
  function open(id) {
    setSections((current) => {
      const next = { ...current, [id]: true };
      sessionStorage.setItem("roadCrewAdminSections", JSON.stringify(next));
      return next;
    });
  }
  return { sections, toggle, open };
}

function AdminSection({ id, title, summary, expanded, onToggle, children }) {
  return (
    <section className={classNames("admin-section", expanded && "expanded")}>
      <button className="admin-section-header" aria-expanded={expanded} aria-controls={`admin-section-${id}`} onClick={onToggle}>
        <span><strong>{title}</strong><small>{summary}</small></span>
        <b>{expanded ? "Collapse" : "Expand"}</b>
      </button>
      {expanded && <div className="admin-section-content" id={`admin-section-${id}`}>{children}</div>}
    </section>
  );
}

function AdminPage(props) {
  const { profile, events, allEvents, users, checkIns, songRequests, referrals, rewards, rewardCatalog, polls, pollVotes, allAnnouncements, allActionClaims, eventInterest, eventSecrets, songLibrary, setToast, tipJar } = props;
  const [eventDraft, setEventDraft] = useState(blankEvent());
  const [announcement, setAnnouncement] = useState({ id: "", title: "", body: "", published: true });
  const [pollDraft, setPollDraft] = useState({ id: "", question: "", options: "Option one\nOption two", active: true });
  const [bonus, setBonus] = useState({ userId: "", points: 10, reason: "" });
  const [tips, setTips] = useState(tipJar);
  const pendingMilemarkerRequests = allActionClaims.filter((claim) => isVerificationRequest(claim) && claim.status === "pending");
  const reviewedMilemarkerRequests = allActionClaims.filter((claim) => isVerificationRequest(claim) && ["approved", "denied", "processing"].includes(verificationStatus(claim)));
  const pendingRewards = rewards.filter((item) => !["fulfilled", "denied"].includes(item.status));
  const setupNeeded = !allEvents.length || allEvents.some((event) => (event.createdAt || event.updatedAt || event.securityMigratedAt) && (!eventSecrets.some((secret) => secret.id === event.id) || !event.checkInOpensAt || !event.checkInClosesAt));
  const adminSections = useAdminSectionState({
    setup: setupNeeded,
    events: true,
    users: false,
    songLibrary: false,
    milemarkerRequests: pendingMilemarkerRequests.length > 0,
    manualBonus: false,
    songRequests: false,
    checkIns: false,
    referrals: false,
    leaderboard: false,
    polls: false,
    announcements: false,
    tips: false,
    rewards: pendingRewards.length > 0,
    reports: false,
    settings: false,
  });

  useEffect(() => {
    if (pendingMilemarkerRequests.length) adminSections.open("milemarkerRequests");
  }, [pendingMilemarkerRequests.length]);

  useEffect(() => {
    if (setupNeeded) adminSections.open("setup");
  }, [setupNeeded]);

  useEffect(() => {
    if (pendingRewards.length) adminSections.open("rewards");
  }, [pendingRewards.length]);

  useEffect(() => setTips(tipJar), [tipJar]);

  if (!profile?.isAdmin) {
    return <EmptyState title="Admin access required" body="This dashboard is available only to Firebase users with isAdmin: true." />;
  }
  const eventReports = buildEventReports({ events: allEvents, eventInterest, checkIns, users, songRequests, pollVotes, referrals, rewards });

  async function saveEvent(event) {
    event.preventDefault();
    const id = eventDraft.id || slugify(`${eventDraft.venue}-${eventDraft.date}`);
    const original = allEvents.find((item) => item.id === eventDraft.id);
    const timingChanged = !original || ["date", "startTime", "endTime"].some((field) => original[field] !== eventDraft[field]);
    const values = {
      id,
      artistId: eventDraft.artistId || APP_CONFIG.primaryArtistId,
      artistName: eventDraft.artistName || APP_CONFIG.primaryArtistName,
      venueId: eventDraft.venueId || slugify(eventDraft.venue),
      title: eventDraft.title,
      venue: eventDraft.venue,
      date: eventDraft.date,
      startTime: eventDraft.startTime,
      endTime: eventDraft.endTime,
      address: eventDraft.address,
      mapUrl: eventDraft.mapUrl,
      notes: eventDraft.notes,
      imageUrl: eventDraft.imageUrl || "",
      active: eventDraft.active !== false,
      updatedAt: FieldValue.serverTimestamp(),
    };
    if (timingChanged) {
      const window = checkInWindow(eventDraft);
      values.checkInOpensAt = Timestamp.fromDate(window.start);
      values.checkInClosesAt = Timestamp.fromDate(window.end);
    }
    await db.collection("events").doc(id).set(values, { merge: true });
    setEventDraft(blankEvent());
    setToast(eventDraft.id ? "Event details updated. Secure code preserved." : "Event added. Generate its secure code from the Events list.");
  }

  function editEvent(event) {
    setEventDraft({ ...blankEvent(), ...event });
    adminSections.open("events");
    setTimeout(() => document.getElementById("event-editor")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  }

  async function secureEventCode(event) {
    const existing = eventSecrets.find((secret) => secret.id === event.id);
    if (existing && !window.confirm(`Regenerate the check-in code for ${event.venue}? The previous code will stop working.`)) return;
    const code = randomEventCode();
    const codeHash = await hashEventCode(code);
    const securityUpdate = { code: FieldValue.delete(), codeHash: FieldValue.delete(), updatedAt: FieldValue.serverTimestamp() };
    if (!event.checkInOpensAt || !event.checkInClosesAt) {
      const window = checkInWindow(event);
      securityUpdate.checkInOpensAt = Timestamp.fromDate(window.start);
      securityUpdate.checkInClosesAt = Timestamp.fromDate(window.end);
    }
    await db.collection("events").doc(event.id).set(securityUpdate, { merge: true });
    await db.collection("eventSecrets").doc(event.id).set({ eventId: event.id, code, codeHash, updatedAt: FieldValue.serverTimestamp() }, { merge: true });
    setToast(`${existing ? "New" : "Secure"} code generated for ${event.venue}.`);
  }

  async function copyEventCode(eventId) {
    const code = eventSecrets.find((secret) => secret.id === eventId)?.code;
    if (!code) return setToast("Generate a secure event code first.");
    await navigator.clipboard.writeText(code);
    setToast("Event code copied.");
  }

  async function migrateEventSecurity() {
    if (!window.confirm("Generate new random codes and secure check-in windows for every event? All previous manual codes will stop working.")) return;
    await Promise.all(allEvents.map(async (event) => {
      const code = randomEventCode();
      const codeHash = await hashEventCode(code);
      const values = secureEventData(event);
      await db.collection("events").doc(event.id).set({ ...values, codeHash: FieldValue.delete(), securityMigratedAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp() }, { merge: true });
      await db.collection("eventSecrets").doc(event.id).set({ eventId: event.id, code, codeHash, updatedAt: FieldValue.serverTimestamp() }, { merge: true });
    }));
    setToast("All events now use secure random codes and check-in windows.");
  }

  async function saveAnnouncement(event) {
    event.preventDefault();
    const values = { title: announcement.title, body: announcement.body, published: announcement.published !== false, date: announcement.date || new Date().toISOString().slice(0, 10), updatedAt: FieldValue.serverTimestamp() };
    if (announcement.id) await db.collection("announcements").doc(announcement.id).set(values, { merge: true });
    else await db.collection("announcements").add({ ...values, createdAt: FieldValue.serverTimestamp() });
    setAnnouncement({ id: "", title: "", body: "", published: true });
    setToast("Announcement saved.");
  }

  async function savePoll(event) {
    event.preventDefault();
    const values = { question: pollDraft.question, options: pollDraft.options.split("\n").map((item) => item.trim()).filter(Boolean), active: pollDraft.active !== false, updatedAt: FieldValue.serverTimestamp() };
    if (values.active === false) values.closedAt = FieldValue.serverTimestamp();
    if (pollDraft.id) await db.collection("polls").doc(pollDraft.id).set(values, { merge: true });
    else await db.collection("polls").add({ ...values, createdAt: FieldValue.serverTimestamp() });
    if (pollDraft.id && values.active === false) await awardPredictionBonuses({ ...pollDraft, ...values, id: pollDraft.id });
    setPollDraft({ id: "", question: "", options: "Option one\nOption two", active: true });
    setToast("Poll saved.");
  }

  async function awardPredictionBonuses(poll) {
    const votes = pollVotes.filter((vote) => vote.pollId === poll.id);
    const result = pollResultSummary(poll, votes);
    if (!result.winningOption) {
      await db.collection("polls").doc(poll.id).set({ winningOption: "", predictionBonusAwards: 0, predictionBonusMilemarkers: 0, predictionBonusesProcessedAt: FieldValue.serverTimestamp() }, { merge: true });
      return 0;
    }
    const winners = [...new Map(votes.filter((vote) => vote.option === result.winningOption).map((vote) => [vote.userId, vote])).values()];
    let awarded = 0;
    for (const vote of winners) {
      const claimRef = db.collection("actionClaims").doc(predictionBonusClaimId(poll.id, vote.userId));
      const notificationRef = db.collection("notifications").doc(predictionBonusClaimId(poll.id, vote.userId));
      const userRef = db.collection("users").doc(vote.userId);
      const roadCrewProfileRef = db.collection("roadCrewProfiles").doc(vote.userId);
      const ledgerRef = db.collection("milemarkerLedger").doc(ledgerEntryId(vote.userId, "poll_prediction_bonus", poll.id));
      const member = users.find((user) => user.id === vote.userId);
      const created = await db.runTransaction(async (transaction) => {
        const claimSnapshot = await transaction.get(claimRef);
        if (claimSnapshot.exists) return false;
        const ledgerSnapshot = await transaction.get(ledgerRef);
        if (ledgerSnapshot.exists) return false;
        const userSnapshot = await transaction.get(userRef);
        if (!userSnapshot.exists) return false;
        const current = userSnapshot.data();
        const milemarkers = cumulativePoints(current) + POINTS.pollPredictionBonus;
        const status = statusForMilemarkers(milemarkers);
        transaction.set(claimRef, {
          userId: vote.userId,
          displayName: member?.displayName || current.displayName || "Road Crew member",
          actionType: "poll_prediction_bonus",
          type: "poll_prediction_bonus",
          title: "Road Crew Prediction Bonus",
          description: "You voted for the winning poll option.",
          milemarkers: POINTS.pollPredictionBonus,
          pointsAwarded: POINTS.pollPredictionBonus,
          reference: poll.id,
          pollId: poll.id,
          pollQuestion: poll.question,
          winningOption: result.winningOption,
          status: "approved",
          awardedAt: FieldValue.serverTimestamp(),
          createdAt: FieldValue.serverTimestamp(),
        });
        transaction.set(ledgerRef, {
          userId: vote.userId,
          displayName: member?.displayName || current.displayName || "FrontRow Member",
          type: "poll_prediction_bonus",
          title: "Road Crew Prediction Bonus",
          description: "You voted for the winning poll option.",
          milemarkers: POINTS.pollPredictionBonus,
          amount: POINTS.pollPredictionBonus,
          status: "posted",
          source: "automatic",
          referenceId: poll.id,
          pollId: poll.id,
          pollQuestion: poll.question,
          winningOption: result.winningOption,
          ...frontRowScope({ pollId: poll.id }),
          awardedAt: FieldValue.serverTimestamp(),
          createdAt: FieldValue.serverTimestamp(),
        });
        transaction.set(notificationRef, {
          userId: vote.userId,
          type: "poll_prediction_bonus",
          title: "Road Crew Prediction Bonus",
          message: `Congratulations! You earned a Road Crew Prediction Bonus (+${POINTS.pollPredictionBonus} Milemarkers) for voting for the winning poll option.`,
          pollId: poll.id,
          pushEligible: true,
          read: false,
          createdAt: FieldValue.serverTimestamp(),
        });
        transaction.set(roadCrewProfileRef, {
          ...memberProfilePayload(vote.userId, current, milemarkers, current.totalCheckIns || 0),
          currentStatusId: status.id,
          currentStatusName: status.name,
          updatedAt: FieldValue.serverTimestamp(),
        }, { merge: true });
        transaction.update(userRef, {
          totalPoints: milemarkers,
          lifetimePoints: milemarkers,
          rewardTier: status.name,
          leaderboardTitle: status.name,
          updatedAt: FieldValue.serverTimestamp(),
        });
        return true;
      });
      if (created) awarded += 1;
    }
    const awardSnapshots = await Promise.all(winners.map((vote) => db.collection("actionClaims").doc(predictionBonusClaimId(poll.id, vote.userId)).get()));
    const totalAwards = awardSnapshots.filter((snapshot) => snapshot.exists).length;
    await db.collection("polls").doc(poll.id).set({
      winningOption: result.winningOption,
      predictionBonusAwards: totalAwards,
      predictionBonusMilemarkers: totalAwards * POINTS.pollPredictionBonus,
      predictionBonusesProcessedAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    }, { merge: true });
    return awarded;
  }

  async function togglePoll(poll) {
    if (!poll.active) {
      await db.collection("polls").doc(poll.id).update({ active: true, updatedAt: FieldValue.serverTimestamp() });
      return setToast("Poll reopened. Existing Prediction Bonus awards are preserved.");
    }
    await db.collection("polls").doc(poll.id).update({ active: false, closedAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp() });
    const awarded = await awardPredictionBonuses(poll);
    setToast(`Poll closed. ${awarded} new Prediction Bonus${awarded === 1 ? "" : "es"} awarded.`);
  }

  async function addBonus(event) {
    event.preventDefault();
    const user = users.find((item) => item.id === bonus.userId);
    const bonusRef = await db.collection("manualBonuses").add({ ...bonus, points: Number(bonus.points), userDisplayName: user?.displayName || "", ...frontRowScope(), createdAt: FieldValue.serverTimestamp() });
    await updateUserStats(bonus.userId, {
      points: Number(bonus.points),
      type: "manual_bonus",
      title: "Band Bonus",
      description: bonus.reason || "Manual Milemarker bonus awarded by an admin.",
      referenceId: bonusRef.id,
      scope: frontRowScope(),
      metadata: { source: "admin" },
    });
    setBonus({ userId: "", points: 10, reason: "" });
    setToast("Bonus Milemarkers added.");
  }

  async function approveMilemarkerRequest(claim) {
    const ref = db.collection("actionClaims").doc(claim.id);
    const latest = await ref.get();
    if (!latest.exists || latest.data().status !== "pending") return setToast("This request has already been reviewed.");
    const milemarkers = Number(latest.data().milemarkers || latest.data().pointsAwarded || 0);
    try {
      await ref.update({ status: "processing", approvedBy: profile.id, reviewedAt: FieldValue.serverTimestamp() });
      await updateUserStats(latest.data().userId, {
        points: milemarkers,
        type: `verification_${latest.data().actionType || "activity"}`,
        title: latest.data().actionName || "Verified Milemarker Activity",
        description: "Admin-approved Milemarker verification request.",
        referenceId: claim.id,
        scope: frontRowScope(),
        metadata: { source: "admin", actionType: latest.data().actionType || "" },
      });
      await ref.update({ status: "approved", approvedAt: FieldValue.serverTimestamp(), approvedBy: profile.id });
      setToast(`${milemarkers} Milemarkers approved.`);
    } catch (error) {
      await ref.update({ status: "pending" });
      setToast(error.message);
    }
  }

  async function denyMilemarkerRequest(claim) {
    const ref = db.collection("actionClaims").doc(claim.id);
    const latest = await ref.get();
    if (!latest.exists || latest.data().status !== "pending") return setToast("This request has already been reviewed.");
    await ref.update({ status: "denied", deniedAt: FieldValue.serverTimestamp(), approvedBy: profile.id });
    setToast("Verification request denied.");
  }

  async function markRewardFulfilled(redemption) {
    await db.collection("rewards").doc(redemption.id).update({ status: "fulfilled", fulfilled: true, fulfilledAt: FieldValue.serverTimestamp() });
    setToast("Reward marked fulfilled.");
  }

  async function denyReward(redemption) {
    await db.collection("rewards").doc(redemption.id).update({ status: "denied", fulfilled: false, deniedAt: FieldValue.serverTimestamp() });
    setToast("Reward claim denied.");
  }

  async function markRequestPlayed(request) {
    await db.collection("songRequests").doc(request.id).update({ played: true, playedAt: FieldValue.serverTimestamp() });
    setToast("Song request marked played. Achievement unlocked.");
  }

  async function seedStarterData() {
    await db.collection("communities").doc(FOUNDING_COMMUNITY.id).set({ ...FOUNDING_COMMUNITY, createdAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp() }, { merge: true });
    await Promise.all(seedArtists.map((artist) => db.collection("artists").doc(artist.id).set({ ...frontRowScope({ artistId: artist.id, artistName: artist.name }), ...artist, communityIds: [FOUNDING_COMMUNITY.id], createdAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp() }, { merge: true })));
    await Promise.all(seedVenues.map((venue) => db.collection("venues").doc(venue.id).set({ ...frontRowScope({ venueId: venue.id, venueName: venue.name }), ...venue, createdAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp() }, { merge: true })));
    await Promise.all(seedEvents.map(async (event) => {
      const code = randomEventCode();
      const codeHash = await hashEventCode(code);
      await db.collection("events").doc(event.id).set({ ...secureEventData(event), codeHash: FieldValue.delete(), createdAt: FieldValue.serverTimestamp() }, { merge: true });
      await db.collection("eventSecrets").doc(event.id).set({ eventId: event.id, code, codeHash, createdAt: FieldValue.serverTimestamp() }, { merge: true });
    }));
    await Promise.all(seedAchievementDefinitions.map((achievement) => db.collection("achievementDefinitions").doc(achievement.id).set({ ...achievement, ...frontRowScope(), createdAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp() }, { merge: true })));
    await Promise.all(seedSongLibrary.map((song) => db.collection("songLibrary").doc(song.id).set({ ...song, createdAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp() }, { merge: true })));
    await Promise.all(seedPolls.map((poll) => db.collection("polls").doc(poll.id).set({ ...poll, createdAt: FieldValue.serverTimestamp() }, { merge: true })));
    await Promise.all(seedAnnouncements.map((item) => db.collection("announcements").doc(item.id).set({ ...item, createdAt: FieldValue.serverTimestamp() }, { merge: true })));
    await Promise.all(seedRewardCatalog.map((reward) => db.collection("rewardCatalog").doc(reward.id).set({ ...reward, createdAt: FieldValue.serverTimestamp() }, { merge: true })));
    await db.collection("tips").doc("tipJar").set(defaultTipJar, { merge: true });
    setToast("Starter data seeded.");
  }

  async function backfillMemberStatus() {
    const ordered = [...users].sort((a, b) => {
      const aTime = a.createdAt?.toMillis?.() || Number.MAX_SAFE_INTEGER;
      const bTime = b.createdAt?.toMillis?.() || Number.MAX_SAFE_INTEGER;
      return aTime - bTime;
    });
    const batch = db.batch();
    ordered.forEach((user, index) => {
      const hasAccountClaim = allActionClaims.some((claim) => claim.userId === user.id && claim.actionId === "account");
      const accountBonus = hasAccountClaim ? 0 : POINTS.account;
      const currentMilemarkers = cumulativePoints(user);
      const totalPoints = Math.max(user.totalPoints || 0, currentMilemarkers) + accountBonus;
      const lifetimePoints = currentMilemarkers + accountBonus;
      const status = statusForMilemarkers(lifetimePoints);
      const backfilledUser = {
        ...user,
        foundingMember: index < 100,
        foundingMemberNumber: index < 100 ? index + 1 : null,
        totalCheckIns: user.totalCheckIns || 0,
        leaderboardOptOut: user.leaderboardOptOut || false,
      };
      batch.update(db.collection("users").doc(user.id), {
        foundingMember: index < 100,
        foundingMemberNumber: index < 100 ? index + 1 : null,
        totalPoints,
        lifetimePoints,
        accountType: user.accountType || "frontrow_member",
        roadCrewEnrolled: user.roadCrewEnrolled !== false,
        leaderboardTitle: status.name,
        rewardTier: status.name,
        updatedAt: FieldValue.serverTimestamp(),
      });
      batch.set(db.collection("roadCrewProfiles").doc(user.id), {
        ...memberProfilePayload(user.id, backfilledUser, lifetimePoints, user.totalCheckIns || 0),
        migrationSource: "admin_backfill",
        migratedAt: FieldValue.serverTimestamp(),
      }, { merge: true });
      batch.set(db.collection("milemarkerLedger").doc(ledgerEntryId(user.id, "migration_baseline", "legacy-total")), {
        userId: user.id,
        displayName: user.displayName || "FrontRow Member",
        type: "migration_baseline",
        title: "Legacy Milemarker Baseline",
        description: "Backfilled from existing Road Crew totals during the FrontRow migration.",
        milemarkers: lifetimePoints,
        amount: lifetimePoints,
        status: "posted",
        source: "migration",
        referenceId: "legacy-total",
        ...frontRowScope(),
        awardedAt: FieldValue.serverTimestamp(),
        createdAt: FieldValue.serverTimestamp(),
      }, { merge: true });
      if (!hasAccountClaim) {
        batch.set(db.collection("actionClaims").doc(`${user.id}_account`), {
          userId: user.id,
          actionId: "account",
          actionName: "Download / Create FrontRow Account",
          actionType: "account",
          displayName: user.displayName,
          milemarkers: POINTS.account,
          pointsAwarded: POINTS.account,
          status: "approved",
          submittedAt: FieldValue.serverTimestamp(),
          approvedAt: FieldValue.serverTimestamp(),
          approvedBy: "automatic",
          createdAt: FieldValue.serverTimestamp(),
        });
      }
    });
    await batch.commit();
    setToast("Member status and Milemarkers backfilled.");
  }

  async function backfillRewardClaimLevels() {
    await Promise.all(rewards.map((claim) => {
      const statusLevel = rewardClaimStatusId(claim);
      if (!statusLevel || (claim.statusLevel === statusLevel && claim.statusName === rewardClaimStatusName(claim))) return Promise.resolve();
      return db.collection("rewards").doc(claim.id).update({ statusLevel, statusName: rewardClaimStatusName(claim) });
    }));
    setToast("Reward claim status levels backfilled.");
  }

  return (
    <section className="page admin-page">
      <PageTitle icon={Shield} eyebrow="Admin" title="Command center" />
      <div className="admin-grid">
        <AdminSection id="settings" title="Admin Settings" summary={`Application ${APP_CONFIG.version}`} expanded={adminSections.sections.settings} onToggle={() => adminSections.toggle("settings")}><div className="admin-version"><span>Application version</span><strong>{APP_CONFIG.version}</strong></div><p className="muted compact">Admin access is controlled by Firebase Authentication and the user's isAdmin permission.</p></AdminSection>
        <AdminSection id="setup" title="First-Time Setup" summary={setupNeeded ? "Setup actions still recommended" : "Starter data and migration tools"} expanded={adminSections.sections.setup} onToggle={() => adminSections.toggle("setup")}><p className="muted">Populate Firestore and run compatibility migrations.</p><button className="primary-button full" onClick={seedStarterData}><Plus size={18} />Seed starter data</button><button className="secondary-button full" onClick={migrateEventSecurity}><Lock size={18} />Secure all event codes & windows</button><button className="secondary-button full" onClick={backfillMemberStatus}><Users size={18} />Backfill first 100 members</button><button className="secondary-button full" onClick={backfillRewardClaimLevels}><Gift size={18} />Backfill reward claim levels</button></AdminSection>
        <AdminSection id="events" title="Events & Check-In Security" summary={`${allEvents.length} shows · ${eventSecrets.length} secured codes`} expanded={adminSections.sections.events} onToggle={() => adminSections.toggle("events")}>
          <div className="admin-section-block" id="event-editor"><h2>{eventDraft.id ? "Edit event" : "Add event"}</h2><p className="muted">Editing details preserves the secure event code. Artist and venue IDs connect the event to FrontRow discovery pages. Changing the start or end time recalculates the check-in window.</p><form className="form" onSubmit={saveEvent}>{["artistName", "artistId", "title", "venue", "venueId", "date", "startTime", "endTime", "address", "mapUrl", "imageUrl", "notes"].map((field) => <label key={field}>{fieldLabels[field]}{field === "notes" ? <textarea value={eventDraft[field]} onChange={(event) => setEventDraft({ ...eventDraft, [field]: event.target.value })} /> : <input type={field === "date" ? "date" : field.includes("Time") ? "time" : "text"} value={eventDraft[field] || ""} onChange={(event) => setEventDraft({ ...eventDraft, [field]: event.target.value })} required={["artistName", "title", "venue", "date", "startTime", "endTime", "address"].includes(field)} />}</label>)}<label className="toggle-row"><span>Published / visible</span><input type="checkbox" checked={eventDraft.active !== false} onChange={(event) => setEventDraft({ ...eventDraft, active: event.target.checked })} /></label><button className="primary-button full" type="submit"><Save size={18} />{eventDraft.id ? "Save event changes" : "Add event"}</button>{eventDraft.id && <button className="text-button full" type="button" onClick={() => setEventDraft(blankEvent())}>Cancel editing</button>}</form></div>
          <div className="admin-section-block"><h2>Events</h2><div className="admin-list">{allEvents.map((event) => {
          const report = eventReports.find((item) => item.event.id === event.id);
          const secret = eventSecrets.find((item) => item.id === event.id);
          const code = secret?.code || "Not secured";
          return <AdminRow key={event.id} title={event.venue} subtitle={`${event.active === false ? "Hidden · " : ""}${formatDate(event.date)} · Code: ${code} · ${report?.interestedCount || 0} interested · ${report?.checkInCount || 0} check-ins`}><AdminEventAction icon={Edit3} label="Edit" title="Edit Event" onClick={() => editEvent(event)} /><AdminEventAction icon={ClipboardList} label="Copy Code" title="Copy Event Code" disabled={!secret} onClick={() => copyEventCode(event.id)} /><AdminEventAction icon={Lock} label={secret ? "Regenerate" : "Secure Code"} title={secret ? "Regenerate Event Code" : "Secure / Generate Event Code"} onClick={() => secureEventCode(event)} /><AdminEventAction icon={Trash2} label="Delete" title="Delete Event" danger onClick={async () => { if (!window.confirm(`Delete ${event.venue}? Existing reports will retain their historical records, but the event will be removed.`)) return; await db.collection("events").doc(event.id).delete(); await db.collection("eventSecrets").doc(event.id).delete(); }} /></AdminRow>;
        })}</div></div></AdminSection>
        <AdminSection id="users" title="Users / Members" summary={`${users.length} Road Crew members`} expanded={adminSections.sections.users} onToggle={() => adminSections.toggle("users")}><AdminCollection items={users} empty="No users yet." render={(item) => `${item.displayName} · ${cumulativePoints(item)} Milemarkers · ${statusForMilemarkers(cumulativePoints(item)).name} · ${item.totalCheckIns || 0} check-ins`} /></AdminSection>
        <AdminSection id="songLibrary" title="Artist Song Library" summary={`${songLibrary.length} songs across ${new Set(songLibrary.map((song) => song.artistId || APP_CONFIG.primaryArtistId)).size} artists`} expanded={adminSections.sections.songLibrary} onToggle={() => adminSections.toggle("songLibrary")}><p className="muted compact">Phase 1 foundation for setlist building, performance history, and fan-facing song archives. Songs are scoped by artistId.</p><AdminCollection items={[...songLibrary].sort((a, b) => `${a.artistName || ""}${a.title || ""}`.localeCompare(`${b.artistName || ""}${b.title || ""}`))} empty="No song library records yet. Seed starter data to create the founding catalog." render={(song) => `${song.artistName || APP_CONFIG.primaryArtistName} · ${song.title} · ${song.originalArtist || "Original artist TBD"} · ${song.key || "Key TBD"} · ${song.duration || "Runtime TBD"} · Energy ${song.energyLevel || 0}/5 · ${song.status || "Active"}`} /></AdminSection>
        <AdminSection id="milemarkerRequests" title="Milemarker Verification Requests" summary={`${pendingMilemarkerRequests.length} pending · ${reviewedMilemarkerRequests.length} reviewed`} expanded={adminSections.sections.milemarkerRequests} onToggle={() => adminSections.toggle("milemarkerRequests")}><div className="admin-section-block"><h2>Pending requests</h2><AdminCollection items={pendingMilemarkerRequests} empty="No pending verification requests." render={(claim) => `${claim.displayName || users.find((user) => user.id === claim.userId)?.displayName || "Road Crew member"} · ${claim.actionName || claim.actionType} · ${claim.milemarkers || claim.pointsAwarded || 0} Milemarkers`} action={(claim) => <div className="button-row"><button className="primary-button" onClick={() => approveMilemarkerRequest(claim)}>Approve</button><button className="secondary-button" onClick={() => denyMilemarkerRequest(claim)}>Deny</button></div>} /></div><div className="admin-section-block"><h2>Request history</h2><AdminCollection items={reviewedMilemarkerRequests} empty="No reviewed verification requests." render={(claim) => `${claim.displayName || users.find((user) => user.id === claim.userId)?.displayName || "Road Crew member"} · ${claim.actionName || claim.actionType} · ${verificationStatus(claim)}`} /></div></AdminSection>
        <AdminSection id="manualBonus" title="Manual Bonus Milemarkers" summary="Award a band bonus to a member" expanded={adminSections.sections.manualBonus} onToggle={() => adminSections.toggle("manualBonus")}><form className="form" onSubmit={addBonus}><label>User<select value={bonus.userId} onChange={(event) => setBonus({ ...bonus, userId: event.target.value })} required><option value="">Choose user</option>{users.map((user) => <option key={user.id} value={user.id}>{user.displayName}</option>)}</select></label><label>Milemarkers<input type="number" value={bonus.points} onChange={(event) => setBonus({ ...bonus, points: event.target.value })} /></label><label>Reason<input value={bonus.reason} onChange={(event) => setBonus({ ...bonus, reason: event.target.value })} /></label><button className="primary-button full" type="submit"><Plus size={18} />Add bonus Milemarkers</button></form></AdminSection>
        <AdminSection id="songRequests" title="Song Requests" summary={`${songRequests.length} requests`} expanded={adminSections.sections.songRequests} onToggle={() => adminSections.toggle("songRequests")}><AdminCollection items={songRequests} empty="No requests yet." render={(item) => `${item.song} · ${item.eventTitle} · ${item.userDisplayName}${item.played ? " · Played" : ""}`} action={(item) => !item.played && <button className="secondary-button" onClick={() => markRequestPlayed(item)}>Played</button>} /></AdminSection>
        <AdminSection id="checkIns" title="Check-Ins" summary={`${checkIns.length} recorded`} expanded={adminSections.sections.checkIns} onToggle={() => adminSections.toggle("checkIns")}><AdminCollection items={checkIns} empty="No check-ins yet." render={(item) => `${item.userDisplayName} at ${item.eventTitle}`} /></AdminSection>
        <AdminSection id="referrals" title="Referrals" summary={`${referrals.length} referral signups`} expanded={adminSections.sections.referrals} onToggle={() => adminSections.toggle("referrals")}><AdminCollection items={referrals} empty="No referrals yet." render={(item) => `${item.referralCode} · +${item.pointsAwarded} Milemarkers`} /></AdminSection>
        <AdminSection id="leaderboard" title="Leaderboard" summary={`${users.length} members ranked`} expanded={adminSections.sections.leaderboard} onToggle={() => adminSections.toggle("leaderboard")}><AdminCollection items={[...users].sort((a, b) => cumulativePoints(b) - cumulativePoints(a))} empty="No users yet." render={(item) => `${item.displayName} · ${cumulativePoints(item)} Milemarkers · ${statusForMilemarkers(cumulativePoints(item)).name}`} /></AdminSection>
        <AdminSection id="polls" title="Polls" summary={`${polls.length} polls · ${polls.filter((poll) => poll.active).length} open`} expanded={adminSections.sections.polls} onToggle={() => adminSections.toggle("polls")}><div className="admin-section-block"><h2>Add or edit poll</h2><form className="form" onSubmit={savePoll}><label>Question<input value={pollDraft.question} onChange={(event) => setPollDraft({ ...pollDraft, question: event.target.value })} required /></label><label>Options<textarea value={pollDraft.options} onChange={(event) => setPollDraft({ ...pollDraft, options: event.target.value })} required /></label><label className="toggle-row"><span>Poll is open</span><input type="checkbox" checked={pollDraft.active !== false} onChange={(event) => setPollDraft({ ...pollDraft, active: event.target.checked })} /></label><button className="secondary-button full" type="submit"><Vote size={18} />Save poll</button>{pollDraft.id && <button className="text-button full" type="button" onClick={() => setPollDraft({ id: "", question: "", options: "Option one\nOption two", active: true })}>Cancel editing</button>}</form></div><div className="admin-section-block"><h2>Polls & results</h2><div className="admin-list">{polls.map((poll) => {
          const votes = pollVotes.filter((vote) => vote.pollId === poll.id);
          const result = pollResultSummary(poll, votes);
          const results = result.counts.map((item) => `${item.option}: ${item.count}`).join(" · ");
          const bonusClaims = predictionBonusClaims(allActionClaims, poll.id);
          const winningLabel = result.isTie ? "Tie - no winner determined" : result.winningOption || "Not determined";
          return <AdminRow key={poll.id} title={poll.question} subtitle={`${poll.active ? "Open" : "Closed"} · Total votes: ${result.totalVotes} · Winning option: ${winningLabel} · Prediction Bonuses: ${bonusClaims.length} issued / ${bonusClaims.length * POINTS.pollPredictionBonus} Milemarkers${results ? ` · ${results}` : ""}`}><button className="icon-button" title="Edit poll" onClick={() => setPollDraft({ ...poll, options: (poll.options || []).join("\n") })}><Edit3 size={16} /></button><button className="icon-button" title={poll.active ? "Close poll and award Prediction Bonuses" : "Reopen poll"} onClick={() => togglePoll(poll)}>{poll.active ? <Lock size={16} /> : <Vote size={16} />}</button><button className="icon-button danger" title="Delete poll" onClick={() => db.collection("polls").doc(poll.id).delete()}><Trash2 size={16} /></button></AdminRow>;
        })}</div></div></AdminSection>
        <AdminSection id="announcements" title="Announcements" summary={`${allAnnouncements.length} posts`} expanded={adminSections.sections.announcements} onToggle={() => adminSections.toggle("announcements")}><div className="admin-section-block"><h2>Add or edit announcement</h2><form className="form" onSubmit={saveAnnouncement}><label>Title<input value={announcement.title} onChange={(event) => setAnnouncement({ ...announcement, title: event.target.value })} required /></label><label>Message<textarea value={announcement.body} onChange={(event) => setAnnouncement({ ...announcement, body: event.target.value })} required /></label><label className="toggle-row"><span>Published</span><input type="checkbox" checked={announcement.published !== false} onChange={(event) => setAnnouncement({ ...announcement, published: event.target.checked })} /></label><button className="primary-button full" type="submit"><Megaphone size={18} />Save announcement</button>{announcement.id && <button className="text-button full" type="button" onClick={() => setAnnouncement({ id: "", title: "", body: "", published: true })}>Cancel editing</button>}</form></div><div className="admin-section-block"><h2>Posts</h2><div className="admin-list">{allAnnouncements.map((item) => <AdminRow key={item.id} title={item.title} subtitle={item.published === false ? "Draft / hidden" : "Published"}><button className="icon-button" title="Edit announcement" onClick={() => setAnnouncement(item)}><Edit3 size={16} /></button><button className="icon-button" title={item.published === false ? "Publish" : "Hide"} onClick={() => db.collection("announcements").doc(item.id).update({ published: item.published === false, updatedAt: FieldValue.serverTimestamp() })}>{item.published === false ? <Megaphone size={16} /> : <Lock size={16} />}</button><button className="icon-button danger" title="Delete announcement" onClick={() => db.collection("announcements").doc(item.id).delete()}><Trash2 size={16} /></button></AdminRow>)}</div></div></AdminSection>
        <AdminSection id="tips" title="Tip Jar Links" summary="Edit Venmo, PayPal, and Cash App links" expanded={adminSections.sections.tips} onToggle={() => adminSections.toggle("tips")}><form className="form" onSubmit={async (event) => { event.preventDefault(); await db.collection("tips").doc("tipJar").set(tips, { merge: true }); setToast("Tip links saved."); }}><label>Venmo<input value={tips.venmo} onChange={(event) => setTips({ ...tips, venmo: event.target.value })} /></label><label>PayPal<input value={tips.paypal} onChange={(event) => setTips({ ...tips, paypal: event.target.value })} /></label><label>Cash App<input value={tips.cashApp} onChange={(event) => setTips({ ...tips, cashApp: event.target.value })} /></label><button className="secondary-button full" type="submit"><Save size={18} />Save tip links</button></form></AdminSection>
        <AdminSection id="rewards" title="Reward Claims" summary={`${pendingRewards.length} pending · ${rewards.length} total`} expanded={adminSections.sections.rewards} onToggle={() => adminSections.toggle("rewards")}><div className="admin-section-block"><h2>Reward claims</h2><AdminCollection items={rewards} empty="No reward claims yet." render={(item) => `${item.userDisplayName} · ${item.rewardName} · ${rewardClaimStatusName(item)} · ${item.userMilemarkersAtClaim ?? item.milemarkersAtClaim ?? item.pointsAtClaim ?? "—"} Milemarkers at claim · ${item.status || "pending"}`} action={(item) => !["fulfilled", "denied"].includes(item.status) && <div className="button-row"><button className="secondary-button" onClick={() => markRewardFulfilled(item)}>Fulfill</button><button className="secondary-button" onClick={() => denyReward(item)}>Deny</button></div>} /></div><div className="admin-section-block"><h2>Reward catalog</h2><AdminCollection items={seedRewardCatalog} empty="Seed starter data to create rewards." render={(item) => `${item.name} · ${item.requiredMilemarkers} Milemarkers · ${STATUS_LEVELS.find((status) => status.id === item.statusId)?.name || "Legacy status"} Rewards`} /></div></AdminSection>
      </div>
      <EventReports reports={eventReports} expanded={adminSections.sections.reports} onToggle={() => adminSections.toggle("reports")} />
    </section>
  );
}

function SelectedEventPanel({ event }) {
  return <section className="selected-event"><span className="mini-date"><strong>{new Date(`${event.date}T12:00:00`).getDate()}</strong>{new Date(`${event.date}T12:00:00`).toLocaleString("en-US", { month: "short" })}</span><span><strong>{event.venue}</strong><small>{formatDate(event.date)} · {formatTime(event.startTime)}</small></span></section>;
}

function PageTitle({ icon: Icon, eyebrow, title }) {
  return <div className="page-title"><Icon size={25} /><span><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></span></div>;
}

function EmptyState({ title, body }) {
  return <section className="page"><div className="panel empty-state"><ClipboardList size={32} /><h1>{title}</h1><p className="muted">{body}</p></div></section>;
}

function AdminRow({ title, subtitle, children }) {
  return <div className="admin-row"><span><strong>{title}</strong><small>{subtitle}</small></span><div>{children}</div></div>;
}

function AdminEventAction({ icon: Icon, label, title, danger = false, disabled = false, onClick }) {
  return <button className={classNames("admin-event-action", danger && "danger")} title={title} aria-label={title} disabled={disabled} onClick={onClick}><Icon size={16} /><span>{label}</span></button>;
}

function AdminCollection({ items, empty, render, action }) {
  if (!items.length) return <p className="muted">{empty}</p>;
  return <div className="admin-list">{items.map((item) => <AdminRow key={item.id} title={render(item)} subtitle={item.email || item.createdAt?.toDate?.().toLocaleString?.() || ""}>{action?.(item)}</AdminRow>)}</div>;
}

const fieldLabels = {
  artistName: "Artist name",
  artistId: "Artist ID",
  title: "Event title",
  venue: "Venue",
  venueId: "Venue ID",
  date: "Date",
  startTime: "Start time",
  endTime: "End time",
  address: "Address",
  mapUrl: "Map link",
  imageUrl: "Image / background URL",
  notes: "Notes",
};

function blankEvent() {
  return { id: "", artistId: APP_CONFIG.primaryArtistId, artistName: APP_CONFIG.primaryArtistName, title: "", venue: "", venueId: "", date: "", startTime: "", endTime: "", address: "", mapUrl: "", imageUrl: "", notes: "", active: true };
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
