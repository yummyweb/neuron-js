import url from 'url'

// TODO: Use URL constructor instead of url.parse()
function request (req) {
  const parsedUrl = url.parse(`${req.headers.host}${req.url}`)
  const keys = Object.keys(parsedUrl)
  keys.forEach(key => (req[key] = parsedUrl[key]))
}

export default request
