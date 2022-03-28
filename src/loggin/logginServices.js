import { database } from '../db.js'
import { GET_LOGGIN_SQL, CREATE_LOGGIN } from './queries.js'
import { ERROR_GET_LOGGIN, ERROR_POST_LOGGIN } from './constants.js'

/**
 * Methode asynchrone, récupère la liste des loggins
 * @returns Retourne la liste des loggins
 */
export async function getLogginsSql() {
  try {
    const { rows } = await database.query(GET_LOGGIN_SQL)
    return rows
  } catch (error) {
    throw ERROR_GET_LOGGIN + ' ' + `${error}`
  }
}

/**
 * Methode asynchrone, création d'un nouveau loggin
 * @param {Nouveau loggin} loggin
 */
export async function postLoggin(loggin) {
  try {
    await database.query(CREATE_LOGGIN, [
      loggin.type_account,
      loggin.email,
      loggin.password,
    ])
  } catch (error) {
    throw ERROR_POST_LOGGIN + ' ' + `${error}`
  }
}

// export function testQueryParams() {
//   try {
//     return null
//   } catch (error) {
//     throw ERROR_POST_LOGGIN + ' ' + `${error}`
//   }
// }
