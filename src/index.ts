import 'module-alias/register'
require('dotenv').config()
import app from './setup'
const server = require('http').createServer(app)

server
  .listen(process.env.PORT, () => {
    console.info(`Server started on port ${process.env.PORT}`)
  })
  .on('error', err => {
    console.error(err)
  })
