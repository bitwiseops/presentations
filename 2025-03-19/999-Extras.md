--


## Dense / Fully Connected Neural Networks

> A dense neural network, often referred to as a fully connected network, is a type of artificial neural network where **each neuron in one layer is connected to every neuron in the next layer**. These connections allow the network to *learn complex patterns and relationships from the input* data through a process of weighted inputs, biases, and activation functions.

<small style="font-size:xx-small"> [Dense NN Example](https://colab.research.google.com/drive/1-0RsBldZ0KlCeP6O4BeuPbB4Zi6tZn73?usp=sharing) </small>



--

## Convolutional Neural Networks 

> A Convolutional Neural Network (CNN) is a type of artificial neural network designed to **process data with a grid-like topology**, such as images. CNNs are particularly powerful for tasks that involve spatial data, like image and video recognition, image classification, and also applications in areas beyond vision, such as audio processing and natural language processing.


<small style="font-size:xx-small"> [CNN Explainer](https://poloclub.github.io/cnn-explainer/) </small>


Notes:
- Specialized kind of neural network for processing data with a grid-like topology
- Particularly useful in image recognition/classification and processing
- Utilizes convolutional layers, pooling layers, and fully connected layers

--

<!-- .slide: class="align-center" -->


## Recurrent Neural Networks 


<div class="r-stack">
    <img class="fragment fade-out" src="assets/RNN-vs-FNN-660.png" width="70%" data-fragment-index=0>
    <img class="fragment fade-in-then-out" src="assets/unrolled-nn.webp" width="70%" data-fragment-index=0>
</div>


[Introduction to Recurrent Neural Network](https://www.geeksforgeeks.org/introduction-to-recurrent-neural-network/) <!-- .element: style="font-size:xx-small" -->
[Recurrent Neural Networks and LSTM explained](https://medium.com/@lchandratejareddy/recurrent-neural-networks-and-lstm-explained-7871f3c5ac00) <!-- .element: style="font-size:xx-small" -->
<!-- .element: style="float:right" -->

Notes:
- RNNs are networks with loops, allowing information to persist
- **RNN Structure:** RNNs are distinguished from other neural network architectures by their unique feedback loops, allowing them to process sequential data over time. This structure enables RNNs to use information from previous inputs to influence future predictions, a crucial feature for analyzing temporal data.
- **Sequential Data Handling:** Unlike other neural networks that require a fixed number of input and output values, RNNs excel in dealing with varying amounts of sequential data. This ability makes them ideal for tasks like stock price prediction, where the input data consists of time-series information.
- Vanishing / Exploding Gradient Problem (Hard Training)
- **Shared Weights and Biases**: An important aspect of RNNs is the sharing of weights and biases across all time steps. This feature ensures that the model remains compact and manageable, regardless of the number of inputs.
- **Challenges with RNNs**: Despite their advantages, RNNs face challenges, such as the **Vanishing and Exploding Gradient Problem**, which complicates the training process. Long Short-Term Memory Networks (LSTMs) provide a solution to this problem.

--

<!-- .slide: class="align-center" -->


## Recurrent Neural Networks - Example


<div class="r-stack">
    <img class="fragment fade-out" src="assets/rnn-0.png" width="70%" data-fragment-index=0>
    <img class="fragment fade-in-then-out" src="assets/rnn-1.png" width="70%" data-fragment-index=0>
    <img class="fragment fade-in-then-out" src="assets/rnn-2.png" width="70%">
    <img class="fragment fade-in-then-out" src="assets/rnn-3.png" width="70%">
    <img class="fragment fade-in-then-out" src="assets/rnn-4.png" width="70%">
</div>

[Recurrent Neural Networks (RNNs), Clearly Explained!!!](https://www.youtube.com/watch?v=AsNTP8Kwu80) <!-- .element: style="font-size:xx-small" -->
<!-- .element: style="float:right" -->

Notes:
- We want to predict the next value in a sequence e.g. the stock market from 2 different sources using the same RNN; the sequence has variable length 
- A RNN has the same shape of a NN: layers, weights and biases. The only difference is the feedback loop
- We plug in values from the first to the last before the one we want to predict
- we ignore outputs from all cells but the last one, which is the prediction
- Note that the RNN shares the same weights and biases for each step

--

<!-- .slide: class="align-center" -->


## Recurrent Neural Networks - Exploding / Vanishing Problem


<div class="r-stack">
    <img class="fragment fade-out" src="assets/rnn-5.png" width="30%" data-fragment-index=0>
    <img class="fragment fade-in-then-out" src="assets/rnn-6.png" width="70%" data-fragment-index=0>
    <img class="fragment fade-in-then-out" src="assets/rnn-7.png" width="30%">
</div>

[Recurrent Neural Networks (RNNs), Clearly Explained!!!](https://www.youtube.com/watch?v=AsNTP8Kwu80) <!-- .element: style="font-size:xx-small" -->

Notes:
- It is okay using RNN for short variable lenght inputs, but becomes very hard to train when input lenghts increase
- This is called the Exploding / Vanishing Problem
- Let's say the input lenght we have is 50 elements; so the RNN is replicated 50 times and the last one receives a value multiplied by the weight in the loop 50 times
- If the weight at this step is higher than 1, than the value reaching this point in the path may become really high - So the gradient, which should move the research of a minimum of the cost function towards a convergence, will make the algorithm take a step too big and never reach the end
- The same thing happens if the feedback weight is lower than 1, but this time the steps to reach the minimum of the cost function would be too small and never reach the end

--

<!-- .slide: class="align-center" -->


## Long Short-Term Memory 


<div class="r-stack">
    <img class="fragment fade-out" src="assets/lstm-0.png" width="45%" data-fragment-index=0>
    <img class="fragment fade-in-then-out" src="assets/lstm-cell.jpg" width="80%" data-fragment-index=0>
</div>


<small style="font-size:xx-small"> [Recurrent Neural Networks and LSTM explained](https://medium.com/@lchandratejareddy/recurrent-neural-networks-and-lstm-explained-7871f3c5ac00) </small>

Notes:
- LSTM cells not as simple as RNN cell
- Solve Vanishing / Exploding Gradient Problem thanks to the Long term memory path ( no weights and biases are are used to process values flowing into this path )
- LSTM is a special kind of RNN capable of learning long-term dependencies

--

<!-- .slide: class="align-center" -->


## Long Short-Term Memory - Details


<div class="r-stack">
    <img class="fragment fade-out" src="assets/lstm-1.png" width="30%"  data-fragment-index=0>
    <img class="fragment fade-in-then-out" src="assets/lstm-2.png" width="60%"  data-fragment-index=0>
    <img class="fragment fade-in-then-out" src="assets/lstm-3.png" width="90%" >
</div>


<small style="font-size:xx-small"> [Long Short-Term Memory (LSTM), Clearly Explained](https://www.youtube.com/watch?v=YCzL96nL7j0) </small>

Notes:


--

## Backpropagation and Gradient Descent (1)

<!-- .slide: class="align-center" -->

<iframe width="560" height="315" src="https://www.youtube.com/embed/qg4PchTECck?si=bNstj66ekc-R-Ucf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


Notes:
- Backpropagation: Method for calculating the gradient of the loss function with respect to each weight by the chain rule
- Gradient Descent: Optimization algorithm to adjust the parameters to minimize the loss function
- These methods allow the network to learn from its mistakes

--

## Backpropagation and Gradient Descent (2)

<!-- .slide: class="align-center" -->

<img src="assets/gradient_descent_example.gif" width="70%">

Notes:

--


## Why Grimoires? 

<!-- .slide: class="align-center" -->

<img src="assets/spellbook.gif" width="60%">


Notes:
The analogy here is that just as grimoires were the repositories of arcane knowledge and power in their time, LLMs are the contemporary digital equivalents, holding vast amounts of human knowledge. However, instead of spells and magical rites, LLMs contain the collective textual data of humanity, capable of generating insights, answers, and even creating new content based on this data.

--

## Matching Output and Truth (2)

<!-- .slide: class="align-center" -->

<video controls loop muted src="assets/backprop/backpropagation-212-222.mov">

--

## Propagation

<!-- .slide: class="align-center" -->

<video controls loop muted src="assets/backprop/backpropagation-513-542.mov">

--

<img src="assets/37_20240406110141.png">

--

<img src="assets/38_20250213113238.png">

--

<img src="assets/39_20250213113310.png">

--

<img src="assets/40_20250213113343.png">

--

<img src="assets/41_20250213113442.png" style="max-height: 50vh;" >

--

## Emergent Abilities

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

--

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
