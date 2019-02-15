const mongoose = require("mongoose");

const BorrowingSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        default: Date.now(),
        required: true,
    },
    backDate: {
        type: Date,
        default: null,
        required: undefined,
    },
    state: {
        type: String,
        required: false,
        default: undefined,
    },
});

module.exports = mongoose.model("Borrowing", BorrowingSchema);
