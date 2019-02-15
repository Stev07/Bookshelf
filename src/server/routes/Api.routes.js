const express = require("express");
const userRouter = require("./Users.routes");
const bookRouter = require("./Books.routes");

let router = new express.Router();

// ATTENTION aucun middleware OP... penser à les ajouter

router.use("/users", userRouter);
router.use("/books", bookRouter);

export default router;
