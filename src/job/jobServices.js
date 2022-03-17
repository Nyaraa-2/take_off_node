import { GET_JOBS_SQL } from './queries.js'
import { database } from '../../db.js'
import DataBaseAccess from '../_exception/DataBaseAccess.js'
import { ERROR_GET_JOB } from './constants.js'

/**
 * Methode asynchrone, récupère la liste des professions
 * @returns Retourne la liste des professions
 */
export async function getJobsSql() {
  try {
    const { rows } = await database.query(GET_JOBS_SQL)
    return rows
  } catch (error) {
    if ((error.code = 'ECONNREFUSED')) {
      throw new DataBaseAccess()
    } else {
      throw ERROR_GET_JOB + ' ' + `${error}`
    }
  }
}
