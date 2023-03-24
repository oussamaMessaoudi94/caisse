const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const decaisseShema = mongoose.Schema({
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

decaisseShema.plugin(uniqueValidator);

const decaisse = mongoose.model('decaisse', decaisseShema);

module.exports = decaisse ;