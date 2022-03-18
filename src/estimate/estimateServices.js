import { database } from '../../db.js'
import DataBaseAccess from '../_exception/DataBaseAccess.js'
import { GET_ESTIMATE_SQL, POST_ESTIMATE_SQL } from './queries.js'
import { ERROR_GET_ESTIMATE, ERROR_POST_ESTIMATE } from './constants.js'

/**
 * Methode asynchrone, récupère la liste des devis
 * @returns Retourne la liste des devis
 */
export async function getEstimateSql() {
  try {
    const { rows } = await database.query(GET_ESTIMATE_SQL)
    return rows
  } catch (error) {
    if ((error.code = 'ECONNREFUSED')) {
      throw new DataBaseAccess()
    } else {
      throw ERROR_GET_ESTIMATE + ' ' + `${error}`
    }
  }
}

/**
 *
 * @param {devis} estimate
 */
export async function postEstimate(estimate) {
  try {
    if (estimate != null) {
      await database.query(POST_ESTIMATE_SQL, [
        estimate.job_title,
        estimate.mission,
        estimate.from_when,
        estimate.duration,
        estimate.home_office,
        estimate.price,
        estimate.status,
        estimate.id_freelance,
        estimate.id_customer,
      ])
    }
  } catch (error) {
    if ((error.code = 'ECONNREFUSED')) {
      throw new DataBaseAccess()
    } else {
      throw ERROR_POST_ESTIMATE + ' ' + `${error}`
    }
  }
}
