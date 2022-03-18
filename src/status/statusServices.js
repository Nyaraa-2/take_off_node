import DataBaseAccess from '../_exception/DataBaseAccess.js'
import StatusNotFound from '../_exception/StatusNotFound.js'
import * as repository from './statusRepository.js'
/**
 * Methode asynchrone, récupère la liste des devis
 * @returns Retourne la liste des devis
 */
export async function getStatus() {
  try {
    return await repository.getStatus()
  } catch (error) {
    if (error instanceof DataBaseAccess) {
      throw new DataBaseAccess()
    }
    if (error instanceof StatusNotFound) {
      throw new StatusNotFound()
    } else {
      throw new Error()
    }
  }
}