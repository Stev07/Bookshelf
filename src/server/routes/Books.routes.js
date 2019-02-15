const express = require("express");
const Books = require("../models/Book");

let router = new express.Router();

router.get("/:id", (req, res) => {
    const id = req.params.id;

    Books.findOne({_id: id})
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
    Books.find()
        .then(books => {
            res.status(200).json({books});
        })
        .catch(err => {
            res.status(500).send({errors: [err.message]});
        });
});

router.patch("/:id", (req, res) => {
    Books.findOne({_id: req.params.id})
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

    Books.create({
        title: data.title,
        isbn: data.isbn,
        language: data.language,
        author: data.author,
        ebook: data.ebook,
        physical: data.physical,
        image: data.image,
    })
        .then(book => {
            res.status(200).send(book);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

/* import seedBooks from "../seeds/Books.seed";

router.post("/ultimate/seeds", (req, res) => {
    console.log(req);
    console.log(seedBooks);
    seedBooks();
    res.send("WORKED");
}); */

module.exports = router;
