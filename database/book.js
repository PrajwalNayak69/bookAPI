const mongoose = require("mongoose");
//creating a book schema
const bookSchema = mongoose.Schema({
    ISBN : String,
    title: String,
    authors : [Number],
    language : String,
    pubdate  : String,
    numOfPage : Number,
    category : [String],
    publication : Number,

});
// create a book modal
const bookModel = mongoose.model("books", bookSchema);

module.exports = bookModel;
