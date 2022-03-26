const expressUser       = require('express');                       
const routerUser        = expressUser.Router();                          
const usersCtrl         = require('../controllers/userControllers');


routerUser.post('/signup', usersCtrl.signup);




module.exports = routerUser;