import {Router} from "express"

import * as representanteCtrl from '../controllers/representante.controller'
import { auth_jwt } from '../middlewares'

const router = Router()

router.get('/', auth_jwt.verify_token, representanteCtrl.getRepresentante)
router.post('/', auth_jwt.verify_token, representanteCtrl.createRepresentante)

export default router