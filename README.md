<div align="center">

# 🎤 Presentations

**How do you keep slide decks as plain text, in version control, and still present them in a browser?**
Talk slides written in Markdown and rendered with reveal.js, published at [bitwiseops.github.io/presentations](https://bitwiseops.github.io/presentations/).

![reveal.js](https://img.shields.io/badge/slides-reveal.js-f2e142)
![Markdown](https://img.shields.io/badge/source-Markdown-083fa1)
![GitHub Pages](https://img.shields.io/badge/hosting-GitHub%20Pages-222)

</div>

---

## Table of contents

- [Overview](#overview)
- [Talks](#talks)
- [Run locally](#run-locally)
- [How a deck is built](#how-a-deck-is-built)
- [Project structure](#project-structure)
- [License](#license)

## Overview

Each talk is a folder of Markdown files, one per chapter, loaded by reveal.js. There is no build step: the repository is served as static files by GitHub Pages.

> **Live site.** <https://bitwiseops.github.io/presentations/>

## Talks

### 2025-03-19, *Large Language Models: The Digital Grimoires of the 21st Century*

How LLMs work, from the basics to the transformer.

| Chapter | Topic |
|---|---|
| 000 | Introduction |
| 010 | Natural language processing |
| 100–102 | Deep learning, gradient descent, backpropagation |
| 110 | Large language models |
| 120 | Embedding |
| 130 | Attention |
| 140 | MLP |
| 999 | Extras |

Source: [`2025-03-19/`](2025-03-19/).

## Run locally

```bash
git clone -b pages https://github.com/bitwiseops/presentations.git
cd presentations
python3 -m http.server 8000      # then open http://localhost:8000
```

## How a deck is built

`2025-03-19/index.html` declares one reveal.js section per chapter and points it at a Markdown file:

```html
<section data-markdown="./130-Attention.md"
         data-separator="^(\r)?\n(\r)?---(\r)?\n(\r)?$"
         data-separator-vertical="^(\r)?\n(\r)?--(\r)?\n(\r)?$"></section>
```

In the Markdown, `---` on its own line starts a new horizontal slide and `--` a vertical one. See the [reveal.js Markdown docs](https://revealjs.com/markdown/).

## Project structure

```
├── index.html        # talk index
├── 2025-03-19/       # one folder per talk: index.html, chapter .md files, assets/
├── dist/ libs/ plugin/   # reveal.js build used by the decks
└── README.md
```

The `master` branch tracks upstream [hakimel/reveal.js](https://github.com/hakimel/reveal.js); the slides live on `pages`, the default branch.

## License

The slides and text are my own work, all rights reserved unless a license file says otherwise. reveal.js is © Hakim El Hattab, [MIT licensed](https://github.com/hakimel/reveal.js/blob/master/LICENSE).
