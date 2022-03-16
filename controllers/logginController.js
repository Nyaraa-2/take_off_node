import { getLogginsSql, postLoggin } from '../services/logginServices.js'
import { ERROR_GET_LOGGIN, ERROR_POST_LOGGIN } from '../src/loggin/constants.js'
/**
 * GET, retourne la liste de tous les utilisateurs
 */
export async function getLoggins(req, res) {
  try {
    res.json(await getLogginsSql())
  } catch (error) {
    res.status(503).send(ERROR_GET_LOGGIN + ' ' + `${error}`)
    console.log(error)
  }
}

/**
 * POST, ajoute un loggin dans la bdd
 */
export async function addLoggin(req, res) {
  try {
    const loggin = req.body
    res.json(await postLoggin(loggin))
    console.log(res.insertId)
  } catch (error) {
    console.log(error)
    res.status(503).send(ERROR_POST_LOGGIN + ' ' + `${error}`)
  }
}
