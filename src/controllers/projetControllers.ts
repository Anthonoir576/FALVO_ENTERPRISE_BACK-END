
const Projet        = require('../models/Projet');
const fs            = require('fs');                       
const jwt           = require('jsonwebtoken');              
    
// Base mais a mettre a jour en fonction de la connection user. uniquement l'admin pour ajouter des projets. la on peut les ajouter manuellement. Cest le rendu minimum a faire . 
// une fois la partie cession et maintien realiser on pourra le faire automatisé plus simplement . comme un poste sur le p7 . S'en inspirer. 

exports.addProject = (request?: any, response?: any, next? :any) => {


    const name          : String  = request.body.name;
    const description   : String  = request.body.description;
    const categorie     : String  = request.body.categorie;
    const urlImage      : String  = request.body.urlImage;
    const urlSite       : String  = request.body.urlSite;
    const userId        : String  = request.body.userId;
    const userName      : String  = request.body.userName;
    const userMdp       : String  = request.body.userMdp;
    const admin         : Boolean = request.body.admin;

    const projet = new Projet({
        name        : name,
        description : description,
        categorie   : categorie,
        urlImage    : urlImage,
        urlSite     : urlSite,
        userId      : userId,
        userName    : userName,
        userMdp     : userMdp,
        admin       : admin
    });



    projet.save()
          .then( () => response.status(201).json(  { message: 'Enregistrer ok!'}  ))
          .catch(() => response.status(400).json( { message: 'ERREUR'} ));
    
};