import { database } from '../db.js'
import { GET_LOCATION_SQL } from '../src/location/queries.js'
import { ERROR_GET_LOCATION } from '../src/location/constants.js'

/**
 * Methode asynchrone, récupère la liste des villes
 * @returns Liste des villes
 */
export async function getLocationSql() {
  try {
    const { rows } = await database.query(GET_LOCATION_SQL)
    return rows
  } catch (error) {
    throw ERROR_GET_LOCATION + ' ' + `${error}`
  }
}
