import { get, isEmpty } from 'lodash/fp'
import Express from 'express'
import crypto, { HexBase64Latin1Encoding } from 'crypto'
import qs from 'qs'
import errors from '@shared/constants/errors.constants'

const HMACGuard = function(
  req: Express.Request,
  res: Express.Response,
  next: Function
): void {
  validateHMACAuthentication(req, next)
}

function validateHMACAuthentication(
  req: Express.Request,
  next: Function
): void {
  const hmac = get('headers.digest', req)
  const { body } = req

  ensureHMACExists(hmac, next)
  ensureHMACIsValid(body, hmac, next)

  next()
}

function ensureHMACExists(hmac: string, next: Function): void {
  if (isEmpty(hmac)) {
    return next(new Error(errors.HMAC_EMPTY_MESSAGE))
  }
}

function ensureHMACIsValid(body: any, hmac: string, next: Function): void {
  if (generateHash(getURLEncodedBody(body)) !== hmac) {
    next(new Error(errors.HMAC_INVALID_MESSAGE))
  }
}

function getURLEncodedBody(body: any): string {
  return qs.stringify(body, {
    sort: (previousItem, item) => previousItem.localeCompare(item)
  })
}

function generateHash(content: string): string {
  return crypto
    .createHmac(process.env.HMAC_ALGORITHM!, process.env.HMAC_SECRET!)
    .update(content)
    .digest(process.env.HMAC_DIGEST_TYPE as HexBase64Latin1Encoding)
}

export default HMACGuard
