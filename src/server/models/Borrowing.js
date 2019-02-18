const mongoose = require("mongoose");

const BorrowingSchema = new mongoose.Schema({
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
    },
    startDate: {
        type: Date,
        required: true,
    },
    backDate: {
        type: Date,
        default: null,
        required: false,
    },
    returned: {
        type: Boolean,
        required: false,
        default: false,
    },
});

module.exports = mongoose.model("Borrowing", BorrowingSchema);
