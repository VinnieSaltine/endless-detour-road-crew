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

const CalendarDays = makeIcon(["M8 2v4", "M16 2v4", "M3 10h18", "M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z", "M8 14h.01", "M12 14h.01", "M16 14h.01", "M8 18h.01", "M12 18h.01"]);
const Check = makeIcon(["M20 6 9 17l-5-5"]);
const ClipboardList = makeIcon(["M9 5h6", "M9 3h6v4H9z", "M7 5H5v16h14V5h-2", "M8 12h.01", "M11 12h5", "M8 16h.01", "M11 16h5"]);
const Edit3 = makeIcon(["M12 20h9", "M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"]);
const ExternalLink = makeIcon(["M15 3h6v6", "M10 14 21 3", "M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"]);
const Facebook = makeIcon(["M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"]);
const Gauge = makeIcon(["M4 14a8 8 0 1 1 16 0", "M12 14l4-4", "M8 18h8"]);
const Gift = makeIcon(["M20 12v10H4V12", "M2 7h20v5H2z", "M12 22V7", "M12 7H8a2.5 2.5 0 1 1 2.5-2.5C10.5 7 12 7 12 7Z", "M12 7h4a2.5 2.5 0 1 0-2.5-2.5C13.5 7 12 7 12 7Z"]);
const Home = makeIcon(["M3 10.5 12 3l9 7.5", "M5 10v11h14V10", "M9 21v-6h6v6"]);
const Instagram = makeIcon(["M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z", "M16 11.37A4 4 0 1 1 12.63 8", "M17.5 6.5h.01"]);
const Lock = makeIcon(["M6 10V8a6 6 0 0 1 12 0v2", "M5 10h14v11H5z"]);
const MapPin = makeIcon(["M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z", "M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"]);
const Megaphone = makeIcon(["M3 11v3a2 2 0 0 0 2 2h2l4 4v-4l8-3V7l-8-3v4H5a2 2 0 0 0-2 2Z", "M19 8a4 4 0 0 1 0 4"]);
const Music2 = makeIcon(["M9 18V5l12-2v13", "M9 18a3 3 0 1 1-2-2.83", "M21 16a3 3 0 1 1-2-2.83"]);
const Plus = makeIcon(["M12 5v14", "M5 12h14"]);
const Radio = makeIcon(["M4.9 19.1a10 10 0 0 1 0-14.2", "M7.8 16.2a6 6 0 0 1 0-8.4", "M10.6 13.4a2 2 0 1 1 2.8-2.8", "M13 13l5 7"]);
const Save = makeIcon(["M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z", "M17 21v-8H7v8", "M7 3v5h8"]);
const Shield = makeIcon(["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"]);
const Trash2 = makeIcon(["M3 6h18", "M8 6V4h8v2", "M6 6l1 15h10l1-15", "M10 11v6", "M14 11v6"]);
const Trophy = makeIcon(["M8 21h8", "M12 17v4", "M7 4h10v6a5 5 0 0 1-10 0Z", "M7 6H4a3 3 0 0 0 3 3", "M17 6h3a3 3 0 0 1-3 3"]);
const Users = makeIcon(["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z", "M22 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"]);
const Vote = makeIcon(["M9 12l2 2 4-4", "M5 4h14v16H5z", "M3 20h18"]);

const EVENT_SOURCE = "https://endlessdetourband.com/events";
const ADMIN_PIN = "detour";
const POINTS_PER_CHECKIN = 25;

const seedEvents = [
  {
    id: "stove-tap-2026-03-14",
    title: "Endless Detour Band at The Stove & Tap",
    venue: "Stove & Tap",
    date: "2026-03-14",
    startTime: "16:00",
    endTime: "18:00",
    address: "329 W Main St, Lansdale, PA 19446",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Stove%20%26%20Tap%20329%20W%20Main%20St%20Lansdale%20PA%2019446",
    code: "STOVE314",
    notes: "Endless Detour at the Stove & Tap.",
  },
  {
    id: "dutch-tavern-2026-03-21",
    title: "Endless Detour Band at the Dutch Tavern",
    venue: "The Dutch Tavern",
    date: "2026-03-21",
    startTime: "19:00",
    endTime: "22:00",
    address: "1264 Bridge Rd, Schwenksville, PA 19473",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=The%20Dutch%20Tavern%201264%20Bridge%20Rd%20Schwenksville%20PA%2019473",
    code: "DUTCH321",
    notes: "A night out with the Road Crew.",
  },
  {
    id: "villa-capri-2026-03-28",
    title: "Endless Detour Band at Villa Capri",
    venue: "Villa Capri",
    date: "2026-03-28",
    startTime: "20:00",
    endTime: "23:00",
    address: "51 West Court Street, Doylestown, PA",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Villa%20Capri%2051%20West%20Court%20Street%20Doylestown%20PA",
    code: "CAPRI328",
    notes: "Saturday night stop in Doylestown.",
  },
  {
    id: "chambers-19-2026-04-11",
    title: "Endless Detour Band at Chambers 19",
    venue: "Chambers 19",
    date: "2026-04-11",
    startTime: "18:00",
    endTime: "21:00",
    address: "Doylestown, PA 18901",
    mapUrl: "https://www.chambers19.com/",
    code: "CHAMBERS411",
    notes: "Dinner, drinks, and live covers.",
  },
  {
    id: "stray-dog-2026-04-25",
    title: "Endless Detour Band at The Stray Dog Tavern",
    venue: "Stray Dog Tavern",
    date: "2026-04-25",
    startTime: "19:00",
    endTime: "23:00",
    address: "Skippack, PA",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Stray%20Dog%20Tavern%20Skippack%20PA",
    code: "STRAY425",
    notes: "Big Milemarker night in Skippack.",
  },
];

const seedPolls = [
  {
    id: "next-song",
    question: "What song should Endless Detour add next?",
    options: ["Don't Stop Believin'", "Mr. Brightside", "You Shook Me All Night Long", "Everlong"],
    active: true,
    votes: {},
  },
];

const seedAnnouncements = [
  {
    id: "welcome",
    title: "Welcome to the Road Crew",
    body: "Check in at shows, request songs, vote in polls, and collect Milemarker points.",
    date: "2026-06-05",
  },
];

function loadStore() {
  const stored = localStorage.getItem("roadCrewStore");
  if (stored) return JSON.parse(stored);
  return {
    events: seedEvents,
    checkins: [],
    requests: [],
    polls: seedPolls,
    announcements: seedAnnouncements,
    fan: { name: "", going: [] },
  };
}

function saveStore(store) {
  localStorage.setItem("roadCrewStore", JSON.stringify(store));
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

function formatTime(time) {
  if (!time) return "";
  const [hour, minute] = time.split(":");
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(2026, 0, 1, Number(hour), Number(minute)));
}

function classNames(...names) {
  return names.filter(Boolean).join(" ");
}

function getTier(points) {
  if (points >= 300) return { name: "Milemarker VIP", detail: "Front-row energy. You are the highway legend." };
  if (points >= 175) return { name: "Detour Regular", detail: "You know the route and the good choruses." };
  if (points >= 75) return { name: "Road Crew", detail: "Officially part of the traveling noise." };
  return { name: "First Stop", detail: "Your first stamp on the map." };
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

function navigate(hash) {
  window.location.hash = hash;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function App() {
  const [store, setStore] = useState(loadStore);
  const [toast, setToast] = useState("");
  const route = useHashRoute();

  useEffect(() => saveStore(store), [store]);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js");
    }
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const id = setTimeout(() => setToast(""), 3000);
    return () => clearTimeout(id);
  }, [toast]);

  const events = useMemo(
    () => [...store.events].sort((a, b) => `${a.date}${a.startTime}`.localeCompare(`${b.date}${b.startTime}`)),
    [store.events],
  );
  const nextEvent = events.find((event) => isUpcoming(event)) || events[0];
  const nextEventIsUpcoming = Boolean(nextEvent && isUpcoming(nextEvent));
  const stats = useMemo(() => {
    const totalCheckins = store.checkins.length;
    const points = totalCheckins * POINTS_PER_CHECKIN;
    return { totalCheckins, points, tier: getTier(points) };
  }, [store.checkins]);

  function updateStore(recipe) {
    setStore((current) => {
      const next = typeof recipe === "function" ? recipe(current) : recipe;
      return { ...next };
    });
  }

  const page = getPage(route, {
    store,
    updateStore,
    events,
    nextEvent,
    nextEventIsUpcoming,
    stats,
    setToast,
  });

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand-button" onClick={() => navigate("#/")} aria-label="Go home">
          <span className="brand-mark">
            <img src="/assets/endless-detour-logo-wide.jpg" alt="" />
          </span>
          <span>
            <strong>Road Crew</strong>
            <small>Endless Detour</small>
          </span>
        </button>
        <button className="icon-button" onClick={() => navigate("#/admin")} aria-label="Admin">
          <Shield size={19} />
        </button>
      </header>
      <main>{page}</main>
      <BottomNav route={route} />
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

function getPage(route, props) {
  if (route.startsWith("#/events/")) {
    return <EventDetail {...props} id={route.replace("#/events/", "")} />;
  }
  if (route === "#/events") return <EventsPage {...props} />;
  if (route === "#/checkin") return <CheckInPage {...props} />;
  if (route === "#/rewards") return <RewardsPage {...props} />;
  if (route === "#/requests") return <RequestsPage {...props} />;
  if (route === "#/polls") return <PollsPage {...props} />;
  if (route === "#/admin") return <AdminPage {...props} />;
  return <HomePage {...props} />;
}

function BottomNav({ route }) {
  const items = [
    ["#/events", CalendarDays, "Shows"],
    ["#/checkin", MapPin, "Check in"],
    ["#/rewards", Trophy, "Rewards"],
    ["#/requests", Music2, "Requests"],
    ["#/polls", Vote, "Polls"],
  ];

  return (
    <nav className="bottom-nav" aria-label="Primary navigation">
      {items.map(([hash, Icon, label]) => (
        <button
          key={hash}
          className={classNames("nav-item", (route === hash || (hash === "#/events" && route.startsWith("#/events/"))) && "active")}
          onClick={() => navigate(hash)}
          aria-label={label}
        >
          <Icon size={20} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}

function HomePage({ nextEvent, nextEventIsUpcoming, stats, store }) {
  return (
    <section className="page">
      <div className="hero">
        <img className="hero-logo" src="/assets/endless-detour-logo-wide.jpg" alt="Endless Detour" />
        <p className="eyebrow">Endless Detour Road Crew</p>
        <h1>Your backstage pass to every local detour.</h1>
        <p className="hero-copy">Check in at shows, vote on setlist ideas, request songs, and climb the Milemarker board.</p>
        <div className="hero-actions">
          <button className="primary-button" onClick={() => navigate("#/checkin")}>
            <MapPin size={18} />
            Check in
          </button>
          <button className="secondary-button" onClick={() => navigate("#/events")}>
            <CalendarDays size={18} />
            See shows
          </button>
        </div>
      </div>

      {nextEvent && (
        <section className="panel next-show">
          <div>
            <p className="section-kicker">{nextEventIsUpcoming ? "Next stop" : "Latest listed stop"}</p>
            <h2>{nextEvent.venue}</h2>
            <p>{formatDate(nextEvent.date)} · {formatTime(nextEvent.startTime)}</p>
            <p className="muted">{nextEvent.address}</p>
          </div>
          <button className="icon-button bright" onClick={() => navigate(`#/events/${nextEvent.id}`)} aria-label="Open event">
            <ExternalLink size={20} />
          </button>
        </section>
      )}

      <section className="two-grid">
        <InfoTile icon={Gauge} label="Milemarker points" value={stats.points} />
        <InfoTile icon={Check} label="Show check-ins" value={stats.totalCheckins} />
      </section>

      <section className="panel">
        <p className="section-kicker">Latest announcement</p>
        <h2>{store.announcements[0]?.title || "No announcements yet"}</h2>
        <p className="muted">{store.announcements[0]?.body || "The band can post updates from the admin dashboard."}</p>
      </section>

      <section className="social-strip">
        <a href="https://www.facebook.com/search/top?q=endless%20detour%20band" target="_blank" rel="noreferrer">
          <Facebook size={18} /> Facebook
        </a>
        <a href="https://www.instagram.com/explore/search/keyword/?q=endless%20detour%20band" target="_blank" rel="noreferrer">
          <Instagram size={18} /> Instagram
        </a>
        <a href="https://endlessdetourband.com/" target="_blank" rel="noreferrer">
          <Radio size={18} /> Website
        </a>
      </section>
    </section>
  );
}

function InfoTile({ icon: Icon, label, value }) {
  return (
    <div className="info-tile">
      <Icon size={21} />
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function EventsPage({ events }) {
  return (
    <section className="page">
      <PageTitle icon={CalendarDays} eyebrow="Schedule" title="Upcoming gigs" />
      <div className="source-note">
        Starter schedule seeded from <a href={EVENT_SOURCE} target="_blank" rel="noreferrer">endlessdetourband.com/events</a>. The admin dashboard can update this list anytime.
      </div>
      <div className="event-list">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}

function EventCard({ event }) {
  const upcoming = isUpcoming(event);
  return (
    <button className="event-card" onClick={() => navigate(`#/events/${event.id}`)}>
      <div className="date-badge">
        <span>{new Date(`${event.date}T12:00:00`).toLocaleString("en-US", { month: "short" })}</span>
        <strong>{new Date(`${event.date}T12:00:00`).getDate()}</strong>
      </div>
      <div className="event-card-body">
        <span className={classNames("status-pill", upcoming ? "live" : "muted-pill")}>{upcoming ? "Upcoming" : "Listed"}</span>
        <h2>{event.venue}</h2>
        <p>{event.title}</p>
        <small>{formatTime(event.startTime)} · {event.address}</small>
      </div>
      <ExternalLink size={18} />
    </button>
  );
}

function EventDetail({ id, events, store, updateStore, setToast }) {
  const event = events.find((item) => item.id === id);
  if (!event) return <EmptyState title="Show not found" body="That stop is no longer on the route." />;
  const going = store.fan.going.includes(event.id);

  function toggleGoing() {
    updateStore((current) => ({
      ...current,
      fan: {
        ...current.fan,
        going: going ? current.fan.going.filter((item) => item !== event.id) : [...current.fan.going, event.id],
      },
    }));
    setToast(going ? "Removed from your show list." : "You're on the list.");
  }

  return (
    <section className="page">
      <button className="text-link" onClick={() => navigate("#/events")}>Back to shows</button>
      <div className="detail-hero">
        <p className="eyebrow">{formatDate(event.date)}</p>
        <h1>{event.venue}</h1>
        <p>{formatTime(event.startTime)} to {formatTime(event.endTime)} · {isUpcoming(event) ? "Upcoming" : "Listed show"}</p>
      </div>
      <section className="panel">
        <p className="section-kicker">Venue</p>
        <h2>{event.title}</h2>
        <p className="muted">{event.address}</p>
        <p>{event.notes}</p>
        <div className="button-row">
          <a className="secondary-button" href={event.mapUrl} target="_blank" rel="noreferrer">
            <MapPin size={18} />
            Map
          </a>
          <button className="primary-button" onClick={toggleGoing}>
            <Users size={18} />
            {going ? "Going" : "I'm Going"}
          </button>
        </div>
      </section>
      <section className="panel code-panel">
        <p className="section-kicker">Event code</p>
        <strong>{event.code}</strong>
        <span className="muted">Use this for manual check-in at the show.</span>
      </section>
    </section>
  );
}

function CheckInPage({ events, store, updateStore, setToast }) {
  const [eventId, setEventId] = useState(events[0]?.id || "");
  const [name, setName] = useState(store.fan.name || "");
  const [code, setCode] = useState("");
  const [geoStatus, setGeoStatus] = useState("Not checked");
  const selected = events.find((event) => event.id === eventId);

  function submitCheckin(method) {
    if (!selected) return;
    if (method === "code" && code.trim().toUpperCase() !== selected.code.toUpperCase()) {
      setToast("That event code does not match this show.");
      return;
    }
    const alreadyCheckedIn = store.checkins.some((item) => item.eventId === selected.id && item.name === (name || "Road Crew Fan"));
    if (alreadyCheckedIn) {
      setToast("You already checked in for this stop.");
      return;
    }
    updateStore((current) => ({
      ...current,
      fan: { ...current.fan, name },
      checkins: [
        {
          id: crypto.randomUUID(),
          eventId: selected.id,
          eventTitle: selected.venue,
          name: name || "Road Crew Fan",
          method,
          createdAt: new Date().toISOString(),
        },
        ...current.checkins,
      ],
    }));
    setCode("");
    setToast(`Checked in at ${selected.venue}. +${POINTS_PER_CHECKIN} points`);
  }

  function useLocation() {
    if (!navigator.geolocation) {
      setGeoStatus("Geolocation is not available on this device.");
      return;
    }
    setGeoStatus("Checking your location...");
    navigator.geolocation.getCurrentPosition(
      () => {
        setGeoStatus("Location confirmed. Venue radius rules can be added when maps are connected.");
        submitCheckin("geolocation");
      },
      () => setGeoStatus("Could not confirm location. Use the event code at the show."),
      { enableHighAccuracy: true, timeout: 8000 },
    );
  }

  return (
    <section className="page">
      <PageTitle icon={MapPin} eyebrow="Show check-in" title="Stamp your Milemarker" />
      {selected && <SelectedEventPanel event={selected} />}
      <div className="form panel">
        <label>
          Your name
          <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Road Crew Fan" />
        </label>
        <label>
          Event
          <select value={eventId} onChange={(event) => setEventId(event.target.value)}>
            {events.map((event) => (
              <option key={event.id} value={event.id}>{event.venue} · {formatDate(event.date)}</option>
            ))}
          </select>
        </label>
        <button className="primary-button full" onClick={useLocation}>
          <MapPin size={18} />
          Use my location
        </button>
        <p className="muted compact">{geoStatus}</p>
        <div className="divider">or</div>
        <label>
          Event code
          <input value={code} onChange={(event) => setCode(event.target.value)} placeholder="Ask the band for tonight's code" />
        </label>
        <button className="secondary-button full" onClick={() => submitCheckin("code")}>
          <Check size={18} />
          Manual check-in
        </button>
      </div>
    </section>
  );
}

function RewardsPage({ stats }) {
  const tiers = [
    ["First Stop", 0],
    ["Road Crew", 75],
    ["Detour Regular", 175],
    ["Milemarker VIP", 300],
  ];
  const progress = Math.min((stats.points / 300) * 100, 100);
  const nextTier = tiers.find(([, points]) => points > stats.points);
  const pointsToNextTier = nextTier ? nextTier[1] - stats.points : 0;

  return (
    <section className="page">
      <PageTitle icon={Gift} eyebrow="Milemarker Rewards Program" title={stats.tier.name} />
      <div className="reward-card">
        <img src="/assets/endless-detour-logo-wide.jpg" alt="" />
        <Trophy size={42} />
        <strong>{stats.points} points</strong>
        <span>{stats.totalCheckins} total check-ins</span>
        <p>{stats.tier.detail}</p>
        <div className="progress-track">
          <div style={{ width: `${progress}%` }} />
        </div>
        <small>{nextTier ? `${pointsToNextTier} points to ${nextTier[0]}` : "Top tier unlocked"}</small>
      </div>
      <div className="stack">
        {tiers.map(([tier, points]) => (
          <div key={tier} className={classNames("tier-row", stats.points >= points && "earned")}>
            <span>{tier}</span>
            <strong>{points}+ pts</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function RequestsPage({ events, updateStore, setToast }) {
  const [form, setForm] = useState({
    eventId: events[0]?.id || "",
    name: "",
    song: "",
    message: "",
  });
  const selected = events.find((event) => event.id === form.eventId);

  function submit(event) {
    event.preventDefault();
    if (!form.song.trim()) {
      setToast("Add a song request first.");
      return;
    }
    const selected = events.find((item) => item.id === form.eventId);
    updateStore((current) => ({
      ...current,
      requests: [
        {
          id: crypto.randomUUID(),
          eventId: form.eventId,
          eventTitle: selected?.venue || "Upcoming show",
          name: form.name || "Road Crew Fan",
          song: form.song,
          message: form.message,
          createdAt: new Date().toISOString(),
        },
        ...current.requests,
      ],
    }));
    setForm({ ...form, song: "", message: "" });
    setToast("Song request sent to the dashboard.");
  }

  return (
    <section className="page">
      <PageTitle icon={Music2} eyebrow="Requests" title="Call the next tune" />
      {selected && <SelectedEventPanel event={selected} />}
      <form className="form panel" onSubmit={submit}>
        <label>
          Show
          <select value={form.eventId} onChange={(event) => setForm({ ...form, eventId: event.target.value })}>
            {events.map((event) => (
              <option key={event.id} value={event.id}>{event.venue} · {formatDate(event.date)}</option>
            ))}
          </select>
        </label>
        <label>
          Name
          <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your name" />
        </label>
        <label>
          Song request
          <input value={form.song} onChange={(event) => setForm({ ...form, song: event.target.value })} placeholder="Song and artist" />
        </label>
        <label>
          Message
          <textarea value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Optional shout-out" />
        </label>
        <button className="primary-button full" type="submit">
          <Music2 size={18} />
          Send request
        </button>
      </form>
    </section>
  );
}

function PollsPage({ store, updateStore, setToast }) {
  const voterId = getVoterId();

  function vote(pollId, option) {
    updateStore((current) => ({
      ...current,
      polls: current.polls.map((poll) => {
        if (poll.id !== pollId) return poll;
        if (poll.votes[voterId]) return poll;
        return { ...poll, votes: { ...poll.votes, [voterId]: option } };
      }),
    }));
    setToast("Vote counted.");
  }

  return (
    <section className="page">
      <PageTitle icon={Vote} eyebrow="Polls" title="Help steer the setlist" />
      <div className="stack">
        {store.polls.map((poll) => {
          const voted = poll.votes[voterId];
          const totals = poll.options.map((option) => ({
            option,
            count: Object.values(poll.votes).filter((voteValue) => voteValue === option).length,
          }));
          const totalVotes = Math.max(Object.keys(poll.votes).length, 1);
          return (
            <section className="panel poll-card" key={poll.id}>
              <p className="section-kicker">{poll.active ? "Open poll" : "Closed poll"}</p>
              <h2>{poll.question}</h2>
              <div className="poll-options">
                {totals.map((item) => (
                  <button key={item.option} disabled={Boolean(voted) || !poll.active} onClick={() => vote(poll.id, item.option)}>
                    <span>{item.option}</span>
                    <strong>{Math.round((item.count / totalVotes) * 100)}%</strong>
                    <i style={{ width: `${(item.count / totalVotes) * 100}%` }} />
                  </button>
                ))}
              </div>
              {voted && <p className="vote-confirmation"><Check size={16} /> You voted for {voted}.</p>}
            </section>
          );
        })}
      </div>
    </section>
  );
}

function SelectedEventPanel({ event }) {
  return (
    <section className="selected-event">
      <span className="mini-date">
        <strong>{new Date(`${event.date}T12:00:00`).getDate()}</strong>
        {new Date(`${event.date}T12:00:00`).toLocaleString("en-US", { month: "short" })}
      </span>
      <span>
        <strong>{event.venue}</strong>
        <small>{formatDate(event.date)} · {formatTime(event.startTime)}</small>
      </span>
    </section>
  );
}

function getVoterId() {
  let voterId = localStorage.getItem("roadCrewVoterId");
  if (!voterId) {
    voterId = crypto.randomUUID();
    localStorage.setItem("roadCrewVoterId", voterId);
  }
  return voterId;
}

function AdminPage({ store, updateStore, events, setToast }) {
  const [pin, setPin] = useState("");
  const [unlocked, setUnlocked] = useState(localStorage.getItem("roadCrewAdmin") === "true");
  const [eventDraft, setEventDraft] = useState(blankEvent());
  const [pollDraft, setPollDraft] = useState({ question: "", options: "Option one\nOption two" });
  const [announcement, setAnnouncement] = useState({ title: "", body: "" });

  function login(event) {
    event.preventDefault();
    if (pin === ADMIN_PIN) {
      localStorage.setItem("roadCrewAdmin", "true");
      setUnlocked(true);
      setToast("Admin dashboard unlocked.");
    } else {
      setToast("Use the placeholder admin PIN: detour");
    }
  }

  if (!unlocked) {
    return (
      <section className="page">
        <PageTitle icon={Lock} eyebrow="Admin" title="Dashboard access" />
        <form className="form panel" onSubmit={login}>
          <label>
            Placeholder PIN
            <input value={pin} onChange={(event) => setPin(event.target.value)} placeholder="detour" type="password" />
          </label>
          <button className="primary-button full" type="submit">
            <Lock size={18} />
            Unlock admin
          </button>
        </form>
      </section>
    );
  }

  function saveEvent(event) {
    event.preventDefault();
    const draft = { ...eventDraft, id: eventDraft.id || slugify(`${eventDraft.venue}-${eventDraft.date}`), code: eventDraft.code.toUpperCase() };
    updateStore((current) => ({
      ...current,
      events: current.events.some((item) => item.id === draft.id)
        ? current.events.map((item) => (item.id === draft.id ? draft : item))
        : [draft, ...current.events],
    }));
    setEventDraft(blankEvent());
    setToast("Event saved.");
  }

  function editEvent(event) {
    setEventDraft(event);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function deleteEvent(id) {
    updateStore((current) => ({ ...current, events: current.events.filter((event) => event.id !== id) }));
    setToast("Event deleted.");
  }

  function createPoll(event) {
    event.preventDefault();
    const options = pollDraft.options.split("\n").map((item) => item.trim()).filter(Boolean);
    if (!pollDraft.question || options.length < 2) {
      setToast("Polls need a question and at least two options.");
      return;
    }
    updateStore((current) => ({
      ...current,
      polls: [{ id: crypto.randomUUID(), question: pollDraft.question, options, active: true, votes: {} }, ...current.polls],
    }));
    setPollDraft({ question: "", options: "Option one\nOption two" });
    setToast("Poll created.");
  }

  function postAnnouncement(event) {
    event.preventDefault();
    if (!announcement.title || !announcement.body) return;
    updateStore((current) => ({
      ...current,
      announcements: [{ id: crypto.randomUUID(), ...announcement, date: new Date().toISOString().slice(0, 10) }, ...current.announcements],
    }));
    setAnnouncement({ title: "", body: "" });
    setToast("Announcement posted.");
  }

  return (
    <section className="page admin-page">
      <PageTitle icon={Shield} eyebrow="Admin" title="Band command center" />
      <div className="admin-grid">
        <section className="panel">
          <h2>Add or edit event</h2>
          <form className="form" onSubmit={saveEvent}>
            {["title", "venue", "date", "startTime", "endTime", "address", "mapUrl", "code", "notes"].map((field) => (
              <label key={field}>
                {fieldLabels[field]}
                {field === "notes" ? (
                  <textarea value={eventDraft[field]} onChange={(event) => setEventDraft({ ...eventDraft, [field]: event.target.value })} />
                ) : (
                  <input
                    value={eventDraft[field]}
                    type={field === "date" ? "date" : field.includes("Time") ? "time" : "text"}
                    onChange={(event) => setEventDraft({ ...eventDraft, [field]: event.target.value })}
                    required={["title", "venue", "date", "startTime", "address", "code"].includes(field)}
                  />
                )}
              </label>
            ))}
            <button className="primary-button full" type="submit">
              <Save size={18} />
              Save event
            </button>
          </form>
        </section>

        <section className="panel">
          <h2>Current events</h2>
          <div className="admin-list">
            {events.map((event) => (
              <AdminRow key={event.id} title={event.venue} subtitle={`${formatDate(event.date)} · ${event.code}`}>
                <button className="icon-button" onClick={() => editEvent(event)} aria-label="Edit event"><Edit3 size={17} /></button>
                <button className="icon-button danger" onClick={() => deleteEvent(event.id)} aria-label="Delete event"><Trash2 size={17} /></button>
              </AdminRow>
            ))}
          </div>
        </section>

        <section className="panel">
          <h2>Check-ins</h2>
          <AdminCollection items={store.checkins} empty="No check-ins yet." render={(item) => `${item.name} at ${item.eventTitle} · ${item.method}`} />
        </section>

        <section className="panel">
          <h2>Song requests</h2>
          <AdminCollection items={store.requests} empty="No song requests yet." render={(item) => `${item.song} for ${item.eventTitle} · ${item.name}`} />
        </section>

        <section className="panel">
          <h2>Create poll</h2>
          <form className="form" onSubmit={createPoll}>
            <label>
              Question
              <input value={pollDraft.question} onChange={(event) => setPollDraft({ ...pollDraft, question: event.target.value })} />
            </label>
            <label>
              Options
              <textarea value={pollDraft.options} onChange={(event) => setPollDraft({ ...pollDraft, options: event.target.value })} />
            </label>
            <button className="secondary-button full" type="submit">
              <Plus size={18} />
              Create poll
            </button>
          </form>
        </section>

        <section className="panel">
          <h2>Post announcement</h2>
          <form className="form" onSubmit={postAnnouncement}>
            <label>
              Title
              <input value={announcement.title} onChange={(event) => setAnnouncement({ ...announcement, title: event.target.value })} />
            </label>
            <label>
              Message
              <textarea value={announcement.body} onChange={(event) => setAnnouncement({ ...announcement, body: event.target.value })} />
            </label>
            <button className="primary-button full" type="submit">
              <Megaphone size={18} />
              Post
            </button>
          </form>
        </section>
      </div>
    </section>
  );
}

const fieldLabels = {
  title: "Event title",
  venue: "Venue",
  date: "Date",
  startTime: "Start time",
  endTime: "End time",
  address: "Address",
  mapUrl: "Map link",
  code: "Check-in code",
  notes: "Notes",
};

function blankEvent() {
  return {
    id: "",
    title: "",
    venue: "",
    date: "",
    startTime: "",
    endTime: "",
    address: "",
    mapUrl: "",
    code: "",
    notes: "",
  };
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function isUpcoming(event) {
  return new Date(`${event.date}T23:59:00`) >= new Date();
}

function AdminRow({ title, subtitle, children }) {
  return (
    <div className="admin-row">
      <span>
        <strong>{title}</strong>
        <small>{subtitle}</small>
      </span>
      <div>{children}</div>
    </div>
  );
}

function AdminCollection({ items, empty, render }) {
  if (!items.length) return <p className="muted">{empty}</p>;
  return (
    <div className="admin-list">
      {items.map((item) => (
        <AdminRow key={item.id} title={render(item)} subtitle={new Date(item.createdAt).toLocaleString()} />
      ))}
    </div>
  );
}

function PageTitle({ icon: Icon, eyebrow, title }) {
  return (
    <div className="page-title">
      <Icon size={25} />
      <span>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </span>
    </div>
  );
}

function EmptyState({ title, body }) {
  return (
    <section className="page">
      <div className="panel empty-state">
        <ClipboardList size={32} />
        <h1>{title}</h1>
        <p className="muted">{body}</p>
      </div>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
