import express from 'express'
const userRouter = express.Router()
import { getRatings, addRating } from './ratingController.js'

userRouter.get('/ratings', getRatings)
userRouter.post('/ratings', addRating)
export default userRouter
