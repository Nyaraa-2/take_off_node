import { database } from '../db.js'
import DataBaseAccess from '../_exception/DataBaseAccess.js'
import { GET_EXPERTISES_CATEGORY_SQL } from './queries.js'
import { ERROR_GET_EXPERTISE_CATEGORY } from './constants.js'

/**
 * Methode asynchrone, récupère la liste des utilisateurs
 * @returns Retourne la liste des utilisateurs
 */
export async function getExpertiseCategorySql() {
  try {
    const { rows } = await database.query(GET_EXPERTISES_CATEGORY_SQL)
    return rows
  } catch (error) {
    if ((error.code = 'ECONNREFUSED')) {
      throw new DataBaseAccess()
    } else {
      throw ERROR_GET_EXPERTISE_CATEGORY + ' ' + `${error}`
    }
  }
}
