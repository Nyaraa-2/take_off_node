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
  'SELECT a.id, a.firstname, a.lastname, a.language, l.name as location_name, j.name as job_name, a.price,a.rate, a.picture_profil, a.about,a.siren,' +
  "(SELECT CONCAT('[',STRING_AGG('\"' || ec.name || '\"',','), ']') FROM skill AS s JOIN expertise_category AS ec ON s.id_expertise_category = ec.id JOIN account AS a2 ON s.id_account = a2.id_job  WHERE ec.id_expertise=1 AND a2.id=a.id) AS languages," +
  "(SELECT CONCAT('[',STRING_AGG('\"' || ec2.name || '\"',','), ']') FROM skill AS s JOIN expertise_category AS ec2 ON s.id_expertise_category = ec2.id JOIN account AS a3 ON s.id_account = a3.id  WHERE ec2.id_expertise=2 AND a3.id=a.id) AS frameworks " +
  'FROM account AS a JOIN location AS l ON a.id_location = l.id JOIN job AS j ON a.id_job = j.id GROUP BY a.id, a.firstname, a.lastname, l.name, j.name'

//SELECT a.id, a.firstname, a.lastname, a.language, l.name, j.name, a.price,a.rate, a.picture_profil, a.about,a.siren, STRING_AGG(ec.name, ";") AS languages FROM account AS a JOIN job AS j ON a.id_job = j.id JOIN location AS l ON a.id_location = l.id JOIN job_expertise AS je ON j.id = je.id_job JOIN expertise_category AS ec ON je.id_expertise = ec.id GROUP BY a.id, a.firstname, a.lastname, l.name, j.name
