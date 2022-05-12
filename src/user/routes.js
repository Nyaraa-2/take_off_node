import express from 'express'
const userRouter = express.Router()
import { getUsers, addUser, getUsersDetails } from './userController.js'

userRouter.get('/users', getUsers)
userRouter.post('/signup', addUser)
userRouter.get('/users/details', getUsersDetails)
export default userRouter
