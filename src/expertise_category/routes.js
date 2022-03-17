import express from 'express'
const expertiseCategoryRouter = express.Router()
import { getExpertiseCategory } from './expertiseCategoryController.js'

expertiseCategoryRouter.get('/expertisesCategory', getExpertiseCategory)
export default expertiseCategoryRouter
