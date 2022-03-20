
const express           = require('express');
const app               = express();
const helmet            = require('helmet');  
const mongoose          = require('mongoose');
const cors              = require('cors');

import { corsControls } from "./src/config/cors";
import { connectedDB }  from './src/config/connect-db';


const environnement = require('dotenv');       
      environnement.config({ path: './src/config/.env' });


connectedDB();







app.use(cors(corsControls));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));






module.exports = app;