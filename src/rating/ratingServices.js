import { database } from '../db.js'
import DataBaseAccess from '../_exception/DataBaseAccess.js'
import { GET_RATINGS_SQL, CREATE_RATING } from './queries.js'
import { ERROR_GET_RATING, ERROR_POST_RATING } from './constants.js'

/**
 * Methode asynchrone, récupère la liste des ratings
 * @returns Retourne la liste des ratings
 */
export async function getRatingsSql() {
  try {
    const { rows } = await database.query(GET_RATINGS_SQL)
    return rows
  } catch (error) {
    if ((error.code = 'ECONNREFUSED')) {
      throw new DataBaseAccess()
    } else {
      throw ERROR_GET_RATING + ' ' + `${error}`
    }
  }
}

/**
 * Methode asynchrone, création d'un nouveau rating
 * @param {Nouveau rating} rating
 * @returns Id nouveau rating inséré
 */
export async function postRating(rating) {
  try {
    await database.query(CREATE_RATING, [
      rating.id_account_user,
      rating.id_account_freelance,
      rating.rating,
      rating.review,
    ])
  } catch (error) {
    if ((error.code = 'ECONNREFUSED')) {
      throw new DataBaseAccess()
    } else {
      throw ERROR_POST_RATING + ' ' + `${error}`
    }
  }
}
