# petar-folio

This is the source code for my personal site, [velkovski.xyz](https://velkovski.xyz). I needed a new, more modular and flexible design than what I previously had. This project was built using Lovable and other AI-assisted tools.

## The stack

Lovable set this up on TanStack Start with React 19, Tailwind v4 and Vite, and it turned out to be what I needed. 

## Running it locally

You will need Bun. Then:

```bash
bun install
bun run dev
```

`bun run build` makes the production build, and the output goes to `dist/client` — that is what Cloudflare Pages serves. There is also `bun run lint` and `bun run format` if you want the diffs to stay clean.

## Structure

Everything that matters is in `src/routes`. `__root.tsx` has the document shell plus the 404 and error pages, and `index.tsx` is the whole portfolio — projects, experience, skills, languages.
---

Petar Velkovski — [velkovski.xyz](https://velkovski.xyz)
