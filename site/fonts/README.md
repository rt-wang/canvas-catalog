# Fonts

The template ships with **no font files**, on purpose. It uses free Google
Fonts, so it works the moment you clone it.

## Using your own display face

1. Put the files here, e.g. `MyFace-Regular.woff2`.
2. Add an `@font-face` rule near the top of `site/index.html`:

   ```css
   @font-face{
     font-family:"My Face";
     src:url("fonts/MyFace-Regular.woff2") format("woff2");
     font-weight:400; font-style:normal; font-display:swap;
   }
   ```

3. Point the headline at it:

   ```css
   --hero-family:"My Face","Newsreader",serif;
   ```

## One thing worth checking

`.gitignore` excludes font binaries from this folder by default.

That is deliberate. A licence that lets you *use* a font on your own site often
does **not** let you redistribute the files — and committing them to a public
repo is redistribution. Check your licence before removing that ignore rule.
Self-hosting a commercial webfont usually needs a webfont licence specifically,
which is not always what comes with a desktop purchase.
