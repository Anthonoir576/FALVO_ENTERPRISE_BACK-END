
const Users          = require('../models/User');
const fsUser         = require('fs');                       
const jwtUser        = require('jsonwebtoken');              
    


exports.testFonction = (request?: any, response?: any, next? :any) => {

    response.status(200).json({ message : 'OK'});
    
};