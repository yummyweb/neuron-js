// //const { neuron } = require('@yummyweb/neuronjs')
// const neuron = require('../src/neuron')
// //const cors = require('cors');

// // API data
// let apiData = {"data":[{"id":0,"name":"Esmiye","surname":"Tefekk\u00fcl","email":"esmiye@tefekk\u00fcl.com","username":"tefekk\u00fcl_esmiye","gender":"K"},{"id":1,"name":"Evirgen","surname":"Necva","email":"evirgen@necva.com","username":"necva_evirgen","gender":"E"},{"id":2,"name":"Uguz","surname":"Vahdettin","email":"uguz@vahdettin.com","username":"vahdettin_uguz","gender":"E"},{"id":3,"name":"Erim","surname":"Fulten","email":"erim@fulten.com","username":"fulten_erim","gender":"U"},{"id":4,"name":"Arapcan","surname":"Dirlik","email":"arapcan@dirlik.com","username":"dirlik_arapcan","gender":"E"},{"id":5,"name":"Gevher","surname":"Sabire","email":"gevher@sabire.com","username":"sabire_gevher","gender":"K"},{"id":6,"name":"Zabit","surname":"Se\u00e7kiner","email":"zabit@se\u00e7kiner.com","username":"se\u00e7kiner_zabit","gender":"E"},{"id":7,"name":"Behiye","surname":"\u0130lsever","email":"behiye@\u0130lsever.com","username":"\u0130lsever_behiye","gender":"K"},{"id":8,"name":"Faz\u0131la","surname":"Aymete","email":"faz\u0131la@aymete.com","username":"aymete_faz\u0131la","gender":"K"},{"id":9,"name":"Id\u0131k","surname":"Nervis","email":"id\u0131k@nervis.com","username":"nervis_id\u0131k","gender":"E"},{"id":10,"name":"Nurfeza","surname":"Fermude","email":"nurfeza@fermude.com","username":"fermude_nurfeza","gender":"K"},{"id":11,"name":"\u00d6vg\u00fcl","surname":"\u015e\u00fckriyen","email":"\u00d6vg\u00fcl@\u015e\u00fckriyen.com","username":"\u015e\u00fckriyen_\u00d6vg\u00fcl","gender":"K"},{"id":12,"name":"Rizan","surname":"\u00c7in ","email":"rizan@\u00c7in.com","username":"\u00c7in _rizan","gender":"E"}]}

// const neuronjs = neuron();
// neuronjs.configureView('template')

// //neuronjs.use(cors());

// neuronjs.GET('/', (req, res) => {
//     //res.json(apiData)
//     neuronjs.view('home.html', {res, req}, (err, res, req) => {
//         if (err) throw err
//     })
// })

// neuronjs.DELETE('/delete/:id', (req, res) => {
//     res.json({ "deletedObj": {"name": "Jimes", "age": 45} })
// })

// const server = neuronjs.listen(5000, () => console.log(`Server running on ${5000}`));

import neuron from '../src/neuron.js'

const neuronjs = neuron();
neuronjs.configureView('template')

neuronjs.GET('/', (req, res) => {
    neuronjs.view('home.html', {res, req, fun: "very fun"}, (err, res, req) => {
        if (err) throw err
    })
})

const server = neuronjs.listen(5000, () => console.log(`Server running on ${5000}`));