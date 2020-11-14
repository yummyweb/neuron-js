import { URL } from 'url'

function request (req) {
  const parsedUrl = new URL(`${req.headers.host}${req.url}`)
  const keys = Object.keys(parsedUrl)
  keys.forEach(key => (req[key] = parsedUrl[key]))
}

export default request
