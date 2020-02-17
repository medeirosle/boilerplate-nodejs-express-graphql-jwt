import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import expressPlayground from 'graphql-playground-middleware-express'

import errorHandler from './shared/middleware/error.middleware'
import notFoundHandler from './shared/middleware/notfound.middleware'

import registerModuleRoutes from './routes'

function setupCors(app) {
  app.use(cors())
  app.all('/', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN)
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    next()
  })
}

function setupBodyParser(app) {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
}

function setupSecurity(app) {
  app.use(helmet())
  app.disable('x-powered-by')
}

function setupRoutes(app) {
  app.use('/ping', (req, res) => {
    res.status(200).end()
  })
  app.get('/playground', expressPlayground({ endpoint: '/graphql' }))
  registerModuleRoutes(app)
}

function setupHandlers(app) {
  app.use(errorHandler)
  app.use(notFoundHandler)
}

function createApp() {
  const app = express()

  setupCors(app)
  setupBodyParser(app)
  setupSecurity(app)
  setupRoutes(app)
  setupHandlers(app)

  return app
}

export default createApp()
