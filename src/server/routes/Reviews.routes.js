import User from "../models/User";
import Review from "../models/Review";
import Book from "../models/Book";
import {SECRET, isLogged, isCoach} from "./Middleware.routes";

const express = require("express");
const jwt = require("jsonwebtoken");

let router = new express.Router();

router.get("/", [isLogged], (req, res) => {
    Review.find()
        .then(reviews => {
            res.status(200).json({reviews});
        })
        .catch(err => {
            res.status(500).json({errors: [err.message]});
        });
});

router.post("/", [isLogged], (req, res) => {
    const user_id = jwt.verify(req.body.token, SECRET);
    const book_id = req.body.book_id;

    Review.create({
        rating: req.body.rating,
        date: Date.now(),
        comment: req.body.comment,
    })
        .then(review => {
            User.findOne({_id: user_id.user}).then(user => {
                user.reviews.push(review._id);
                user.save();
            });

            Book.findOne({_id: book_id}).then(book => {
                book.reviews.push(review._id);
                book.save();
            });

            res.status(200).json({review});
            return;
        })
        .catch(err => {
            res.status(403).json({
                errors: ["Failed to add the reviews", err.message],
            });
            return;
        });
});

router.patch("/:id", [isLogged], (req, res) => {
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

router.delete("/:id", [isLogged, isCoach], (req, res) => {
    Review.find({_id: req.params.id})
        .remove(() => {
            res.status(200).json({
                succed: ["Review successfuly removed from DB"],
            });
        })
        .catch(err => {
            res.status(404).json({errors: [err.message]});
        });
});

module.exports = router;
