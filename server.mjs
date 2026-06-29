import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const port = Number(process.env.PORT || 5173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jsx": "text/babel; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
};

function resolvePath(url) {
  const cleanUrl = new URL(url, `http://127.0.0.1:${port}`);
  const pathname = cleanUrl.pathname === "/" ? "/index.html" : cleanUrl.pathname;
  const safePath = normalize(pathname).replace(/^[/\\]+/, "").replace(/^(\.\.[/\\])+/, "");
  return join(root, safePath);
}

createServer(async (request, response) => {
  try {
    let filePath = resolvePath(request.url || "/");
    let body;
    try {
      body = await readFile(filePath);
    } catch {
      const cleanUrl = new URL(request.url || "/", `http://127.0.0.1:${port}`);
      const pathname = cleanUrl.pathname === "/" ? "/index.html" : cleanUrl.pathname;
      const publicPath = normalize(pathname).replace(/^[/\\]+/, "").replace(/^(\.\.[/\\])+/, "");
      filePath = join(root, "public", publicPath);
      body = await readFile(filePath);
    }
    response.writeHead(200, {
      "Content-Type": types[extname(filePath)] || "application/octet-stream",
      "Cache-Control": filePath.endsWith("service-worker.js") ? "no-cache" : "public, max-age=60",
    });
    response.end(body);
  } catch {
    const fallback = await readFile(join(root, "index.html"));
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(fallback);
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Endless Detour Road Crew running at http://127.0.0.1:${port}`);
});
