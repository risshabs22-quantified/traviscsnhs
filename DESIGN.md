# Design notes

Brand direction: orange, red, tan, cream. Page structure follows crumblcookies.com (centered logo, promo carousel, oversized alternating rows). Content and colour stay Travis CSNHS.

**The rule that governs everything here: every colour is flat.** No gradients, no blends, no `color-mix`, no shadows, no translucency, no grain overlays, no backdrop blur. Depth comes from one solid surface sitting on another. If a value in this codebase is not a single hex, it is a bug.

All tokens are defined once, in the `@theme` block at the top of `src/app/globals.css`.

## Colour tokens

| Token | Hex | Used for |
| --- | --- | --- |
| `page` | `#FBF2E8` | The page. One flat warm tint, edge to edge. |
| `paper` | `#FFFBF5` | Footer, quiet surfaces |
| `sand` | `#F2E4D2` | Spotlight rows, badges, skeletons, inner fills |
| `clay` | `#E5D3BC` | Hairline borders |
| `ember` | `#F2A03D` | Badge fill on dark, caret. Never text. |
| `orange` | `#E8752A` | Active carousel dot, loader bar. Never text. |
| `rust` | `#B03A1E` | Button hover |
| `crimson` | `#8E2C1B` | Primary buttons, links |
| `ink` | `#241611` | Body text, carousel band, hover fill on spotlight rows |
| `ink-mid` | `#3A241B` | Inactive carousel dots |
| `ink-soft` | `#6B5142` | Supporting paragraphs |
| `cream-soft` | `#D9C6B4` | Muted text on `ink` |

Orange and ember never carry text. Anything you have to read sits on crimson or darker, or ink on a pale fill.

Measured, and all passing:

| Pair | Contrast |
| --- | --- |
| `ink` on `page` | 15.8:1 |
| `ink-soft` on `page` | 6.6:1 |
| `crimson` on `page` | 7.5:1 |
| `page` on `ink` | 17.0:1 |
| `cream-soft` on `ink` | 10.6:1 |
| `page` on `crimson` | 7.5:1 |

Body text is `#241611`, a warm brown-black, not `#000`.

## Layout

Straight from Crumbl's structure, restated in this palette:

- **Header:** sticky, full width, cream. Menu on the left, wordmark centered, Join on the right. Links live in a left drawer, not a pill nav.
- **Home hero:** full-bleed photo carousel. Copy sits in a solid ink card on the image, not in a translucent overlay.
- **Section intro:** a small sand badge, then a very large left-aligned headline, then one sentence.
- **Spotlight rows:** the catalog module. A large object photo hangs off a rounded sand card. Name, one paragraph, two actions. Rows alternate left and right. Hover swaps the card to ink.
- **Inner pages:** optional full-width photo, then badge + huge title + one lead sentence.
- **Contest profiles:** `/events/[slug]`. Photo on one side, facts on the other, the way Crumbl does a flavor page.
- **Footer:** four link columns plus the mark.
- **404 / 500:** empty-lab photo on 404, tiger in a terminal, huge status code.

Radii: 22px on mobile and 36 to 40px on desktop for the big cards. Pills for buttons.

Borders are 1px `clay` hairlines, used only where two surfaces are too close in value to separate on their own.

## Type

- **Display and body:** Plus Jakarta Sans. Headlines at weight 800 with `-0.04em` tracking and `0.96` line-height.
- **Badges:** sentence case, 14px, weight 600, sand fill. Not mono, not uppercase, not letterspaced.
- **Mono (JetBrains Mono):** kept for the `.tag` utility on the 404 terminal and nowhere else.

Headlines are sized with `clamp()` against the viewport.

## Motion

| What | How long | Curve |
| --- | --- | --- |
| Carousel fade | 500ms | default |
| Spotlight hover fill | 300ms | default |
| Scroll reveal (blocks) | 460ms, staggered 60ms | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Route change | 380ms fade and rise | same |
| Button colour swap | 200ms | same |
| Loader bar | 180 to 200ms | linear / ease-out |
| Skeleton sweep | 1.5s loop | linear |

Two rules hold it together:

1. **Motion never hides content.** Reveals are gated behind a `js` class set by an inline script before first paint. If the JavaScript never runs, the page is simply there.
2. **`prefers-reduced-motion` stops all of it.** Autoplay, reveals, page transitions, and the skeleton sweep switch off.

## The tiger

The chapter mark is a tiger looking over a laptop: `src/app/icon.svg` (favicon) and `src/components/tiger.tsx` (the 404 and error screens). Every fill is one flat palette colour.

The header wordmark uses a reduced version: a screen, two ears, one chevron.

## Photos

Catalog stills and lab photos live in `public/media/`. Officer portraits live in `public/officers/`. Generated people are never used as named officers. An officer with no photo gets an empty sand frame.
