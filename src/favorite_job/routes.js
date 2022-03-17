import express from 'express'
const favoriteJobRouter = express.Router()
import { getFavoriteJobs, addFavoriteJob } from './favoriteJobController.js'

favoriteJobRouter.get('/favoriteJobs', getFavoriteJobs)
favoriteJobRouter.post('/favoriteJob', addFavoriteJob)
export default favoriteJobRouter
