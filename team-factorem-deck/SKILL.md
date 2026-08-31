---
name: team-factorem-deck
description: Use when building branded HTML slide decks for Factorem -- customer-facing presentations, townhalls, event talks, or any Factorem-branded slide deck that should ship as a single polished HTML file
---

# Team Factorem Deck

Build polished single-file HTML slide decks in the Factorem brand. Light theme, boardroom-grade quality, every slide illustrated.

**This skill ships the brand system only: colors, fonts, layouts, animations, logo rules, and templates. It contains no company data. All slide content (metrics, claims, financials, customer names) must come from you and be verified. Never invent numbers.**

## Design System

| Token | Value |
|-------|-------|
| Background | `#F8FAFC` |
| Surface (cards) | `#FFFFFF` |
| Accent background | `#EFF6FF` |
| Primary | `#1272E3` |
| Primary dark | `#0C5DBC` |
| Primary light | `#DBEAFE` |
| Text | `#1E293B` |
| Text secondary | `#64748B` |
| Text muted | `#94A3B8` |
| Border | `#E2E8F0` |
| Accent | `#06B6D4` |
| Font | `Inter` (headings 600/700, body 400/500) |
| Aspect ratio | 16:9, letterboxed on non-matching viewports |
| Slide padding | 64px all sides (safe area) |
| Logo | Every slide, top-left, 40px height (48px on cover) |

## Content Rules (Non-Negotiable)

1. **Max 3 points per slide.** Exceed only when the slide genuinely requires it (team bios, capability matrix). Default to fewer, not more.
2. **Every slide gets an illustration.** Generate one per content slide and save to `images/`. Only exception: disclaimer slides and pure-data chart slides.
3. **No em dashes.** Rewrite with commas, semicolons, periods, or restructure the sentence entirely.
4. **No AI-sounding language.** Banned words: leveraging, cutting-edge, revolutionizing, game-changing, seamless, robust, holistic, synergy, paradigm, best-in-class, disruptive, end-to-end, north star. Write like a thoughtful human.
5. **Factorem logo on every slide.** Top-left corner. On blue section-divider slides, use the white variant.
6. **Content must fit within slide margins.** No overflow, no scrolling. If content does not fit, split the slide. The `overflow: hidden` CSS enforces this visually.
7. **Page numbers on every slide** except the cover.
8. **Alternate illustration position.** Swap between left and right across consecutive slides for visual rhythm.
9. **Never fabricate data.** If you do not have a verified figure, use an explicit placeholder like `<REAL_METRIC>` and ask for the real number.

## Illustration Workflow

Generate an illustration for each content slide (Claude Design, or your image tool of choice). The prompt structure:

> Professional, flat, minimal illustration. Primary color Factorem blue (#1272E3) with white and light gray (#F8FAFC). Clean geometric shapes, no text in the image, no people unless the slide is about the team. White or very light background. Corporate presentation quality. [Subject-specific description.]

Save each generated image to `images/{slide-name}.png` in the deck directory.

See `references/slide-patterns.md` for per-slide illustration prompt additions.

## Workflow

1. **Create directory**: `{deck-name}/` with an `images/` sub-folder
2. **Copy logos** from this skill's `assets/` folder:
   - `cp <skill-dir>/assets/factorem-logo-blue.png {deck-name}/images/logo.png`
   - `cp <skill-dir>/assets/factorem-logo-white.png {deck-name}/images/logo-white.png`
3. **Pick structure**: Read `references/slide-patterns.md`, choose the right deck structure for the use case
4. **Draft content**: Write all slide text first, following content rules. Review for banned words before proceeding.
5. **Generate illustrations**: For each content slide, use the base prompt + slide-specific addition. Save to `images/`.
6. **Build HTML**: Start from `references/html-template.md` base. Populate slides using the layout patterns documented there.
7. **Open and verify**: `open {deck-name}/index.html` -- check alignment, margins, readability, logo placement on every slide.

## References

| Topic | File |
|-------|------|
| HTML Base Template + Layout Patterns | `references/html-template.md` |
| Deck Structures + Illustration Prompts | `references/slide-patterns.md` |
| Logo assets (blue + white) | `assets/` |
