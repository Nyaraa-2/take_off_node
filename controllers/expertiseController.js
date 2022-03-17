import DataBaseAccess from '../exception/DataBaseAccess.js'
import ExpertiseNotFound from '../exception/ExpertiseNotFound.js'
import { getExpertisesSql } from '../services/expertiseServices.js'
import { ERROR_GET_EXPERTISE, NOT_FOUND } from '../src/expertise/constants.js'

/**
 * GET, retourne la liste de toutes les compétences
 */
export async function getExpertises(req, res) {
  try {
    const expertises = await getExpertisesSql()
    if (expertises.length > 0) {
      res.json(expertises)
    } else {
      throw new ExpertiseNotFound()
    }
  } catch (error) {
    if (error instanceof ExpertiseNotFound) {
      res.status(error.statusCode()).send(NOT_FOUND)
      console.log(error)
    }
    if (error instanceof DataBaseAccess) {
      res.status(error.statusCode()).send('Erreur Bdd')
    } else {
      res.status(400).send(ERROR_GET_EXPERTISE + ' ' + `${error}`)
      console.log(error)
    }
  }
}
