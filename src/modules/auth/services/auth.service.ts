import { omit } from 'lodash/fp'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Auth from '@modules/auth/types/auth'
import constants from '@modules/auth/constants'
import { getUserByUsername } from '@modules/users/services/user.service'

const generateJWTPayload = user => {
  const iat = Math.floor(Date.now() / 1000)
  const expirationSeconds = Number(process.env.JWT_EXPIRATION_SECONDS)
  return {
    sessionLength: expirationSeconds,
    iat,
    exp: iat + expirationSeconds,
    ...omit(['password'], user)
  }
}

const authenticate = async ({ username, password }): Promise<Auth> => {
  const user = await getUserByUsername(username)

  if (!user) {
    throw new Error(constants.AUTH_ERROR_USER_NOT_FOUND)
  }

  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!passwordMatch) {
    throw new Error(constants.AUTH_ERROR_WRONG_PASSWORD)
  }

  const payload = generateJWTPayload(user)
  const token = jwt.sign(payload, process.env.JWT_SECRET)
  return { token }
}

export { authenticate }
