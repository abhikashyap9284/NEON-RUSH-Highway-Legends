# NEON RUSH — Highway Legends

Responsive original arcade racing game built with Next.js App Router, React, HTML Canvas, and optional Neon PostgreSQL. Includes 20 race levels, seven AI traffic opponents, nitro, steering/braking, collisions, local garage unlocks, global leaderboard, AdSense verification, ads.txt, privacy/about/terms/contact/help pages, sitemap and robots.txt.

## Start locally

Node.js 20+ recommended.

```bash
npm install
cp .env.example .env.local
npm run dev
```

On Windows PowerShell use `Copy-Item .env.example .env.local` instead of `cp` if preferred. Open http://localhost:3000 . Game can run without database.

## Connect Neon

1. Create a Neon Postgres project at https://console.neon.tech
2. Open **SQL Editor**, paste `database/schema.sql`, and execute it once.
3. Copy Neon **pooled** connection string into your `.env.local` as `DATABASE_URL="postgresql://..."`.
4. Restart `npm run dev`. Global leaderboard is now enabled. NEVER put DATABASE_URL in variables prefixed NEXT_PUBLIC_ or in GitHub.

## Deploy on Vercel

```bash
git init
git add .
git commit -m "Build NEON RUSH racing game"
git branch -M main
```

Create an empty GitHub repo and run `git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git` followed by `git push -u origin main`. Import that repo into https://vercel.com/new . Framework: Next.js. Add `DATABASE_URL`, `NEXT_PUBLIC_SITE_URL` (your actual public website URL), `NEXT_PUBLIC_CONTACT_EMAIL`, and later `NEXT_PUBLIC_ADSENSE_CLIENT` in Vercel Project > Settings > Environment Variables. Redeploy after changing environment values. Alternatively use `npx vercel --prod` after `npx vercel login`.

## AdSense preparation — NOT approval guarantee

1. Add `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-...` in `.env.local` and Vercel. Redeploy production.
2. Source HTML exposes Google AdSense meta tag; Next.js inserts the AdSense loader; `/ads.txt` serves the corresponding line automatically. Verify published production domain in AdSense.
3. Ensure the site is publicly reachable without login or Vercel Deployment Protection.
4. Review, replace, and complete template legal/contact text, especially `app/privacy/page.tsx` and `app/terms/page.tsx`. Comply with cookies and consent requirements for your visitors. Read Google policies.
5. Do NOT put ad overlays close to controls, inside racing canvas, on result popups, or in a way causing accidental clicks. This project intentionally does not render ad units in the gameplay view. Add units only to appropriate content pages after approval and consent setup.
6. AdSense approval is not guaranteed. Quality, policy compliance, correct ownership, crawler reachability and other factors matter.

## Controls

Desktop: A/D or Left/Right to steer, S or Down to brake, Space or Shift to nitro. Touchscreen: on-screen buttons. Rank is arcade-style relative to 7 active rivals; not a motorsport physics simulation. Progress stored in browser localStorage.

## Security / scope notes

The optional score endpoint validates payload types, limits values, and checks cross-origin requests, but scores originate in the browser and are NOT server-authoritative. A malicious player could manipulate scores. For public prize competitions, implement authenticated players, rate limits, verified server simulation, moderation, and antifraud measures. This package intentionally does not claim to offer secure accounts, multiplayer networking, or photorealistic full 3D rendering.
