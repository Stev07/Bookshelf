const express = require("express");

let router = new express.Router();

const Books = require("../models/Book");

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

module.exports = router;
