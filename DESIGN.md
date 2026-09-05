# Design notes

Colors: orange, red, tan, cream. Layout follows tjmachinelearning.com — dark
banner, centered nav with underlines, one reading column.

Every color is a flat hex. No gradients, shadows, or transparency anywhere.
All the tokens are in the `@theme` block at the top of `src/app/globals.css`.

## Colors

| Token | Hex | Used for |
| --- | --- | --- |
| `page` | `#FBF2E8` | The page |
| `paper` | `#FFFBF5` | Quiet surfaces |
| `sand` | `#F2E4D2` | Empty officer frames |
| `clay` | `#E5D3BC` | Borders |
| `ember` | `#F2A03D` | Caret. Never text. |
| `orange` | `#E8752A` | Accents in photos. Never text. |
| `rust` | `#B03A1E` | Hover on filled buttons |
| `crimson` | `#8E2C1B` | Links, headings, current nav item |
| `ink` | `#241611` | Banner, footer, strong text |
| `ink-mid` | `#3A241B` | Banner button fill |
| `ink-soft` | `#6B5142` | Body text |
| `cream-soft` | `#D9C6B4` | Tagline on the banner |

Orange and ember never carry text, so everything on the site passes WCAG AA.

## Layout

- Banner: full width ink block, club name, tagline, one outline button.
- Nav: centered links under the banner. Current page is crimson with a 2px
  underline. Hamburger overlay on phones.
- Main: one column, max 64rem.
- Officers: round photo, then name and role on one row.
- Footer: ink bar, mark, school address, socials.

## Type

Open Sans, 400 for body and 700 for the club name and nav. Section headings
are crimson at regular weight.
