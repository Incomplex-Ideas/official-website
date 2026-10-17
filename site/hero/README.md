# Hero

## Purpose

First screen: positioning statement, two calls to action and the complex-to-incomplex line illustration.

## Why it is designed this way

Text load-in is pure CSS so it starts before JavaScript runs. The line sequence (dot travels, then whole line glows) is in `hero.js`.

## Links to other domains

Uses `.btn` from shell. Anchors link to `products` and `philosophy`.

## Read before changing

The line is one path drawn twice (muted base + accent overlay) so the dot and the final glow share geometry. Colors come from CSS tokens; only the muted base grey (#5a4a39) is hard-coded.
