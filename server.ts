
/* ##########   MES DECLARATIONS   ################ */
const http         = require('http');               
const application  = require('./app');   

require('dotenv')
    .config({ path: './config/.env' });               

/* ################################################ */



/* ################  SERVEUR  ##################### */
application.set('port', 4000);           

const server = http.createServer(application);               
server.listen(4000, () => {      

    console.log(`Le serveur fonctionne sur le port ici`);

});
/* ################################################ */