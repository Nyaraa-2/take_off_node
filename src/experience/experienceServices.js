import * as repository from './experienceRepository.js'
import DataBaseAccess from '../_exception/DataBaseAccess.js'
import ExperienceNotFound from '../_exception/ExperienceNotFound.js'

/**
 * Methode asynchrone, récupère la liste des expériences
 * @returns Retourne la liste des expériences
 */
export async function getExperiences() {
  try {
    return await repository.getExperiences()
  } catch (error) {
    if (error instanceof DataBaseAccess) {
      throw new DataBaseAccess()
    }
    if (error instanceof ExperienceNotFound) {
      throw new ExperienceNotFound()
    } else {
      throw new Error()
    }
  }
}

/**
 * Methode asynchrone, création d'une nouvelle expérience
 * @param {Nouvelle expérience} experience
 */
export async function createExperience(experience) {
  try {
    return await repository.createExperience(experience)
  } catch (error) {
    if (error instanceof DataBaseAccess) {
      throw new DataBaseAccess(error)
    }
    if (error instanceof ExperienceNotFound) {
      throw new ExperienceNotFound(error)
    } else {
      throw new Error(error)
    }
  }
}
