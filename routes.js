import express from 'express'
import { getStatus } from './src/status/statusController.js'
import { getLocations } from './src/location/locationController.js'
import { getJobExpertises } from './src/job_expertise/jobExpertiseController.js'
import { getJobs } from './src/job/jobController.js'
import { getExpertiseCategory } from './src/expertise_category/expertiseCategoryController.js'
import { getExpertises } from './src/expertise/expertiseController.js'

const statusRouter = express.Router()
const locationRouter = express.Router()
const jobExpertiseRouter = express.Router()
const jobRouter = express.Router()
const expertiseCategoryRouter = express.Router()
const expertiseRouter = express.Router()

statusRouter.get('/status', getStatus)
locationRouter.get('/locations', getLocations)
jobExpertiseRouter.get('/jobExpertises', getJobExpertises)
jobRouter.get('/jobs', getJobs)
expertiseCategoryRouter.get('/expertisesCategory', getExpertiseCategory)
expertiseRouter.get('/expertises', getExpertises)

const getDataForms = {
  status: statusRouter,
  location: locationRouter,
  jobExpertise: jobExpertiseRouter,
  job: jobRouter,
  expertiseCategory: expertiseCategoryRouter,
  expertise: expertiseRouter,
}
export default getDataForms
