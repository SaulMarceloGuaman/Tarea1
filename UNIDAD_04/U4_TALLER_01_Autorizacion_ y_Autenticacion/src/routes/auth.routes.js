import { Router } from 'express'
import * as authCtrl from '../controllers/auth.controller'
import { auth_jwt } from "../middlewares"

const router = Router()

router.post('/signin', authCtrl.sign_in)

export default router
