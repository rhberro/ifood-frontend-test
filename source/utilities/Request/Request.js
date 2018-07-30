import querystring from 'query-string'

function getQueryString (params) {
  const queryString = querystring.stringify(params)
  return queryString
    ? `?${queryString}`
    : ''
}

function getAddress (url, params) {
  const queryString = getQueryString(params)
  return `${url}${queryString}`
}

function getToken () {
  return process.env.SPOTIFY_TOKEN || ''
}

function getHeaders () {
  const token = getToken()

  if (token) {
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }

  return {
    'Content-Type': 'application/json'
  }
}

function getOptions (method) {
  return {
    method,
    headers: getHeaders()
  }
}

function send (path, options) {
  return window.fetch(path, options)
}

export function get (url, params) {
  const address = getAddress(url, params)
  const options = getOptions('get')
  return send(address, options)
}

export default { get }
