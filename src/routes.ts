import { routes as userRoutes } from './modules/users'
import { routes as authRoutes } from './modules/auth'
import authGuard from './shared/middleware/jwt.middleware'

const registerModulesRoutes = function(app) {
  app.use('/auth', authRoutes)
  app.use('/users', authGuard, userRoutes)
}

export default registerModulesRoutes
