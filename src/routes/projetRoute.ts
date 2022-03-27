
const expressProjet     = require('express');                       
const routerProjet      = expressProjet.Router();                          
const projetsCtrl       = require('../controllers/projetControllers');
// const auth          = require('../middleware/auth');              
// const multer        = require('../middleware/multer-config');   




routerProjet.post('/add', projetsCtrl.addProject);




module.exports = routerProjet;