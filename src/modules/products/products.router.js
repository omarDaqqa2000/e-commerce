import { Router } from "express"
import * as productsController from './products.controller.js'
import { endpoint } from "./products.endpoint.js";
import { auth } from "../../middleware/auth.js";
import fileUpload, { fileValidation } from "../../services/multer.js";
import {asyncHandler} from '../../services/errorHandling.js';
import {validation } from '../../middleware/validation.js';
import * as validator from './product.validation.js'

const router = Router();
router.get('/',asyncHandler(productsController.getProducts));
router.post('/',auth(endpoint.create),fileUpload(fileValidation.image).fields([
    {name:"mainImage",maxCount:1},
    {name:"subImages",maxCount:4}
]),validation(validator.createProduct),productsController.createProducts);
router.get('/category/:categoryId',productsController.getProductWithCategory);
router.get('/:productId',productsController.getProduct);
   export default router;
