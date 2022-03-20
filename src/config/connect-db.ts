
const mongoose      = require('mongoose');

const environnement = require('dotenv');       
      environnement.config({ path: './src/config/.env' });





export const connectedDB = (variable? :any) => {

    mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_GROUP}.sqzzu.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((error? :any) => console.log('Connexion à MongoDB échouée ! ' + '[ ERREUR : ' + ' => ' + error + ' ]'));

};