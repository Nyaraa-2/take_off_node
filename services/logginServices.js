import { database } from '../db.js'
import { GET_LOGGIN_SQL, CREATE_LOGGIN } from '../src/loggin/queries.js'
import { ERROR_GET_LOGGIN, ERROR_POST_LOGGIN } from '../src/loggin/constants.js'

/**
 * Methode asynchrone, récupère la liste des utilisateurs
 * @returns Retourne la liste des utilisateurs
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
 * Methode asynchrone, création d'un nouvel utilisateur
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
