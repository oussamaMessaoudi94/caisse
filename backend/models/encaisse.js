const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const encaisseShema = mongoose.Schema({
    caisse : String,
    annee : String,
    date : String,
    beneficier : String,
    modalite : String,
    Ncheque : String,
    bank : String,
    Ncompte : String,
    montant : Number,
    objet : String,
    observation : String,
});

encaisseShema.plugin(uniqueValidator);

const encaisse = mongoose.model('encaisse', encaisseShema);

module.exports = encaisse ;