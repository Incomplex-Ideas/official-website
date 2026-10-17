# Decisions

## 2026-10-17 — Plain HTML/CSS/vanilla JS, no framework or build

Reason: the page is a static marketing site; no framework means the fastest load and zero tooling. Accepted trade-off: markup for all sections lives in one `index.html` instead of per-domain files.
Related domain: shell

## 2026-10-17 — Layout by page section under `site/`

Reason: sections are the business nouns of this site (hero, philosophy, values, products, contact), and instructions.md asks for domain folders. Accepted trade-off: HTML is not co-located with each domain's CSS.
Related domain: all

## 2026-10-17 — Motion limited to transform/opacity with reduced-motion support

Reason: keeps animation smooth on low-end devices and accessible. Accepted trade-off: no heavy parallax or scroll-jacking effects.
Related domain: shell
