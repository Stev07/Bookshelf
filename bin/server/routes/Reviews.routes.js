"use strict";

var _User = _interopRequireDefault(require("../models/User"));

var _Review = _interopRequireDefault(require("../models/Review"));

var _Book = _interopRequireDefault(require("../models/Book"));

var _Middleware = require("./Middleware.routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require("express");

const jwt = require("jsonwebtoken");

let router = new express.Router();
router.get("/", [_Middleware.isLogged], (req, res) => {
  _Review.default.find().then(reviews => {
    res.status(200).json({
      reviews
    });
  }).catch(err => {
    res.status(500).json({
      errors: [err.message]
    });
  });
});
router.post("/", [_Middleware.isLogged], (req, res) => {
  const user_id = jwt.verify(req.body.token, _Middleware.SECRET);
  const book_id = req.body.book_id;

  _Review.default.create({
    rating: req.body.rating,
    date: Date.now(),
    comment: req.body.comment
  }).then(review => {
    _User.default.findOne({
      _id: user_id.user
    }).then(user => {
      user.reviews.push(review._id);
      user.save();
    });

    _Book.default.findOne({
      _id: book_id
    }).then(book => {
      book.reviews.push(review._id);
      book.save();
    });

    res.status(200).json({
      review
    });
    return;
  }).catch(err => {
    res.status(403).json({
      errors: ["Failed to add the reviews", err.message]
    });
    return;
  });
});
router.patch("/:id", [_Middleware.isLogged], (req, res) => {
  _Review.default.findById(req.params.id).then(review => {
    for (let property in req.body) {
      review[property] = req.body[property];
    }

    review.save();
    res.status(200).json({
      review
    });
  }).catch(err => {
    res.status(404).json({
      errors: [err.message]
    });
  });
});
router.delete("/:id", [_Middleware.isLogged, _Middleware.isCoach], (req, res) => {
  _Review.default.find({
    _id: req.params.id
  }).remove(() => {
    res.status(200).json({
      succed: ["Review successfuly removed from DB"]
    });
  }).catch(err => {
    res.status(404).json({
      errors: [err.message]
    });
  });
});
module.exports = router;
//# sourceMappingURL=Reviews.routes.js.map