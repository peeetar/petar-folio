// Cloudflare Pages doesn't know what to do with `dist/server` on its own —
// it just uploads `dist/client` as static assets, which is why the site 404s
// on every route (there's no index.html; this app is server-rendered).
//
// Cloudflare Pages' "Advanced Mode" picks up a `_worker.js` directory at the
// root of the deploy output and runs `_worker.js/index.js` as a Worker for
// every request that isn't excluded by `_routes.json`. Our `dist/server`
// build is already a valid Worker module (`export default { fetch(...) }`),
// so we just need to move it into place and tell Cloudflare which paths are
// static files vs. paths that need SSR.
import { cpSync, mkdirSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { existsSync } from "node:fs";

const clientDir = "dist/client";
const serverDir = "dist/server";
const workerDir = `${clientDir}/_worker.js`;

if (!existsSync(serverDir)) {
  throw new Error(`${serverDir} not found — run "vite build" first.`);
}

rmSync(workerDir, { recursive: true, force: true });
mkdirSync(workerDir, { recursive: true });

cpSync(`${serverDir}/assets`, `${workerDir}/assets`, { recursive: true });
// Keep the filename "server.js" as-is: the bundled chunks in assets/ import
// it by that literal relative path (e.g. "../server.js"), so renaming it
// breaks module resolution. Cloudflare just needs an index.js entry point,
// so add a thin re-export instead.
cpSync(`${serverDir}/server.js`, `${workerDir}/server.js`);
writeFileSync(`${workerDir}/index.js`, `export { default } from "./server.js";\n`);

// Static files (JS/CSS bundles, favicon, robots.txt) should be served
// directly by Cloudflare's static hosting, not routed through the worker —
// the SSR handler doesn't know how to serve them and isn't wired to an
// ASSETS binding.
writeFileSync(
  `${clientDir}/_routes.json`,
  JSON.stringify(
    {
      version: 1,
      include: ["/*"],
      exclude: ["/assets/*", "/favicon.ico", "/robots.txt"],
    },
    null,
    2,
  ) + "\n",
);

console.log(`✓ Wired ${serverDir} into ${workerDir} for Cloudflare Pages`);
