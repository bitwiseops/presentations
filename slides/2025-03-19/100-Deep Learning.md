# DL - Deep Learning

--

## Definition

__Deep Learning__ is a subset of machine learning in artificial intelligence (AI) that _mimics the workings of the human brain_ in processing data for use in detecting objects, recognizing speech, translating languages, and making decisions. 

Notes:
- Subfield of machine learning
- Inspired by the structure and function of the brain
- Utilizes artificial neural networks
- Capable of learning from unstructured or unlabeled data

--

<!-- .slide: data-background-image="assets/bg-ann.gif" -->

## Artificial Neural Networks

Notes:
- Computing systems vaguely inspired by biological neural networks
- Comprise layers of nodes, also known as neurons
- Each node connects to others and can transmit signals
- Neural networks learn to perform tasks by considering examples

--

<!-- .slide: class="align-center" -->


## Neurons

<img src="assets/Artificial-Neural-Networks.webp">

<small style="float:right; font-size:xx-small"> [Artificial Neural Networks and its Applications](https://www.geeksforgeeks.org/artificial-neural-networks-and-its-applications/) </small>

Notes:
- Neurons are the basic unit of computation in a neural network
- Each neuron receives input, processes it, and generates output
- Involves weights, biases, linear aggregation, and activation functions
- The neuron's output is determined by its activation function
- **What makes neuron different from others is the set of wieight associated with it**

--

# Weights and Bias

<!-- .slide: class="align-center" -->



--

<!-- .slide: class="align-center" -->

## Linear Function

A linear function in this context is a weighted sum such that:

$$ z(X, W, b) = \sum_{i=1}^{n}x_i \cdot w_i + b$$

where

- Input vector $X \in \mathbb{R}^n$
- Weight vector $W \in \mathbb{R}^n$
- Bias scalar $b \in \mathbb{R}$

Notes:


--

<!-- .slide: class="align-center" -->


## Activation Function

<img src="assets/Common-activation-functions-in-artificial-neural-networks-NNs-that-introduce.png" width="70%">

<small style="float:right; font-size:xx-small"> [Machine Learning for Materials Developments in Metals Additive Manufacturing](https://www.researchgate.net/figure/Common-activation-functions-in-artificial-neural-networks-NNs-that-introduce_fig7_341310767) </small>

Notes:
- Determine whether a neuron should be activated
- Help the network learn complex patterns
- Common examples: Sigmoid, ReLU, Tanh
- Each type has its specific use cases and effects on the network's learning capability

--

<!-- .slide: class="align-center" -->

## Layers

<img src="assets/Neural-Networks-Architecture.png">

<small style="float:right; font-size:xx-small"> [Artificial Neural Networks and its Applications](https://www.geeksforgeeks.org/artificial-neural-networks-and-its-applications/) </small>


Notes:
- Input Layer: Receives the initial data for processing
- Hidden Layers: Intermediate layers that process inputs from the previous layer
- Output Layer: Produces the final output of the network
- Deep learning networks have multiple hidden layers 



--

## Training Neural Networks

<!-- .slide: class="align-center" -->

<img src="assets/training-robot.gif" width="70%">

Notes:
- Involves feeding data into the network and **adjusting weights and biases**
- The goal is to **minimize the difference** between predicted and actual outputs ( cost function )
- Uses algorithms like backpropagation and optimization techniques like gradient descent

--

<!-- .slide: class="align-center" -->

## Example: Classification task

<video controls muted src="assets/gradient_descent/ezgif-4cd28dabd6739b.mp4">

--

<!-- .slide: class="align-center" -->

## Inference

<video controls muted src="assets/gradient_descent/ezgif-45275bb35b2d97.mp4">

--

<!-- .slide: class="align-center" -->

## Training

<video controls muted src="assets/gradient_descent/ezgif-46783a986a10e8.mp4">

--

# Gradient Descent

--

<!-- .slide: class="align-center" -->

## Bad Predictions

<video controls muted src="assets/gradient_descent/ezgif-422bd5cae91182.mp4">

--


<!-- .slide: class="align-center" -->

## Evaluating the Loss / Cost (1)

<video controls muted src="assets/gradient_descent/ezgif-4a31475caec044.mp4">

Notes:
- higher values means high prediction error, and vice versa

--


<!-- .slide: class="align-center" -->

## Evaluating the Loss / Cost (2)

<video controls muted src="assets/gradient_descent/ezgif-40bf0f4c71edea.mp4">

--


<!-- .slide: class="align-center" -->

## Weights and Biases (1)

<video controls muted src="assets/gradient_descent/ezgif-4abc0474512930.mp4">

--

<!-- .slide: class="align-center" -->

## Weights and Biases (2)

<video autoplay loop controls muted src="assets/gradient_descent/ezgif-483a11ff189bd3.mp4">

--

<!-- .slide: class="align-center" -->

## Cost Function (1)

<video controls muted src="assets/gradient_descent/ezgif-409b7c3ba6b0fd.mp4">

Notes:
- objective is to minimize the cost function
- single input example to simplify

--

<!-- .slide: class="align-center" -->

## Cost Function (2)

<video autoplay loop controls muted src="assets/gradient_descent/ezgif-40ae3336c139e2.mp4">

--

<!-- .slide: class="align-center" -->

## Local vs Global Minimum

<video controls muted src="assets/gradient_descent/ezgif-43a57615909948.mp4">

--


<!-- .slide: class="align-center" -->

## Gradient Descent (1)

<video controls muted src="assets/gradient_descent/ezgif-4b2cdc6998cee4.mp4">

--


<!-- .slide: class="align-center" -->

## Gradient Descend (2)

<video controls muted src="assets/gradient_descent/ezgif-4e69cdfe7d6605.mp4">


--


<!-- .slide: class="align-center" -->

## Parameters Update

<video controls muted src="assets/gradient_descent/ezgif-434040be4ae3e3.mp4">










