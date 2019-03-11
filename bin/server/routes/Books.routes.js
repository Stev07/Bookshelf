"use strict";

var _Middleware = require("./Middleware.routes");

var _Book = _interopRequireDefault(require("../models/Book"));

var _Review = _interopRequireDefault(require("../models/Review"));

var _Borrowing = _interopRequireDefault(require("../models/Borrowing"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require("express");

let router = new express.Router();
router.get("/", [_Middleware.isLogged], (req, res) => {
  _Book.default.find().then(books => {
    res.status(200).json({
      books
    });
  }).catch(err => {
    res.status(500).send({
      errors: [err.message]
    });
  });
});
router.get("/:id", [_Middleware.isLogged], (req, res) => {
  const id = req.params.id;

  _Book.default.findOne({
    _id: id
  }).then(book => {
    res.status(200).json({
      book
    });
  }).catch(err => {
    res.status(404).json({
      errors: ["Le livre n'a pas pu être trouvé!", err]
    });
  });
});
router.post("/", [_Middleware.isLogged, _Middleware.isCoach], (req, res) => {
  const data = req.body;
  let book = new _Book.default();

  for (let property in data) {
    book[property] = req.body[property];
  }

  book.save();
  res.status(200).json(book);
});
router.patch("/:id", [_Middleware.isLogged, _Middleware.isCoach], (req, res) => {
  _Book.default.findOne({
    _id: req.params.id
  }).then(book => {
    for (let property in req.body) {
      book[property] = req.body[property];
    }

    book.save();
    res.status(200).send("Update succed");
  }).catch(err => {
    res.status(404).send(err);
  });
});
router.get("/reviews/:id", [_Middleware.isLogged], (req, res) => {
  _Book.default.findOne({
    _id: req.params.id
  }).then(book => {
    _Review.default.find({
      _id: {
        $in: book.reviews
      }
    }).then(reviews => {
      res.status(200).json({
        book: book,
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
router.get("/borrowings/:id", [_Middleware.isLogged], (req, res) => {
  _Borrowing.default.find({
    book_id: req.params.id
  }).then(borrows => {
    res.status(200).json(borrows);
  }).catch(err => {
    res.status(400).json({
      errors: [err.message]
    });
  });
});
module.exports = router;
//# sourceMappingURL=Books.routes.js.map