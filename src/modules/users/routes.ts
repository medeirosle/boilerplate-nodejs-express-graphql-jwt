import { Router } from 'express'
import controller from '@modules/users/controller'

const router = Router()

router.use('/', controller)

export default router
