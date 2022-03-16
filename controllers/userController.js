import { getUsersSql, postUser } from '../services/userServices.js'
import { ERROR_GET_USER, ERROR_POST_USER } from '../src/user/constants.js'
/**
 * GET, retourne la liste de tous les utilisateurs
 */
export async function getUsers(req, res) {
  try {
    res.json(await getUsersSql())
  } catch (error) {
    res.status(503).send(ERROR_GET_USER + ' ' + `${error}`)
    console.log(error)
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
    console.log(error)
    res.status(503).send(ERROR_POST_USER + ' ' + `${error}`)
  }
}
