import {Router} from "express"
import * as empresaCtrl from "../controllers/empresa.controller"
import { auth_jwt } from "../middlewares"

const router = Router()

router.get('/:empresaId', [auth_jwt.verify_token, auth_jwt.is_admin], empresaCtrl.getEmpresaById)
router.get('/', auth_jwt.verify_token, empresaCtrl.getEmpresas)
router.post('/', auth_jwt.verify_token, empresaCtrl.createEmpresa)

export default router