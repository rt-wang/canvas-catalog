/* ═══════════════════════════════════════════════════════════════════════════
   content.js — THE ONLY FILE YOU NEED TO EDIT

   Everything on the site comes from here: who you are, the headline, and the
   list of work. index.html is the machine; this is the material.

   It loads two ways on purpose — as a plain <script> in the browser, and via
   require() from build-articles.js — so the site and the build share one
   source of truth. Keep the module.exports line at the bottom.
   ═══════════════════════════════════════════════════════════════════════════ */

const SITE = {
  /* Shown top-left, and in each article page's header. */
  name: "Your Name",

  /* The headline. Each word is its own draggable object on the plane, so keep
     them short — three to five words reads best. `accent` paints it in the
     accent colour. */
  headline: [
    { t: "Here’s", accent: false },
    { t: "What",        accent: false },
    { t: "I",           accent: true  },
    { t: "Make.",       accent: true  }
  ],

  /* Small mono line above the intro paragraph. */
  eyebrow: "Catalog 2020—2026 · Somewhere, Earth · drag anything",

  /* The intro. Inline HTML is allowed (<a>, <b>, <em>). */
  intro:
    "Replace this with a sentence or two about yourself. " +
    "<b>Then swap the entries below for your own work.</b> " +
    "Every entry is a sleeve on the front and notes on the back. " +
    "Drag anything; nothing is pinned to a grid.",

  /* One accent colour runs through the whole site. */
  accent: "#2320E8",

  /* The filter rail, left to right. `id` must match an entry's `cat`.
     Delete any you do not need — counts are computed automatically. */
  categories: [
    { id: "all",     label: "All"     },
    { id: "code",    label: "Code"    },
    { id: "music",   label: "Music"   },
    { id: "video",   label: "Video"   },
    { id: "writing", label: "Writing" },
    { id: "post",    label: "Posts"   }
  ],

  /* Singular noun shown on each sleeve's face, per category. */
  categoryNoun: {
    code: "Repository", music: "Recording", video: "Film",
    writing: "Essay",   post:  "Post"
  },

  /* Sleeve size in pixels, per category. Variety is what stops the plane
     looking like a spreadsheet. */
  categorySize: { code: 250, music: 250, video: 268, writing: 242, post: 198 }
};

/* ═══════════════════════════════════════════════════════════════════════════
   ENTRIES — your work, newest first.

   Required on every entry:
     no      short code shown on the sleeve, e.g. "A01"
     cat     one of SITE.categories ids
     title   shown large on the sleeve face
     year    "2026" — drives the period filter
     format  small line under the caption, e.g. "Repository · Rust"
     rows    label/value pairs listed in the detail panel
     cta     the button text, e.g. "Open repo"
     href    where the button goes. Use a relative path for your own pages.

   Optional:
     date    "2026-05-21" — exact date, places the entry on the timeline.
             Without it the entry sits mid-year.
     blurb   a sentence shown on the sleeve back and in the panel. Omit it
             entirely rather than leaving placeholder text.
     media   { type: "embed" | "video" | "audio", src, height }
             opens a player in the detail panel
     tweetUrl  renders the actual post in place of the blurb
     tracks  [["Track title", "3:15"], …] — a tracklist in the panel
     frag    monospace text shown on a code sleeve's face
     pull    a pull-quote shown on a writing sleeve's face (HTML allowed)
     cover   "covers/art.jpg" — full-bleed art for a music sleeve
     thumb   "covers/still.jpg" — a still for a video sleeve
     tc      "1:19" — runtime shown on a video sleeve
     kind    overrides the face label, e.g. "Notes" instead of "Essay"
   ═══════════════════════════════════════════════════════════════════════════ */

const ENTRIES = [
  {
    no: "A01", cat: "code", title: "example-repo", year: "2026",
    format: "Repository · TypeScript", date: "2026-04-13",
    blurb: "A one-line description of what this project does and why it exists.",
    rows: [["Language", "TypeScript"], ["Stars", "0"], ["Source", "GitHub"]],
    cta: "Open repo", href: "https://github.com/you/example-repo",
    frag: "export function main() {\n  return \"hello\"\n}"
  },

  {
    no: "A02", cat: "code", title: "another-tool", year: "2025",
    format: "Repository · Python", date: "2025-08-02",
    blurb: "Keep these short. One sentence is plenty on a sleeve.",
    rows: [["Language", "Python"], ["Stars", "0"], ["Source", "GitHub"]],
    cta: "Open repo", href: "https://github.com/you/another-tool",
    frag: "def run(x):\n    return x * 2"
  },

  {
    no: "B01", cat: "music", title: "First Record", year: "2026",
    format: "Project · 3 tracks", date: "2026-02-10",
    rows: [["Tracks", "3"], ["Runtime", "9:12"], ["Hosted", "your host"]],
    tracks: [["Opening", "3:04"], ["Middle", "2:58"], ["Closing", "3:10"]],
    cta: "Play project", href: "https://example.com/your-record",
    /* Paste any embed URL here. Anything that renders in an iframe works —
       untitled.stream, Bandcamp, SoundCloud, Spotify. Set the height the
       provider's own embed code uses. */
    media: { type: "embed", src: "https://example.com/embed/your-record", height: 344 }
    /* cover: "covers/first-record.jpg"  ← drop art in site/covers/ */
  },

  {
    no: "C01", cat: "video", title: "A Short Film", year: "2025",
    format: "Video · 4:55", date: "2025-02-06", tc: "4:55",
    blurb: "Describe the piece in a line.",
    rows: [["Runtime", "4:55"], ["Where", "YouTube"]],
    cta: "Watch on YouTube", href: "https://www.youtube.com/watch?v=VIDEO_ID",
    media: { type: "embed", src: "https://www.youtube.com/embed/VIDEO_ID" }
    /* thumb: "covers/a-short-film.jpg"  ← a still for the sleeve face */
  },

  /* Writing entries point at pages this repo builds for you. Put the text in
     site/articles/src/<slug>.txt, list it in articles.json, run `npm run
     build`, and link it here. */
  {
    no: "D01", cat: "writing", kind: "Essay",
    title: "On Making Things", year: "2026",
    format: "Essay · 320 words", date: "2026-03-01",
    blurb: "What the piece argues, in one sentence.",
    rows: [["Language", "English"], ["Length", "320 words"], ["Written", "2026-03-01"]],
    cta: "Read", href: "articles/on-making-things.html",
    pull: "A pull-quote from the piece, with one <span>word</span> in the accent colour."
  },

  {
    no: "D02", cat: "writing", kind: "Note",
    title: "A Shorter Note", year: "2025",
    format: "Note · 90 words", date: "2025-11-19",
    rows: [["Language", "English"], ["Length", "90 words"], ["Written", "2025-11-19"]],
    cta: "Read", href: "articles/a-shorter-note.html",
    pull: "Short pieces make good <span>texture</span> between the long ones."
  },

  {
    no: "E01", cat: "post", title: "A Thread Worth Keeping", year: "2026",
    format: "Thread · 5 posts", date: "2026-06-14",
    blurb: "Shown only if the embedded post fails to load.",
    rows: [["Platform", "X"], ["Length", "5 posts"]],
    cta: "Read thread", href: "https://x.com/you/status/0000000000",
    /* Renders the real post inside the panel instead of the blurb. */
    tweetUrl: "https://x.com/you/status/0000000000"
  }
];

/* Lets build-articles.js read the same file the browser does. Leave it. */
if (typeof module !== "undefined" && module.exports) {
  module.exports = { SITE, ENTRIES };
}
