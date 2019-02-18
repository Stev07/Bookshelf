const express = require("express");
const Review = require("../models/Review");
const User = require("../models/User");
const Book = require("../models/Book");
const jwt = require("jsonwebtoken");

const SECRET = "ChangeThisSecretToken";

let router = new express.Router();

router.get("/", (req, res) => {
    Review.find()
        .then(reviews => {
            res.status(200).json({reviews});
        })
        .catch(err => {
            res.status(500).json({errors: [err.message]});
        });
});

router.post("/", (req, res) => {
    const user_id = jwt.verify(req.body.token, SECRET);
    const book_id = req.body.book_id;

    let review = new Review(),
        errors = [];

    review.rating = req.body.rating;
    review.date = Date.now();
    review.comment = req.body.comment;
    review.save();

    User.findOne({_id: user_id.user})
        .then(user => {
            user.reviews.push(review._id);
            user.save();
        })
        .catch(err => {
            errors.user = err.message;
        });

    Book.findOne({_id: book_id})
        .then(book => {
            book.reviews.push(review._id);
            book.save();
        })
        .catch(err => {
            errors.book = err.message;
        });

    if (errors.length > 0) {
        return res.status(500).send({errors});
    }
    res.status(200).send(review);
});

router.patch("/:id", (req, res) => {
    Review.findById(req.params.id)
        .then(review => {
            for (let property in req.body) {
                review[property] = req.body[property];
            }
            review.save();

            res.status(200).json({review});
        })
        .catch(err => {
            res.status(404).json({errors: [err.message]});
        });
});

router.delete("/:id", (req, res) => {
    Review.find({_id: req.params.id}).remove(() => {
        res.status(200).send("YUP");
    });
});

module.exports = router;
