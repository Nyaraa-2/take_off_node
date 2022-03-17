import express from 'express'
const expertiseRouter = express.Router()
import { getExpertises } from '../../controllers/expertiseController.js'

expertiseRouter.get('/expertises', getExpertises)

export default expertiseRouter
