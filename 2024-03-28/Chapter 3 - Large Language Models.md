# LLMs - Large Language Models

--

## What is a *Large* Language Model?

A Large Language Model is a Neural Language Model
- which is trained on very big datasets 
- where its underlying neural network uses billions of parameters

Notes:
A large language model is a type of artificial intelligence algorithm designed to understand, generate, and work with human language in a way that mimics human-like understanding and production. These models are "large" both in terms of the size of the neural network architecture they are based on and the amount of data they are trained on.

--

## (Wikipedia) Definition

> A **large language model** (LLM) is a language model notable for its *ability to achieve general-purpose language generation and other natural language processing tasks* such as classification. LLMs acquire these abilities by learning statistical relationships from text documents during a computationally intensive self-supervised and semi-supervised training process. LLMs can be used for text generation, a form of generative AI, by taking an input text and repeatedly predicting the next token or word.


--

## Evolution of LLMs

<iframe width="100%" height="500" src="https://informationisbeautiful.net/visualizations/the-rise-of-generative-ai-large-language-models-llms-like-chatgpt/"> </iframe>

<small style="font-size:xx-small"> [The Rise and Rise of A.I. Large Language Models (LLMs)](https://informationisbeautiful.net/visualizations/the-rise-of-generative-ai-large-language-models-llms-like-chatgpt/) </small>

--

<!-- .slide: class="align-center" -->

## Attention Is All You Need

<div class="pdf"><!-- { "pdf": "assets/1706.03762.pdf" } --></div>

Notes: 
- This work introduced the **Transformer architecture**, which is the foundation upon which GPT and many other subsequent models are built. 
- Before the Transformer, most NLP models relied on recurrent neural networks (RNNs) or convolutional neural networks (CNNs) to process text. The Transformer model introduced a **novel architecture based entirely on attention mechanisms**, specifically self-attention, allowing the model to **weigh the importance of different words within a sentence regardless of their positional distance from each other**. 
- The Transformer architecture has made it **feasible to pre-train models** on large corpora of text **and then fine-tune** them for specific tasks.

--

<!-- .slide: class="align-center" -->

## Transformers

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZXiruGOCn9s?si=WQyUV4YN9HWNffVj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

--



## Transformers - Details

[LLM Visualization Project](https://bbycroft.net/llm)

--

## Real World Examples

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
<!-- .element: style="font-size:large" -->

--

<!-- .slide: class="align-center" -->

## LLaMA 2


<div class="pdf"><!-- { "pdf": "assets/llama2.pdf" } --></div>

--

<!-- .slide: class="align-center" data-background-image="assets/matrix.gif" -->

## LLaMA 2 - Hands On!

