import {SECRET, isLogged} from "./Middleware.routes";
import User from "../models/User";
import Borrowing from "../models/Borrowing";

const express = require("express");
const jwt = require("jsonwebtoken");

let router = new express.Router();

router.get("/", [isLogged], (req, res) => {
    Borrowing.find()
        .then(borrowings => {
            res.status(200).json(borrowings);
        })
        .catch(err => {
            res.status(404).json({errors: [err.message]});
        });
});

router.post("/", [isLogged], (req, res) => {
    const user_id = jwt.verify(req.body.token, SECRET);
    const book_id = req.body.book_id;

    Borrowing.findOne({book_id: book_id, user_id: user_id}).then(() => {
        res.status(403).json({errors: ["This book has already been borrowed"]});
    });

    let borrow = new Borrowing();

    borrow.user_id = user_id;
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
            res.status(500).send({errors: [err.message]});
        });

    res.status(200).json({borrow: borrow});
});

router.patch("/return/:id", [isLogged], (req, res) => {
    const id = req.params.id;

    Borrowing.findOneAndUpdate({_id: id, returned: false})
        .then(borrowing => {
            borrowing.returned = true;
            borrowing.backDate = Date.now();
            borrowing.save();

            res.status(200).json({
                succed: ["You have returned this book, this is so nice!"],
            });
        })
        .catch(err => {
            res.status(404).json({errors: [err.message, "No item found"]});
        });
});

module.exports = router;
