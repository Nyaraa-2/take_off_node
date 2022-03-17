/**
 * Requête sql, retourne la liste des jobs favoris
 */
 export const GET_FAVORITE_JOB_SQL = 'SELECT * FROM favorite_job'

 /**
  * Requête sql, insère un job favori en base
  */
 export const CREATE_FAVORITE_JOB_SQL =
   'INSERT INTO public.favorite_job(id_job,id_account)' +
   'VALUES ($1,$2)'
 