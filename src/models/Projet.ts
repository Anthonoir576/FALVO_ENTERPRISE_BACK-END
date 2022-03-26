const mongooseUser    = require('mongoose');



const projetSchema = mongooseUser.Schema({

    name          : { type: String,  required: true, unique: true },
    description   : { type: String,  required: true },
    categorie     : { type: String,  required: true },
    urlImage      : { type: String,  required: true },
    urlSite       : { type: String,  required: true },

    userId        : { type: String,  required: true },
    userName      : { type: String,  required: true },
    userMdp       : { type: String,  required: true },
    admin         : { type: Boolean, required: true }

});



module.exports = mongooseUser.model('Projet', projetSchema);