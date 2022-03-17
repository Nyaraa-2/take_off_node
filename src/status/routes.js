import express from 'express'
const statusRouter = express.Router()
import { getStatus } from './statusController.js'

statusRouter.get('/status', getStatus)

export default statusRouter
