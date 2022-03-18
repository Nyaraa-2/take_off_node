import DataBaseAccess from '../_exception/DataBaseAccess.js'
import StatusNotFound from '../_exception/StatusNotFound.js'
import * as service from './statusServices.js'
import {
  ERROR_GET_STATUS,
  NOT_FOUND,
} from './constants.js'

/**
 * GET, retourne la liste de tous les statuts
 */
export async function getStatus(req, res) {
  try {
    const statuss = await service.getStatus()
    res.json(statuss)
  } catch (error) {
    if (error instanceof StatusNotFound) {
      res.status(error.statusCode()).send(NOT_FOUND)
      console.log(error)
    }
    if (error instanceof DataBaseAccess) {
      res.status(error.statusCode()).send(ERROR_GET_STATUS + ' ' + `${error}`)
    } else {
      res.status(400).send(`${error}`)
      console.log(error)
    }
  }
}