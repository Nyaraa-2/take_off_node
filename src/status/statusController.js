import { getStatusSql } from './statusServices.js'
import { ERROR_GET_STATUS } from './constants.js'

/**
 * GET, retourne la liste des statuts des devis
 */
export async function getStatus(req, res) {
  try {
    res.json(await getStatusSql())
  } catch (error) {
    res.status(503).send(ERROR_GET_STATUS + ' ' + `${error}`)
    console.log(error)
  }
}
