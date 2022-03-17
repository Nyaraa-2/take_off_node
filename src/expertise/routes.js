import express from 'express'
const expertiseRouter = express.Router()
import { getExpertises } from './expertiseController.js'

expertiseRouter.get('/expertises', getExpertises)

export default expertiseRouter
