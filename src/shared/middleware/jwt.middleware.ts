import Express from 'express'
import { last, split, pipe } from 'lodash/fp'
import jwt from 'jsonwebtoken'
import HttpStatus from 'http-status-codes'

const authGuard = (req: any, res: any, next: Function): void => {
  try {
    const token = req.headers.authorization

    if (!token) {
      res.statusCode = HttpStatus.UNAUTHORIZED
      return next()
    }

    const jwtPayload = verifyToken(token)

    req.user = jwtPayload
    return next()
  } catch (error) {
    res.statusCode = HttpStatus.UNAUTHORIZED
    res.send(error)
    return next()
  }
}

function verifyToken(token) {
  const pureToken = pipe(split(' '), last)(token)

  return jwt.verify(pureToken, process.env.JWT_SECRET)
}

export default authGuard
