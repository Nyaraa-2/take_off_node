# Take_off_node

## Project setup

```
npm install
```
### Compiles and hot-reloads for development

```
npm start
```
### Built With
![GitHub top language](https://img.shields.io/github/languages/top/Nyaraa-2/take_off_node)


### Routes à prévoir 
```
Page d'accueil : 
  Get Jobs => Categorie Populaire 
  Get Account => Récupérer les deux/trois derniers inserer dans la table account

Connexion :
  Get(queryParams) => Vérifier l'existance du compte/login lors de la connexion (voir post)

Inscription : 
  GET : 
    Get Job => Récupèrer la liste des jobs lors de l'inscription
    Get Job/expertise => Récupèrer la liste des langagages, outils, frameworks en fonction du job choisi
    Get Location = > Récupèrer la liste des villes lors de l'inscription
  POST :
    Post Login => mail, mdp et type 
    Post Account => table account return id account inséré
    Post Graduation => table graduation
    Post Expérience = Exp
    Post => Skill reprenant id expertise, id expertise category, id account

Recherche : 
  POST : 
    Postbody research (a tester) => requête qui reprend tous les critères de recherche en fonction de la jointure account/skill
Page profil :
    Get account => Récupérer les infos de la table skills, graduation et expérience + account
Page devis 
  POST : 
    Postbody => envoi estimate + envoi id du freelance + id client (insertion estimate et status estimate)
    Get devis => (page dashboard) get estimate (infos table estimate) + id du compte
  
```
