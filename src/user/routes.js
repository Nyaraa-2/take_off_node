import express from 'express'
const userRouter = express.Router()
import { getUsers } from '../../controllers/userController.js'

userRouter.get('/', getUsers)

export default userRouter
