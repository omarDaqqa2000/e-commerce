import { Router, application } from "express"
import * as categoriesController from './categories.controller.js'
import fileUpload, { fileValidation } from "../../services/multer.js";
import subCategoryRouter from './../subcategory/subcategory.router.js'
import { auth } from "../../middleware/auth.js";
import { endpoint } from "./category.endpoint.js";
import {asyncHandler} from '../../services/errorHandling.js';
import {validation } from '../../middleware/validation.js';
import * as validators from './category.validation.js';
import {roles} from '../../middleware/auth.js'

const router = Router();


router.use('/:id/subcategory',subCategoryRouter);
router.post('/',auth(endpoint.create),fileUpload(fileValidation.image).single('image'),
validation(validators.createCategory),asyncHandler(categoriesController.createCategory))

router.get('/',asyncHandler(categoriesController.getCategories))

router.get('/active',auth(endpoint.getActive),asyncHandler(categoriesController.getActiveCategory))
router.get('/:id',auth(endpoint.specific),asyncHandler(categoriesController.getSpecificCategory))
router.put('/:id',auth(endpoint.update),fileUpload(fileValidation.image).single('image'),validation(validators.getSpecificCategory),asyncHandler(categoriesController.updateCategory));

   export default router;
   
