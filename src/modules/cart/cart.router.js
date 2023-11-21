import { Router } from "express";
import * as cartController from './cart.controller.js'
import { auth } from "../../middleware/auth.js";
import { endpoints } from "./cart.endpoint.js";

const router = Router();

router.post('/',auth(endpoints.create),cartController.createCart);
router.patch('/removeItem',auth(endpoints.create),cartController.removeItem);
router.patch('/clear',auth(endpoints.clear),cartController.clearCart);
router.get('/',auth(endpoints.get),cartController.getCart);

export default router;