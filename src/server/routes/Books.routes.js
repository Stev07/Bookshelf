import {isCoach, isLogged} from "./Middleware.routes";
import Book from "../models/Book";
import Review from "../models/Review";
import Borrowings from "../models/Borrowing";

const express = require("express");

let router = new express.Router();

router.get("/", [isLogged], (req, res) => {
    Book.find()
        .then(books => {
            res.status(200).json({books});
        })
        .catch(err => {
            res.status(500).send({errors: [err.message]});
        });
});

router.get("/:id", [isLogged], (req, res) => {
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

router.post("/", [isLogged, isCoach], (req, res) => {
    const data = req.body;

    let book = new Book();

    for (let property in data) {
        book[property] = req.body[property];
    }

    book.save();
    res.status(200).json(book);
});

router.patch("/:id", [isLogged, isCoach], (req, res) => {
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

router.get("/reviews/:id", [isLogged], (req, res) => {
    Book.findOne({_id: req.params.id})
        .then(book => {
            Review.find({_id: {$in: book.reviews}})
                .then(reviews => {
                    res.status(200).json({book: book, reviews: reviews});
                })
                .catch(err => {
                    res.status(400).json({errors: [err.message]});
                });
        })
        .catch(err => {
            res.status(404).send({errors: [err.message]});
        });
});

router.get("/borrowings/:id", [isLogged], (req, res) => {
    Borrowings.find({book_id: req.params.id})
        .then(borrows => {
            res.status(200).json(borrows);
        })
        .catch(err => {
            res.status(400).json({errors: [err.message]});
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
