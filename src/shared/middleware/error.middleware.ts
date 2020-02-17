import * as HttpStatus from 'http-status-codes'

const errorHandler = (err, req, res, next) => {
  if (!err) return next()

  res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR).json(err)
}

export default errorHandler
