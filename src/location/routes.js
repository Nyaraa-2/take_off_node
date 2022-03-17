import express from 'express'
const locationRouter = express.Router()
import { getLocations } from './locationController.js'

locationRouter.get('/locations', getLocations)

export default locationRouter
