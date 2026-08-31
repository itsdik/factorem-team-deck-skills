---
name: team-factorem-premium-deck
description: Use when building a Factorem-branded slide deck as a web app -- customer or event presentations, townhalls, keynotes, or a "webdeck"; use when a deck must look cinematic and premium, not like generic slides
---

# Team Factorem Premium Deck

## Overview

A premium Factorem deck is a **multi-slide Next.js web app**, not a slideshow file and not a one-off HTML page. The "expensive" feel comes from three things working together, every slide:

1. **Layered depth** -- each slide stacks absolute layers (gradient field, radial glow, gliding beams, scrim, content). Never one flat background.
2. **Editorial typography** -- Space Grotesk (display) + **Playfair Display italic** for the emotional word + Inter (body). The sans/serif mix is the signature.
3. **Motion grammar** -- staggered reveals on enter (`staggerContainer`/`staggerItem`) + `AnimatePresence` slide transitions + restrained *ambient* motion (gliding beams, twinkles). Cinematic, never gimmicky.

The complete copyable engine lives in [scaffold/](scaffold/). The white logo asset lives in [assets/](assets/).

**This skill ships the brand system only: engine code, colors, fonts, animations, and the logo. It contains no company data. All slide content (metrics, claims, financials, customer names) must come from you and be verified.**

## When to use / not

- **Use** for any Factorem deck where look matters: customer, event, townhall, keynote, partner presentation.
- **Don't** use for a quick data report or a Chart.js dashboard deck; use a simpler single-file HTML deck for that (see `team-factorem-deck`). This skill is about *brand-grade visual presentation*, not charts.

## Stack

Next.js (App Router, **static export** `output: "export"` deploys to Vercel or any static host) · TypeScript · Tailwind v4 (`@theme inline` tokens) · framer-motion · Google Fonts. Deps: `next react react-dom framer-motion` + `tailwindcss @tailwindcss/postcss typescript`.

## Quick start

1. `npx create-next-app@latest <deck> --ts --tailwind --app`
2. Copy the engine from `scaffold/` into place:
   - `globals.css` -> `app/globals.css` · `layout.tsx` -> `app/layout.tsx` · `next.config.ts`
   - `SlideDeck.tsx`, `LaserField.tsx`, `Backdrop.tsx`, `Wordmark.tsx` -> `components/`
   - `animations.ts`, `slides.tsx` -> `lib/`
   - `SlideHero.example.tsx` -> `components/slides/SlideHero.tsx` (rename) -- your worked example.
3. `app/page.tsx`: `return <SlideDeck />` (optionally with `<Backdrop />` behind it).
4. Copy `assets/factorem-logo-white.png` to `/public/images/factorem-logo-white.png` (the real logo -- never invent a wordmark).
5. Build slides as components, register them in `lib/slides.tsx`, then `npm run dev`.
6. Ship: `npm run build` (writes `/out`) -> deploy to Vercel or any static host.

## The depth recipe (most important)

Every strong slide layers, back to front. See `scaffold/SlideHero.example.tsx`:

| Layer | Purpose |
|-------|---------|
| 1 · Base gradient field | Diagonal navy to black, sets the mood. |
| 2 · Radial glow accent | One off-center warm/cool glow for dimension. |
| 3 · Gliding beams | Slow ambient motion (`beamSlide` keyframe) so static slides breathe. |
| 4 · Scrim | Gradient over the busy field so text stays legible. |
| 5 · Brand lockup | `<Wordmark/>` top-left. |
| 6 · Content | Wrapped in `staggerContainer`; each block is a `staggerItem`. |

For title cards, wrap content in `<LaserField>` and skip layers 1-4 (it provides them).

## Typography rules

- **Headlines**: `font-display` (Space Grotesk) bold, tight leading (`leading-[0.95]`).
- **The emotional word** gets its own line in `font-serif italic` (Playfair), e.g. "reimagined.", "unhurried evening". This is the move that makes it feel designed.
- **Body**: Inter, `text-blue-100/75`, relaxed leading; drop a `<em className="font-serif italic">` on one phrase.
- **Kickers**: uppercase, `tracking-[0.3em]`, muted, prefixed with a hairline rule (`<span className="h-px w-8 ...">`).
- **One** `.text-gradient` (teal-blue-violet) per slide, on the single hero number/word. More than one cheapens it.

## Spinning up a second deck

To repurpose an existing premium deck fast: copy the project, keep the engine (`SlideDeck`/`animations`/`Backdrop`), replace `lib/slides.tsx` + `components/slides/`, and retune the accent colors in `globals.css` (e.g. a gold spotlight variant of `LaserField` for an awards deck).

## Content integrity (critical)

**Never fabricate metrics, traction, or financials.** Leave explicit placeholders (`<REAL_METRIC>`) and ask for the real number; a beautiful deck with invented stats is worse than no deck. This skill only renders content, it is never the source of it.

## Common mistakes

| Mistake (seen in a fresh agent) | Fix |
|--------------------------------|-----|
| Builds one standalone `.html` file | It's a **multi-slide Next.js app**; use the registry + `SlideDeck`. |
| Flat single-color/one-gradient background | Stack the **6 layers**. Depth = layers. |
| Wrong fonts (Sora, Roboto, JetBrains Mono...) | Space Grotesk + Playfair Display + Inter, loaded in `layout.tsx`. |
| Invents a wordmark / skips the logo | Use `<Wordmark/>` + the real logo from `assets/`. |
| Canvas particle fields, heavy aurora, film grain | Premium = restrained. Layered gradients + gliding beams, not gimmicks. |
| No Playfair serif-italic accent | Put the emotional word on its own line in serif italic. |
| `.text-gradient` everywhere | Exactly one money word/number per slide. |
| Fabricated stats to "look impressive" | Placeholders + ask. Integrity over polish. |
| Forgets `output: "export"` | Set it in `next.config.ts` so it deploys static. |
