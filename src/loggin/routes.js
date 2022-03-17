import express from 'express'
const logginRouter = express.Router()
import { getLoggins, addLoggin } from './logginController.js'

logginRouter.get('/loggins', getLoggins)
logginRouter.post('/signup', addLoggin)
export default logginRouter
