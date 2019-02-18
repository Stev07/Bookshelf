const express = require("express");
const Borrowing = require("../models/Borrowing");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

let router = new express.Router();

const SECRET = "ChangeThisSecretToken";

router.get("/", (req, res) => {
    Borrowing.find()
        .then(borrowings => {
            res.status(200).json(borrowings);
        })
        .catch(err => {
            res.status(404).json({errors: [err.message]});
        });
});

router.post("/", (req, res) => {
    const user_id = jwt.verify(req.body.token, SECRET);
    const book_id = req.body.book_id;

    let borrow = new Borrowing(),
        errors = [];

    borrow.book_id = book_id;
    borrow.startDate = Date.now();
    borrow.state = undefined;
    borrow.backDate = undefined;
    borrow.save();

    User.findOne({_id: user_id.user})
        .then(user => {
            user.borrowings.push(borrow._id);
            user.save();
        })
        .catch(err => {
            errors.user = err.message;
        });

    if (errors.length > 0) {
        return res.status(500).send({errors});
    }
    res.status(200).send(borrow);
});

module.exports = router;
