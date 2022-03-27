
const User           = require('../models/User');
const fsUser         = require('fs');                       
const jwtUser        = require('jsonwebtoken');              
const bcryptUser     = require('bcrypt');  
const cryptoUser     = require('crypto-js'); 


const environnement  = require('dotenv');       
      environnement.config({ path: './src/config/.env' });


// Pour le moment mise en place d'ajout manuel d'utilisateur. Aucune fonction en front pour le moment . Création uniquement d'une logique pour le moment. 
// Aucun controle reelle . A revoir le moment venur 

exports.signup = (request?: any, response?: any, next?: any) => {
    
    const mail             : String     = request.body.email;
    const mdp              : String     = request.body.mdp;
 // const adm              : Boolean    = request.body.admin;
    const chiffrementMail  : any        = cryptoUser.HmacSHA256(mail, `${process.env.CRYPTO_KEY}`).toString();
;  
    bcryptUser.hash(mdp, 10)
        .then((hash?: any) => {
            const user = new User({
                email : chiffrementMail,
                mdp   : hash,
                admin : false
            });
            user.save()
                .then( () => response.status(201).json(  { message: 'Vous êtes enregistré !'}  ))
                .catch(() => response.status(400).json( { message: 'ERREUR : Utilisateur déjà existant !'} ));
        })
        .catch( (error?: any) => response.status(500).json({ error: error }));

};