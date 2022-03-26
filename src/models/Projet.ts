const mongoose1    = require('mongoose');



const projetSchema = mongoose1.Schema({

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



module.exports = mongoose1.model('Projet', projetSchema);