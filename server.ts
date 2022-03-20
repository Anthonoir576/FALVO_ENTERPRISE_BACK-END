
const http         = require('http');               
const application  = require('./app');   

require('dotenv')
    .config({ path: './src/config/.env' });               






application.set('port',
 process.env.PORT || process.env.PORT_DEFAULT
);           

const server = http.createServer(application);

server.listen(process.env.PORT || process.env.PORT_DEFAULT, () => {      
    console.log(`Le serveur fonctionne sur le port ${process.env.PORT || process.env.PORT_DEFAULT}`);
});
