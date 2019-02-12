const express = require('express');
let router = express.Router();
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

import User from '../models/User';

const SECRET_TO_CHANGE = 'ChangeThisSecretToken';

const isCoach = (req, res, next) => {
    const token = req.body.token;

    const user_id = jwt.verify(token, SECRET_TO_CHANGE).user;

    User.findById({
        _id: user_id
    }).then(result => {
        if(!result.coach){
            res.send('NOPE COACH');
            return;
        }
        next();
    }).catch(err => {
        console.log(err);
        res.send('NOPE COACH');
        return;
    });
};

const isOwerUser = (req, res, next) => {
    const token = req.body.token;

    jwt.verify(token, SECRET_TO_CHANGE, (err, decoded) => {
        if(err)
            res.send('NOPE OWNER');
        else 
            next();
    });
};

router.get("/", isOwerUser, (req, res) => {
    User.find().then(result => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(404).send('None found');
    });
}); 

router.get('/login', (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if(err) return err;

        if(bcrypt.compareSync(req.body.password, user.password)){
            const token = jwt.sign({user: user._id}, SECRET_TO_CHANGE);
            res.status(200).send({
                token: token,
                user: user
            });
        } else {
            res.status(404).send({error: ['Erreur de login: email ou mot de passe incorrecte']});
        }
    });
})

router.post("/", isCoach, (req, res) => {
    const user = req.body;
    let errors = [];
    let password = null;

    console.log(user);

    if (!validator.isEmail(user.email)) {
        errors.push('Email non valide');
    }

    password = bcrypt.hashSync(user.password, 10);

    const newUser = new User();
    newUser.name.firstName = user.firstName;
    newUser.name.lastName = user.lastName;
    newUser.email = user.email;
    newUser.password = password;
    newUser.save();

    res.send(newUser);
});

router.patch("/password", isOwerUser, (req, res) => {
    const user_id = jwt.verify(req.body.token, SECRET_TO_CHANGE).user;

    console.log(user_id)
    User.findByIdAndUpdate({
        _id: user_id
    }).then(user => {
        console.log(user);
        if(bcrypt.compareSync(req.body.oldPassword, user.password) && req.body.password === req.body.passwordConfirm){
            user.password = bcrypt.hashSync(req.body.password, 10);
            user.save();
            res.status(200).send('Yeah UpdateMDP')
        } else {
            res.status(400).send('Failed, retry please');
        }
    }).catch(err => {
        res.send('FACK YA');
    })
});

// router.put("/users/:id", (req, res) => {});

// router.delete("/users/:id", (req, res) => {});

// router.get("/users/:id", (req, res) => {});

module.exports = router;