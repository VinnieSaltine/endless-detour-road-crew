/*
 * FrontRow Platform / Road Crew Engagement Program
 * Copyright © 2026 Hallowfield Building Group, LLC.
 * All rights reserved.
 *
 * Endless Detour name, logo, and band-specific branding are separate marks
 * owned by their respective rights holders and used by permission.
 */

const CACHE_NAME = "frontrow-v26";
const APP_SHELL = ["/", "/index.html", "/manifest.webmanifest"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  if (event.request.url.includes("/src/") || event.request.url.includes("/assets/") || event.request.url.includes("/firebase-config.js")) {
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request)
          .then((response) => {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
            return response;
          })
          .catch(() => caches.match("/index.html"))
      );
    }),
  );
});

self.addEventListener("push", (event) => {
  const payload = event.data?.json() || {
    title: "FrontRow",
    body: "New FrontRow community announcement.",
  };

  event.waitUntil(
    self.registration.showNotification(payload.title, {
      body: payload.body,
      icon: "/icons/frontrow-icon-192.png",
      badge: "/icons/frontrow-icon-192.png",
      data: payload.url || "/",
    }),
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data || "/"));
});
