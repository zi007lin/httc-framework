# HTTC — Governance & Fair-Play Framework

Interactive reference for Hester Table Tennis Club leaders.

**Location:** 100 Hester Street, NY 10002 · Inside MS 131 · Chinatown YMCA Beacon Program

## Sections

- **Overview** — Purpose, principles, stewardship context
- **House Rules** — Time rotation, equipment care, conduct
- **Queue System** — Paddle-under-table & magnetic dry-erase labels
- **Stewards** — Do/Don't guide with copy-paste scripts
- **Escalation** — 4-step quiet de-escalation path
- **Posted Sign** — Print-ready Rules of Conduct

## Development

```bash
npm install
npm run dev
```

## Deploy to Cloudflare Pages

```bash
npm run build
npx wrangler pages deploy dist --project-name httc-framework
```

Or connect this repo to Cloudflare Pages with:
- **Build command:** `npm run build`
- **Output directory:** `dist`

## Stack

Vite + React — zero dependencies beyond React itself.
