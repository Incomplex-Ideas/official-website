Read `instructions.md`, `docs/CODEMAP.md` and the 5 most recent entries of
`docs/SESSION_LOG.md` before starting any task in this repo.

If the task touches a domain, read its entry in `docs/DECISIONS.md` first.

# incomplex ideas — company website

Single-page marketing site for incomplex ideas, a small technology company
that builds plain, useful products. Source of truth for the visual design is
`_localdesign/` (a Claude Design export).

## Hard constraints

- Never commit `_localdesign/`; it is git-ignored reference material only.
- No build step and no framework: plain HTML, CSS and vanilla JS, so the site
  stays fast and can be hosted on any static host.
- Animations must be subtle, GPU-friendly (transform/opacity only) and respect
  `prefers-reduced-motion`.
- Repo language is English (see `instructions.md` section 4).

## Preview

```
cd site && python3 -m http.server 8000
```
