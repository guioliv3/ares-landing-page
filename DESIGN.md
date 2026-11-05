---
title: ARES Aquarius Design System
version: 1.0
---

# ARES Aquarius Design System

## Overview

A reusable visual foundation for ARES residential project pages. The guiding idea is **Arquitetura em Revelação**: contemporary, serene, precise. Preserve the existing ARES Aquarius landing page composition, photography, section order, and interactions while applying consistent brand foundations.

## Colors

| Token | Value | Role |
|---|---|---|
| `--color-brand-charcoal` | `#192129` | Primary dark surface and brand anchor, Carvão Noturno |
| `--color-brand-sage` | `#95B5A3` | Secondary surface and calm supporting accent, Sálvia Mineral |
| `--color-brand-bronze` | `#9F8770` | Primary action, selected state, and focused detail, Bronze Arquitetônico |
| `--color-background-raised` | `#102124` | Raised dark section surface |
| `--color-background-light` | `#F8F8F4` | Light section and form surface |
| `--color-text-primary` | `#F8F8F4` | Primary text on dark surfaces |
| `--color-text-secondary` | `#D0D8D3` | Supporting text on dark surfaces |
| `--color-text-on-brand` | `#192129` | Text over bronze and sage |

Use bronze more visibly for primary buttons, active gallery tabs, and concise architectural details. Bronze actions use charcoal text. Keep body text contrast clear. Separate chapters with full color fields and photography. Use gradients only as image scrims needed for legibility; avoid decorative gradients, glow, glass effects, and ornamental shadows.

## Typography

- **Display and headings:** Michroma, loaded locally from `@fontsource/michroma` through `--font-display`.
- **Body, controls, navigation:** Archivo through `@fontsource/archivo`, assigned to `--font-body`.
- Use `--tracking-title-large: 0.1em` (tracking 100) for large headings and `--tracking-title-small: 0.02em` (tracking 20) for smaller headings. Keep line wrapping intentional at mobile sizes. Body copy remains readable at normal sizes and comfortable line height. Avoid using the display face for dense paragraphs or small controls.

## Layout

Keep the current landing page sequence and responsive composition: image-led hero, specification band, leisure gallery, plans, region/tour, nearby destinations, map/contact, final lead form, and footer. Use the shared content width token and existing section gutters. At narrow widths, stack content in reading order, keep gallery thumbnails scrollable, and preserve usable plant images and form controls. Do not introduce new sections or change the page's established information hierarchy as part of token adoption.

## Elevation & Depth

The system is primarily flat. Establish hierarchy through spacing, surface color, typography, and photography. Keep shadows limited to functional overlays where needed. Photo scrims may use gradients strictly to support readable text.

## Shapes

Favor straight edges and restrained borders to reflect architectural lines. Keep existing rounded or organic edges that belong to the supplied photography or section transition. Controls retain comfortable touch targets and visible keyboard focus.

## Components

- **Primary action:** Bronze Arquitetônico fill with Carvão Noturno text.
- **Secondary action:** Transparent or dark surface with a clear bronze border or hover state.
- **Lead forms:** Integrated with their section surface; persistent labels, visible focus, and clear validation/status messages.
- **Gallery controls:** Bronze active state with keyboard-accessible focus treatment.
- **Section headings:** Michroma; eyebrow, navigation, labels, and body remain Archivo.
- **Surfaces:** Charcoal for primary dark chapters, raised dark for supporting bands, and warm light for plans or other high-contrast content.

Implement shared values in `src/styles/tokens.css`. Components and page styles should consume semantic tokens instead of repeating brand color literals.

## Do's and Don'ts

- Do preserve the established ARES Aquarius layout, imagery, copy, and interactions while making structural styling changes.
- Do use the three supplied brand colors as the palette source of truth.
- Do reserve sage for supporting sections and accents; use bronze for stronger action and selection cues.
- Do verify text contrast and visible focus states on every surface.
- Don't add decorative gradients, glow, glass effects, or nonfunctional shadows.
- Don't invent claims about imagery, property details, location, or project features.
- Don't use unconfirmed renders as factual evidence that they depict ARES Aquarius.
