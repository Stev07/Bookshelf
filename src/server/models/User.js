const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    email: {
        type: String,
        required: true,
        index: {unique: true},
    },
    password: {
        type: String,
        required: true,
    },
    coach: {
        type: Boolean,
        default: false,
    },
    borrowings: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "borrowings",
    },
    reviews: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "reviews",
    },
});

module.exports = mongoose.model("User", UserSchema);
