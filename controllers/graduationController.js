import DataBaseAccess from '../exception/DataBaseAccess.js'
import GraduationNotFound from '../exception/GraduationNotFound.js'
import { getGraduationSql, postGraduation } from '../services/graduationServices.js'
import {
  ERROR_GET_GRADUATION,
  ERROR_POST_GRADUATION,
  NOT_FOUND,
} from '../src/graduation/constants.js'

/**
 * GET, retourne la liste de tous les diplômes
 */
export async function getGraduations(req, res) {
  try {
    const graduations = await getGraduationSql()
    if (graduations.length > 0) {
      res.json(graduations)
    } else {
      throw new GraduationNotFound()
    }
  } catch (error) {
    if (error instanceof GraduationNotFound) {
      res.status(error.statusCode()).send(NOT_FOUND)
      console.log(error)
    }
    if (error instanceof DataBaseAccess) {
      res.status(error.statusCode()).send('Erreur Bdd')
    } else {
      res.status(400).send(ERROR_GET_GRADUATION + ' ' + `${error}`)
      console.log(error)
    }
  }
}

/**
 * POST, ajoute un diplôme en base de donnée
 */
export async function addGraduation(req, res) {
  try {
    const graduation = req.body
    res.json(await postGraduation(graduation))
  } catch (error) {
    if (error instanceof DataBaseAccess) {
      res.status(error.statusCode()).send('Erreur Bdd')
    } else {
      console.log(error)
      res.status(503).send(ERROR_POST_GRADUATION + ' ' + `${error}`)
    }
  }
}
