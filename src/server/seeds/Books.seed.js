const Book = require("../models/Book");

const seedBooks = () => {
    Book.create({
        title: "HTML5 Une référence pour le développeur web",
        isbn: "LOLOLOLOLOLOL", // Change this shit
        language: "Français",
        author: "R. Rimelé",
        ebook: false,
        physical: true,
    });

    Book.create({
        title: "Design Patterns",
        isbn: "LOLOLOLOLOLOL", // Change this shit
        language: "English",
        author: "Freeman & Freeman",
        ebook: false,
        physical: true,
    });

    Book.create({
        title: "Responsive Design: Patterns & Principles",
        isbn: "LOLOLOLOLOLOL", // Change this shit
        language: "English",
        author: "Ethan Marcotte",
        ebook: false,
        physical: true,
    });

    Book.create({
        title: "The big book of team building games",
        isbn: "LOLOLOLOLOLOL", // Change this shit
        language: "English",
        author: "Newstorm/Scannell",
        ebook: false,
        physical: true,
    });

    Book.create({
        title: "Javascript Les bons éléments",
        isbn: "LOLOLOLOLOLOL", // Change this shit
        language: "Français",
        author: "Pearson",
        ebook: false,
        physical: true,
    });

    Book.create({
        title: "Exercices for Programmers",
        isbn: "LOLOLOLOLOLOL", // Change this shit
        language: "Français",
        author: "Hogan",
        ebook: false,
        physical: true,
    });
};

export default seedBooks;
