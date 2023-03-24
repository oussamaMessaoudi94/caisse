const express = require('express');
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

mongoose.connect('mongodb://localhost:27017/caisse');




const app = express();
const path = require('path');
const multer = require('multer');
const bcrypt = require('bcrypt')

// import body parser module
const bodyParser = require("body-parser");
const user = require('./models/signup');
const encaisse = require('./models/encaisse');
const decaisse = require('./models/decaisse');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static(path.join('src/assets/images')))

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',

}

const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'src/assets/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});


// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

// business logic SIGNUP (add user)
app.post('/users/signup',  multer({ storage: storage }).fields([{
    name: "img",maxCount: 10
  }, {
    name: "vid",maxCount: 10
  }]), (req, res) => {
    bcrypt.hash(req.body.password, 10).then((cryptedPwd) => {
        console.log('here signup', req.body);
        const userObj = new user({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            numberPhone: req.body.numberPhone,
            password: cryptedPwd,
            img: req.files.img[0].filename,
        });
        console.log('alo', userObj);
        userObj.save((err, result) => {
            console.log('resultat after save', result);
            if (err) {
                res.status(200).json({
                    message: 'Email exist'
                });
            } else {
                res.status(200).json({
                    message: 'success'
                })

            }
        });
    });
});


// business logic LOGIN
app.post('/users/login', (req, res) => {
    console.log('here into login', req.body);
    user.findOne({ firstName: req.body.firstName }).then(
        (firstNameResult) => {
            console.log('result after find email', firstNameResult);
            if (!firstNameResult) {
                res.status(200).json({
                    message: '0',

                })
            }
            return bcrypt.compare(req.body.password, firstNameResult.password)
        }
    ).then(
        (passwordResult) => {
            if (!passwordResult) {
                res.status(200).json({
                    message: '1'
                })
            }
            user.findOne({ firstName: req.body.firstName }).then(
                (findedUser) => {

                    console.log("findedUser", findedUser);
                    res.status(200).json({
                        user: findedUser,
                        message: '2',

                    });
                }
            )
        }
    )

})

// business logic GET ALL USER
app.get('/users', (req, res) => {
    user.find((err, doc) => {
        if (err) {
            console.log('erreur', err);
        } else {
            res.status(200).json({
                finded: doc,
            });
        }
    });
});

// business logic ADD encaissement 
app.post('/encaisse', (req, res) => {
    console.log('encaisse', req.body);
    const encaisseObject = new encaisse({
        caisse : req.body.caisse,
        annee : req.body.annee,
        date: req.body.date,
        beneficier: req.body.beneficier,
        modalite: req.body.modalite,
        Ncheque: req.body.Ncheque,
        bank: req.body.bank,
        Ncompte: req.body.Ncompte,
        montant: req.body.montant,
        objet: req.body.objet,
        observation: req.body.observation,
    });
    encaisseObject.save().then((result) => {
        if (result) {
            res.status(200).json({
                message: 'added encaisse with success'
            });
        }
    });
});


// business logic ADD decaissement 
app.post('/decaisse', (req, res) => {
    console.log('decaisse', req.body);
    const decaisseObject = new decaisse({
        caisse : req.body.caisse,
        annee : req.body.annee,
        date: req.body.date,
        beneficier: req.body.beneficier,
        modalite: req.body.modalite,
        Ncheque: req.body.Ncheque,
        bank: req.body.bank,
        Ncompte: req.body.Ncompte,
        montant: req.body.montant,
        objet: req.body.objet,
        observation: req.body.observation,
    });
    decaisseObject.save().then((result) => {
        if (result) {
            res.status(200).json({
                message: 'added decaisse with success'
            });
        }
    });
});

// business logic GET ALL encaisse
app.get('/encaisse', (req, res) => {
    encaisse.find((err, doc) => {
        if (err) {
            console.log('erreur', err);
        } else {
            res.status(200).json({
                findedEncaisse: doc,
            });
        }
    });
});

// business logic GET ALL encaisse
app.get('/decaisse', (req, res) => {
    decaisse.find((err, doc) => {
        if (err) {
            console.log('erreur', err);
        } else {
            res.status(200).json({
                findedDecaisse: doc,
            });
        }
    });
});

// business logic GET ENCAISSE BI ID
app.get('/encaisse/:id', (req, res) => {
    encaisse.findOne({ _id: req.params.id }).then(

        (result) => {
            res.status(200).json({
                request: result

            })

        }

    )

})

// business logic EDIT ENCAISSE
app.put('/encaisse/:id', (req, res) => {
    encaisse.updateOne({ _id: req.params.id }, req.body).then((result) => {
        if (result) {
            res.status(200).json({
                message: 'Update with success'
            });
        }
    });
});

// business logic GET DECAISSE BI ID
app.get('/decaisse/:id', (req, res) => {
    decaisse.findOne({ _id: req.params.id }).then(

        (result) => {
            res.status(200).json({
                request: result

            })

        }

    )

})

// business logic EDIT DECAISSE
app.put('/decaisse/:id', (req, res) => {
    decaisse.updateOne({ _id: req.params.id }, req.body).then((result) => {
        if (result) {
            res.status(200).json({
                message: 'Update with success'
            });
        }
    });
});

// business logic DELETE ENCAISSE
app.delete('/encaisse/:id', (req, res) => {
    encaisse.deleteOne({ _id: req.params.id }).then((result) => {
        if (result) {
            res.status(200).json({
                message: 'delete with success'
            });
        }
    });
});

// business logic DELETE DECAISSE
app.delete('/decaisse/:id', (req, res) => {
    decaisse.deleteOne({ _id: req.params.id }).then((result) => {
        if (result) {
            res.status(200).json({
                message: 'delete with success'
            });
        }
    });
});

module.exports = app;