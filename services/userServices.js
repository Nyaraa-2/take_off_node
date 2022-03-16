import { database } from '../db.js'
import { GET_USERS_SQL } from '../src/user/queries.js'
import { ERROR_GET_USER } from '../src/user/constants.js'

/**
 * Methode asynchrone, récupère la liste des utilisateurs
 * @returns Retourne la liste des utilisateurs
 */
export async function getUsersSql() {
  try {
    const { rows } = await database.query(GET_USERS_SQL)
    return rows
  } catch (error) {
    return ERROR_GET_USER + ' ' + `${error}`
  }
}
