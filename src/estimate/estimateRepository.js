import { database } from '../../db.js'
import { GET_ESTIMATE_SQL, POST_ESTIMATE_SQL } from './queries.js'
import DataBaseAccess from '../_exception/DataBaseAccess.js'
import EstimateNotFound from '../_exception/EstimateNotFound.js'

export async function getEstimates() {
  try {
    const { rows } = await database.query(GET_ESTIMATE_SQL)
    if (rows.length == 0) {
      throw new EstimateNotFound()
    }
    return rows
  } catch (error) {
    if ((error.code = 'ECONNREFUSED')) {
      throw new DataBaseAccess(error)
    } else {
      throw new Error()
    }
  }
}

export async function createEstimate(estimate) {
  try {
    if (estimate != null) {
      await database.query(POST_ESTIMATE_SQL, [
        estimate.job_title,
        estimate.mission,
        estimate.from_when,
        estimate.duration,
        estimate.home_office,
        estimate.price,
        estimate.status,
        estimate.id_freelance,
        estimate.id_customer,
      ])
    } else {
      throw new EstimateNotFound()
    }
  } catch (error) {
    if (error.code == 'ECONNREFUSED') {
      throw new DataBaseAccess()
    } else {
      throw new Error(error)
    }
  }
}
