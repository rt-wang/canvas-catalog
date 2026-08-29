# canvas-catalog

**English** · [简体中文](README.zh-CN.md)

A portfolio that behaves like a crate of records instead of a grid of cards.

Every piece of work is a **sleeve** on an infinite, draggable plane — art on the
front, liner notes on the back. Nothing is pinned to a layout. Visitors pan,
zoom, flip sleeves, filter by category, and drag a period control to see only
the years they care about.

It is one static HTML file plus a content file. No framework, no build step for
the site itself, no dependencies to install.

```
npx serve site        # or: npm run dev
```

---

## Quickstart

```bash
git clone <your fork> my-site && cd my-site
npm run dev                    # http://127.0.0.1:8000
```

Then open **`site/content.js`** and replace what's there. That single file holds
your name, your headline, your intro, and every entry. You do not need to touch
`site/index.html` unless you want to change how the thing works.

To publish: push to GitHub and import the repo on Vercel, or run `vercel --prod`.
`vercel.json` already points the build at `site/`.

---

## What's in the box

| Path | What it is |
|---|---|
| `site/content.js` | **The file you edit.** Name, headline, intro, entries. |
| `site/index.html` | The canvas itself — one self-contained file. |
| `site/articles/src/*.txt` | Long-form writing, in plain text. |
| `articles.json` | Which text files to build, and their dates. |
| `build-articles.js` | Turns those `.txt` files into reading pages. |
| `dev-server.js` | Static server that supports range requests, so audio and video can seek. |
| `site/covers/`, `site/fonts/` | Your images and, if you want them, your fonts. |

---

## The entry types

An entry's `cat` decides how its sleeve is drawn. Out of the box:

- **code** — a monospace fragment on a dark sleeve (`frag`)
- **music** — full-bleed cover art, or a spinning record if you have none (`cover`)
- **video** — a still with a runtime (`thumb`, `tc`)
- **writing** — a pull-quote on paper (`pull`)
- **post** — an oversized quotation mark

Any entry can carry `media` to open a player in the detail panel — paste an
embed URL from Bandcamp, SoundCloud, Spotify, YouTube, untitled.stream, or point
at your own `.mp4`/`.mp3`. An entry with `tweetUrl` renders the real post.

Every field is documented inline in `content.js`.

---

## Writing

Long-form pieces are plain `.txt`. Blank lines separate paragraphs; that's the
whole syntax.

1. Drop `my-piece.txt` in `site/articles/src/`
2. Add it to `articles.json` with a date and a `kind` label
3. `npm run build`
4. Point a `writing` entry at `articles/my-piece.html`

The build measures length for you, counting characters rather than words for
Chinese and Japanese, and matches the site's typography automatically.

---

## Making it yours

**Colour.** `SITE.accent` in `content.js` recolours the whole site.

**Headline face.** Press **1–9** on the canvas to audition nine free faces
live. When you pick one, copy its values into the `--hero-*` tokens at the top
of `site/index.html`.

**Your own font.** Drop the files in `site/fonts/`, add an `@font-face` rule,
and point `--hero-family` at it. See `site/fonts/README.md` — and note that
font files are gitignored by default, because most licences do not let you
redistribute them in a public repo.

**Layout.** `SCATTER_SEED` in `site/index.html` changes the arrangement.
**Scatter**, **Tidy**, **Fit all** and **Recenter** live in the top bar, and
pressing **h** cycles how the headline words are thrown.

---

## Credits

The typefaces used by default — Archivo, Newsreader, Space Mono and the faces
in the headline switcher — are all free via Google Fonts.

MIT licensed. Build something that doesn't look like everyone else's.
