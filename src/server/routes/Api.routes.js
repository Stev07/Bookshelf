const express = require("express");
const userRouter = require("./Users.routes");
const bookRouter = require("./Books.routes");
const reviewRouter = require("./Reviews.routes");
const borrowingRouter = require("./Borrowings.routes");

let router = new express.Router();

// ATTENTION aucun middleware OP... penser à les ajouter

router.use("/users", userRouter);
router.use("/books", bookRouter);
router.use("/reviews", reviewRouter);
router.use("/borrowings", borrowingRouter);

export default router;
