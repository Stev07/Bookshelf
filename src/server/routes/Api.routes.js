const express = require("express");
const userRouter = require("./Users.routes");
const bookRouter = require("./Books.routes");

let router = new express.Router();

router.use("/users", userRouter);
router.use("/books", bookRouter);

export default router;
