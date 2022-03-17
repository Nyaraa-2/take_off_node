import { getExperiencesSql, postExperience } from '../services/experienceServices.js'
import { ERROR_GET_EXPERIENCE, ERROR_POST_EXPERIENCE } from '../src/experience/constants.js'
// import url from 'url'
/**
 * GET, retourne la liste de toutes les expériences
 */
export async function getExperiences(req, res) {
  try {
    res.json(await getExperiencesSql())
  } catch (error) {
    res.status(503).send(ERROR_GET_EXPERIENCE + ' ' + `${error}`)
    console.log(error)
  }
}

/**
 * POST, ajoute une experience dans la bdd
 */
export async function addExperience(req, res) {
  try {
    const experience = req.body
    res.json(await postExperience(experience))
  } catch (error) {
    console.log(error)
    res.status(503).send(ERROR_POST_EXPERIENCE + ' ' + `${error}`)
  }
}
