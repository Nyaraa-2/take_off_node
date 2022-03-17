import ExpertiseCategoryNotFound from '../_exception/ExpertiseCategoryNotFound.js'
import DataBaseAccess from '../_exception/DataBaseAccess.js'
import { getExpertiseCategorySql } from './expertiseCategoryServices.js'
import { ERROR_GET_EXPERTISE_CATEGORY, NOT_FOUND } from './constants.js'

/**
 * GET, retourne la liste de toutes les compétences
 */
export async function getExpertiseCategory(req, res) {
  try {
    const expertiseCategory = await getExpertiseCategorySql()
    if (expertiseCategory.length > 0) {
      res.json(expertiseCategory)
    } else {
      throw new ExpertiseCategoryNotFound()
    }
  } catch (error) {
    if (error instanceof ExpertiseCategoryNotFound) {
      res.status(error.statusCode()).send(NOT_FOUND)
      console.log(error)
    }
    if (error instanceof DataBaseAccess) {
      res.status(error.statusCode()).send('Erreur Bdd')
    } else {
      res.status(400).send(ERROR_GET_EXPERTISE_CATEGORY + ' ' + `${error}`)
      console.log(error)
    }
  }
}
