
const http         = require('http');               
const application  = require('./app');   

require('dotenv')
    .config({ path: './src/config/.env' });               






application.set('port', process.env.PORT || 4500);           

const server = http.createServer(application);

server.listen(process.env.PORT || 4500, () => {      

    console.log(`Le serveur fonctionne sur le port ${process.env.PORT || 4500}`);

});
