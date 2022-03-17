import express from 'express'
const userRouter = express.Router()
import { getUsers, addUser } from '../../controllers/userController.js'

userRouter.get('/users', getUsers)
userRouter.post('/signup', addUser)
export default userRouter
