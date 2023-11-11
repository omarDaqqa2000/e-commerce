import { Router, application } from "express"
import * as categoriesController from './categories.controller.js'
import fileUpload, { fileValidation } from "../../services/multer.js";
import subCategoryRouter from './../subcategory/subcategory.router.js'
import { auth } from "../../middleware/auth.js";
import { endpoint } from "./category.endpoint.js";
const router = Router();


router.use('/:id/subcategory',subCategoryRouter);
router.get('/',categoriesController.getCategories)
router.get('/active',auth(endpoint.getActive),categoriesController.getActiveCategory)
router.get('/:id',auth(endpoint.specific),categoriesController.getSpecificCategory)
router.post('/',auth(endpoint.create),fileUpload(fileValidation.image).single('image'),categoriesController.createCategory)
router.put('/:id',auth(endpoint.update),fileUpload(fileValidation.image).single('image'),categoriesController.updateCategory);

   export default router;
   
