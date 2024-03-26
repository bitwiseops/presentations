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

## What Are Artificial Neural Networks?

Notes:
- Computing systems vaguely inspired by biological neural networks
- Comprise layers of nodes, also known as neurons
- Each node connects to others and can transmit signals
- Neural networks learn to perform tasks by considering examples

--

## The Basics of Neurons

Notes:
- Neurons are the basic unit of computation in a neural network
- Each neuron receives input, processes it, and generates output
- Involves weights, biases, and activation functions
- The neuron's output is determined by its activation function

--

## Layers in Neural Networks


Notes:
- Input Layer: Receives the initial data for processing
- Hidden Layers: Intermediate layers that process inputs from the previous layer
- Output Layer: Produces the final output of the network
- Deep learning networks have multiple hidden layers

--

## Activation Functions

Notes:
- Determine whether a neuron should be activated
- Help the network learn complex patterns
- Common examples: Sigmoid, ReLU, Tanh
- Each type has its specific use cases and effects on the network's learning capability

--

## Training Neural Networks



Notes:
- Involves feeding data into the network and adjusting weights and biases
- The goal is to minimize the difference between predicted and actual outputs
- Uses algorithms like backpropagation and optimization techniques like gradient descent

--

## Backpropagation and Gradient Descent


Notes:
- Backpropagation: Method for calculating the gradient of the loss function with respect to each weight by the chain rule
- Gradient Descent: Optimization algorithm to adjust the parameters to minimize the loss function
- These methods allow the network to learn from its mistakes

--

## Overfitting and Underfitting


Notes:
- Overfitting: Model learns the training data too well, including the noise, leading to poor performance on new data
- Underfitting: Model is too simple to learn the underlying structure of the data
- Techniques to avoid these issues include regularization and dropout

--

## Convolutional Neural Networks (CNNs)

[Demo](https://poloclub.github.io/cnn-explainer/)

Notes:
- Specialized kind of neural network for processing data with a grid-like topology
- Particularly useful in image recognition and processing
- Utilizes convolutional layers, pooling layers, and fully connected layers

--

## Recurrent Neural Networks (RNNs)

Notes:
- RNNs are networks with loops, allowing information to persist
- Particularly suited for sequential data like time series or natural language
- Vanishing / Exploding Gradient Problem (Hard Training)

--

## Long Short-Term Memory (LSTM)

Notes:
- Solve Vanishing / Exploding Gradient Problem
- LSTM is a special kind of RNN capable of learning long-term dependencies