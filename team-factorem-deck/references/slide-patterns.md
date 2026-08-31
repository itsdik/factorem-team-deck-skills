# Slide Patterns

Deck structures, per-slide guidance, and illustration prompts for Factorem presentations.

All example content below is placeholder structure. Populate slides only with figures and claims you have verified yourself.

## Customer Presentation (Primary)

External-facing capability deck. 10-14 slides.

| # | Slide | Layout | Illustration Prompt Addition |
|---|-------|--------|------------------------------|
| 1 | Cover | `slide-cover` | Abstract network of connected manufacturing nodes and AI circuits |
| 2 | About Factorem | `split-60-40` | Overview showing factory, AI brain, and global connections |
| 3 | Capabilities | `grid-3` cards | None (cards with small icons) |
| 4 | How It Works | `split-40-60` | Connected platform hub with radiating spokes to factories |
| 5 | Factory Network | `split-60-40` | World map with factory dots and connection lines |
| 6 | Quality Assurance | `split-40-60` | Inspection checkmarks flowing through a pipeline |
| 7 | Case Studies | `grid-3` cards | Before/after comparison, speed improvement |
| 8 | Key Metrics | `grid-4` metrics | None (numbers are the visual) |
| 9 | Why Factorem | `grid-3` cards | Industry icons in geometric style |
| 10 | Next Steps | full-width statement | Handshake or partnership symbol |

## Corporate Townhall

Internal team update. 8-12 slides.

| # | Slide | Layout |
|---|-------|--------|
| 1 | Cover | `slide-cover` |
| 2 | Quarter Highlights | `grid-3` cards |
| 3 | Key Metrics | `grid-4` metrics |
| 4 | Product Updates | `split-60-40` |
| 5 | Customer Wins | `grid-3` cards |
| 6 | Team Updates | `grid-2` |
| 7 | Goals Next Quarter | `grid-3` cards |
| 8 | Recognition | full-width statement |

## General Business Presentation

Flexible structure for talks, events, and management updates. 10-14 slides.

| # | Slide | Layout |
|---|-------|--------|
| 1 | Cover | `slide-cover` |
| 2 | Context / Problem | `split-60-40` |
| 3 | Approach / Solution | `split-40-60` |
| 4 | How It Works | `grid-3` |
| 5 | **Section divider** | `slide-section` |
| 6 | Evidence / Metrics | `grid-4` metrics |
| 7 | Examples | `grid-3` cards |
| 8 | Data Deep-Dive | chart + metric |
| 9 | Team | `grid-2` team |
| 10 | Next Steps | full-width statement |

## Per-Slide Content Rules

### Cover Slide
- Title: Company name + deck purpose (e.g., "Capability Overview")
- Subtitle: One sentence. Not a tagline if the deck is formal.
- Always include date in "Month YYYY" format
- Add a "Confidential" badge for sensitive materials
- No bullet points. No paragraphs.

### Opening / Summary Slide
- The single most important slide. Many readers stop here.
- Exactly 3 highlights, each a single clear sentence
- Add a row of 3-4 metrics below (use mini metric cards)
- Every claim must be backed by data on a later slide

### Data / Chart Slides
- Clearly distinguish actuals from projections (solid color vs lighter/hatched)
- Always label the y-axis with currency and scale ($K, $M)
- Use bar charts for absolute values, line charts for trends
- Include the growth rate as a callout metric
- Round to sensible precision. "$1,234,567" is noise. "$1.2M" is signal.
- Only plot verified figures. Placeholder + ask if you do not have the number.

### Team Slide
- Name, title, one-line bio per person
- Prioritize relevant experience over comprehensive career history
- If photos are available, use 72px circular crops

### Comparison Slides
- Never disparage competitors by name
- Use a feature matrix with checkmarks/crosses
- Lead with genuine differentiators, each backed by evidence elsewhere in the deck

### Disclaimer Slide (formal decks only)
- Standard confidentiality language
- Small text is fine (14-15px)
- Gray text color, left-aligned
- No illustration needed
- Brief. 1 paragraph max.

## Banned Words Reference

Do not use any of these in slide content:

| Banned | Replace With |
|--------|-------------|
| leveraging / leverage | using, with, through |
| cutting-edge | advanced, modern |
| revolutionizing | transforming, changing |
| game-changing | significant, meaningful |
| seamless | smooth, simple, integrated |
| robust | strong, reliable |
| holistic | complete, full |
| synergy / synergies | combined value, fit, complementary |
| paradigm shift | (describe the actual change) |
| end-to-end | complete, full |
| best-in-class | leading, top-ranked (cite source) |
| disruptive | different, new approach |
| ecosystem | network, system |
| north star | goal, target |
| utilize | use |
| em dash | comma, semicolon, period, or rewrite |

## Illustration Style Reference

All illustration prompts should start with:

> Professional, flat, minimal vector-style illustration. Primary color: Factorem blue (#1272E3). Secondary: white (#FFFFFF) and light gray (#F8FAFC). Accent: teal (#06B6D4) used sparingly. Clean geometric shapes. No text in the image. No realistic people unless the slide is about the team. Light, airy background. Corporate presentation quality. Square or 4:3 aspect ratio.

Then append the slide-specific subject from the tables above.

### Illustration Size Guide

| Layout | Illustration Size | Notes |
|--------|-------------------|-------|
| `split-60-40` (right) | ~40% of slide width | Inside `.illust-frame`, auto-scaled |
| `split-40-60` (left) | ~40% of slide width | Inside `.illust-frame`, auto-scaled |
| Full-width accent | ~50% of slide height | Centered below title |
| Card icon | 48x48px inline | Small accent, not full illustration |

### What Makes Good Slide Illustrations

**Do:**
- Use the same visual style across all slides (flat, geometric, Factorem blue)
- Keep illustrations simple. 3-5 visual elements max.
- Ensure illustrations support the content, not compete with it
- Leave breathing room. The illustration frame has padding for a reason.

**Do not:**
- Use photorealistic images (they clash with the clean design)
- Add text inside illustrations (the slide text handles that)
- Use more than 3 colors in a single illustration
- Make the illustration the focal point. Content leads, illustration supports.
