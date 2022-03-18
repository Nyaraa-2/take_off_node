import DataBaseAccess from '../_exception/DataBaseAccess.js'
import ExperienceNotFound from '../_exception/ExperienceNotFound.js'
import * as service from './experienceServices.js'
import {
  ERROR_GET_EXPERIENCE,
  ERROR_POST_EXPERIENCE,
  NOT_FOUND,
} from './constants.js'

/**
 * GET, retourne la liste de toutes les expériences
 */
export async function getExperiences(req, res) {
  try {
    const experiences = await service.getExperiences()
    res.json(experiences)
  } catch (error) {
    if (error instanceof ExperienceNotFound) {
      res.status(error.statusCode()).send(NOT_FOUND)
      console.log(error)
    }
    if (error instanceof DataBaseAccess) {
      res
        .status(error.statusCode())
        .send(ERROR_GET_EXPERIENCE + ' ' + `${error}`)
    } else {
      res.status(400).send(`${error}`)
      console.log(error)
    }
  }
}

/**
 * POST, ajoute une expérience en base de donnée
 */
export async function createExperience(req, res) {
  try {
    const experience = req.body
    const createExp = await service.createExperience(experience)
    res.status(200).send(`${createExp}`)
  } catch (error) {
    if (error instanceof ExperienceNotFound) {
      res.status(error.statusCode()).send(ERROR_POST_EXPERIENCE + ' ' + error)
      console.log(error)
    }
    if (error instanceof DataBaseAccess) {
      res.status(error.statusCode()).send(ERROR_POST_EXPERIENCE + ' ' + error)
    } else {
      console.log(error)
      res.status(503).send(ERROR_POST_EXPERIENCE + ' ' + error)
    }
  }
}
