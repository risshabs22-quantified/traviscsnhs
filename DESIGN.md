# Design notes

Brand direction: orange, red, tan, cream. Page structure follows tjmachinelearning.com (dark banner, centered underline nav, single reading column). Content and colour stay Travis CSNHS.

**The rule that governs everything here: every colour is flat.** No gradients, no blends, no `color-mix`, no shadows, no translucency. If a value in this codebase is not a single hex, it is a bug.

All tokens are defined once, in the `@theme` block at the top of `src/app/globals.css`.

## Colour tokens

| Token | Hex | Used for |
| --- | --- | --- |
| `page` | `#FBF2E8` | The page |
| `paper` | `#FFFBF5` | Quiet surfaces |
| `sand` | `#F2E4D2` | Empty officer frames |
| `clay` | `#E5D3BC` | Hairline borders |
| `ember` | `#F2A03D` | Caret. Never text. |
| `orange` | `#E8752A` | Accents in photos. Never text. |
| `rust` | `#B03A1E` | Hover on filled controls |
| `crimson` | `#8E2C1B` | Links, section headings, current nav |
| `ink` | `#241611` | Banner, footer, strong text |
| `ink-mid` | `#3A241B` | Banner button fill |
| `ink-soft` | `#6B5142` | Body text |
| `cream-soft` | `#D9C6B4` | Tagline on ink |

## Layout

Straight from TJ Machine Learning's structure:

- **Banner:** full-width ink block, centered club name, tagline, one outline button.
- **Nav:** centered row of links under the banner. Current page is crimson with a 2px underline. Hamburger overlay on small screens.
- **Main:** one reading column, max 64rem, GitHub-pages style headings and paragraphs.
- **Officers:** small round photo, then name and role on one row.
- **Footer:** ink bar, mark, school address, socials.

## Type

Open Sans, weight 400 for body and 700 for the banner name and nav. Section headings are crimson and regular weight, the way TJ does it.
