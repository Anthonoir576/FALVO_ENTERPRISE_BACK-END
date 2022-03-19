

const express       = require('express');
const app           = express();
const helmet        = require('helmet');  
const mongoose      = require('mongoose');
const cors          = require('cors');

const environnement = require('dotenv');       
      environnement.config();





const corsControls: any = {
      origin             : '*',
      credentials        : true,
      'allowedHeaders'   : ['sessionId', 'Content-Type', 'Origin', 'X-Requested-With', 'X-Auth-Token', 'Content', 'Accept', 'Authorization' ],
      'exposedHeaders'   : ['sessionId'],
      'methods'          : 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'preflightContinue': false
};
      
app.use(cors(corsControls));


app.use(helmet());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



module.exports = app;