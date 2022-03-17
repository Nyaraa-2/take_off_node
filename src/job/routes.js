import express from 'express'
const jobRouter = express.Router()
import { getJobs } from '../../controllers/jobController.js'

jobRouter.get('/jobs', getJobs)

export default jobRouter
