import { last, split, pipe } from 'lodash/fp'
import jwt from 'jsonwebtoken'
import HttpStatus from 'http-status-codes'
import errors from '@shared/constants/errors.constants'

const authGuard = (req: any, res: any, next: Function): void => {
  try {
    const token = req.headers.authorization

    if (!token) {
      res.statusCode = HttpStatus.UNAUTHORIZED
      throw new Error(errors.JWT_INVALID_MESSAGE)
    }

    const jwtPayload = verifyToken(token)

    req.user = jwtPayload
  } catch (error) {
    res.statusCode = HttpStatus.UNAUTHORIZED
    throw error
  }
}

function verifyToken(token) {
  const pureToken = pipe(split(' '), last)(token)

  return jwt.verify(pureToken, process.env.JWT_SECRET)
}

export default authGuard
