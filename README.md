# Poruginti Pullakura Restaurant — Digital Menu

A mobile-first Next.js digital menu for **పోరిగింటి పుల్లకూర రెస్టారెంట్ (Poruginti Pullakura Restaurant)** — Veg & Non-Veg.

When the page opens, the customer is asked for their **table number**, then the traditional-style menu is shown.

## Features

- Table-number prompt on open (with quick-pick buttons), remembered for the session
- Traditional printed-menu look — dark leather background, golden banners, dotted price leaders
- Veg / Non-Veg filter
- Telugu + English captions, matching the original menu
- Fully responsive, optimized for mobile
- Built with the App Router, ready to extend with a backend later

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm run start
```

## Project Structure

```
app/
  components/
    TablePrompt.tsx   # table-number entry screen
    MenuView.tsx      # menu rendering + veg/non-veg filter
  data/
    menu.ts           # all categories, items & prices
  globals.css         # theme + traditional styling
  layout.tsx
  page.tsx            # ties prompt + menu together
```

## Notes / Next steps

This is a demo for the client. The menu data lives in `app/data/menu.ts`.
A backend (orders, table management, admin) can be added later — the table
number is already captured and stored per session, ready to send to an API.
