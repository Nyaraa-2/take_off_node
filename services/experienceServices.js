import { database } from '../db.js'
import { GET_EXPERIENCE_SQL, CREATE_EXPERIENCE } from '../src/experience/queries.js'
import { ERROR_GET_EXPERIENCE, ERROR_POST_EXPERIENCE } from '../src/experience/constants.js'

/**
 * Methode asynchrone, récupère la liste des expériences
 * @returns Retourne la liste des expériences
 */
export async function getExperiencesSql() {
  try {
    const { rows } = await database.query(GET_EXPERIENCE_SQL)
    return rows
  } catch (error) {
    throw ERROR_GET_EXPERIENCE + ' ' + `${error}`
  }
}

/**
 * Methode asynchrone, création d'une nouvelle expérience
 * @param {Nouvelle expérience} experience
 */
export async function postExperience(experience) {
  try {
    await database.query(CREATE_EXPERIENCE, [
      experience.compagny,
      experience.start_date,
      experience.end_date,
      experience.occupation,
      experience.location,
      experience.description,
      experience.id_account,
    ])
  } catch (error) {
    throw ERROR_POST_EXPERIENCE + ' ' + `${error}`
  }
}