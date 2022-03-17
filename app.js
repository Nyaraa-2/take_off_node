import express from 'express'
import cors from 'cors'
const port = 3000
import userRouter from './src/user/routes.js'
import loginRouter from './src/loggin/routes.js'
import statusRouter from './src/status/routes.js'
import locationRouter from './src/location/routes.js'
import estimateRouter from './src/estimate/routes.js'
import experienceRouter from './src/experience/routes.js'
import graduationRouter from './src/graduation/routes.js'
import jobRouter from './src/job/routes.js'
import favoriteJobRouter from './src/favorite_job/routes.js'
import expertiseRouter from './src/expertise/routes.js'
import jobExpertiseRouter from './src/job_expertise/routes.js'
import expertiseCategoryRouter from './src/expertise_category/routes.js'
const basicRoute = '/'
const app = express()
app.use(express.json())
app.use(cors())

app.get(basicRoute, (req, res) => {
  res.send('Hello from Take_Off API')
})

app.use(basicRoute, userRouter)
app.use(basicRoute, loginRouter)
app.use(basicRoute, statusRouter)
app.use(basicRoute, locationRouter)
app.use(basicRoute, estimateRouter)
app.use(basicRoute, experienceRouter)
app.use(basicRoute, graduationRouter)
app.use(basicRoute, jobRouter)
app.use(basicRoute, favoriteJobRouter)
app.use(basicRoute, expertiseRouter)
app.use(basicRoute, jobExpertiseRouter)
app.use(basicRoute, expertiseCategoryRouter)

app.listen(port, () => console.log(`App take off listen on port ${port}`))
