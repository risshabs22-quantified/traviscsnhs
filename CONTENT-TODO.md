# Replace me

Every fact on this site came out of `CSNHS-Interest-Meeting.pptx` (13 slides, 2026-27). The list below is everything the deck did **not** say. Nothing here was invented to fill a gap. Where the deck was silent, the site either stays vague on purpose or shows a placeholder.

Each item says where to fix it. The matching `<!-- TODO: confirm with officers -->` comments are in the source too, so you can grep for `TODO: confirm with officers`.

---

## 1. Vice President photo

**Where** `officers` in `src/lib/content.ts`, and a note in `src/app/officers/page.tsx`

Slide 5 had a grey placeholder avatar for Raheeq Mobin instead of a photo. The site shows an `RM` monogram card instead, styled to match the other cards.

**To fix:** drop a photo in `public/officers/raheeq-mobin.jpg` and add `photo: "/officers/raheeq-mobin.jpg"` to that officer.

---

## 2. Chapter email address

**Where** `links.email` in `src/lib/content.ts`

The deck lists Instagram and Remind but no email. The contact page currently shows `traviscsnhs@gmail.com`, which is a **guess and needs replacing or deleting**.

**To fix:** put the real address in, or delete the Email card from `src/app/contact/page.tsx` if the chapter does not use one.

---

## 3. Meeting day, time, and room

**Where** `src/app/contact/page.tsx`, the "Where we meet" card

The deck never says when or where meetings happen. The site says meetings run in the computer lab and that times go out on Instagram and Remind, which is true and vague on purpose.

**To fix:** replace that paragraph with the real day, time, and room number.

---

## 4. Actual contest dates

**Where** `schedule` in `src/lib/content.ts`, plus notes in `src/app/events/page.tsx` and `src/components/sections/events-strip.tsx`

The deck gives shapes, not dates: USACO has "four contest windows a year", the App Challenge closes "Nov", Code Jam runs "once in the fall and once in the spring", UIL goes "district to state". The site repeats exactly those windows. **No date was made up.**

**To fix:** once officers set them, swap each `when` field for a real date. The layout already handles longer strings.

---

## 5. Sponsor and teacher

**Where** nowhere yet

The deck never names a sponsoring teacher. Nothing on the site claims one.

**To fix:** if the chapter has a sponsor who should be listed, add them to the Officers page or the footer.

---

## 6. Remind join link

**Where** `links.remindHowTo` in `src/lib/content.ts`

The deck gives the class code `@csnhs2026` but not a join URL. The site links to `remind.com/join`, the generic page where you enter a code.

**To fix:** replace it with the chapter's own Remind join link if there is one.

---

## 7. Instagram URL

**Where** `links.instagram` in `src/lib/content.ts`

The deck gives the handle `@traviscsnhs`. The site builds `instagram.com/traviscsnhs/` from it.

**To fix:** click it once and confirm it lands on the right account.

---

## 8. The attendance QR code

**Where** not used

Slide 13 had a QR code labelled "Attendance". QR codes go stale and this one points somewhere we cannot verify, so it was left off the site.

**To fix:** if it points at a form that should be public, add it as a link on the Contact page rather than as an image of a QR code.

---

## 9. Open Graph share image

**Where** `src/app/opengraph-image.tsx`

The card that shows up when someone pastes the link into a group chat is generated from text and the site gradient. It works and it is on brand.

**To fix (optional):** replace it with a real photo of the chapter once there is a good one. See `IMAGE-BRIEFS.md`.

---

## Read straight from the deck, no changes needed

These are on the site word for word or close to it, so do not "fix" them unless the facts change:

- $20 dues per member per year, covering the national membership fee, club t-shirt, and competition entry fees
- Three meetings a semester, one competition a year, no prerequisites
- All seven officer names and roles
- All four competitions and their formats
- The USACO divisions, the UIL rules, the App Challenge limits, the Code Jam divisions and prizes
- "If dues are a problem, talk to an officer privately and we will work it out."
