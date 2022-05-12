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

export const GET_USERS_DETAILS =
  'SELECT a.id, a.firstname, a.lastname, a.picture_profil, a.about, a.siren, a.rate, a.price, a.language, j.name as job_name, l.name as location_name, je.id_job, je.id_expertise, ec.name as name_expertise FROM account AS a JOIN job AS j ON a.id_job = j.id JOIN location AS l ON a.id_location = l.id JOIN job_expertise AS je ON j.id = je.id_job JOIN expertise_category AS ec ON je.id_expertise = ec.id'
