# Travis CSNHS

The website for the Computer Science National Honor Society chapter at Travis High School, Fort Bend ISD.

Live at **traviscsnhs.com**.

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

## Stack

| Thing | What |
| --- | --- |
| Framework | Next.js 15, App Router, TypeScript |
| Styling | Tailwind CSS v4, tokens defined in `src/app/globals.css`. Flat colour only: no gradients, shadows, or blur anywhere. |
| Motion | None on route changes. The home carousel is the only moving piece. |
| Fonts | Plus Jakarta Sans and JetBrains Mono, self hosted through `next/font` |
| Data | None. Every page is a static file. |

There is no database, no login, no CMS, and no form backend. Dues go to the district RevTrak store and questions go to Instagram.

## Where to edit copy

**Almost everything lives in one file: `src/lib/content.ts`.**

Officers, competitions, dues, requirements, the schedule, social handles, carousel slides, and every outside link are all there. Change the text in that file and the whole site updates.

| I want to change | Edit |
| --- | --- |
| An officer name, role, or photo | `officers` in `src/lib/content.ts` |
| Dues amount or what dues cover | `dues` |
| A competition description or catalog photo | `competitions` |
| Home carousel | `slides` |
| What happens each term | `schedule` |
| Instagram or Remind handle | `links` |
| The RevTrak dues link | `links.dues` |
| Page titles and descriptions | The `metadata` export at the top of each `src/app/*/page.tsx` |

### Adding or replacing an officer photo

1. Put the image in `public/officers/` as a `.jpg`.
2. Point the officer's `photo` at it, for example `/officers/name.jpg`.
3. If the face sits high or low in the frame, set `focus` (a CSS `object-position`, e.g. `"50% 20%"`).
4. An officer with no `photo` gets an empty frame. That is deliberate: if the deck had no photo, the site invents nothing.

Catalog and lab photos live in `public/media/`.

## Pages

```
/                    Home
/about               What CSNHS is, the year, who it is for
/membership          Requirements, dues, how to pay
/events              Four competitions and the term calendar
/events/usaco        Contest profile
/events/uil
/events/app-challenge
/events/code-jam
/officers            All seven officers
/contact             Instagram, Remind, email, where we meet
```

Plus `not-found.tsx` (404), `error.tsx` (a page that failed to render), and `global-error.tsx` (the whole site failed).

## Deploying (Vercel)

The domain is registered through Vercel, so this is short.

1. Push to `main` on GitHub.
2. In Vercel, **Add New → Project**, import the repo. Vercel detects Next.js, no settings to change.
3. **Project → Settings → Domains**, add `traviscsnhs.com` and `www.traviscsnhs.com`. Because the domain is already in this Vercel account, the DNS is wired up automatically.
4. Every push to `main` deploys to production. Every pull request gets its own preview URL.

No environment variables are needed.

### Before you push

Run `npm run build && npm start` locally and click through the site. The host builds the same commit, so a clean local build means a clean deploy. Batch your work into fewer pushes rather than pushing after every small edit.

## Other files

- `DESIGN.md` — colour tokens and the page structure
- `IMAGE-BRIEFS.md` — picture ideas
- `CONTENT-TODO.md` — the things officers still need to confirm

Built and run by students.
