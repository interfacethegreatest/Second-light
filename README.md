# Second Light · Calendar starter

A new project based on [Hello-world](https://github.com/interfacethegreatest/Hello-world) at commit `bf7682675a357b3c11f8b39860cc97e68ba87a4a`, with the same Next.js Pages Router, React, TypeScript, plain global CSS, and component CSS modules.

The original Hello-world repository and website are separate and unchanged. This project starts from its monthly-calendar version, including the horizontal title row, divider, centred date numbers, and GitHub profile footer. It does not import Hello-world's Git history.

## Start

Use Node.js 24 LTS.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. The home page displays **Second Light 😎** and a reusable month calendar with previous/next navigation, Today, and date selection.

## Check and build

```sh
npm test
npm run typecheck
npm run build
```

The production build exports static HTML, CSS, and JavaScript to `out/`. Dependency versions and test scripts are retained from the original starter; the package name is `second-light`.

## Structure

- `src/pages/index.tsx`: home page and GitHub profile footer
- `src/pages/_app.tsx`: application wrapper and global styles
- `src/pages/_document.tsx`: HTML document shell
- `src/components/calendar/Calendar.tsx`: interactive month grid
- `src/components/calendar/Calendar.module.css`: scoped styles
- `src/lib/calendar.ts`: date helpers
- `src/styles/globals.css`: global and footer styles
- `tests/calendar.test.ts`: monthly date-utility tests

## Source and scope

The original starter was adapted from public Calendar4 commit `7b7e533e587d4991c97b63259355d1a5e9141616`: its `SmallCalendar.tsx` six-week grid, date selection pattern, `addMonthsClamped` helper, Pages Router layout, and dark CSS-module styling. Calendar2's package manifest was inspected for comparison; no private Calendar2 source is included.

This is a fresh starter, not a copy of the full calendar application. Authentication, database access, email, uploads, 3D assets, and event editing are outside its scope. It needs no environment secrets. Selection is in memory and resets on reload. Next.js generates the HTML entry point from the Pages Router rather than using a hand-written `index.html`.

## GitHub Pages

Build with the repository prefix:

```sh
GITHUB_PAGES=true npm run build
```

The Pages base path is `/Second-light`, matching the repository name exactly. Local development has no prefix.

In this repository's **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source. The included deployment workflow runs tests, TypeScript checks, the static build, and deployment on pushes to `main`; it can also be run manually from the Actions tab.

After a successful deployment, the site is available at https://interfacethegreatest.github.io/Second-light/ . Copying code does not copy repository settings, branch-protection rules, secrets, or Pages activation from Hello-world.

## Credits

Built collaboratively by Drew and ChatGPT.
Coding assistance by OpenAI’s Codex.
