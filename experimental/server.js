import neuron from './neuron.js'

const neuronjs = neuron();
neuronjs.configureView('.')

neuronjs.GET('/hello', (req, res) => {
    neuronjs.view('hello.html', {res, req, person: "JIMIN"}, (err, res, req) => {
        if (err) throw err
    })
})

const server = neuronjs.listen(5000, () => console.log(`Server running on ${5000}`));