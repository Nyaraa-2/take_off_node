import DataBaseAccess from '../_exception/DataBaseAccess.js'
import EstimateNotFound from '../_exception/EstimateNotFound.js'
import * as repository from './estimateRepository.js'
/**
 * Methode asynchrone, récupère la liste des devis
 * @returns Retourne la liste des devis
 */
export async function getEstimates() {
  try {
    return await repository.getEstimates()
  } catch (error) {
    if (error instanceof DataBaseAccess) {
      throw new DataBaseAccess()
    }
    if (error instanceof EstimateNotFound) {
      throw new EstimateNotFound()
    } else {
      throw new Error()
    }
  }
}

/**
 *
 * @param {devis} estimate
 */
export async function createEstimate(estimate) {
  try {
    return await repository.createEstimate(estimate)
  } catch (error) {
    if (error instanceof DataBaseAccess) {
      throw new DataBaseAccess(error)
    }
    if (error instanceof EstimateNotFound) {
      throw new EstimateNotFound(error)
    } else {
      throw new Error(error)
    }
  }
}
