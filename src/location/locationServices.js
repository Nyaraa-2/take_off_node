import DataBaseAccess from '../_exception/DataBaseAccess.js'
import LocationNotFound from '../_exception/LocationNotFound.js'
import * as repository from './locationRepository.js'
/**
 * Methode asynchrone, récupère la liste des villes
 * @returns Retourne la liste des villes
 */
export async function getLocations() {
  try {
    return await repository.getLocations()
  } catch (error) {
    if (error instanceof DataBaseAccess) {
      throw new DataBaseAccess()
    }
    if (error instanceof LocationNotFound) {
      throw new LocationNotFound()
    } else {
      throw new Error()
    }
  }
}