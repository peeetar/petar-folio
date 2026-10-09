# petar-folio

Source for my personal site, [velkovski.xyz](https://velkovski.xyz).

The old version was a Lovable-built TanStack Start app. That was a lot of framework for one page, so this version is plain HTML, CSS and a bit of JavaScript in `site/index.html`, plus a few SVGs in `site/assets/`. No dependencies, nothing to update.

The engravings (the tarot cards, the lamp, the ornaments) are old public-domain prints I traced to SVG and recolour with CSS masks, so they follow the palette.

## Running it locally

```bash
npm run dev      # serves site/ on localhost
```

Or just open `site/index.html` in a browser.

## Deploying

Cloudflare Pages runs `npm run build` (or `bun run build`), which copies `site/` into `dist/client`. That folder is what gets served, same as before, so the Pages settings didn't need to change.

---

Petar Velkovski — [velkovski.xyz](https://velkovski.xyz)
