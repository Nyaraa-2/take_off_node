import { database } from '../../db.js'
import { GET_STATUS_SQL } from './queries.js'
import DataBaseAccess from '../_exception/DataBaseAccess.js'
import StatusNotFound from '../_exception/StatusNotFound.js'

export async function getStatus() {
  try {
    const { rows } = await database.query(GET_STATUS_SQL)
    if (rows.length == 0) {
      throw new StatusNotFound()
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