const express = require("express");
const Book = require("../models/Book");
const Review = require("../models/Review");
const Borrowings = require("../models/Borrowing");

let router = new express.Router();

router.get("/:id", (req, res) => {
    const id = req.params.id;

    Book.findOne({_id: id})
        .then(book => {
            res.status(200).json({book});
        })
        .catch(err => {
            res.status(404).json({
                errors: ["Le livre n'a pas pu être trouvé!", err],
            });
        });
});

router.get("/", (req, res) => {
    console.log(req.body);
    Book.find()
        .then(books => {
            res.status(200).json({books});
        })
        .catch(err => {
            res.status(500).send({errors: [err.message]});
        });
});

router.patch("/:id", (req, res) => {
    Book.findOne({_id: req.params.id})
        .then(book => {
            for (let property in req.body) {
                book[property] = req.body[property];
            }

            book.save();
            res.status(200).send("Update succed");
        })
        .catch(err => {
            res.status(404).send(err);
        });
});

router.post("/", (req, res) => {
    const data = req.body;

    let book = new Book();

    for (let property in data) {
        book[property] = req.body[property];
    }

    book.save();
    res.status(200).json(book);
});

router.get("/:id/reviews", (req, res) => {
    Book.findOne({_id: req.params.id})
        .then(book => {
            Review.find({_id: {$in: book.reviews}})
                .then(reviews => {
                    res.status(200).json({reviews: reviews});
                    return;
                })
                .catch(err => {
                    res.status(400).json({errors: [err]});
                    return;
                });
        })
        .catch(err => {
            res.status(404).send({errors: [err]});
            return;
        });
});

router.get("/:id/borrowings", (req, res) => {
    Borrowings.find({book_id: req.params.id})
        .then(borrows => {
            res.status(200).json(borrows);
        })
        .catch(err => {
            res.status(400).json({errors: [err]});
        });
});

/* import seedBook from "../seeds/Book.seed";

router.post("/ultimate/seeds", (req, res) => {
    console.log(req);
    console.log(seedBook);
    seedBook();
    res.send("WORKED");
}); */

module.exports = router;
