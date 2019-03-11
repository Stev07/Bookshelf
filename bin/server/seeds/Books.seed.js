"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const Book = require("../models/Book");

const seedBooks = () => {
  Book.create({
    title: "HTML5 Une référence pour le développeur web",
    isbn: "LOLOLOLOLOLOL",
    language: "Français",
    author: "R. Rimelé",
    ebook: false,
    physical: true
  });
  Book.create({
    title: "Design Patterns",
    isbn: "LOLOLOLOLOLOL",
    language: "English",
    author: "Freeman & Freeman",
    ebook: false,
    physical: true
  });
  Book.create({
    title: "Responsive Design: Patterns & Principles",
    isbn: "LOLOLOLOLOLOL",
    language: "English",
    author: "Ethan Marcotte",
    ebook: false,
    physical: true
  });
  Book.create({
    title: "The big book of team building games",
    isbn: "LOLOLOLOLOLOL",
    language: "English",
    author: "Newstorm/Scannell",
    ebook: false,
    physical: true
  });
  Book.create({
    title: "Javascript Les bons éléments",
    isbn: "LOLOLOLOLOLOL",
    language: "Français",
    author: "Pearson",
    ebook: false,
    physical: true
  });
  Book.create({
    title: "Exercices for Programmers",
    isbn: "LOLOLOLOLOLOL",
    language: "Français",
    author: "Hogan",
    ebook: false,
    physical: true
  });
};

var _default = seedBooks;
exports.default = _default;
//# sourceMappingURL=Books.seed.js.map