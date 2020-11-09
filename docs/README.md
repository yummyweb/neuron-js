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

### Advanced Usage

Using body-parser middleware. Make `POST` and `GET` requests.

```javascript
const neuron = require('neuronjs')
const bodyParser = require('body-parser')

const neuronjs = neuron()

// Body parser middleware
neuronjs.use(bodyParser())

neuronjs.GET('/', (req, res) => {
    res.write("Demo")
    res.end()
})

neuronjs.POST('/post', (req, res) => {
    res.json({ "sentData": req.body.sentData })
})

const server = neuronjs.listen(5000, () => console.log(`Server running on ${5000}`))
```

The above code is an example of making `POST` and `GET` requests. The `req.body.sentData` is the data you send through the body of the request. `sentData` is the json attribute of the body of request. Body parser is neccessary for the post request to work i.e. the body attribute is only accessbile if body parser is in the middleware.