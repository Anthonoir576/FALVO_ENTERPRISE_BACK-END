
const Projets       = require('../models/Projet');
const fs            = require('fs');                       
const jwt           = require('jsonwebtoken');              
    


exports.testFonction = (request?: any, response?: any, next? :any) => {

    response.status(200).json({ message : 'OK'});
    
};