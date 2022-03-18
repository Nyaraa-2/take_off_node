import DataBaseAccess from '../_exception/DataBaseAccess.js'
import LocationNotFound from '../_exception/LocationNotFound.js'
import * as service from './locationServices.js'
import {
  ERROR_GET_LOCATION,
  NOT_FOUND,
} from './constants.js'

/**
 * GET, retourne la liste de toutes les villes
 */
export async function getLocations(req, res) {
  try {
    const locations = await service.getLocations()
    res.json(locations)
  } catch (error) {
    if (error instanceof LocationNotFound) {
      res.status(error.statusCode()).send(NOT_FOUND)
      console.log(error)
    }
    if (error instanceof DataBaseAccess) {
      res.status(error.statusCode()).send(ERROR_GET_LOCATION + ' ' + `${error}`)
    } else {
      res.status(400).send(`${error}`)
      console.log(error)
    }
  }
}