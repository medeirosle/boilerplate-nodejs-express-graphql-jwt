import jwt from 'jsonwebtoken'

const authenticate = function(username, password) {
  //todo: Authorization Rule

  return jwt.sign({ id: 1, username }, process.env.JWT_SECRET)
}

export { authenticate }
