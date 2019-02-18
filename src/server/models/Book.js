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
    image: {
        type: String,
        default:
            "http://alinea.lu/wp-content/uploads/2018/07/motivation___the_answer_by_songue-d3d746g.jpg",
    },
    reviews: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Review",
    },
});

module.exports = mongoose.model("Book", BookSchema);
