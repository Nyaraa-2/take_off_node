/**
 * Requête sql, retourne la liste des utilisateurs
 */
export const GET_USERS_SQL = 'SELECT * FROM account'

/**
 * Requête sql, insère un utilisateur en base
 */
export const CREATE_USER =
  'INSERT INTO public.account(firstname, lastname, picture_profil, about, siren, rate, price, language, id_loggin, id_job, id_location)' +
  'VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)'
