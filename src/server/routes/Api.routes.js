const express = require("express");

let router = express.Router();
const userRouter = require('./Users.routes');

router.use('/users', userRouter);

export default router;