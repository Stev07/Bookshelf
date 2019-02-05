import Mongoose from "mongoose";

const mongoDB = "mongodb://localhost:27017/bookshelf";

Mongoose.connect(mongoDB);
Mongoose.Promise = global.Promise;

const db = Mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
