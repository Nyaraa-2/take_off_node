export const USER_ROUTE = '/users'
export const ERROR_GET_USER =
  'Erreur rencontrée lors de la récupération de la liste des utilisateurs'
export const ERROR_POST_USER = 'Erreur rencontrée lors de la création du compte'
export const NOT_FOUND = "Pas d'utilisateurs trouvés"

/**
 * Passe les propriétés non demandées pour un client à null lors de son inscription (photo de profil, about, siren, note et prix)
 * @param {nouvel utilisateur} user
 */
export const customerProfil = (user) => {
  if (user.about == '') {
    user.about = null
  }
  if (user.siren == '') {
    user.siren = null
  }
  if (user.rate == '') {
    user.rate = null
  }
  if (user.price == '') {
    user.price = null
  }
}
