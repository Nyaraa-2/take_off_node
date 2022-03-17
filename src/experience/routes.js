import express from 'express'
const experienceRouter = express.Router()
import { getExperiences, addExperience } from '../../controllers/experienceController.js'

experienceRouter.get('/', getExperiences)
experienceRouter.post('/add', addExperience)
export default experienceRouter
