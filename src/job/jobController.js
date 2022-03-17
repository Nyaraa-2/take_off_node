import JobNotFound from '../_exception/JobNotFound.js'
import DataBaseAccess from '../_exception/DataBaseAccess.js'
import { getJobsSql } from './jobServices.js'
import { ERROR_GET_JOB, NOT_FOUND } from './constants.js'

/**
 * GET, retourne la liste de tous les jobs
 */
export async function getJobs(req, res) {
  try {
    const jobs = await getJobsSql()
    if (jobs.length > 0) {
      res.json(jobs)
    } else {
      throw new JobNotFound()
    }
  } catch (error) {
    if (error instanceof JobNotFound) {
      res.status(error.statusCode()).send(NOT_FOUND)
      console.log(error)
    }
    if (error instanceof DataBaseAccess) {
      res.status(error.statusCode()).send('Erreur Bdd')
    } else {
      res.status(400).send(ERROR_GET_JOB + ' ' + `${error}`)
      console.log(error)
    }
  }
}
