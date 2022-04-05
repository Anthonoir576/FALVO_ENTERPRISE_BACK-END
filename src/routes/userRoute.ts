const expressUser       = require('express');                       
const routerUser        = expressUser.Router();                          
const usersCtrl         = require('../controllers/userControllers');
const regexp            = require('../security/regex');





routerUser.post('/signup', regexp, usersCtrl.signup);




module.exports = routerUser;