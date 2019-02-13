const express = require("express");
const Books = require("../models/Book");
/* const User = require("../models/User");
const jwt = require("jsonwebtoken");
const SECRET_TO_CHANGE = "ChangeThisSecretToken"; */

let router = new express.Router();

/* const isCoach = (req, res, next) => {
    const token = req.body.token;

    const user_id = jwt.verify(token, SECRET_TO_CHANGE).user;

    User.findById({
        _id: user_id,
    })
        .then(result => {
            if (!result.coach) {
                res.send("Vous ne pouvez pas faire ça, vous n'êtes pas coach.");
                return;
            }
            next();
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(
                "Une erreur de base de données à été trouvée. Conctacté votre administrateur",
                err,
            );
            return;
        });
}; */

router.get("/:id", (req, res) => {
    const id = req.params.id;

    Books.find({_id: id})
        .then(book => {
            res.status(200).send({
                book: book,
            });
        })
        .catch(err => {
            res.status(404).send({
                errors: ["Le livre n'a pas pu être trouvé!", err],
            });
        });
});

router.get("/", (req, res) => {
    console.log(req.body);
    Books.find()
        .then(results => {
            console.log(results);
            res.send(results);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        });
});

router.put("/:id", (req, res) => {
    Books.find({_id: req.params.id})
        .then(book => {
            book.title = !req.body.title ? book.title : req.body.title;
            book.isbn = !req.body.isbn ? book.isbn : req.body.isbn;
            book.language = !req.body.language
                ? book.language
                : req.body.language;
            book.author = !req.body.author ? book.author : req.body.author;
            book.ebook = !req.body.ebook ? book.ebook : req.body.ebook;
            book.physical = !req.body.physical
                ? book.physical
                : req.body.physical;

            book.save();
            res.send("Update succed");
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
