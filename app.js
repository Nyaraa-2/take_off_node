import express from 'express'
import cors from 'cors'
const app = express()
const port = 3000
import userRouter from './src/user/routes.js'
import { USER_ROUTE } from './src/user/constants.js'

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello from Take_Off API')
})

app.use(USER_ROUTE, userRouter)

app.listen(port, () => console.log(`App take off listen on port ${port}`))
