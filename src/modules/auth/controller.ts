import { authenticate } from '@modules/auth/services/auth.service'

const authenticateUser = function(req, res, next) {
  const { username, password } = req.body

  res.send(authenticate(username, password))
}

export { authenticateUser }
