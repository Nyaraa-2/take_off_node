import { database } from '../../db.js'
import DataBaseAccess from '../_exception/DataBaseAccess.js'
import { GET_FAVORITE_JOB_SQL, CREATE_FAVORITE_JOB_SQL } from './queries.js'
import { ERROR_GET_FAVORITE_JOB, ERROR_POST_FAVORITE_JOB } from './constants.js'

/**
 * Methode asynchrone, récupère la liste des jobs favoris
 * @returns Retourne la liste des jobs favoris
 */
export async function getFavoriteJobSql() {
  try {
    const { rows } = await database.query(GET_FAVORITE_JOB_SQL)
    return rows
  } catch (error) {
    if ((error.code = 'ECONNREFUSED')) {
      throw new DataBaseAccess()
    } else {
      throw ERROR_GET_FAVORITE_JOB + ' ' + `${error}`
    }
  }
}

/**
 *
 * @param {jobFavori} favoriteJob
 */
export async function postFavoriteJob(favoriteJob) {
  try {
    if (favoriteJob != null) {
      await database.query(CREATE_FAVORITE_JOB_SQL, [
        favoriteJob.id_job,
        favoriteJob.id_account,
      ])
    }
  } catch (error) {
    if ((error.code = 'ECONNREFUSED')) {
      throw new DataBaseAccess()
    } else {
      throw ERROR_POST_FAVORITE_JOB + ' ' + `${error}`
    }
  }
}
