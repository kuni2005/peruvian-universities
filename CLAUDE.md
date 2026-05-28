# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
This website is developed for a MUN team in Lima Peru.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint (Next.js core-web-vitals + TypeScript rules)
```

There is no test runner configured.

## Stack

- **Next.js 16.2.4** with App Router, **React 19**, **TypeScript**, **Tailwind CSS v4**
- Tailwind v4 uses `@theme` in `globals.css` instead of `tailwind.config.js` — do not create a config file

## Brand system

Brand tokens are defined in `src/app/globals.css` under `@theme` and must be used via Tailwind utilities:

| Utility | Value |
|---|---|
| `bg-pu-cyan` / `text-pu-cyan` | `#05C3DD` — primary accent |
| `bg-pu-dark` / `text-pu-dark` | `#003E51` — dark sections |
| `bg-pu-light` | `#8FDCF1` — light tint |
| `bg-pu-gray` | `#f5f5f5` — off-white sections |
| `font-bebas` | Bebas Neue — headings/display |
| `font-condensed` | Open Sans Condensed — sub-headings, labels |
| `font-body` | Heebo — body copy |

See `BRAND.md` for the full identity guide including the accent stripe color order.

## Page architecture

Each page in `src/app/` manually composes `<Navbar>`, sections, `<ColorStripe />` dividers, and `<Footer>` — there is no shared per-route layout wrapper. The root `src/app/layout.tsx` only sets fonts and global styles.

**Pages:** `/` · `/about` · `/conferences` · `/accion-peru` · `/experience`

### Navbar variants
`<Navbar variant="transparent" />` — overlays a hero image (absolute positioned, white text).  
`<Navbar variant="solid" />` (default) — white card with shadow, used on non-hero pages.

## Component conventions

- **`ImagePlaceholder`** — use this instead of `<img>` or `next/image` for all images. Pass `src` when the asset exists; omit it to render a labeled gray placeholder. This is intentional during development.
- **`"use client"`** — only on components that use React hooks (`useState`, `usePathname`). Server components are the default. Interactive components: `Navbar`, `HistoryTimeline`, `ConferenceTabs`, `ExperienceGallery`, `TestimonialsSlider`, `ContactForm`.
- **`ColorStripe`** — thin `h-1` divider rendered between major sections on every page.

## Image asset paths

Images live under `public/assets/images/<section>/`. Most image paths are currently placeholders (files don't exist yet). `ImagePlaceholder` handles missing files gracefully.

Logo variants expected at:
- `/assets/images/brand/logo-primary.svg` (dark)
- `/assets/images/brand/logo-white.svg` (white)
- `/assets/images/brand/logo-cyan.svg` (cyan)
- `/assets/images/brand/img-logo.png` (current fallback for white variant)
