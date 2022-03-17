import DataBaseAccess from '../exception/DataBaseAccess.js'
import ExperienceNotFound from '../exception/ExperienceNotFound.js'
import { getExperienceSql, postExperience } from '../services/experienceServices.js'
import {
  ERROR_GET_EXPERIENCE,
  ERROR_POST_EXPERIENCE,
  NOT_FOUND,
} from '../src/experience/constants.js'

/**
 * GET, retourne la liste de toutes les expériences
 */
export async function getExperiences(req, res) {
  try {
    const experiences = await getExperienceSql()
    if (experiences.length > 0) {
      res.json(experiences)
    } else {
      throw new ExperienceNotFound()
    }
  } catch (error) {
    if (error instanceof ExperienceNotFound) {
      res.status(error.statusCode()).send(NOT_FOUND)
      console.log(error)
    }
    if (error instanceof DataBaseAccess) {
      res.status(error.statusCode()).send('Erreur Bdd')
    } else {
      res.status(400).send(ERROR_GET_EXPERIENCE + ' ' + `${error}`)
      console.log(error)
    }
  }
}

/**
 * POST, ajoute une expérience en base de donnée
 */
export async function addExperience(req, res) {
  try {
    const experience = req.body
    res.json(await postExperience(experience))
  } catch (error) {
    if (error instanceof DataBaseAccess) {
      res.status(error.statusCode()).send('Erreur Bdd')
    } else {
      console.log(error)
      res.status(503).send(ERROR_POST_EXPERIENCE + ' ' + `${error}`)
    }
  }
}
