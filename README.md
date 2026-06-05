# Endless Detour Road Crew

Mobile-first React PWA MVP for the Endless Detour fan community.

## Features

- Home screen with band branding, logo placeholder, next show, announcements, and social links.
- Upcoming events seeded from `https://endlessdetourband.com/events`.
- Event detail pages with venue, time, address, map link, event code, and "I'm Going".
- Show check-ins using geolocation or a manual event code.
- Milemarker Rewards Program with points, check-ins, and reward tiers.
- Song request form saved locally for admin review.
- Polls with one vote per browser.
- PWA manifest and service worker with push notification placeholders.
- Admin dashboard for events, check-ins, requests, polls, and announcements.
- Placeholder admin PIN: `detour`.

## Run Locally

```bash
npm run dev
```

Open `http://127.0.0.1:5173`.

If your machine does not have npm available, run the server directly:

```bash
node server.mjs
```

Open `http://127.0.0.1:5173`.

If that port is already in use:

```bash
PORT=5175 node server.mjs
```

## MVP Storage

This version uses browser `localStorage`, which keeps setup simple and makes the app easy to demo. The store is intentionally shaped so it can later move to Firebase, Supabase, or another backend with minimal UI changes.

## Event Data

The first event list was manually seeded from the public Endless Detour events page. Use the admin dashboard to add, edit, or delete events during the MVP phase.
