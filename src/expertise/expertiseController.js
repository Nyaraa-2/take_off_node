import DataBaseAccess from '../_exception/DataBaseAccess.js'
import ExpertiseNotFound from '../_exception/ExpertiseNotFound.js'
import * as service from './expertiseServices.js'
import {
  ERROR_GET_EXPERTISE,
  NOT_FOUND,
} from './constants.js'

/**
 * GET, retourne la liste de tous les compétences
 */
export async function getExpertises(req, res) {
  try {
    const expertises = await service.getExpertises()
    res.json(expertises)
  } catch (error) {
    if (error instanceof ExpertiseNotFound) {
      res.status(error.statusCode()).send(NOT_FOUND)
      console.log(error)
    }
    if (error instanceof DataBaseAccess) {
      res.status(error.statusCode()).send(ERROR_GET_EXPERTISE + ' ' + `${error}`)
    } else {
      res.status(400).send(`${error}`)
      console.log(error)
    }
  }
}