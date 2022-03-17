import { database } from '../../db.js'
import { GET_LOCATION_SQL } from './queries.js'
import { ERROR_GET_LOCATION } from './constants.js'

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
