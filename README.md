# Travis CSNHS

The website for the Computer Science National Honor Society chapter at Travis High School, Fort Bend ISD.

Live at **traviscsnhs.com**.

---

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Check a production build before you push. It catches almost everything the host would catch:

```bash
npm run build
npm start          # http://localhost:3000
```

Node 20 or newer.

---

## Stack

| Thing | What |
| --- | --- |
| Framework | Next.js 15, App Router, TypeScript |
| Styling | Tailwind CSS v4, tokens defined in `src/app/globals.css` |
| Motion | CSS animations for anything that affects content, Framer Motion for the nav pill, the mobile sheet, and the hero parallax |
| Fonts | Plus Jakarta Sans and JetBrains Mono, self hosted through `next/font` |
| Data | None. Every page is a static file. |

There is no database, no login, no CMS, and no form backend. Dues go to the district RevTrak store and questions go to Instagram.

---

## Where to edit copy

**Almost everything lives in one file: `src/lib/content.ts`.**

Officers, competitions, dues, requirements, the schedule, social handles, and every outside link are all there. Change the text in that file and the whole site updates. You should not have to open a component to fix a typo.

| I want to change | Edit |
| --- | --- |
| An officer name, role, or photo | `officers` in `src/lib/content.ts` |
| Dues amount or what dues cover | `dues` |
| A competition description | `competitions` |
| What happens each term | `schedule` |
| Instagram or Remind handle | `links` |
| The RevTrak dues link | `links.dues` |
| Hero headline | `hero` |
| Page titles and descriptions | The `metadata` export at the top of each `src/app/*/page.tsx` |

### Adding or replacing an officer photo

1. Put the image in `public/officers/` as a `.jpg`.
2. Point the officer's `photo` at it, for example `/officers/name.jpg`.
3. If the face sits high or low in the frame, set `focus` (a CSS `object-position`, e.g. `"50% 20%"`).
4. An officer with no `photo` gets a monogram card instead. That is deliberate. Do not substitute a stock avatar.

---

## Pages

```
/             Home
/about        What CSNHS is, the year, who it is for
/membership   Requirements, dues, how to pay
/events       Four competitions and the term calendar
/officers     All seven officers
/contact      Instagram, Remind, email, where we meet
```

Plus `not-found.tsx` (404), `error.tsx` (a page that failed to render), `global-error.tsx` (the whole site failed), and a `loading.tsx` skeleton for every route.

---

## Deploying (Vercel)

The domain is registered through Vercel, so this is short.

1. Push to `main` on GitHub.
2. In Vercel, **Add New → Project**, import the repo. Vercel detects Next.js, no settings to change.
3. **Project → Settings → Domains**, add `traviscsnhs.com` and `www.traviscsnhs.com`. Because the domain is already in this Vercel account, the DNS is wired up automatically.
4. Every push to `main` deploys to production. Every pull request gets its own preview URL.

No environment variables are needed.

### Before you push

Run `npm run build && npm start` locally and click through the site. The host builds the same commit, so a clean local build means a clean deploy. Batch your work into fewer pushes rather than pushing after every small edit.

---

## How the motion works, in one paragraph

Nothing on this site is hidden by JavaScript that might not arrive. An inline script adds a `js` class to `<html>` before the first paint, and only then do the scroll reveal rules in `globals.css` apply. With JavaScript off, slow, or broken, every page renders fully readable. The hero entrance is a plain CSS animation with `animation-fill-mode: backwards`, so its resting state is already the finished state. Everything ambient stops for anyone with `prefers-reduced-motion` set.

---

## Other files

- `DESIGN.md` — the exact colour tokens and why each one exists
- `IMAGE-BRIEFS.md` — picture ideas to hand to an image generator
- `CONTENT-TODO.md` — the things officers still need to confirm

---

Built and run by students.
