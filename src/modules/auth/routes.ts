import { Router } from 'express'
import { authenticateUser } from './controller'

const router = Router()

router.post('/', authenticateUser)

export default router
