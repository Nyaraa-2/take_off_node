import { getLocationSql } from '../services/locationServices.js'
import { ERROR_GET_LOCATION } from '../src/location/constants.js'

export async function getLocation(req, res) {
  try {
    res.json(await getLocationSql())
  } catch (error) {
    res.status(503).send(ERROR_GET_LOCATION + ' ' + `${error}`)
    console.log(error)
  }
}
