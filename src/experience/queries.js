/**
 * Requête sql, retourne la liste des expériences
 */
export const GET_EXPERIENCE_SQL = 'SELECT * FROM experience'

/**
 * Requête sql, insère une expérience en base
 */
export const CREATE_EXPERIENCE =
  'INSERT INTO public.experience(compagny,start_date,end_date,occupation,location,description,id_account)' +
  'VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id'
