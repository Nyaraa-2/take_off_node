import express from 'express'
import cors from 'cors'
const app = express()
const port = 3000
import userRouter from './src/user/routes.js'
import loginRouter from './src/loggin/routes.js'
import statusRouter from './src/status/routes.js'
import locationRouter from './src/location/routes.js'
import estimateRouter from './src/estimate/routes.js'
import experienceRouter from './src/experience/routes.js'
import { USER_ROUTE } from './src/user/constants.js'
import { LOGGIN_ROUTE } from './src/loggin/constants.js'
import { STATUS_ROUTE } from './src/status/constants.js'
import { LOCATION_ROUTE } from './src/location/constants.js'
import { ESTIMATE_ROUTE } from './src/estimate/constants.js'
import { EXPERIENCE_ROUTE } from './src/experience/constants.js'

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello from Take_Off API')
})

app.use(USER_ROUTE, userRouter)
app.use(LOGGIN_ROUTE, loginRouter)
app.use(STATUS_ROUTE, statusRouter)
app.use(LOCATION_ROUTE, locationRouter)
app.use(ESTIMATE_ROUTE, estimateRouter)
app.use(EXPERIENCE_ROUTE, experienceRouter)

app.listen(port, () => console.log(`App take off listen on port ${port}`))
