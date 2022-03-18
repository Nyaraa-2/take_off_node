import { database } from '../../db.js'
import { GET_EXPERTISES_SQL } from './queries.js'
import DataBaseAccess from '../_exception/DataBaseAccess.js'
import ExpertiseNotFound from '../_exception/ExpertiseNotFound.js'

export async function getExpertises() {
  try {
    const { rows } = await database.query(GET_EXPERTISES_SQL)
    if (rows.length == 0) {
      throw new ExpertiseNotFound()
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