"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const express = require("express");

const userRouter = require("./Users.routes");

const bookRouter = require("./Books.routes");

const reviewRouter = require("./Reviews.routes");

const borrowingRouter = require("./Borrowings.routes");

let router = new express.Router();
router.use("/users", userRouter);
router.use("/books", bookRouter);
router.use("/reviews", reviewRouter);
router.use("/borrowings", borrowingRouter);
var _default = router;
exports.default = _default;
//# sourceMappingURL=Api.routes.js.map