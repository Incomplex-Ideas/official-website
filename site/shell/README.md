# Shell

## Purpose

Design tokens, base styles, header (with scroll progress bar that glows while scrolling and dims when idle), footer and shared motion for the whole page.

## Why it is designed this way

Tokens live in one file so the palette from the design can change in one place. Motion is a single dependency-free script using IntersectionObserver instead of an animation library to keep the page light.

## Links to other domains

Every other domain consumes `tokens.css` and `base.css` (`.wrap`, `.band`, `.btn`, `.reveal`). `motion.js` drives `.reveal` elements anywhere on the page.

## Read before changing

`.reveal` is only hidden when the `js` class is on `<html>`, so the site stays readable without JavaScript. Reveal classes are removed after the transition so card hover timing is not overridden. Animate only transform and opacity.
