const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
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
});

module.exports = mongoose.model("User", UserSchema);
