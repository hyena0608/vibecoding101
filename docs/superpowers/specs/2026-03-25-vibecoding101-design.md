# VibeCoding101 — Design Spec

## Overview

A content site targeting non-developer beginners who want to learn AI-powered "vibe coding." Monetized through Google AdSense. Deployed on Vercel at `vibecoding101.vercel.app`.

**Audience:** Complete non-developers — no technical background assumed.
**Language:** English primary, Korean as future phase.
**MVP scope:** Blog + interactive tutorials. Tool directory deferred to phase 2.

## Site Structure

```
vibecoding101.vercel.app/
├── /                           — Hero + featured content + CTA
├── /blog                       — Blog post listing (paginated)
├── /blog/[slug]                — Individual blog post (MDX)
├── /tutorials                  — Tutorial listing
├── /tutorials/[slug]           — Tutorial with embedded playground
├── /about                      — About the site
└── /sitemap.xml + robots.txt   — SEO essentials
```

### Home Page Layout

1. Hero — "Learn AI Coding — No Experience Needed" with friendly illustration
2. Featured tutorials (3 cards)
3. Latest blog posts (3 cards)
4. "What is Vibe Coding?" intro section
5. Footer with AdSense

## Tech Stack

- **Next.js 16** — App Router, SSG via `generateStaticParams`
- **MDX** via `next-mdx-remote` — content as `.mdx` files in `content/`
- **Tailwind CSS** — utility-first styling
- **shadcn/ui** — Card, Button, Badge, etc.
- **Geist font** — via `next/font`
- **Google AdSense** — loaded via `next/script`

## Content Architecture

```
content/
├── blog/
│   ├── what-is-vibe-coding.mdx
│   ├── top-5-ai-coding-tools-2026.mdx
│   └── your-first-app-with-ai.mdx
└── tutorials/
    ├── build-todo-app-with-cursor.mdx
    └── create-landing-page-with-v0.mdx
```

### MDX Frontmatter Schema

```yaml
title: string          # Page title + og:title
description: string    # Meta description + og:description
date: string           # ISO date (YYYY-MM-DD)
category: string       # "basics" | "tools" | "tutorial"
thumbnail: string      # Path to OG image
```

### Custom MDX Components

- `<Playground url="..." />` — StackBlitz/CodeSandbox iframe embed
- `<AdSlot />` — In-article ad placement
- `<Callout type="tip|warning|info">` — Highlighted info blocks
- `<Step number={1} title="...">` — Tutorial step wrapper

## Design Tokens

- **Mode:** Light (default) — friendly, non-intimidating
- **Primary:** Warm violet `#7C3AED`
- **Background:** `#FAFAFA`
- **Text:** `#1A1A2E` (near-black, softer than pure black)
- **Body font size:** 18px — easy reading for non-technical audience
- **Border radius:** `rounded-xl` (12px) — soft, approachable
- **Font:** Geist Sans (body), Geist Mono (code blocks)
- **Shadows:** Soft (`shadow-sm` to `shadow-md`)

## AdSense Integration

Google AdSense script loaded in root layout via `next/script` strategy `afterInteractive`.

### Ad Slots (4 per page)

| Slot | Size | Position |
|------|------|----------|
| Leaderboard | 728x90 | Below navbar |
| In-article | Responsive | Between content sections (via `<AdSlot />`) |
| Sidebar | 300x250 | Desktop only, sticky scroll |
| Bottom banner | 728x90 | Above footer |

### Reusable Component

`<AdUnit slot="..." format="auto" />` renders `<ins className="adsbygoogle">` with data attributes.

No ads in homepage hero section.

## SEO Strategy

- `generateMetadata()` on every page — title, description, OG image
- Keyword-rich slugs (e.g., `/blog/what-is-vibe-coding`)
- Auto-generated `sitemap.xml` (Next.js built-in)
- `robots.txt` — allow all crawlers
- JSON-LD structured data: `Article` for blog, `HowTo` for tutorials
- Semantic HTML: `<article>`, `<nav>`, proper heading hierarchy

## Seed Content (Launch)

| Type | Title | Target Keyword |
|------|-------|---------------|
| Blog | What is Vibe Coding? A Complete Beginner's Guide | vibe coding |
| Blog | 5 Best AI Coding Tools for Non-Developers (2026) | ai coding tools beginners |
| Blog | How to Build Your First App Without Writing Code | build app without coding |
| Tutorial | Build a Todo App with Cursor in 10 Minutes | cursor tutorial beginner |
| Tutorial | Create a Landing Page with v0 — Zero Coding | v0 tutorial |

## Phase 2 (Deferred)

- Tool directory (`/tools`, `/tools/[slug]`)
- Korean i18n
- Newsletter signup + email list
- Custom domain
- Dark mode toggle
