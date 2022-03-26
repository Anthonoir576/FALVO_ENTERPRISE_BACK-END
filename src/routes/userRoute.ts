const expressUser       = require('express');                       
const routerUser        = expressUser.Router();                          
const usersCtrl         = require('../controllers/userControllers');


routerUser.get('/', usersCtrl.testFonction);




module.exports = routerUser;