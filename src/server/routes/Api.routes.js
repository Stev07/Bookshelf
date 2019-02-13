const express = require("express");

let router = new express.Router();
const userRouter = require("./Users.routes");

const bookRouter = require("./Books.routes");

router.use("/users", userRouter);
router.use("/books", bookRouter);

export default router;
