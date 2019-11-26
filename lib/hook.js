const wretch = require('wretch')
const fetch = require("node-fetch")

wretch().polyfills({
  fetch: fetch,
  URLSearchParams: require("url").URLSearchParams
})
const hook = (url, data) => {
  return wretch(url).post(data).res()
}

module.exports = hook