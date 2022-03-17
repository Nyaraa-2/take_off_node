import { database } from '../db.js'
import DataBaseAccess from '../exception/DataBaseAccess.js'
import { GET_GRADUATION_SQL, CREATE_GRADUATION_SQL } from '../src/graduation/queries.js'
import {
  ERROR_GET_GRADUATION,
  ERROR_POST_GRADUATION,
} from '../src/graduation/constants.js'

/**
 * Methode asynchrone, récupère la liste des diplômes
 * @returns Retourne la liste des diplômes
 */
export async function getGraduationSql() {
  try {
    const { rows } = await database.query(GET_GRADUATION_SQL)
    return rows
  } catch (error) {
    if ((error.code = 'ECONNREFUSED')) {
      throw new DataBaseAccess()
    } else {
      throw ERROR_GET_GRADUATION + ' ' + `${error}`
    }
  }
}

/**
 *
 * @param {diplome} graduation
 */
export async function postGraduation(graduation) {
  try {
    if (graduation != null) {
      await database.query(CREATE_GRADUATION_SQL, [
        graduation.title,
        graduation.school,
        graduation.location,
        graduation.description,
        graduation.start_date,
        graduation.end_date,
        graduation.id_account,
      ])
    }
  } catch (error) {
    if ((error.code = 'ECONNREFUSED')) {
      throw new DataBaseAccess()
    } else {
      throw ERROR_POST_GRADUATION + ' ' + `${error}`
    }
  }
}
