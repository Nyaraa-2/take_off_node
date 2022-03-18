import DataBaseAccess from '../_exception/DataBaseAccess.js'
import ExpertiseNotFound from '../_exception/ExpertiseNotFound.js'
import * as repository from './expertiseRepository.js'
/**
 * Methode asynchrone, récupère la liste des compétences
 * @returns Retourne la liste des compétences
 */
export async function getExpertises() {
  try {
    return await repository.getExpertises()
  } catch (error) {
    if (error instanceof DataBaseAccess) {
      throw new DataBaseAccess()
    }
    if (error instanceof ExpertiseNotFound) {
      throw new ExpertiseNotFound()
    } else {
      throw new Error()
    }
  }
}