# Design notes

Brand direction: orange, red, tan, cream. Warm paper, not a white screen.

All tokens are defined once, in the `@theme` block at the top of `src/app/globals.css`. Tailwind generates the utilities from them, so `bg-crimson` and `text-ink-soft` are always the values below and nothing else.

---

## Colour tokens

| Token | Hex | Used for | Contrast on cream |
| --- | --- | --- | --- |
| `cream` | `#FBF6EE` | Page background, text on dark surfaces | — |
| `paper` | `#FFFDF8` | Cards, the nav pill once you scroll | — |
| `sand` | `#F0E3D0` | Secondary surfaces, tags, icon circles | — |
| `clay` | `#E4CDB2` | Hairlines and card borders | — |
| `ember` | `#F2A03D` | Gradient blooms, hero orb, never text | 1.9:1 |
| `orange` | `#E8752A` | Highlights, small accents, large numerals | 2.8:1 |
| `rust` | `#B03A1E` | Button hover, the CTA band gradient | 5.7:1 |
| `crimson` | `#8E2C1B` | Primary buttons, links, eyebrows, active nav | **7.7:1** |
| `ink` | `#2A1710` | Body text and headlines | **13.2:1** |
| `ink-soft` | `#6B5142` | Supporting paragraphs and labels | **6.7:1** |

### Why the palette splits the way it does

The obvious move with an orange brand is to make the buttons orange. That fails WCAG AA: cream text on `#E8752A` is only 3.0:1, and orange text on cream is 2.8:1. Both are below the 4.5:1 floor for normal text.

So the palette has a rule:

**Orange and ember are never allowed to carry text.** They exist as light — gradient blooms, the hero orb, hover glows, the caret in the terminal chip, a 6px accent bar. Anything that has to be *read* uses `crimson` or darker.

That keeps the site unmistakably orange while every string on it clears AA:

- `ink` on `cream` — 13.2:1
- `ink-soft` on `cream` — 6.7:1 (and 5.3:1 at the warmest point of the hero gradient, still AA)
- `crimson` on `cream` — 7.7:1
- `cream` on `crimson` — 7.7:1
- `cream` on `rust` — 5.7:1, which is why the closing CTA band's gradient runs crimson → rust and stops there. The orange in that band is a blurred bloom behind the text, not underneath it.

Body text is `#2A1710`, a warm brown-black, not `#000`. Pure black against a cream page reads as a printing error.

---

## Surfaces

The page background is not flat. It is a cream base with three soft radial washes layered on it: an ember bloom at the top right, a sand pool at the left, and a faint orange glow at the bottom. It is fixed, so it does not slide around while you scroll.

On top of that sits a 5% SVG turbulence grain, multiplied. It is there to stop the large flat gradients from banding on cheap screens, and to make the whole thing read as paper.

Cards are `paper` at 88% opacity with an 8px backdrop blur, so the page wash shows through faintly rather than being covered up.

---

## Shape and depth

| | |
| --- | --- |
| Hero and page-header stage | 28px on mobile, up to 44px on desktop |
| Cards | 26px |
| Small cards and inner frames | 18-22px |
| Buttons, tags, nav | fully rounded pills |
| Icon buttons | circles |

Three shadow tokens, all warm-tinted (`rgb(42 23 16)`, never neutral grey) and all soft:

- `--shadow-soft` — resting cards
- `--shadow-lift` — hover, and the hero stage
- `--shadow-pill` — buttons

Borders are hairlines in `clay` at 55-70% opacity, and only where surface contrast alone is not enough.

---

## Type

- **Display and body:** Plus Jakarta Sans. Headlines run at weight 800 with `-0.035em` tracking and `0.94` line-height, which is what makes them read as a poster rather than a paragraph.
- **Labels:** JetBrains Mono, uppercase, `0.22em` tracking, 11px. This is lifted straight from the interest-meeting deck, which used mono for every section label and slide number. It ties the site to the source material.

Headlines are sized with `clamp()` against the viewport, so there are no font-size breakpoints to maintain. The hero is `clamp(3.1rem, 13vw, 8.5rem)`.

`text-wrap: balance` on headlines, `text-wrap: pretty` on paragraphs.

---

## Motion

| What | How long | Curve |
| --- | --- | --- |
| Hero words rising | 850ms, staggered 90ms | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Section headlines, word by word | 720ms, staggered 45ms | same |
| Scroll reveal (blocks) | 460ms, staggered 60ms | same |
| Route change | 420ms fade and rise | same |
| Card hover lift | 300ms | same |
| Card pointer glow fade | 400ms | same |
| Button press | 200ms | same |
| Hero gradient drift | 18-24s loop | ease-in-out |
| Floating shapes | 9-13s loop, each offset | ease-in-out |
| Hero scroll parallax | scroll-linked, no duration | linear in scroll |

One easing curve for everything that responds to you, long slow loops for everything ambient, and one scroll-linked layer. That is the whole system.

Four pieces do most of the work:

- **Headlines arrive word by word.** Each word sits in its own clipped box and slides up from behind the edge, 45ms apart. The clip does the hiding, so the words never fade, they just appear from nowhere.
- **The hero has depth on scroll.** As the stage leaves, the headline drifts up and dims while the ambient layer behind it moves the other way and scales up slightly. Two speeds, so the card reads as having a front and a back.
- **Cards light up under the cursor.** One document-level pointer listener sets two CSS variables on whichever card you are over, and a warm radial highlight tracks the pointer inside it. It paints at `z-index: -1`, above the card background and below every bit of content, so it can never sit on top of text.
- **Route changes are one gesture.** The loader bar fills across the top while the next page resolves, then the new page rises in over 420ms.

Two rules hold it together:

1. **Motion never hides content.** Reveals are gated behind a `js` class set by an inline script before first paint, and the hero uses `animation-fill-mode: backwards`. If the JavaScript never runs, the page is simply there.
2. **`prefers-reduced-motion` stops all of it.** Gradient drift, floating shapes, parallax, reveals, and the skeleton shimmer all switch off, and nothing moves.

---

## The tiger

The chapter mark is a tiger looking over a laptop, drawn as SVG at `src/app/icon.svg` (favicon) and `src/components/tiger.tsx` (the 404 and error screens).

It is built from the palette: `ember → orange` fur, `crimson` inner ears and nose, `ink` stripes, `cream` muzzle, on a `rust → crimson` tile. The laptop screen is `ink` so the orange head has something dark to sit against, and the prompt chevron sits low enough to stay clear of the tiger's chin. Pointed ears, forehead stripes, cheek stripes, and whiskers are what keep it reading as a tiger and not a bear at 32px.

The header wordmark uses a reduced version of the same drawing: a screen, two ears, one chevron. Anything more detail than that turns to mush at 22px.
