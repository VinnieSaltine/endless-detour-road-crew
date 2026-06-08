# FrontRow

Mobile-first Firebase-backed PWA MVP for **FrontRow**, a live entertainment community platform. **Road Crew** is the loyalty and engagement program inside FrontRow, powering Milemarkers, status, badges, rewards, referrals, check-ins, achievements, and loyalty history.

FrontRow currently ships with Endless Detour as the founding artist community. The data model and UI are structured to support additional artists, venues, events, and Road Crew programs over time.

## FrontRow Brand

FrontRow is the primary application brand. Road Crew remains the loyalty, rewards, status, check-in, and engagement system inside FrontRow. Endless Detour appears as the founding artist community and event host rather than the platform brand.

The shared FrontRow logo, concert hero, and installed-app icons live in `public/assets/brand` and `public/icons`. The home and authentication experiences use the FrontRow positioning:

- The platform where artists earn loyalties
- Connect. Engage. Reward. Grow Together.
- Build Loyalties
- Drive Attendance
- Own the Relationship

## Product Hierarchy

```text
Platform: FrontRow
Engagement Program: Road Crew
Founding Artist Community: Endless Detour
```

FrontRow focuses on discovery, events, community, and member identity. Road Crew focuses on rewards, recognition, loyalty, and participation.

## Ownership / Intellectual Property

FrontRow platform software, Road Crew engagement workflows, source code, app structure, loyalty system, rewards logic, event reporting, user engagement model, and related documentation are owned by Hallowfield Building Group, LLC.

Endless Detour name, logo, likenesses, photographs, and band-specific branding remain the property of Endless Detour or their respective rights holders and are used in this app by permission.

This app may be adapted, rebranded, licensed, or commercialized as a broader fan engagement platform.

## What This App Uses

- Firebase Hosting for the static PWA.
- Firebase Authentication for FrontRow member accounts.
- Cloud Firestore for artists, venues, events, follows, check-ins, rewards, song requests, polls, referrals, announcements, tips, and admin data.
- Firebase Functions foundation for trusted, idempotent Milemarker awards as the MVP moves reward logic out of the browser.
- Browser storage only for tiny interface conveniences. Fan and admin data lives in Firebase.

## Updating The App Version

The visible app version is stored in one place:

```text
public/src/main.js > APP_CONFIG.version
```

Change that value for future releases, such as `v1.4.0` or `v2.0.0`. The footer and Admin dashboard update automatically.

## Firebase Project

This folder is already connected to:

```text
endless-detour-road-crew
```

The deployable site lives in the `public/` folder.

## Firebase Collections

The app reads and writes these Firestore collections:

- `users`
- `communities`
- `artists`
- `venues`
- `follows`
- `roadCrewProfiles`
- `milemarkerLedger`
- `achievementDefinitions`
- `userAchievements`
- `roleAssignments`
- `events`
- `eventSecrets`
- `eventInterest`
- `checkIns`
- `songRequests`
- `polls`
- `pollVotes`
- `announcements`
- `rewards`
- `rewardCatalog`
- `referrals`
- `tips`
- `manualBonuses`
- `actionClaims`
- `notifications`

Tip jar links live in the document `tips/tipJar`.

## FrontRow Architecture And Compatibility

`users` remains the backward-compatible FrontRow identity record used by the existing app. New platform records separate identity, community membership, and loyalty activity:

- `communities` defines artist or venue communities. `community-endless-detour` is the founding community.
- `roadCrewProfiles/{userId}` stores the member's Road Crew enrollment, cumulative Milemarkers, status, and check-in summary.
- `milemarkerLedger` stores an immutable-style history entry for each award, with platform, program, community, artist, venue, and event context where available.
- `achievementDefinitions` supports platform-wide, program-wide, and artist-specific achievements.
- `userAchievements` stores earned achievement records.
- `roleAssignments` is the future home for scoped platform, artist, venue, and community administration.

The app currently dual-writes existing user totals and the new Road Crew profile/ledger records. This preserves current screens and data while allowing later clients and reporting tools to use the separated FrontRow model.

Events, check-ins, interest records, song requests, and Milemarker ledger entries include scope identifiers where available. Existing Endless Detour records without scope fields remain compatible and default to the founding community.

## Additive FrontRow Migration

The migration tool is dry-run-first and does not delete or reset existing data. It backfills the founding community, Road Crew profiles, baseline Milemarker ledger entries, event scope fields, and reward claim status levels.

1. Install the migration dependency:

   ```bash
   npm install
   ```

2. Sign in with the Firebase CLI and select the project:

   ```bash
   npx firebase-tools login
   npx firebase-tools use endless-detour-road-crew
   ```

3. Preview the migration without changing Firestore:

   ```bash
   npm run migrate:frontrow
   ```

4. Review the counts, then apply the additive migration:

   ```bash
   npm run migrate:frontrow:apply
   ```

The Admin dashboard's **Backfill first 100 members** action also creates compatible Road Crew profile and baseline ledger records for a smaller in-app migration path.

## Secure Event Check-In Windows

Check-in is available only during each event's allowed window:

- Opens 2 hours before the event start time
- Closes 30 minutes after the event end time

Before the window opens, fans see **Check-in opens 2 hours before showtime.** After it closes, fans see **Check-in for this show has closed.** Both location and manual-code check-ins are disabled outside the window.

Firestore rules independently compare the server request time with the event's stored `checkInOpensAt` and `checkInClosesAt` timestamps. This prevents a modified client from writing an early or late check-in. New check-ins also use one deterministic document per member and event to prevent duplicate check-ins.

Manual event codes are randomly generated six-character uppercase codes using letters and numbers that avoid confusing characters. Plaintext codes and their one-way hashes live only in the admin-readable `eventSecrets` collection. Fan-facing event pages never display the code, and Firestore rules compare submitted code hashes against the protected secret document before accepting manual check-ins.

Admins can copy or regenerate an event code from the Events section of the Admin dashboard. Regenerating immediately invalidates the previous manual code.

Event-detail editing is separate from code security management. **Edit Event** opens the existing event form for title, venue, date, times, location, description, image URL, and published visibility. Saving normal edits preserves the event's admin-only code and secret document. Changing show times recalculates the allowed check-in window. Use **Secure Code**, **Copy Code**, or **Regenerate** only when managing the manual check-in code.

For existing events, run **Secure all event codes & windows** once from Admin > First-time setup. This removes legacy plaintext codes from public event documents, creates new random admin-only codes, stores secure check-in windows, and enables Firestore timing enforcement.

## Event Interest And Check-Ins

Logged-in fans can mark **I'm Interested** on an upcoming event card or event detail page. Interest is a forecast of planned attendance and can be toggled off at any time. It does not award Milemarkers and does not count as attendance.

**Check-In** remains separate and is proof that a member attended the show. A successful check-in awards the configured show check-in Milemarkers.

Interest records live in `eventInterest`. The app uses one deterministic record per user and event to prevent duplicate interest entries.

## Event Reports

The Admin dashboard includes screenshot-friendly **Event Reports** for every event. Reports are available near the bottom of the dashboard inside the collapsible **Forecast vs Attendance** section, which is collapsed by default to keep daily admin tools easy to reach. Expand it to compare expected turnout with actual Road Crew activity:

- Interested members and interested count
- Check-ins
- New user signups on the event date
- Song requests associated with the event
- Poll votes associated with the event, when a poll vote contains an `eventId`
- Referrals created on the event date
- Reward claims created on the event date

Admins can use **Download CSV** to export these report fields for spreadsheets, venue follow-ups, and booking conversations. For this MVP, new signups, referrals, and reward claims are associated with an event by matching their creation date to the event date. A future event-specific signup source can replace that date-based estimate.

## FrontRow Navigation

The platform navigation is:

```text
FrontRow
├── Home
├── Artists
├── Venues
├── Events
├── Community
├── Profile
└── Road Crew
```

The mobile bottom navigation keeps the highest-use destinations within easy reach: Home, Events, Community, Profile, and Road Crew. Artists and Venues remain accessible from the top platform navigation and Home.

## Multi-Artist Data Model

FrontRow discovery uses public `artists` and `venues` collections. Member follows use owner-scoped documents in `follows`, with `entityType`, `entityId`, and `entityName`.

Events support `artistId`, `artistName`, and `venueId`. New check-ins, event-interest records, and song requests preserve that context so future reporting can work across the platform, by artist, or by venue. Existing Endless Detour records without these fields remain compatible and default to the founding artist community.

Admins can seed the founding artist and venue directory with **Seed starter data**. The event editor includes artist and venue identifiers so additional communities can use the same event workflow.

## Road Crew Milemarkers System

Milemarkers are cumulative. They are never spent or deducted when a member claims a reward. One Milemarker total determines Road Crew status, leaderboard ranking, merchandise eligibility, and experience eligibility.

Fan-facing screens consistently use **Milemarkers** rather than points. Existing Firestore field names such as `totalPoints`, `lifetimePoints`, and `pointsAwarded` remain for backward compatibility.

Members earn:

- Create FrontRow account: 25 Milemarkers
- Connect on Facebook: 50 Milemarkers
- Connect on Instagram: 25 Milemarkers
- Refer a friend: 15 Milemarkers
- Show check-in: 25 Milemarkers
- Song request: 2 Milemarkers, once per show
- Poll participation: 2 Milemarkers
- Road Crew Prediction Bonus: 10 Milemarkers after a poll closes, awarded to members who voted for the winning option
- Leave a tip: 1 Milemarker per $1 after band confirmation
- Band bonus: variable

## Automatic And Verified Awards

Activities the app can verify award Milemarkers immediately:

- Create FrontRow account
- Check in at a show
- Submit a song request, limited to once per show
- Vote in a poll for a 2-Milemarker participation reward
- Win a Road Crew Prediction Bonus after a poll closes and the winning option is determined
- Referral signup

Poll Prediction Bonuses are awarded only after an admin closes a poll. The app determines the winning option, creates a `poll_prediction_bonus` history entry, sends an in-app notification that is eligible for future push delivery, and awards +10 Milemarkers to each member who voted for that winning option. Bonus documents use deterministic IDs so recalculating results or refreshing the page does not create duplicate awards.

Activities outside the app create a pending request and award nothing until an admin approves them:

- Facebook Follow
- Instagram Follow
- Tip Jar Contribution, at 1 Milemarker per confirmed $1
- Future promotional activities or bonus campaigns

Verification requests live in `actionClaims` with `userId`, `displayName`, `actionType`, `milemarkers`, `status`, `submittedAt`, `approvedAt`, and `approvedBy`. Supported statuses are `pending`, `approved`, and `denied`. Existing legacy action claims without a status are treated as already approved.

Firestore rules allow members to create pending verification requests, while only admins can update those requests to approved or denied. Admin approval awards the requested Milemarkers, updates the member's status and leaderboard total, and records the approval timestamp and approving admin.

For compatibility with existing members, the app uses the greatest value found in `lifetimePoints`, `totalPoints`, or `points` as the member's Milemarker total. New reward claims record `milemarkersAtClaim` and the compatible `pointsAtClaim` field, but never reduce a member's total.

## Status And Reward Unlocks

Status and rewards use the same Milemarker levels:

- **Road Crew Rookie, 0-99 Milemarkers:** Getting started toward the Road Crew Welcome Pack
- **New Traveler, 100-149 Milemarkers:** Road Crew Welcome Pack
- **Roadie, 150-299 Milemarkers:** Endless Detour T-Shirt at 150, Engraved Pint Glass at 200, and Trucker Hat at 250
- **Crew Member, 300-449 Milemarkers:** Road Crew VIP Badge & Lanyard, Attend a Rehearsal, Karaoke Experience
- **Road Captain, 450-649 Milemarkers:** Pre-Show Dinner with the Band, Signed Pickguard
- **Endless Legend, 650+ Milemarkers:** Signed Drumhead and Future Legend Exclusives

The **Road Crew Welcome Pack** unlocks at 100 Milemarkers as one complete starter kit. It includes a Koozie, Coaster, Keychain, Guitar Pick, Car Magnet, Sticker Pack, and a Founding Member Wooden Token when the member is eligible.

Roadie rewards unlock and may be claimed individually at 50-Milemarker increments. Claiming the T-Shirt at 150 does not block the Engraved Pint Glass at 200 or the Trucker Hat at 250.

Members may claim **one reward per status level** for the higher-level Crew Member, Road Captain, and Endless Legend experience rewards. Reaching each of those levels unlocks one new choice.

Claims remain pending until an admin fulfills or denies them, and claiming never deducts Milemarkers. New claim documents store `rewardName`, `requiredMilemarkers`, `statusLevel`, `userMilemarkersAtClaim`, compatible Milemarker fields, claim status, and timestamps. Existing claims remain valid; the app infers their status level from reward ID/name, status metadata, or legacy tier metadata.

Admins can run **Backfill reward claim levels** from the Admin dashboard to write inferred `statusLevel` and `statusName` values onto existing claim documents. Legacy New Traveler item claims are recognized as a Welcome Pack claim. Legacy Roadie claims block only the exact Roadie reward claimed, while higher-level claims keep the one-per-status rule.

## How Members Learn To Earn

The app includes a dedicated **How to Earn Milemarkers** page linked from:

- Home
- Rewards Store
- User Profile / More

It shows every earning opportunity, its Milemarker value, the member's next recommended action, current Milemarkers, current status, next status, and progress toward the next status. A prominent earning banner appears on both Home and Rewards.

## FrontRow Profile

Logged-in members can open **Profile** from the bottom navigation. The private FrontRow Profile is the primary identity dashboard and shows:

- Display name, email, member-since date, and Founding Member number
- Current Milemarkers, Road Crew status, next status, and progress
- Artists followed and venues visited
- Public leaderboard rank when the member has not opted out
- Fan stats for check-ins, interested shows, referrals, requests, polls, rewards, and verification requests
- Reward unlock and claim status
- Combined show history, with Checked In taking priority over Interested
- Earned and locked Road Crew achievements

Profile uses the existing user, event, check-in, interest, referral, song request, poll vote, reward, leaderboard, and action-claim data. It does not create duplicate member records or expose another member's private details.

## Leaderboard

The logged-in Leaderboard includes public members who have not opted out. Members can compare Top Milemarkers, Most Check-Ins, Most Referrals, and Founding Members. Rows show display name, Milemarkers or the selected metric, Road Crew status, and Founding Member number when available.

Facebook and Instagram follows use one-time verification requests. Tip contributions may be submitted again after the previous tip request has been reviewed.

## One-Time Firebase Setup

### 1. Install Node.js

Download the LTS version from:

```text
https://nodejs.org/
```

### 2. Open this project in Terminal

```bash
cd "/Users/mattcaffrey/Documents/Endless Detour App"
```

### 3. Install the Firebase CLI

```bash
npm install -g firebase-tools
```

If global install gives you permission trouble, you can use the included `npm run ...` scripts, which call Firebase through `npx`.

### 4. Sign in to Firebase

```bash
firebase login
```

A browser window opens. Sign in with the Google account that owns the `endless-detour-road-crew` Firebase project.

### 5. Add your Firebase web app config

Go to:

```text
Firebase Console > endless-detour-road-crew > Project settings > General
```

If there is no web app yet:

1. Scroll to **Your apps**.
2. Click the web icon: `</>`.
3. Register the app. A good nickname is `FrontRow Web`.
4. Firebase will show a config object.

Open:

```text
public/firebase-config.js
```

Replace the placeholder values:

```js
window.firebaseConfig = {
  apiKey: "PASTE_FIREBASE_API_KEY",
  authDomain: "endless-detour-road-crew.firebaseapp.com",
  projectId: "endless-detour-road-crew",
  storageBucket: "endless-detour-road-crew.firebasestorage.app",
  messagingSenderId: "PASTE_MESSAGING_SENDER_ID",
  appId: "PASTE_FIREBASE_APP_ID",
};
```

The Firebase web config is safe to include in a public web app. Security comes from Firebase Authentication and Firestore rules.

### 6. Enable Authentication

Go to:

```text
Firebase Console > Authentication > Get started > Sign-in method
```

Enable:

- **Email/Password**
- **Google** if you want Google login

For Google login, Firebase may ask for a support email. Choose your account or band email.

### 7. Enable Firestore

Go to:

```text
Firebase Console > Firestore Database > Create database
```

Choose:

- Start in production mode
- A location close to your users, such as a US region

The rules in `firestore.rules` will be deployed from this project.

### 8. Deploy Firestore rules and Hosting

```bash
npm run deploy
```

This deploys:

- Firebase Hosting
- Firestore security rules
- Firestore indexes file

The existing static app does not require Functions to load. To enable the trusted Milemarker award foundation separately:

```bash
cd functions
npm install
cd ..
npm run deploy:functions
```

Deploying Functions may require enabling the Blaze billing plan in Firebase. The callable `awardMilemarkers` function currently accepts admin-authorized awards, prevents duplicate ledger entries by reference ID, and updates the legacy user total plus the new Road Crew profile and ledger in one transaction.

Your live site should be:

```text
https://endless-detour-road-crew.web.app
```

Firebase also provides:

```text
https://endless-detour-road-crew.firebaseapp.com
```

## First Admin Setup

1. Open the live app.
2. Sign up with your own email and password.
3. Go to Firebase Console:

```text
Firestore Database > users
```

4. Open your user document.
5. Add or edit this field:

```text
isAdmin: true
```

Use Boolean `true`, not the text `"true"`.

6. Reload the app.
7. Open Admin.
8. The Admin dashboard opens automatically for accounts with `isAdmin: true`. There is no separate PIN.
9. Click **Seed starter data** to merge the current events, polls, announcements, status-based rewards, and editable tip links into Firestore.
10. Click **Secure all event codes & windows** once to replace legacy codes, create admin-only event secrets, and enable check-in timing enforcement for every existing event.
11. If accounts already exist, click **Backfill first 100 members** to assign Founding Member status, member numbers, unified Road Crew statuses, and the one-time 25-Milemarker account bonus.
12. Click **Backfill reward claim levels** to add status metadata to older reward claims.

## Running Locally

After Firebase config is filled in:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:5175
```

## Day-To-Day Admin Tasks

From the Admin dashboard:

The Admin dashboard uses accessible collapsible sections to keep desktop and mobile navigation compact. Events stays open by default, while sections with pending reward claims or Milemarker verification requests open automatically. Other sections start collapsed, and expanded/collapsed preferences are remembered for the current browser session.

- Add and edit events
- Edit event details independently from secure-code actions
- Copy or regenerate admin-only manual check-in codes
- Run **Secure all event codes & windows** after deployment to migrate existing events
- Compare interested forecasts with actual check-ins in Event Reports
- View interested FrontRow members for each event
- Download Event Reports as CSV for venue and booking conversations
- Create, edit, publish/hide, and delete announcements
- Create, edit, close/reopen, delete, and view results for polls, including total votes, winning option, and Prediction Bonus awards issued
- View users
- View check-ins
- View song requests
- View referrals
- View leaderboard
- Add manual bonus Milemarkers
- Approve or deny pending Milemarker verification requests
- Mark rewards as fulfilled
- Edit tip jar links

## Push Notifications

The service worker still includes notification placeholders, but real push notifications are not enabled yet. For a later version, add Firebase Cloud Messaging and a permission prompt flow.

## Important MVP Notes

- This is a practical transitional MVP with an additive FrontRow data model.
- Admin writes are protected by Firestore rules using `users/{uid}.isAdmin == true`.
- Admin access relies on Firebase Authentication, Firestore rules, and `users/{uid}.isAdmin == true`.
- Existing verified client actions dual-write legacy totals and the new Road Crew profile/ledger model for compatibility.
- A trusted, idempotent `awardMilemarkers` Cloud Function foundation is included. Move every automatic client award through trusted Functions before treating the loyalty system as production-hardened.
