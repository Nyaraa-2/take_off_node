import express from 'express'
const experienceRouter = express.Router()
import { getExperiences, addExperience } from './experienceController.js'

experienceRouter.get('/experiences', getExperiences)
experienceRouter.post('/experience', addExperience)
export default experienceRouter
