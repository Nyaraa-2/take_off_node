import express from 'express'
const graduationRouter = express.Router()
import { getGraduations, addGraduation } from './graduationController.js'

graduationRouter.get('/graduations', getGraduations)
graduationRouter.post('/graduation', addGraduation)
export default graduationRouter
