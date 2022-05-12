import RatingNotFound from '../_exception/RatingNotFound.js'
import DataBaseAccess from '../_exception/DataBaseAccess.js'
import { getRatingsSql, postRating } from './ratingServices.js'
import { ERROR_GET_RATING, ERROR_POST_RATING, NOT_FOUND } from './constants.js'
/**
 * GET, retourne la liste de tous les ratings
 */
export async function getRatings(req, res) {
  try {
    const users = await getRatingsSql()
    if (users.length > 0) {
      res.json(users)
    } else {
      throw new RatingNotFound()
    }
  } catch (error) {
    if (error instanceof RatingNotFound) {
      res.status(error.statusCode()).send(NOT_FOUND)
      console.log(error)
    }
    if (error instanceof DataBaseAccess) {
      res.status(error.statusCode()).send('Erreur Bdd')
    } else {
      res.status(400).send(ERROR_GET_RATING + ' ' + `${error}`)
      console.log(error)
    }
  }
}

/**
 * POST Ajoute un rating
 */
export async function addRating(req, res) {
  try {
    const user = req.body
    res.json(await postRating(user))
  } catch (error) {
    if (error instanceof DataBaseAccess) {
      res.status(error.statusCode()).send('Erreur Bdd')
    } else {
      console.log(error)
      res.status(503).send(ERROR_POST_RATING + ' ' + `${error}`)
    }
  }
}
