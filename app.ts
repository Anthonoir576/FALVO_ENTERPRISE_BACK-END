
const express           = require('express');
const app               = express();
const helmet            = require('helmet');  
const cors              = require('cors');
const path              = require('path'); 
const projetsRoutes     = require('./src/routes/projetRoute');
const usersRoutes       = require('./src/routes/userRoute');

import { corsControls } from "./src/config/cors";
import { connectedDB }  from './src/config/connect-db';


const environnement = require('dotenv');       
      environnement.config({ path: './src/config/.env' });


connectedDB();







app.use(cors(corsControls));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/src/images',
express.static(path.join(__dirname, 'images')));  



app.use('/falvoenterprise/api/projets', projetsRoutes);
app.use('/falvoenterprise/api/users'  , usersRoutes);


module.exports = app;