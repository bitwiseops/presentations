# LLMs - Large Language Models

--

## What is a Language Model?

--

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

## Modern Large Language Models Architectures

--

## Transformer-Based Models

- **BERT (Bidirectional Encoder Representations from Transformers)**
- **GPT (Generative Pre-trained Transformer) Series**
- **T5 (Text-to-Text Transfer Transformer)**

--

## Attention Is All You Need

![[1706.03762.pdf]]

Notes: 
Developed by Google, BERT was one of the first transformer-based models to use bidirectional training to understand the context of words in a sentence. It significantly improved the performance of NLP tasks such as question answering and language inference.

OpenAI's GPT series, including GPT-3 and its successors, are known for their generative capabilities, enabling them to produce human-like text. These models are pre-trained on diverse internet text and fine-tuned for specific tasks, showcasing remarkable language understanding and creativity.

Developed by Google, T5 approaches NLP tasks by converting all text-based language problems into a unified text-to-text format, allowing it to perform a wide range of tasks from translation to summarization with the same model architecture.

--

### Sparse Models

- **Mixture of Experts (MoE)**

### Hybrid Models

- **ERNIE (Enhanced Representation through kNowledge Integration)**

Notes:
The MoE architecture involves a set of expert models (typically, neural networks) where each expert is trained on a subset of the data. A gating mechanism decides which expert to use for a given input. This approach allows for more scalable and efficient training on large datasets.

Developed by Baidu, ERNIE is designed to better understand the syntax and semantic information in a language by integrating knowledge graphs with text, leading to improved performance on NLP tasks that require world knowledge and reasoning.


--

## Real World Examples

--

Large language models (LLMs) can also be categorized based on their availability as either open source, where the model architecture and weights are publicly accessible, or closed source, where the model details are proprietary and access is restricted.

--

- Closed source
	- OpenAI's GPT-3 / GPT-4
	- Google's BERT models
	- ...

--

- Open source
	- [OpenAI's GPT-2](https://github.com/openai/gpt-2)
	- [Hugging Face’s Transformers](https://huggingface.co/) (repository of open source models)
	- ...

--

- Mixed open/closed source
	- [Meta's LLaMA](https://github.com/Meta-Llama/llama)
		- the company has provided some level of access to the research community but still maintains control over the distribution and usage of the model.
	
--

- [Navigating the World of Large Language Models](https://www.bentoml.com/blog/navigating-the-world-of-large-language-models)

--

## LLaMA 2

![[10000000_662098952474184_2584067087619170692_n.pdf]]

--

