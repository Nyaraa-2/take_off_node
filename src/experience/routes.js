import express from 'express'
const experienceRouter = express.Router()
import * as controller from './experienceController.js'

experienceRouter.get('/experiences', controller.getExperiences)
experienceRouter.post('/experience', controller.createExperience)
export default experienceRouter
