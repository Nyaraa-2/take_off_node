import DataBaseAccess from '../_exception/DataBaseAccess.js'
import JobExpertiseNotFound from '../_exception/JobExpertiseNotFound.js'
import { getJobExpertisesSql } from './jobExpertiseServices.js'
import { ERROR_GET_JOB_EXPERTISE, NOT_FOUND } from './constants.js'

/**
 * GET, retourne la liste de toutes les compétences
 */
export async function getJobExpertises(req, res) {
  try {
    const jobExpertises = await getJobExpertisesSql()
    if (jobExpertises.length > 0) {
      res.json(jobExpertises)
    } else {
      throw new JobExpertiseNotFound()
    }
  } catch (error) {
    if (error instanceof JobExpertiseNotFound) {
      res.status(error.statusCode()).send(NOT_FOUND)
      console.log(error)
    }
    if (error instanceof DataBaseAccess) {
      res.status(error.statusCode()).send('Erreur Bdd')
    } else {
      res.status(400).send(ERROR_GET_JOB_EXPERTISE + ' ' + `${error}`)
      console.log(error)
    }
  }
}
