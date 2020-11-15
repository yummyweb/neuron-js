import { matchPath } from '../utils.js'

class Layer {
  // Setting up path and handler
  constructor (path, handler) {
    this.handler = handler
    this.name = handler.name || '<anonymous>'
    this.path = path
  }

  // If current request path matches the layer's path
  // then handling for current path
  requestHandler (...args) {
    this.handler ? this.handler(...args) : null
  }

  // To match current request path with
  // path provided at the time of setup

  // SETUP: app.get('/login', (req, res) => {})
  // CURRENT REQUEST: GET /login
  match (path) {
    return matchPath(this.path, path)
  }
}

export default Layer
