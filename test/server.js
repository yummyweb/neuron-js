import neuron from '../src/neuron.js'

const neuronjs = neuron()
const port = process.env.PORT || 5000

neuronjs.GET('/', (req, res) => {
  res.send(req.headers.host)
})

neuronjs.listen(port, () => {
  console.log('Server started on port ' + port)
})
