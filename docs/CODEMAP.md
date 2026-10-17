# Code Map

Static site rooted at `site/` (open `site/index.html`). Each folder holds the
styles (and scripts) for one section of the page; the markup is assembled in
`site/index.html` because there is no build step.

| Domain     | Purpose                                          | Entry point                  |
| ---------- | ------------------------------------------------ | ---------------------------- |
| shell      | Tokens, base styles, header/footer, shared motion | `site/shell/tokens.css`      |
| hero       | First screen and line illustration               | `site/hero/hero.css` (+ `hero.js`) |
| philosophy | Company belief statement                         | `site/philosophy/philosophy.css` |
| values     | Three value cards                                | `site/values/values.css`     |
| products   | Shipped / building / next pipeline               | `site/products/products.css` |
| contact    | Closing call to action                           | `site/contact/contact.css`   |

`_localdesign/` is git-ignored design reference, not part of the code.
