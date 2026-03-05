# Zennes Site Rebuild — Design Document

**Date**: 2026-03-04
**Status**: Approved

## Overview

Full rebuild of zennes.io as a single-page landing site for an AI automation consultancy targeting Latin American businesses. Vanilla HTML, CSS, and JS — no frameworks.

## Design Concept: "Warm Precision"

An AI consultancy site that feels human and grounded, not cold and techy. The core tension: **warm earth tones + sharp geometric precision**. Terracotta meets Swiss design. This signals "we bring order to chaos" while feeling approachable.

**Differentiator**: The contrast between warm, almost analog textures and razor-sharp layout precision. No one in the AI space uses this palette — it stands out immediately.

**Unforgettable element**: Editorial serif headings on a dark tech site creates instant visual tension — editorial meets technology.

## Tech Stack

- Vanilla HTML5
- Vanilla CSS (custom properties, no preprocessor)
- Vanilla JavaScript (ES modules, no build step)
- No frameworks, no bundler

## Color Palette

| Role               | Color            | Hex       |
|---------------------|-----------------|-----------|
| Background          | Rich warm black  | `#0F0D0A` |
| Surface (cards, nav) | Dark warm brown | `#1A1714` |
| Border              | Muted bronze     | `#2A2520` |
| Primary text        | Warm cream       | `#F5F0E8` |
| Secondary text      | Dusty sand       | `#A69B8A` |
| Accent primary      | Burnt terracotta | `#C4572A` |
| Accent secondary    | Warm amber       | `#D4941C` |
| Accent highlight    | Bright copper    | `#E87040` |

## Typography

- **Display/Headings**: Fraunces — variable optical-size serif, quirky warmth with editorial confidence. Unexpected for tech, perfectly matches "warm precision" concept.
- **Body**: Satoshi (from Fontshare) — distinctive geometric sans with character, avoids generic territory
- **Sizing**: Fluid with clamp() — hero heading ~clamp(3rem, 6vw, 5.5rem)
- **Body base**: 16-18px, line-height 1.6

## Page Sections

### 1. Navigation
- Logo left, minimal links right
- Thin bottom border in bronze
- Sticky on scroll with subtle background blur
- Hamburger menu on mobile

### 2. Hero
- Massive serif heading, left-aligned, **breaks the grid** — extends beyond max-width, bleeds toward viewport edge
- One-line subtext below in secondary text color
- Two CTA buttons side-by-side: Email (solid terracotta) + WhatsApp (outlined terracotta)
- Dramatic negative space on the right
- Gradient text effect on heading (terracotta → amber)
- **Geometric accent**: thin diagonal copper line or arc positioned behind the heading as a decorative element

### 3. What We Do
- 3-4 service cards in a **staggered/overlapping layout** — cards offset vertically, not aligned to a neat grid
- Each card: icon/symbol, title, brief description
- Cards have surface background color, 1px bronze border
- Subtle lift + border-color shift to copper on hover
- **Dot grid pattern** as subtle background texture on this section — reinforces "precision" concept

### 4. How It Works
- Horizontal stepped process (3-4 steps)
- **Oversized decorative numbers** positioned as background elements — overlapping the content, ~3x the size of step text, at low opacity in accent color
- Connected by a thin copper line
- Each step: number, title, brief description
- Stacks vertically on mobile

### 5. Contact
- Split layout: left has heading + brief text, right has CTA buttons
- Email button: solid terracotta bg, cream text, mail icon
- WhatsApp button: outlined (transparent bg, terracotta border), WhatsApp icon
- Both buttons full-width and stacked on mobile

### 6. Footer
- Minimal: logo, copyright, social links
- Thin top border in bronze

## Layout

- **Grid system**: CSS Grid with asymmetric columns
- **Content not centered predictably** — hero text left-aligned with dramatic negative space
- **Oversized typography** dominates viewport
- **Horizontal rules and geometric dividers** — thin copper lines creating structure
- **Max content width**: ~1200px with generous padding

## Motion & Animation

**One hero moment — the page load sequence is the star:**
- **Page load (primary)**: Staggered reveal — nav slides down, hero heading fades up word-by-word with slight Y translation, subtext fades in, CTA buttons pop in last. This is the one well-orchestrated moment.
- **Scroll reveals (minimal)**: IntersectionObserver — simple opacity fade only (no translateY on every element), applied sparingly to section headings and card groups as a whole
- **Hover states**: CTA buttons get warm glow (terracotta box-shadow), cards lift with border-color shift
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` — smooth, slightly springy deceleration
- All transitions CSS-only, no JS animation libraries

## Backgrounds & Texture

- **Grain overlay**: Subtle noise texture across entire page via CSS SVG filter at ~3-5% opacity — analog warmth
- **Gradient mesh**: Faint radial gradient blobs of terracotta/amber at ~5% opacity behind key sections — depth without being obvious
- **Card surfaces**: Slightly lighter than background with 1px border, subtle inner glow on hover

## Responsive Strategy

- **Desktop (1024px+)**: Full asymmetric grid, large typography, side-by-side CTAs
- **Tablet (768-1023px)**: Simplified 2-col grid, reduced spacing
- **Mobile (<768px)**: Single column, bold but downsized heading, hamburger nav, stacked CTAs, vertical process steps

## CTA Details

- **Email**: `mailto:` link styled as button, mail icon (inline SVG)
- **WhatsApp**: `https://wa.me/` link styled as button, WhatsApp icon (inline SVG)
- No form on page — direct action buttons only

## What This Is NOT

- No purple/indigo gradients
- No system fonts or Inter/Roboto
- No centered-everything layouts
- No generic AI aesthetic
- No framework dependencies
- No build step required
