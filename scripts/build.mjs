/*
 * FrontRow Platform
 * Static PWA build validation.
 */

import fs from "node:fs";
import vm from "node:vm";

const requiredFiles = [
  "public/index.html",
  "public/manifest.webmanifest",
  "public/service-worker.js",
  "public/src/main.js",
  "public/src/styles.css",
  "public/src/frontrow-brand.css",
  "public/assets/brand/frontrow-logo-tagline.jpg",
  "public/assets/brand/frontrow-rockstar-hero.jpg",
  "public/icons/frontrow-icon-192.png",
  "public/icons/frontrow-icon-512.png",
];

for (const file of requiredFiles) {
  if (!fs.existsSync(file) || fs.statSync(file).size === 0) {
    throw new Error(`Missing required build asset: ${file}`);
  }
}

JSON.parse(fs.readFileSync("public/manifest.webmanifest", "utf8"));
JSON.parse(fs.readFileSync("firebase.json", "utf8"));

const babelContext = {};
babelContext.globalThis = babelContext;
babelContext.self = babelContext;
vm.createContext(babelContext);
vm.runInContext(fs.readFileSync("public/vendor/babel.min.js", "utf8"), babelContext);
babelContext.Babel.transform(fs.readFileSync("public/src/main.js", "utf8"), { presets: ["react"] });

console.log("FrontRow static PWA build validation passed.");
