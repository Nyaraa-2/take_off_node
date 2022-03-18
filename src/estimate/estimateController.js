import DataBaseAccess from '../_exception/DataBaseAccess.js'
import EstimateNotFound from '../_exception/EstimateNotFound.js'
import * as service from './estimateServices.js'
import {
  ERROR_GET_ESTIMATE,
  ERROR_POST_ESTIMATE,
  NOT_FOUND,
} from './constants.js'

/**
 * GET, retourne la liste de tous les devis
 */
export async function getEstimates(req, res) {
  try {
    const estimates = await service.getEstimates()
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
      res.status(error.statusCode()).send(ERROR_GET_ESTIMATE + ' ' + `${error}`)
    } else {
      res.status(400).send(`${error}`)
      console.log(error)
    }
  }
}

/**
 * POST, ajoute un devis en base de donnée
 */
export async function createEstimate(req, res) {
  try {
    const estimate = req.body
    res.json(await service.createEstimate(estimate))
  } catch (error) {
    if (error instanceof EstimateNotFound) {
      res.status(error.statusCode()).send(ERROR_POST_ESTIMATE + ' ' + error)
      console.log(error)
    }
    if (error instanceof DataBaseAccess) {
      res.status(error.statusCode()).send(ERROR_POST_ESTIMATE + ' ' + error)
    } else {
      console.log(error)
      res.status(503).send(ERROR_POST_ESTIMATE + ' ' + error)
    }
  }
}
