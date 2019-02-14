const express = require("express");

let router = new express.Router();
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

import User from "../models/User";

router.get("/", (req, res) => {
    User.find()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(404).send("None found => ", err);
        });
});

router.get("/login", (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if (err) {
            return err;
        }

        if (bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign({user: user._id}, SECRET_TO_CHANGE);

            res.status(200).send({
                token: token,
                user: user,
            });
        } else {
            res.status(404).send({
                error: ["Erreur de login: email ou mot de passe incorrecte"],
            });
        }
    });
});

router.post("/", (req, res) => {
    const user = req.body;

    let errors = [],
        password = null;

    console.log(user);

    if (!validator.isEmail(user.email)) {
        errors.push("Email non valide");
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

router.patch("/password", (req, res) => {
    const user_id = jwt.verify(req.body.token, SECRET_TO_CHANGE).user;

    console.log(user_id);
    User.findByIdAndUpdate({
        _id: user_id,
    })
        .then(user => {
            console.log(user);
            if (
                bcrypt.compareSync(req.body.oldPassword, user.password) &&
                req.body.password === req.body.passwordConfirm
            ) {
                user.password = bcrypt.hashSync(req.body.password, 10);
                user.save();
                res.status(200).send("Mot de passe update!");
            } else {
                res.status(400).send("Failed, retry please");
            }
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

router.post("/bypass/everything", (req, res) => {
    console.log(req.body);
    User.create({
        name: {
            firstName: "admin",
            lastName: "Val",
        },
        email: "admin@admin.com",
        password: bcrypt.hashSync("admin", 10),
        coach: true,
    })
        .then(user => {
            res.status(200).send(user);
        })
        .catch(err => {
            res.status(200).send(err);
        });
});

module.exports = router;
