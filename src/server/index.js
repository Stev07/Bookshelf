/* becodeorg/bookshelf
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 */

import express from "express";
import path from "path";

import router from "./routes/Api.routes";

const bodyParser = require("body-parser");

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.resolve(__dirname, "../../bin/client")));
app.get('*', (req, res) => {
    res.send('RUBY - MERDEEEEE');
})
app.use("/api", router);

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
