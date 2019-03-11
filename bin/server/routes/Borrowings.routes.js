"use strict";

var _Middleware = require("./Middleware.routes");

var _User = _interopRequireDefault(require("../models/User"));

var _Borrowing = _interopRequireDefault(require("../models/Borrowing"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require("express");

const jwt = require("jsonwebtoken");

let router = new express.Router();
router.get("/", [_Middleware.isLogged], (req, res) => {
  _Borrowing.default.find().then(borrowings => {
    res.status(200).json(borrowings);
  }).catch(err => {
    res.status(404).json({
      errors: [err.message]
    });
  });
});
router.post("/", [_Middleware.isLogged], (req, res) => {
  const user_id = jwt.verify(req.body.token, _Middleware.SECRET);
  const book_id = req.body.book_id;

  _Borrowing.default.findOne({
    book_id: book_id,
    user_id: user_id
  }).then(() => {
    res.status(403).json({
      errors: ["This book has already been borrowed"]
    });
  });

  let borrow = new _Borrowing.default();
  borrow.user_id = user_id;
  borrow.book_id = book_id;
  borrow.startDate = Date.now();
  borrow.state = undefined;
  borrow.backDate = undefined;
  borrow.save();

  _User.default.findOne({
    _id: user_id.user
  }).then(user => {
    user.borrowings.push(borrow._id);
    user.save();
  }).catch(err => {
    res.status(500).send({
      errors: [err.message]
    });
  });

  res.status(200).json({
    borrow: borrow
  });
});
router.patch("/return/:id", [_Middleware.isLogged], (req, res) => {
  const id = req.params.id;

  _Borrowing.default.findOneAndUpdate({
    _id: id,
    returned: false
  }).then(borrowing => {
    borrowing.returned = true;
    borrowing.backDate = Date.now();
    borrowing.save();
    res.status(200).json({
      succed: ["You have returned this book, this is so nice!"]
    });
  }).catch(err => {
    res.status(404).json({
      errors: [err.message, "No item found"]
    });
  });
});
module.exports = router;
//# sourceMappingURL=Borrowings.routes.js.map