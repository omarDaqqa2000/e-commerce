import { Router } from "express";
import * as cartController from './cart.controller.js'
import { auth } from "../../middleware/auth.js";
import { endpoints } from "./cart.endpoint.js";
import {asyncHandler} from '../../services/errorHandling.js';

const router = Router();

router.post('/',auth(endpoints.create),asyncHandler(cartController.createCart));
router.patch('/removeItem',auth(endpoints.create),asyncHandler(cartController.removeItem));
router.patch('/clear',auth(endpoints.clear),asyncHandler(cartController.clearCart));
router.get('/',auth(endpoints.get),asyncHandler(cartController.getCart));

export default router;