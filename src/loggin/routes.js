import express from 'express'
const logginRouter = express.Router()
import { getLoggins, addLoggin } from '../../controllers/logginController.js'

logginRouter.get('/', getLoggins)
logginRouter.post('/signup', addLoggin)
export default logginRouter
