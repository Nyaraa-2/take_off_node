import { database } from '../../db.js'
import { GET_STATUS_SQL } from './queries.js'
import { ERROR_GET_STATUS } from './constants.js'

/**
 * Methode asynchrone récupère la liste des status des devis
 * @returns Liste des status
 */
export async function getStatusSql() {
  try {
    const { rows } = await database.query(GET_STATUS_SQL)
    return rows
  } catch (error) {
    throw ERROR_GET_STATUS + ' ' + `${error}`
  }
}
