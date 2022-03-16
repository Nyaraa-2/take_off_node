/**
 * Requête sql, retourne la liste des utilisateurs
 */
 export const GET_LOGGIN_SQL = 'SELECT * FROM loggin'

 /**
  * Requête sql, insère un utilisateur en base
  */
 export const CREATE_LOGGIN =
   'INSERT INTO public.loggin(type_account,email,password)' +
   'VALUES ($1,$2,$3)'
 