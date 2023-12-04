import {Router} from "express";
import {auth} from '../../middleware/auth.js'
import * as orderController from "./order.controller.js";
import {validation} from '../../middleware/validation.js'
import {endpoints} from '../order/order.endpoint.js'
const router = Router();
 
router.post('/',auth(endpoints.createOrder),orderController.createOrder);



export default router;

