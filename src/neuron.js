import fs from 'fs'
import http from 'http'
import request from './request.js'
import response from './response.js'
import { checkMiddlewareInputs, matchPath } from './utils.js'
import Router from './router/router.js'
import Sqrl from 'squirrelly'

function Neuron () {
  const _middlewares = []
  const _router = new Router()
  let templateddirectory

  function use (...args) {
    const { path, handler } = checkMiddlewareInputs(args)
    _middlewares.push({
      path,
      handler
    })
  }

  function findNext (req, res) {
    let current = -1
    const next = () => {
      current += 1
      const middleware = _middlewares[current]
      const { matched = false, params = {} } = middleware ? matchPath(middleware.path, req.pathname) : {}

      if (matched) {
        req.params = params
        middleware.handler(req, res, next)
      } else if (current <= _middlewares.length) {
        next()
      } else {
        req.handler(req, res)
      }
    }
    return next
  }

  function handle (req, res, cb) {
    const next = findNext(req, res)
    req.handler = cb
    next()
  }

  function GET (...args) {
    const { path, handler } = checkMiddlewareInputs(args)
    return _router.get(path, handler)
  }

  function POST (...args) {
    const { path, handler } = checkMiddlewareInputs(args)
    return _router.post(path, handler)
  }

  function DELETE (...args) {
    const { path, handler } = checkMiddlewareInputs(args)
    return _router.delete(path, handler)
  }

  function PUT (...args) {
    const { path, handler } = checkMiddlewareInputs(args)
    return _router.put(path, handler)
  }

  function configureView (templatedDir) {
    if (typeof (templatedDir) === 'string') {
      templateddirectory = templatedDir
    } else throw 'TypeError: Wrong Type. Expected String got ' + typeof (templateName)
  }

  function view (templateName, ctx, cb) {
    if (typeof (templateName) === 'string') {
      fs.readFile(`${templateddirectory}/${templateName}`, (err, data) => {
        cb(err, ctx.res, ctx.req)
        const compiled = Sqrl.render(data.toString(), ctx)
        ctx.res.send(compiled)
      })
    } else throw 'TypeError: Wrong Type. Expected String got ' + typeof (templateName)
  }

  function listen (port, cb) {
    return http
      .createServer((req, res) => {
        request(req)
        response(res)
        handle(req, res, () => _router.handle(req, res))
      })
      .listen({ port }, () => {
        if (cb) {
          if (typeof cb === 'function') {
            return cb()
          }
          throw new Error('Listen callback needs to be a function')
        }
      })
  }
  return {
    use,
    listen,
    GET,
    POST,
    DELETE,
    PUT,
    configureView,
    view
  }
}

export default Neuron
