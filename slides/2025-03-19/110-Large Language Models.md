# LLM - Large Language Model

--

## What is a LLM?

<!-- .slide: class="align-center" -->

<img src="assets/1_20250214155052.png">


Notes:
A large language model is a sophisticated mathematical function  
that predicts what word comes next for any piece of text.

--

## Guessing the next word

<!-- .slide: class="align-center" -->

<img src="assets/2_20250214155134.png">

Notes:
Instead of predicting one word with certainty, though,  
what it does is assign a probability to all possible next words. the output tends to look a lot more natural if  you allow it to select less likely words along the way at random.  
So what this means is even though the model itself is deterministic,  
a given prompt typically gives a different answer each time it's run.

--

## Knowledge base

<!-- .slide: class="align-center" -->

<img src="assets/3_20250214155357.png">

Notes:
Models learn how to make these predictions by processing an enormous amount of text,  
typically pulled from the internet.  
For a standard human to read the amount of text that was used to train GPT-3,  for example, if they read non-stop 24-7, it would take over 2600 years.  
Larger models since then train on much, much more.

--

## Reasoning values

<!-- .slide: class="align-center" -->

<img src="assets/4_20250214155552.png">

Notes:
You can think of training a little bit like tuning the dials on a big machine.  
The way that a language model behaves is entirely determined by these  
many different continuous values, usually called parameters or weights.  
Changing those parameters will change the probabilities  
that the model gives for the next word on a given input.

--

## Learning process

<!-- .slide: class="align-center" -->

<img src="assets/5_20250214161756.png">

Notes:
An algorithm called backpropagation is used to tweak all of the parameters  
in such a way that it makes the model a little more likely to choose  
the true last word and a little less likely to choose all the others.  
When you do this for many, many trillions of examples,  
not only does the model start to give more accurate predictions on the training data,  
but it also starts to make more reasonable predictions on text that it's never  
seen before.

--

## Tuning

<!-- .slide: class="align-center" -->

<img src="assets/6_20250214161955.png">

Notes:
The goal of auto-completing a random passage of text from the  
internet is very different from the goal of being a good AI assistant.  
To address this, chatbots undergo another type of training,  
just as important, called reinforcement learning with human feedback.  
Workers flag unhelpful or problematic predictions,  
and their corrections further change the model's parameters,  
making them more likely to give predictions that users prefer.

--

## Exploiting GPUs

<!-- .slide: class="align-center" -->

<img src="assets/7_20250217113831.png" style="max-height: 55vh;">

Notes:
Looking back at the pre-training, though, this staggering amount of  
computation is only made possible by using special computer chips that  
are optimized for running many operations in parallel, known as GPUs.  
However, not all language models can be easily parallelized.  
Prior to 2017, most language models would process text one word at a time,  
but then a team of researchers at Google introduced a new model known as the transformer.

--

## Transformers

<!-- .slide: class="align-center" -->

<img src="assets/8_20250217113954.png">

Notes:
Transformers don't read text from the start to the finish,  
they soak it all in at once, in parallel.

--

## Word Embedding

<!-- .slide: class="align-center" -->

<img src="assets/9_20250217114313.png">

Notes:
The very first step inside a transformer, and most other language models for that matter,  
is to associate each word with a long list of numbers.  
The reason for this is that the training process only works with continuous values,  
so you have to somehow encode language using numbers,  
and each of these lists of numbers may somehow encode the meaning of the  
corresponding word.

--

<!-- .slide: class="align-center" -->

## Attention mechanism

<img src="assets/10_20250217115204.png">

Notes:
What makes transformers unique is their reliance  
on a special operation known as attention.  
This operation gives all of these lists of numbers a chance to talk to one another  
and refine the meanings they encode based on the context around, all done in parallel. 

--

## Enhancing word meaning

<!-- .slide: class="align-center" -->

<img src="assets/11_20250217115237.png">

Notes:
For example, the numbers encoding the word bank might be changed based on the  
context surrounding it to somehow encode the more specific notion of a riverbank.

--

## Finding hidden patterns

<!-- .slide: class="align-center" -->

<img src="assets/12_20250217115256.png">

Notes:
Transformers typically also include a second type of operation known  
as a feed-forward neural network, and this gives the model extra  
capacity to store more patterns about language learned during training.

--

## Repeating over and over

<!-- .slide: class="align-center" -->

<img src="assets/13_20250217115528.png">

Notes:
All of this data repeatedly flows through many different iterations of  
these two fundamental operations, and as it does so,  
the hope is that each list of numbers is enriched to encode whatever  
information might be needed to make an accurate prediction of what word  
follows in the passage.

--

## Interpreting results

<!-- .slide: class="align-center" -->

<img src="assets/14_20250217120451.png">

Notes:
At the end, one final function is performed on the last vector in this sequence,  
which now has had a chance to be influenced by all the other context from the input text,  
as well as everything the model learned during training,  
to produce a prediction of the next word.  
Again, the model's prediction looks like a probability for every possible next word.

--

## Growing fast

<!-- .slide: class="align-center" -->

<img src="assets/15_20250217120654.png">

Notes:
Although researchers design the framework for how each of these steps work,  
it's important to understand that the specific behavior is an emergent phenomenon  
based on how those hundreds of billions of parameters are tuned during training.  
This makes it incredibly challenging to determine  
why the model makes the exact predictions that it does.  
What you can see is that when you use large language model predictions to autocomplete 
a prompt, the words that it generates are uncannily fluent, fascinating, and even useful.
