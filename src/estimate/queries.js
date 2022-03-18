/**
 * Requête sql, retourne la liste des devis
 */
export const GET_ESTIMATE_SQL = 'SELECT * FROM estimate'

export const POST_ESTIMATE_SQL =
  'INSERT INTO estimate(job_title, mission, from_when, duration, home_office, price, id_status, id_freelance, id_customer) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)'
