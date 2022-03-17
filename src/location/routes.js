import express from 'express'
const locationRouter = express.Router()
import { getLocation } from './locationController.js'

locationRouter.get('/', getLocation)

export default locationRouter
