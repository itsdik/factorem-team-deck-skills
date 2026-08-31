# Factorem Team Deck Skills

Two Claude Code skills for building Factorem-branded presentations. They ship the **brand system only**: colors, fonts, layouts, animations, logo assets, and reusable templates.

**They contain no company data.** Metrics, financials, customer names, and claims always come from you, verified. If a skill run ever needs a number you don't have, it should leave a `<REAL_METRIC>` placeholder and ask, never invent one.

## The two skills

| Skill | Output | Use for |
|-------|--------|---------|
| `team-factorem-deck` | Single polished HTML file (light theme, 16:9, Chart.js) | Customer decks, townhalls, talks, quick shareable decks |
| `team-factorem-premium-deck` | Multi-slide Next.js web app (dark, cinematic, framer-motion) | Event keynotes, partner presentations, decks where look matters most |

## Install

```bash
git clone https://github.com/itsdik/factorem-team-deck-skills.git
cp -r factorem-team-deck-skills/team-factorem-deck ~/.claude/skills/
cp -r factorem-team-deck-skills/team-factorem-premium-deck ~/.claude/skills/
```

Then in Claude Code, ask for a deck (or invoke `/team-factorem-deck` / `/team-factorem-premium-deck` directly).

## What's inside

```
team-factorem-deck/
  SKILL.md                    # Design system, content rules, workflow
  assets/                     # Factorem logo (blue + white PNG)
  references/html-template.md # Complete single-file HTML deck template
  references/slide-patterns.md# Deck structures + illustration prompts

team-factorem-premium-deck/
  SKILL.md                    # Depth recipe, typography, motion grammar
  assets/                     # Factorem logo (white PNG)
  scaffold/                   # Copyable Next.js deck engine
```

## Brand quick reference

- **Light decks**: background `#F8FAFC`, primary `#1272E3`, accent `#06B6D4`, font Inter.
- **Premium decks**: navy-to-black gradients, primary `#3b82f6`, fonts Space Grotesk + Playfair Display italic + Inter.
- **Logo on every slide**, top-left. Never invent a wordmark; use the PNGs in `assets/`.
- **No em dashes, no AI-sounding words** (see the banned-words table in each skill).
