# Working on this repo as a coding agent

This is a template. Someone has cloned it to build their own portfolio, and
they are probably asking you to do most of the work. This file tells you how,
and what not to break.

## The shape of the job

Almost everything lives in **`site/content.js`**. Reach for `site/index.html`
only when changing behaviour or design, not content.

A typical first session:

1. Ask what they make, then fill in `SITE` — name, headline, eyebrow, intro,
   accent colour, and which categories they actually need.
2. Replace `ENTRIES` with their real work.
3. Move any long-form writing into `site/articles/src/`, list it in
   `articles.json`, run `npm run build`.
4. Run `npm run dev` and **look at the result in a browser** before saying it
   works.

## Rules that will save you

**Never invent an entry.** This is a portfolio; a fabricated project, a made-up
star count, or a plausible-looking URL that 404s is worse than an empty
catalogue. If they mention a repo, fetch its real description, language and
creation date. If they give you a music or video link, read the actual title
and duration from the page. When you don't know a field, leave it out — every
optional field degrades gracefully.

**Never leave placeholder text in shipped content.** `"Liner note goes here"` on
a live site reads as abandonment. `blurb` is optional; omit it rather than
filling it with filler.

**Dates matter more than they look.** `year` drives the period filter; the
optional `date` places an entry on the timeline. Use the real creation date, not
a file's modification time — those differ, sometimes by months.

**Don't commit font binaries.** `.gitignore` excludes them deliberately. See
`site/fonts/README.md` before changing that.

**Don't redistribute their images.** Cover art in `site/covers/` belongs to
whoever made it.

## Things that have bitten people here

- **`.vercelignore` patterns match at every level.** An unanchored `index.html`
  line will also exclude `site/index.html` and your homepage will 404 while
  every sub-page works. Anchor with a leading slash.
- **`applyHome()` must run before `homeLayout()`** at boot. The scatter avoids
  the masthead by checking `EXCLUDE`, which `applyHome()` builds. Reverse them
  and sleeves land on top of the headline.
- **Pressing Tidy persists.** The arrangement is saved to `localStorage`, so a
  visitor who taps Tidy once keeps the grid forever. If you change the stored
  shape, bump `STORE_KEY` or old sessions will pin people to stale layouts.
- **Sleeves are not all one size.** `.cover__title` scales from the sleeve's own
  width; a title with a very long word steps down further. Don't hardcode a
  font size there.
- **The detail panel's dark surface is sampled to match embedded players**
  (`#191919`). If an embed provider restyles, re-sample rather than guessing —
  a near-miss makes the embed's rounded corners visible.

## Verifying

Static checks are not enough; this thing is interactive.

```bash
npm run build && npm run dev
```

Then actually load it and confirm: entries render, the rail counts are right,
a sleeve flips, the detail panel opens, an article page loads, and the period
control filters. If you have browser automation, take a screenshot — several
bugs here (a sleeve covering the headline, a title overrunning its box) are
invisible to a syntax check and obvious in a picture.

Note that CSS transitions do not advance in a backgrounded tab, so a computed
`opacity` may read as stuck. Verify open/closed state with `visibility` or a
screenshot instead.

## Deploying

`vercel.json` serves `site/`. First deploy goes straight to production. A custom
domain has to be attached to the *project* and pointed at a deployment —
attaching it after the first deploy leaves it unbound until you alias or
redeploy.
