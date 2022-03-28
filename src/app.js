import express from 'express'
import cors from 'cors'
const port = 3000
import userRouter from './user/routes.js'
import loginRouter from './loggin/routes.js'
import estimateRouter from './estimate/routes.js'
import experienceRouter from './experience/routes.js'
import graduationRouter from './graduation/routes.js'
import favoriteJobRouter from './favorite_job/routes.js'
import getDataForms from './routes.js'

const basicRoute = '/'
const app = express()
app.use(express.json())
app.use(cors())

app.get(basicRoute, (req, res) => {
  res.send('Hello from Take_Off API')
})

app.use(basicRoute, userRouter)
app.use(basicRoute, loginRouter)
app.use(basicRoute, estimateRouter)
app.use(basicRoute, experienceRouter)
app.use(basicRoute, graduationRouter)
app.use(basicRoute, favoriteJobRouter)
app.use(basicRoute, getDataForms.status)
app.use(basicRoute, getDataForms.job)
app.use(basicRoute, getDataForms.location)
app.use(basicRoute, getDataForms.expertise)
app.use(basicRoute, getDataForms.jobExpertise)
app.use(basicRoute, getDataForms.expertiseCategory)

app.listen(port, () => console.log(`App take off listen on port ${port}`))
