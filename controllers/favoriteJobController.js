import DataBaseAccess from '../exception/DataBaseAccess.js'
import FavoriteJobNotFound from '../exception/FavoriteJobNotFound.js'
import { getFavoriteJobSql, postFavoriteJob } from '../services/favoriteJobServices.js'
import {
  ERROR_GET_FAVORITE_JOB,
  ERROR_POST_FAVORITE_JOB,
  NOT_FOUND,
} from '../src/favorite_job/constants.js'

/**
 * GET, retourne la liste de tous les jobs favoris
 */
export async function getFavoriteJobs(req, res) {
  try {
    const favoriteJobs = await getFavoriteJobSql()
    if (favoriteJobs.length > 0) {
      res.json(favoriteJobs)
    } else {
      throw new FavoriteJobNotFound()
    }
  } catch (error) {
    if (error instanceof FavoriteJobNotFound) {
      res.status(error.statusCode()).send(NOT_FOUND)
      console.log(error)
    }
    if (error instanceof DataBaseAccess) {
      res.status(error.statusCode()).send('Erreur Bdd')
    } else {
      res.status(400).send(ERROR_GET_FAVORITE_JOB + ' ' + `${error}`)
      console.log(error)
    }
  }
}

/**
 * POST, ajoute un job favori en base de donnée
 */
export async function addFavoriteJob(req, res) {
  try {
    const favoriteJob = req.body
    res.json(await postFavoriteJob(favoriteJob))
  } catch (error) {
    if (error instanceof DataBaseAccess) {
      res.status(error.statusCode()).send('Erreur Bdd')
    } else {
      console.log(error)
      res.status(503).send(ERROR_POST_FAVORITE_JOB + ' ' + `${error}`)
    }
  }
}
