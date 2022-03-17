import express from 'express'
const graduationRouter = express.Router()
import { getGraduations, addGraduation } from '../../controllers/graduationController.js'

graduationRouter.get('/graduations', getGraduations)
graduationRouter.post('/graduation', addGraduation)
export default graduationRouter
