import { Router } from "express"
import * as productsController from './products.controller.js'
import { endpoint } from "./products.endpoint.js";
import { auth } from "../../middleware/auth.js";
import fileUpload, { fileValidation } from "../../services/multer.js";
const router = Router();
router.get('/',productsController.getProducts);
router.post('/',auth(endpoint.create),fileUpload(fileValidation.image).fields([
    {name:"mainImage",maxCount:1},
    {name:"subImages",maxCount:4}
]),productsController.createProducts);

   export default router;
