# LLMs - Large Language Models

--

## (Wikipedia) Definition

> A **large language model** (LLM) is a language model notable for its *ability to achieve general-purpose language generation and other natural language processing tasks* such as classification. LLMs acquire these abilities by learning statistical relationships from text documents during a computationally intensive self-supervised and semi-supervised training process. LLMs can be used for text generation, a form of generative AI, by taking an input text and repeatedly predicting the next token or word.

--

## What is a Language Model?

A language model is a statistical and computational tool that enables a computer to understand, interpret, and generate human language based on the likelihood of occurrence of words and sequences of words. 

--

**Statistical Language Models:** These earlier models rely on the statistical properties of language, using the probabilities of sequences of words (n-grams) to predict the likelihood of the next word in a sequence.

[Bigrams Example](https://colab.research.google.com/drive/1ikJuNYOOliuy8tTl9csKuWDlVdHJhVQg?usp=sharing)

--

**Neural Language Models:** These models use **neural networks** to predict the likelihood of a sequence of words, learning and representing language in high-dimensional spaces. 

[Simplified NLM Example](https://colab.research.google.com/drive/1ON9CO6LUtX1mbDmYIq3Pt5mSqoxzGxPr?usp=sharing)

--

## What is a *Large* Language Model?

--

A Large Language Model is a Neural Language Model
- which is trained on very big datasets 
- where its underlying neural network uses billions of parameters

Notes:
A large language model is a type of artificial intelligence algorithm designed to understand, generate, and work with human language in a way that mimics human-like understanding and production. These models are "large" both in terms of the size of the neural network architecture they are based on and the amount of data they are trained on.

--

<div class="timeline" style="width: 100%; height: 500px"> <!-- {"url": "assets/timeline.json"} --> </div>

--

<!-- .slide: class="align-center" -->

## Attention Is All You Need

<div class="pdf"><!-- { "pdf": "assets/1706.03762.pdf" } --></div>

Notes: 
TODO

--

<!-- .slide: class="align-center" -->


## LLM Visualization

[LLM Visualization](https://bbycroft.net/llm)

--

## Real World Examples


Large language models (LLMs) can also be categorized based on their availability as either open source, where the model architecture and weights are publicly accessible, or closed source, where the model details are proprietary and access is restricted.

--

- Closed source
	- OpenAI's GPT-3 / GPT-4
	- Google's BERT models
	- ...

- Open source
	- [OpenAI's GPT-2](https://github.com/openai/gpt-2)
	- [Hugging Face’s Transformers](https://huggingface.co/) (repository of open source models)
	- ...

- Mixed open/closed source
	- [Meta's LLaMA](https://github.com/Meta-Llama/llama)
		- the company has provided some level of access to the research community but still maintains control over the distribution and usage of the model.
	
--

<!-- .slide: class="align-center" -->

## LLaMA 2


<div class="pdf"><!-- { "pdf": "assets/1706.03762.pdf" } --></div>

--

<!-- .slide: class="align-center" data-background-image="assets/matrix.gif" -->

## LLaMA 2 - Hands On!

--


## Extras

- [LLM Visualization](https://bbycroft.net/llm)
- ["Spreadsheets are all you need" Project](https://spreadsheets-are-all-you-need.ai)
- [Navigating the World of Large Language Models](https://www.bentoml.com/blog/navigating-the-world-of-large-language-models)
