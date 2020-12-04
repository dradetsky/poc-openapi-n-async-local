const OpenAPIBackend = require('openapi-backend').default
const express = require('express')

const getAlsStore = require('./getals')
const getPets = require('./hand0.js')

const app = express()
app.use(express.json())
const api = new OpenAPIBackend({
  definition: './api.yaml',
  handlers: {
    getPets
  }
})
api.init()
app.use((req, res) => {
  const myheader = req.headers['x-myheader']
  console.log(`myheader 0: ${myheader}`)
  getAlsStore().run({ myheader }, () => {
    api.handleRequest(req, req, res)
  })
})
app.listen(9000, () => console.info('api listening at http://localhost:9000'))
