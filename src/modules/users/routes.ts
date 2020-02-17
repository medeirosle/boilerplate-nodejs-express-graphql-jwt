import { Router } from 'express'
import controller from './controller'

const router = Router()

router.use('/', controller)

export default router
