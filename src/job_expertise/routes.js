import express from 'express'
const jobExpertiseRouter = express.Router()
import { getJobExpertises } from './jobExpertiseController.js'

jobExpertiseRouter.get('/jobExpertises', getJobExpertises)

export default jobExpertiseRouter
