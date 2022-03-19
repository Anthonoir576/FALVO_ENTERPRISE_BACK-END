
/* ##########   MES DECLARATIONS   ################ */
const http :any         = require('http');               
require('app');      

require('dotenv')
    .config({ path: './config/.env' });               

/* ################################################ */



/* ################  SERVEUR  ##################### */
app.set('port', 4000);           

const server = http.createServer(app);               
server.listen( 4000, () => {      

    console.log(`Le serveur fonctionne sur le port ici`);

});
/* ################################################ */