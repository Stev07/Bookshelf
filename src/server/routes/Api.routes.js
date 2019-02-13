const express = require("express");

let router = new express.Router();
const userRouter = require("./Users.routes");

router.use("/users", userRouter);

export default router;
