const { AsyncLocalStorage } = require('async_hooks')

const alsStore = new AsyncLocalStorage()

const getAlsStore = () => {
  return alsStore
}

module.exports = getAlsStore
