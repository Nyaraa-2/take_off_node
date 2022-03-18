import express from 'express'
const estimateRouter = express.Router()
import * as controller from './estimateController.js'

estimateRouter.get('/estimates', controller.getEstimates)
estimateRouter.post('/estimate', controller.createEstimate)
export default estimateRouter
