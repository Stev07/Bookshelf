"use strict";

const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
    default: 3
  },
  date: {
    type: Date,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("Review", ReviewSchema);
//# sourceMappingURL=Review.js.map