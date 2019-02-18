import User from "../models/User";
import Review from "../models/Review";
import {SECRET, isCoach, isLogged} from "./Middleware.routes";

const express = require("express");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let router = new express.Router();

router.get("/", [isLogged, isCoach], (req, res) => {
    User.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(404).json({
                errors: [err.message],
            });
        });
});

router.post("/login", (req, res) => {
    console.log(req.body.params);
    User.findOne({email: req.body.params.email})
        .then(user => {
            if (bcrypt.compareSync(req.body.params.password, user.password)) {
                const token = jwt.sign({user: user._id}, SECRET);

                res.status(200).json({
                    token,
                    user,
                });
            } else {
                res.status(404).send({
                    error: [
                        "Erreur de login: email ou mot de passe incorrecte",
                    ],
                });
            }
        })
        .catch(err => {
            res.status(404).send({errors: [err.message]});
        });
});

router.post("/", [isLogged, isCoach], (req, res) => {
    const user = req.body;

    let password = null;

    console.log(user);

    if (!validator.isEmail(user.email)) {
        res.status(403).json({errors: ["Email non valide"]});
    }

    password = bcrypt.hashSync(user.password, 10);

    const newUser = new User();

    newUser.name.firstName = user.firstName;
    newUser.name.lastName = user.lastName;
    newUser.email = user.email;
    newUser.password = password;
    newUser.class = user.class;
    newUser.save();

    res.status(200).json({newUser});
});

router.patch("/password", [isLogged], (req, res) => {
    const user_id = jwt.verify(req.body.token, SECRET).user;

    User.findByIdAndUpdate({
        _id: user_id,
    })
        .then(user => {
            if (
                bcrypt.compareSync(req.body.oldPassword, user.password) &&
                req.body.password === req.body.passwordConfirm
            ) {
                user.password = bcrypt.hashSync(req.body.password, 10);
                user.save();
                res.status(200).json({success: "Mot de passe modifié!"});
            } else {
                res.status(400).json({
                    errors: ["Une erreur est survenue"],
                });
            }
        })
        .catch(err => {
            res.status(500).send({errors: [err.message]});
        });
});

router.get("/reviews", [isLogged], (req, res) => {
    const user_id = jwt.verify(req.body.token, SECRET).user;

    User.findOne({_id: user_id})
        .then(user => {
            Review.find({_id: {$in: user.reviews}})
                .then(reviews => {
                    res.status(200).json({user: user, reviews: reviews});
                })
                .catch(err => {
                    console.log(err.message);
                    res.status(400).json({errors: [err.message]});
                });
        })
        .catch(err => {
            res.status(404).send({errors: [err.message]});
        });
});

router.get("/reviews/:id", [isLogged], (req, res) => {
    User.findOne({_id: req.params.id})
        .then(user => {
            Review.find({_id: {$in: user.reviews}})
                .then(reviews => {
                    user.reviews = reviews;
                    res.status(200).json({user: user, reviews: reviews});
                })
                .catch(err => {
                    res.status(400).json({errors: [err.message]});
                });
        })
        .catch(err => {
            res.status(404).send({errors: [err.message]});
        });
});

/* router.post("/bypass/everything", (req, res) => {
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
            res.status(400).send(err);
        });
});
 */
module.exports = router;
