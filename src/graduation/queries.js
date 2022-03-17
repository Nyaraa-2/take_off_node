/**
 * Requête sql, retourne la liste des diplômes
 */
 export const GET_GRADUATION_SQL = 'SELECT * FROM graduation'

 /**
  * Requête sql, insère un diplôme en base
  */
 export const CREATE_GRADUATION_SQL =
   'INSERT INTO public.graduation(title,school,location,description,start_date,end_date,id_account)' +
   'VALUES ($1,$2,$3,$4,$5,$6,$7)'
 