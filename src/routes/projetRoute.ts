
const express       = require('express');                       
const router        = express.Router();                          
const projetsCtrl   = require('../controllers/projetControllers');
// const auth          = require('../middleware/auth');              
// const multer        = require('../middleware/multer-config');   




router.get('/', projetsCtrl.testFonction);




module.exports = router;