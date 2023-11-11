import {Router} from "express";
import * as couponController from "./coupon.controller.js";
const router = Router();

router.post('/',couponController.createCoupon);
router.get('/',couponController.getCoupones);
router.put('/:id',couponController.updateCoupon);
router.patch('/softDelete/:id',couponController.softDelete);
router.delete('/hardDelete/:id',couponController.hardDelete);
router.patch('/restore/:id',couponController.restore);


export default router;

