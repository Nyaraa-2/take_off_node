import DataBaseAccess from '../exception/DataBaseAccess.js'
import EstimateNotFound from '../exception/EstimateNotFound.js'
import { getEstimateSql, postEstimate } from '../services/estimateServices.js'
import {
  ERROR_GET_ESTIMATE,
  ERROR_POST_ESTIMATE,
  NOT_FOUND,
} from '../src/estimate/constants.js'

/**
 * GET, retourne la liste de tous les devis
 */
export async function getEstimates(req, res) {
  try {
    const estimates = await getEstimateSql()
    if (estimates.length > 0) {
      res.json(estimates)
    } else {
      throw new EstimateNotFound()
    }
  } catch (error) {
    if (error instanceof EstimateNotFound) {
      res.status(error.statusCode()).send(NOT_FOUND)
      console.log(error)
    }
    if (error instanceof DataBaseAccess) {
      res.status(error.statusCode()).send('Erreur Bdd')
    } else {
      res.status(400).send(ERROR_GET_ESTIMATE + ' ' + `${error}`)
      console.log(error)
    }
  }
}

/**
 * POST, ajoute un devis en base de donnée
 */
export async function addEstimate(req, res) {
  try {
    const estimate = req.body
    res.json(await postEstimate(estimate))
  } catch (error) {
    if (error instanceof DataBaseAccess) {
      res.status(error.statusCode()).send('Erreur Bdd')
    } else {
      console.log(error)
      res.status(503).send(ERROR_POST_ESTIMATE + ' ' + `${error}`)
    }
  }
}
