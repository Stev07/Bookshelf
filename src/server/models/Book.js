const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
        default: "Français",
    },
    author: {
        type: String,
        required: true,
    },
    ebook: {
        type: Boolean,
        default: false,
    },
    physical: {
        type: Boolean,
        default: true,
    },
});

module.exports = new mongoose.Model("Book", BookSchema);
