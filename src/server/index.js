/* becodeorg/bookshelf
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 */

import express from "express";
import path from "path";

const {APP_PORT} = process.env;

const app = express();

const mongoose = require("mongoose");
const uri = "mongodb://mongo/bookshelf";
const connOptions = {
    useNewUrlParser: true,
    authSource: "admin",
    user: "dev",
    pass: "dev",
};

mongoose
    .connect(uri, connOptions)
    .then(() => console.log("connected"))
    .catch(err => console.log(err));

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
