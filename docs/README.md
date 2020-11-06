# Neuron JS

## Getting Started

### Description

Neuron JS is the server-side framework you are waiting for. It's as elegant and easy to use as Express JS but at the same time much more smooth and experiential. With an MVC-like architecture whether you are coming from PHP or Django, this framework is suited to your needs.

### Install

```bash
npm i @yummyweb/neuronjs
```

### Basic Usage

```javascript
const neuron = require('neuronjs')

const neuronjs = neuron()

const server = neuronjs.listen(5000, () => console.log(`Server running on ${5000}`))
```

Check out the GitHub repository of the project to see some more examples.