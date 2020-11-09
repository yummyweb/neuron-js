# Neuron JS

## Getting Started

### Info <!-- {docsify-ignore} -->

Neuron JS is the server-side framework you are waiting for. It's as elegant and easy to use as Express JS but at the same time much more smooth and experiential. With an MVC-like architecture whether you are coming from PHP or Django, this framework is suited to your needs.

### Install

```bash
npm i @yummyweb/neuronjs
```

## Usage

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

### Views

Since Neuron JS is MVC-based, there has to be views and there are. So to use views you can configure views by `neuronjs.configureView('templates')` where `templates` is the directory name which contains the views/templates. `configureView()` takes one arguement, as I said the directory name. If your views and templates are in the same directory as your `index.js` or `server.js`, then just use `.` as the first arguement. If I add the `configureViews()` to the above exmaple it will look like.

```javascript
const neuron = require('neuronjs')
const bodyParser = require('body-parser')

const neuronjs = neuron()
neuronjs.configureView('templates')

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

#### Templates and Template Engine

Neuron uses a new template engine called `squirrelly`, which is not very well known, so for more information on `squirrelly` and how it works, check out [the squirrelly docs](https://squirrelly.js.org/). To load a new view or template, instead of using `res.render()` as you would in Express, we can use `neuronjs.view()` which takes view/template name as the first arguement. It takes context as the second arguement and a function as third. Before talking about context, the third function arguement basically, takes parameters in that function. The parameters are: `err`, `res` and `req`. `res` and `req` are response and request respectively, but error is the returned error which you get back with which you can check for error and do something based on that.

!> Make sure that the first arguement for **neuronjs.view()** is within the directory specified in `configureView()`