# Travis CSNHS

The website for the Computer Science National Honor Society chapter at Travis High School, Fort Bend ISD.

Live at **traviscsnhs.com**.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Node 20 or newer.

## Stack

| Thing | What |
| --- | --- |
| Framework | Next.js 15, App Router, TypeScript |
| Styling | Tailwind CSS v4 plus a small set of layout classes in `src/app/globals.css` |
| Fonts | Open Sans and JetBrains Mono |
| Data | None. Every page is a static file. |

Copy lives in `src/lib/content.ts`. SEO lives in `src/lib/seo.ts`.

## Pages

```
/                    Home
/about               What CSNHS is
/membership          Requirements and dues
/events              Contests and the year
/events/[slug]       One contest
/officers            All seven officers
/contact             Instagram, Remind, email
```

Built and run by students.
