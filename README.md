# Presentations

Slide decks from my talks, built with [reveal.js](https://revealjs.com) and written in Markdown. Live at **<https://wisebit.me/presentations/>**.

## Talks

### 2025-03-19: *Large Language Models: The Digital Grimoires of the 21st Century*

An introduction to how LLMs work, from the basics to the transformer: natural language processing, deep learning, gradient descent and backpropagation, embeddings, attention, MLP blocks and unembedding.

Source: [`2025-03-19/`](2025-03-19/), one Markdown file per chapter.

## Running locally

The decks are static files, so any local web server will do:

```bash
git clone -b pages https://github.com/bitwiseops/presentations.git
cd presentations
python3 -m http.server 8000     # then open http://localhost:8000
```

## Notes

- This repository started as a fork of [hakimel/reveal.js](https://github.com/hakimel/reveal.js). The `pages` branch (the default) holds the slides and the reveal.js build they use; the `master` branch tracks upstream.
- Slides are Markdown files, with slides separated by `--` and `---` as described in the [reveal.js Markdown docs](https://revealjs.com/markdown/).
- reveal.js is © Hakim El Hattab, MIT licensed.
