import DataBaseAccess from '../_exception/DataBaseAccess.js'
import { database } from '../../db.js'
import ExpertiseCategoryNotFound from '../_exception/ExpertiseCategoryNotFound.js'

export async function getExpertisesCategory() {
  try {
      const {rows} = await database.query()
      if(rows.length === 0){
          throw new ExpertiseCategoryNotFound('Pas de résultats')
      }
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      throw new DataBaseAccess(error)
    } else {
      throw new Error(error)
    }
  }
}
