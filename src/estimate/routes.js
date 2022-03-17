import express from 'express'
const estimateRouter = express.Router()
import { getEstimates, addEstimate } from './estimateController.js'

estimateRouter.get('/estimates', getEstimates)
estimateRouter.post('/estimate', addEstimate)
export default estimateRouter
