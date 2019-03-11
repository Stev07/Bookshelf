"use strict";

var _User = _interopRequireDefault(require("../models/User"));

var _Review = _interopRequireDefault(require("../models/Review"));

var _Middleware = require("./Middleware.routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require("express");

const validator = require("validator");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

let router = new express.Router();
router.get("/", [_Middleware.isLogged, _Middleware.isCoach], (req, res) => {
  _User.default.find().then(users => {
    res.status(200).json(users);
  }).catch(err => {
    res.status(404).json({
      errors: [err.message]
    });
  });
});
router.post("/login", (req, res) => {
  _User.default.findOne({
    email: req.body.email
  }).then(user => {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign({
        user: user._id
      }, _Middleware.SECRET);
      res.status(200).json({
        token,
        user
      });
    } else {
      res.status(404).send({
        error: ["Erreur de login: email ou mot de passe incorrecte"]
      });
    }
  }).catch(err => {
    res.status(404).send({
      errors: [err.message]
    });
  });
});
router.post("/", [_Middleware.isLogged, _Middleware.isCoach], (req, res) => {
  const user = req.body;
  let password = null;
  console.log(user);

  if (!validator.isEmail(user.email)) {
    res.status(403).json({
      errors: ["Email non valide"]
    });
  }

  password = bcrypt.hashSync(user.password, 10);
  const newUser = new _User.default();
  newUser.name.firstName = user.firstName;
  newUser.name.lastName = user.lastName;
  newUser.email = user.email;
  newUser.password = password;
  newUser.class = user.class;
  newUser.save();
  res.status(200).json({
    newUser
  });
});
router.patch("/password", [_Middleware.isLogged], (req, res) => {
  const user_id = jwt.verify(req.body.token, _Middleware.SECRET).user;

  _User.default.findByIdAndUpdate({
    _id: user_id
  }).then(user => {
    if (bcrypt.compareSync(req.body.oldPassword, user.password) && req.body.password === req.body.passwordConfirm) {
      user.password = bcrypt.hashSync(req.body.password, 10);
      user.save();
      res.status(200).json({
        success: "Mot de passe modifié!"
      });
    } else {
      res.status(400).json({
        errors: ["Une erreur est survenue"]
      });
    }
  }).catch(err => {
    res.status(500).send({
      errors: [err.message]
    });
  });
});
router.get("/reviews", [_Middleware.isLogged], (req, res) => {
  const user_id = jwt.verify(req.body.token, _Middleware.SECRET).user;

  _User.default.findOne({
    _id: user_id
  }).then(user => {
    _Review.default.find({
      _id: {
        $in: user.reviews
      }
    }).then(reviews => {
      res.status(200).json({
        user: user,
        reviews: reviews
      });
    }).catch(err => {
      console.log(err.message);
      res.status(400).json({
        errors: [err.message]
      });
    });
  }).catch(err => {
    res.status(404).send({
      errors: [err.message]
    });
  });
});
router.get("/reviews/:id", [_Middleware.isLogged], (req, res) => {
  _User.default.findOne({
    _id: req.params.id
  }).then(user => {
    _Review.default.find({
      _id: {
        $in: user.reviews
      }
    }).then(reviews => {
      user.reviews = reviews;
      res.status(200).json({
        user: user,
        reviews: reviews
      });
    }).catch(err => {
      res.status(400).json({
        errors: [err.message]
      });
    });
  }).catch(err => {
    res.status(404).send({
      errors: [err.message]
    });
  });
});
module.exports = router;
//# sourceMappingURL=Users.routes.js.map