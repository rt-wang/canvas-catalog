# canvas-catalog

[English](README.md) · **简体中文**

一个像唱片箱、而不是卡片网格的作品集。

每件作品都是一张**唱片套**，散落在一块可无限拖动的平面上——正面是封套，背面
是内页文字。没有任何东西被钉死在版式里。访客可以平移、缩放、翻转套子、按类别
筛选，也可以拖动年代控件，只看自己关心的那几年。

整个站点就是一个静态 HTML 文件加一个内容文件。没有框架，没有构建步骤，不需要
安装任何依赖。

```
npx serve site        # 或者：npm run dev
```

---

## 快速开始

```bash
git clone <你 fork 的地址> my-site && cd my-site
npm run dev                    # http://127.0.0.1:8000
```

然后打开 **`site/content.js`**，把里面的内容换成你自己的。这一个文件装着你的
名字、标题、简介和全部条目。除非你想改变站点的行为方式，否则不用碰
`site/index.html`。

发布：把仓库推到 GitHub 后在 Vercel 上导入，或者直接运行 `vercel --prod`。
`vercel.json` 已经把构建目录指向了 `site/`。

---

## 项目里有什么

| 路径 | 是什么 |
|---|---|
| `site/content.js` | **你要编辑的文件。** 名字、标题、简介、条目。 |
| `site/index.html` | 画布本身——一个自包含的文件。 |
| `site/articles/src/*.txt` | 长文，纯文本格式。 |
| `articles.json` | 要构建哪些文本文件，以及它们的日期。 |
| `build-articles.js` | 把这些 `.txt` 变成阅读页面。 |
| `dev-server.js` | 支持 range 请求的静态服务器，音频和视频因此可以拖动进度。 |
| `site/covers/`、`site/fonts/` | 你的图片，以及（如果需要）你的字体。 |

---

## 条目类型

一个条目的 `cat` 决定了它的套子怎么画。开箱即有：

- **code** —— 深色套子上的等宽代码片段（`frag`）
- **music** —— 满幅封面图，没有图就转一张唱片（`cover`）
- **video** —— 一张定格画面加时长（`thumb`、`tc`）
- **writing** —— 纸面上的一段摘句（`pull`）
- **post** —— 一个超大的引号

任何条目都可以带上 `media`，在详情面板里打开一个播放器——粘贴来自 Bandcamp、
SoundCloud、Spotify、YouTube、untitled.stream 的嵌入链接，或者指向你自己的
`.mp4` / `.mp3`。带 `tweetUrl` 的条目会渲染出真实的推文。

每个字段在 `content.js` 里都有就地的注释说明。

---

## 写作

长文是纯 `.txt`。空行分段，语法就这么多。

1. 把 `my-piece.txt` 放进 `site/articles/src/`
2. 在 `articles.json` 里加上它，带日期和一个 `kind` 标签
3. `npm run build`
4. 让某个 `writing` 条目指向 `articles/my-piece.html`

构建会替你测量篇幅——中文和日文按字符数而不是词数计算——并自动匹配站点的
排版样式。

---

## 改成你自己的

**颜色。** `content.js` 里的 `SITE.accent` 会重新着色整个站点。

**标题字体。** 在画布上按 **1–9** 可以现场试听九款免费字体。选定之后，把它的
取值抄进 `site/index.html` 顶部的 `--hero-*` 变量。

**用你自己的字体。** 把字体文件放进 `site/fonts/`，加一条 `@font-face` 规则，
再把 `--hero-family` 指过去。参见 `site/fonts/README.md`——另外注意，字体文件
默认被 gitignore 排除，因为大多数授权协议不允许你在公开仓库里再分发它们。

**排布。** `site/index.html` 里的 `SCATTER_SEED` 会改变散落的方式。顶栏上有
**Scatter**、**Tidy**、**Fit all** 和 **Recenter**，按 **h** 可以循环切换标题
文字的抛撒方式。

---

## 致谢

默认使用的字体——Archivo、Newsreader、Space Mono，以及标题切换器里的那几款
——都可以在 Google Fonts 上免费获得。

MIT 许可。去做一个不像别人的东西。
