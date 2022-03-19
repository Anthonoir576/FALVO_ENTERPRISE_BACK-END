

const express       = require('express');
const app           = express();
const helmet        = require('helmet');  
const mongoose      = require('mongoose');

const environnement = require('dotenv');       
      environnement.config();