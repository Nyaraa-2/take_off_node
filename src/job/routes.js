import express from 'express'
const jobRouter = express.Router()
import { getJobs } from './jobController.js'

jobRouter.get('/jobs', getJobs)

export default jobRouter
