/**
 * Single source of truth for every word on the site.
 * Everything here came out of the CSNHS Interest Meeting deck (2026-27).
 * If a fact is not in the deck it is marked with a TODO and kept vague on purpose.
 * Edit this file to change copy. You should not need to touch components.
 */

export const site = {
  name: "Travis CSNHS",
  longName: "Computer Science National Honor Society",
  chapter: "Travis High School",
  year: "2026-27",
  domain: "traviscsnhs.com",
  url: "https://traviscsnhs.com",
  tagline: "Build. Teach. Belong.",
  description:
    "The Computer Science National Honor Society chapter at Travis High School. We meet through the year to code, compete, and tutor. No prerequisites, any grade level.",
} as const;

export const links = {
  /** Fort Bend ISD RevTrak store — this is where members pay the $20 dues. */
  dues: "https://fortbendisd.revtrak.net/hs/THS/ths-computer-science-nhs/",
  revtrakSchool: "https://fortbendisd.revtrak.net/hs/THS/",
  fbisd: "https://www.fortbendisd.com/",
  instagram: "https://www.instagram.com/traviscsnhs/",
  instagramHandle: "@traviscsnhs",
  remindHandle: "@csnhs2026",
  remindHowTo: "https://www.remind.com/join",
  usaco: "https://usaco.org/",
  uil: "https://www.uiltexas.org/academics/computer-science",
  appChallenge: "https://www.congressionalappchallenge.us/",
  /* TODO: confirm with officers — chapter email address for the contact page. */
  email: "traviscsnhs@gmail.com",
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/membership", label: "Membership" },
  { href: "/events", label: "Events" },
  { href: "/officers", label: "Officers" },
  { href: "/contact", label: "Contact" },
] as const;

export const hero = {
  eyebrow: `Travis HS CSNHS / ${site.year}`,
  headline: ["Code.", "Compete.", "Teach."],
  sub: "The Computer Science National Honor Society at Travis High School. No prerequisites. Any grade. Any background, including none.",
  primaryCta: { label: "Pay dues & join", href: links.dues, external: true },
  secondaryCta: { label: "See what we compete in", href: "/events" },
} as const;

/** Slide 03 — What is CSNHS? */
export const whatWeAre = {
  eyebrow: "What is CSNHS",
  title: "The national honor society for computer science students.",
  body: "Our chapter meets through the year to code, compete, and tutor. Officers write the contests, run the practice sessions, and keep the group chat moving. Everything else is up to you.",
  pillars: [
    {
      key: "build",
      label: "Build",
      body: "Work on projects and enter competitions with other students who like coding.",
    },
    {
      key: "teach",
      label: "Teach",
      body: "Tutor classmates in CS classes and help run our events.",
    },
    {
      key: "belong",
      label: "Belong",
      body: "No prerequisite classes. Beginners and experienced coders are both welcome.",
    },
  ],
} as const;

/** Slide 04 — Why Join */
export const whyJoin = {
  eyebrow: "Why join",
  title: "Four reasons to sign up.",
  reasons: [
    "National honor society membership on your college applications.",
    "Competition results and projects you can write about in essays.",
    "Mentorship and guidance for internships, summer programs, and more.",
    "Upperclassmen who have already taken the CS classes and contests you are signing up for.",
  ],
  callout: {
    eyebrow: "College applications",
    title: "CS programs pay attention to what you have built and entered.",
    body: "A USACO division, a submitted app, or a UIL medal gives you something specific to write about.",
  },
} as const;

/** Slides 06-10 — Competitions */
export type Competition = {
  slug: string;
  index: string;
  name: string;
  format: string;
  short: string;
  body: string[];
  href?: string;
  /** Two-column detail rows shown on the events page. */
  rows: { label: string; value: string }[];
  timing: string;
};

export const competitions: Competition[] = [
  {
    slug: "usaco",
    index: "01",
    name: "USACO",
    format: "Solo",
    short: "Solo. Algorithm problems. Four contest windows a year.",
    body: [
      "The USA Computing Olympiad is a solo online contest. Three problems, four hours, on your own laptop.",
      "Everyone starts in Bronze and moves up by solving problems. Java, C++, and Python are all allowed.",
      "We hold practice sessions in the weeks before each contest window.",
    ],
    href: links.usaco,
    rows: [
      { label: "Bronze", value: "Where you start" },
      { label: "Silver", value: "Sorting, searching" },
      { label: "Gold", value: "Graphs, DP" },
      { label: "Platinum", value: "Olympiad track" },
    ],
    timing: "Four contest windows across the year",
  },
  {
    slug: "uil",
    index: "02",
    name: "UIL Computer Science",
    format: "Team",
    short: "Team. Written test and Java programming. District to state.",
    body: [
      "A team competition run through UIL. A written exam on Java concepts, then a hands on programming set scored by problems solved.",
    ],
    href: links.uil,
    rows: [
      { label: "Team of 3 to 4", value: "Top three written scores count toward the team total" },
      { label: "Java only", value: "Same language as AP CSA, so the studying overlaps" },
      { label: "District to state", value: "Advance as a team or as an individual medalist" },
    ],
    timing: "Spring meet season, district first",
  },
  {
    slug: "app-challenge",
    index: "03",
    name: "Congressional App Challenge",
    format: "1 to 4 students",
    short: "Build an app and submit it. Judged in our district.",
    body: [
      "Build an app, submit a demo video, and get judged in our own congressional district.",
    ],
    href: links.appChallenge,
    rows: [
      { label: "1 to 4", value: "Students per team" },
      { label: "Any", value: "Language or platform" },
      { label: "Nov", value: "Submission deadline" },
    ],
    timing: "Submissions close in November",
  },
  {
    slug: "code-jam",
    index: "04",
    name: "Club Code Jam",
    format: "In house",
    short: "Our own contest. Beginner and open divisions.",
    body: [
      "Our own contest, written and judged by the officers. Two divisions so first timers are not competing against USACO regulars.",
      "Runs once in the fall and once in the spring, in the lab, during meeting time.",
    ],
    rows: [
      { label: "Beginner division", value: "Loops, arrays, and strings. Nothing past AP CSA." },
      { label: "Open division", value: "Graphs, recursion, and greedy problems." },
      { label: "Prizes", value: "Snacks and shirt design credit." },
    ],
    timing: "Once in the fall, once in the spring",
  },
];

/** Slide 11 — Member Requirements */
export const requirements = [
  {
    label: "Prerequisites",
    value: "None",
    body: "Any grade level, any CS background, including none.",
  },
  {
    label: "Attendance",
    value: "3",
    body: "Meetings each semester. We meet more often than that.",
  },
  {
    label: "Competition",
    value: "1",
    body: "Any one of the four counts, including our own Code Jam.",
  },
] as const;

/** Slide 12 — Dues & Membership */
export const dues = {
  amount: "$20",
  cadence: "Per member, per year",
  includes: [
    { label: "National membership fee", value: "Included" },
    { label: "Club t-shirt", value: "Included" },
    { label: "Competition entry fees", value: "Included" },
  ],
  note: "If dues are a problem, talk to an officer privately and we will work it out.",
  howTo: [
    "Open the Fort Bend ISD RevTrak store for Travis High School.",
    "Go to Computer Science NHS and add the membership dues to your cart.",
    "Check out with a card. Keep the emailed receipt.",
    "Bring the receipt or show it to an officer at the next meeting.",
  ],
} as const;

/** Slide 05 — Meet the Officers */
export type Officer = {
  name: string;
  role: string;
  photo?: string;
  /** CSS object-position so faces stay in frame at any crop. */
  focus?: string;
};

export const officers: Officer[] = [
  {
    name: "Aaditya Panchal",
    role: "President",
    photo: "/officers/aaditya-panchal.jpg",
    focus: "50% 22%",
  },
  {
    name: "Raheeq Mobin",
    role: "Vice President",
    // TODO: confirm with officers — no photo in the deck, monogram shown instead.
  },
  {
    name: "Reyan Maredia",
    role: "Secretary",
    photo: "/officers/reyan-maredia.jpg",
    focus: "50% 30%",
  },
  {
    name: "Vihaan Shah",
    role: "Event Coordinator",
    photo: "/officers/vihaan-shah.jpg",
    focus: "50% 20%",
  },
  {
    name: "Mohammad Mahdi",
    role: "Program Director",
    photo: "/officers/mohammad-mahdi.jpg",
    focus: "50% 18%",
  },
  {
    name: "Gavin Kataria",
    role: "Program Director",
    photo: "/officers/gavin-kataria.jpg",
    focus: "50% 25%",
  },
  {
    name: "Shikhar Surana",
    role: "Historian",
    photo: "/officers/shikhar-surana.jpg",
    focus: "50% 25%",
  },
];

/** Slide 13 — Socials */
export const socials = {
  title: "Socials",
  body: "Announcements, competition sign ups, and meeting reminders go out here first.",
  channels: [
    { label: "Instagram", handle: links.instagramHandle, href: links.instagram },
    { label: "Remind", handle: links.remindHandle, href: links.remindHowTo },
  ],
} as const;

/**
 * The deck lists what happens in a year but never puts calendar dates on it.
 * Dates stay as windows until officers confirm them.
 * TODO: confirm with officers — exact meeting days, room number, and contest dates.
 */
export const schedule = [
  {
    term: "Fall",
    items: [
      { name: "Interest meeting", when: "Start of the year", note: "Where this deck came from." },
      { name: "USACO practice sessions", when: "Weeks before each contest window", note: "In the lab." },
      { name: "Congressional App Challenge", when: "Submissions close in November", note: "Teams of 1 to 4." },
      { name: "Club Code Jam", when: "Once in the fall", note: "Beginner and open divisions." },
    ],
  },
  {
    term: "Spring",
    items: [
      { name: "UIL Computer Science", when: "Meet season, district first", note: "Teams of 3 to 4." },
      { name: "USACO contest windows", when: "Through the spring", note: "Solo, four hours, three problems." },
      { name: "Club Code Jam", when: "Once in the spring", note: "Second running of our own contest." },
      { name: "Tutoring", when: "Ongoing", note: "Members tutor classmates in CS classes." },
    ],
  },
] as const;
