import { database } from '../../db.js'
import DataBaseAccess from '../_exception/DataBaseAccess.js'
import { GET_EXPERTISES_SQL } from './queries.js'
import { ERROR_GET_EXPERTISE } from './constants.js'

/**
 * Methode asynchrone, récupère la liste des utilisateurs
 * @returns Retourne la liste des utilisateurs
 */
export async function getExpertisesSql() {
  try {
    const { rows } = await database.query(GET_EXPERTISES_SQL)
    return rows
  } catch (error) {
    if ((error.code = 'ECONNREFUSED')) {
      throw new DataBaseAccess()
    } else {
      throw ERROR_GET_EXPERTISE + ' ' + `${error}`
    }
  }
}
