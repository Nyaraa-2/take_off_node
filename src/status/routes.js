import express from 'express'
const statusRouter = express.Router()
import { getStatus } from './statusController.js'

statusRouter.get('/', getStatus)

export default statusRouter
