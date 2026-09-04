# Design notes

Brand direction: orange, red, tan, cream. Structure and motion follow phantom.com.

**The rule that governs everything here: every colour is flat.** No gradients, no blends, no `color-mix`, no shadows, no translucency, no grain, no backdrop blur. Depth comes from one solid surface sitting on another, and nothing else. If a value in this codebase is not a single hex, it is a bug.

All tokens are defined once, in the `@theme` block at the top of `src/app/globals.css`.

---

## Colour tokens

| Token | Hex | Used for |
| --- | --- | --- |
| `page` | `#FBF2E8` | The page. One flat warm tint, edge to edge. |
| `paper` | `#FFFBF5` | Cards |
| `sand` | `#F2E4D2` | Inner page headers, tags, icon circles, nav pill |
| `clay` | `#E5D3BC` | Hairline borders |
| `ember` | `#F2A03D` | Discs, the caret. Never text. |
| `orange` | `#E8752A` | Discs, accent bars, the loader bar. Never text. |
| `rust` | `#B03A1E` | Button hover, hairlines on crimson |
| `crimson` | `#8E2C1B` | Primary buttons, links, the CTA band |
| `ink` | `#241611` | Body text, and the hero stage fill |
| `ink-mid` | `#3A241B` | The watermark inside the hero, one step off `ink` |
| `ink-soft` | `#6B5142` | Supporting paragraphs and eyebrows |
| `cream-soft` | `#D9C6B4` | Muted text on `ink` or `crimson` |

### Why the palette splits the way it does

The obvious move with an orange brand is orange buttons. That fails WCAG AA: `page` on `#E8752A` is 3.0:1 and orange on `page` is 2.8:1, both under the 4.5:1 floor.

So: **orange and ember never carry text.** They are discs in the hero, a 3px accent bar, the loader bar, a blinking caret. Anything you have to *read* sits on `crimson` or darker.

Measured, and all passing:

| | |
| --- | --- |
| `ink` on `page` | 15.8:1 |
| `ink-soft` on `page` | 6.6:1 |
| `crimson` on `page` | 7.5:1 |
| `ink-soft` on `paper` | 7.1:1 |
| `ink-soft` on `sand` | 5.8:1 |
| `crimson` on `sand` | 6.7:1 |
| `paper` on `ink` (hero headline) | 17.0:1 |
| `cream-soft` on `ink` (hero eyebrow) | 10.6:1 |
| `page` on `crimson` (band headline) | 7.5:1 |
| `cream-soft` on `crimson` (band body) | 5.0:1 |

Because every fill is flat, each of these numbers holds across the whole surface. That is the practical argument for dropping the gradients: a gradient only guarantees its contrast at one point along the ramp, so you end up designing for its worst end anyway.

Body text is `#241611`, a warm brown-black, not `#000`. Pure black on a warm page reads as a printing error.

---

## Layout

Straight from Phantom's structure:

- **Page**: one flat tint, full bleed, nothing layered on it.
- **Hero**: a large rounded card inset from the page edges, filled with one flat dark colour, the type centred inside it. Eyebrow, headline, one pill button. No paragraph, no secondary link, no clutter.
- **Sections below**: a pill chip label, then a big left-aligned headline, with an optional "see more" link pushed to the right.
- **Tiles, not cards.** Every block below the fold is a large flat panel: one saturated fill, a short headline at the top, a big figure at the bottom, no border and no body paragraph. The pattern this replaced — a row of small bordered boxes each holding an icon, a title and two lines of copy, or a hairline table of label-left/value-right rows — is the single strongest visual tell of a generated site, and it was all over the old version.
- **Competitions scroll.** Three tiles fit, the fourth peeks off the right edge. The peek is the affordance.
- **Closing band**: a rounded card filled flat crimson.
- **Footer**: four low-contrast columns with a lot of space.

Radii: 24px on mobile and 32px on desktop for the big stages, 26px for cards, pills for anything clickable, circles for icon buttons.

Borders are 1px `clay` hairlines, used only where two surfaces are too close in value to separate on their own.

---

## Type

- **Display and body:** Plus Jakarta Sans. Headlines at weight 700 with `-0.028em` tracking and `1.03` line-height. Weight 700, not 800 — Phantom's headlines are bold, not black, and the extra weight was part of what made the old version look overdone.
- **Eyebrows:** plain sentence case, 16px, weight 500, `ink-soft`. Not mono, not uppercase, not letterspaced. A page covered in tracked-out mono labels is a tell, and Phantom uses none.
- **Mono (JetBrains Mono):** kept for exactly one job, the `.tag` utility — index numbers, format tags, and short data labels. Nowhere else.

Headlines are sized with `clamp()` against the viewport, so there are no font-size breakpoints to maintain. The hero is `clamp(3rem, 11.5vw, 7.5rem)`.

---

## Motion

| What | How long | Curve |
| --- | --- | --- |
| Hero words rising | 850ms, staggered 90ms | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Section headlines, word by word | 720ms, staggered 45ms | same |
| Scroll reveal (blocks) | 460ms, staggered 60ms | same |
| Route change | 420ms fade and rise | same |
| Card hover lift | 280ms | same |
| Button colour swap | 200ms | same |
| Hero discs floating | 9-14s loops, each offset | ease-in-out |
| Hero pointer parallax | spring, two depths | — |

One easing curve for everything that responds to you, long slow loops for the ambient layer.

Three pieces do most of the work:

- **Headlines arrive word by word.** Each word sits in its own clipped box and slides up from behind the edge, 45ms apart. The clip does the hiding, so words appear from nowhere rather than fading.
- **The hero has a moving field.** Eight solid discs drift on their own timers, and under a mouse they split into two parallax depths against the watermark behind them. Flat circles, like Phantom's tokens — no glow, no blur, no shadow.
- **Route changes are one gesture.** The loader bar fills across the top while the next page resolves, then the new page rises in over 420ms.

Two rules hold it together:

1. **Motion never hides content.** Reveals are gated behind a `js` class set by an inline script before first paint, and the hero entrance uses `animation-fill-mode: backwards`. If the JavaScript never runs, the page is simply there.
2. **`prefers-reduced-motion` stops all of it.** Floating discs, parallax, reveals, page transitions, and the skeleton sweep all switch off.

---

## The tiger

The chapter mark is a tiger looking over a laptop: `src/app/icon.svg` (favicon) and `src/components/tiger.tsx` (the 404 and error screens). Every fill is one flat palette colour.

`orange` fur, `crimson` inner ears and nose, `ink` stripes, `page` muzzle and whiskers, on a flat `crimson` tile. The laptop screen is `ink` so the orange head has something dark to sit against, and the prompt chevron sits low enough to clear the tiger's chin. Pointed ears, forehead stripes, cheek stripes, and whiskers are what keep it reading as a tiger rather than a bear at 32px.

An oversized, ear-and-head-only version of the same silhouette sits behind the hero headline in `ink-mid`, one step off the stage colour. That is the equivalent of Phantom's ghost watermark.

The header wordmark uses a reduced version: a screen, two ears, one chevron. More detail than that turns to mush at 22px.
