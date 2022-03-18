import { database } from '../../db.js'
import { GET_EXPERIENCE_SQL, CREATE_EXPERIENCE } from './queries.js'
import DataBaseAccess from '../_exception/DataBaseAccess.js'
import ExperienceNotFound from '../_exception/ExperienceNotFound.js'

export async function getExperiences() {
  try {
    const { rows } = await database.query(GET_EXPERIENCE_SQL)
    if (rows.length == 0) {
      throw new ExperienceNotFound()
    }
    return rows
  } catch (error) {
    if ((error.code = 'ECONNREFUSED')) {
      throw new DataBaseAccess(error)
    } else {
      throw new Error(error)
    }
  }
}

export async function createExperience(experience) {
  try {
    if (experience != null) {
      await database.query(CREATE_EXPERIENCE, [
        experience.compagny,
        experience.start_date,
        experience.end_date,
        experience.occupation,
        experience.location,
        experience.description,
        experience.id_account,
      ])
    } else {
      throw new ExperienceNotFound()
    }
  } catch (error) {
    if (error.code == 'ECONNREFUSED') {
      throw new DataBaseAccess()
    } else {
      throw new Error(error)
    }
  }
}
