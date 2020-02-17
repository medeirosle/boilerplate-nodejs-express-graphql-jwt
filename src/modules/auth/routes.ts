import { Router } from 'express'
import { authenticateUser } from '@modules/auth/controller'

const router = Router()

router.post('/', authenticateUser)

export default router
