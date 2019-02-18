const mongoose = require("mongoose");

const BorrowingSchema = new mongoose.Schema({
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    startDate: {
        type: Date,
        required: true,
    },
    backDate: {
        type: Date,
        default: undefined,
        required: false,
    },
    returned: {
        type: Boolean,
        required: false,
        default: false,
    },
});

module.exports = mongoose.model("Borrowing", BorrowingSchema);
