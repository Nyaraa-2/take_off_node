import UserNotFound from '../exception/UserNotFound.js'
import DataBaseAccess from '../exception/DataBaseAccess.js'
import { getUsersSql, postUser } from '../services/userServices.js'
import {
  ERROR_GET_USER,
  ERROR_POST_USER,
  NOT_FOUND,
} from '../src/user/constants.js'
/**
 * GET, retourne la liste de tous les utilisateurs
 */
export async function getUsers(req, res) {
  try {
    const users = await getUsersSql()
    if (users.length > 0) {
      res.json(users)
    } else {
      throw new UserNotFound()
    }
  } catch (error) {
    if (error instanceof UserNotFound) {
      res.status(error.statusCode()).send(NOT_FOUND)
      console.log(error)
    }
    if (error instanceof DataBaseAccess) {
      res.status(error.statusCode()).send('Erreur Bdd')
    } else {
      res.status(400).send(ERROR_GET_USER + ' ' + `${error}`)
      console.log(error)
    }
  }
}

/**
 * POST Ajoute un utilisateur en page de donnée
 */
export async function addUser(req, res) {
  try {
    const user = req.body
    res.json(await postUser(user))
  } catch (error) {
    if (error instanceof DataBaseAccess) {
      res.status(error.statusCode()).send('Erreur Bdd')
    } else {
      console.log(error)
      res.status(503).send(ERROR_POST_USER + ' ' + `${error}`)
    }
  }
}
