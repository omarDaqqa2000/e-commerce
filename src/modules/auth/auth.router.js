import { Router } from "express";
import * as AuthController from './auth.controller.js'
import {asyncHandler} from '../../services/errorHandling.js'
import fileUpload, { fileValidation } from "../../services/multer.js";
const router = Router();

router.post('/signup',fileUpload(fileValidation.image).single('image'),asyncHandler(AuthController.signUp));
router.post('/signin',asyncHandler(AuthController.signIn));
router.get('/confirmEmail/:token',asyncHandler(AuthController.confirmEmail));
router.patch('/sendcode',asyncHandler(AuthController.sendCode));
router.patch('/forgetPassword',asyncHandler(AuthController.forgetPassword));
router.delete('/invalidConfirm',asyncHandler(AuthController.deleteInvalidConfirm));

export default router;
