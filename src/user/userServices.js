import { database } from '../db.js'
import DataBaseAccess from '../_exception/DataBaseAccess.js'
import { GET_USERS_SQL, CREATE_USER, GET_USERS_DETAILS } from './queries.js'
import { ERROR_GET_USER, ERROR_POST_USER, customerProfil } from './constants.js'

/**
 * Methode asynchrone, récupère la liste des utilisateurs
 * @returns Retourne la liste des utilisateurs
 */
export async function getUsersSql() {
  try {
    const { rows } = await database.query(GET_USERS_SQL)
    return rows
  } catch (error) {
    if ((error.code = 'ECONNREFUSED')) {
      throw new DataBaseAccess()
    } else {
      throw ERROR_GET_USER + ' ' + `${error}`
    }
  }
}

/**
 * Methode asynchrone, création d'un nouvel utilisateur
 * @param {Nouvel utilisateur} user
 * @returns Id nouvel utilateur inséré
 */
export async function postUser(user) {
  try {
    customerProfil(user)
    if (user.picture_profil == '') {
      user.picture_profil = null
    }
    await database.query(CREATE_USER, [
      user.firstname,
      user.lastname,
      user.picture_profil,
      user.about,
      user.siren,
      user.rate,
      user.price,
      user.language,
      4,
      user.id_job,
      user.id_location,
    ])
  } catch (error) {
    if ((error.code = 'ECONNREFUSED')) {
      throw new DataBaseAccess()
    } else {
      throw ERROR_POST_USER + ' ' + `${error}`
    }
  }
}

export async function getUsersDetailsSql() {
  try {
    const { rows } = await database.query(GET_USERS_DETAILS)
    return rows
  } catch (error) {
    if ((error.code = 'ECONNREFUSED')) {
      throw new DataBaseAccess()
    } else {
      throw ERROR_GET_USER + ' ' + `${error}`
    }
  }
}
