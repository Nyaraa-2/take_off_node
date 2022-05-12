/**
 * Requête sql, retourne la liste des ratings
 */
export const GET_RATINGS_SQL = 'SELECT * FROM rating'

/**
 * Requête sql, insère un rating en base
 */
export const CREATE_RATING =
  'INSERT INTO public.rating(id_account_user, id_account_freelance, rating, review)' +
  'VALUES ($1,$2,$3,$4)'
