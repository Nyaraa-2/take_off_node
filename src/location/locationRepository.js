import { database } from '../../db.js'
import { GET_LOCATION_SQL } from './queries.js'
import DataBaseAccess from '../_exception/DataBaseAccess.js'
import LocationNotFound from '../_exception/LocationNotFound.js'

export async function getLocations() {
  try {
    const { rows } = await database.query(GET_LOCATION_SQL)
    if (rows.length == 0) {
      throw new LocationNotFound()
    }
    return rows
  } catch (error) {
    if ((error.code = 'ECONNREFUSED')) {
      throw new DataBaseAccess(error)
    } else {
      throw new Error(error)
    }
  }
}
