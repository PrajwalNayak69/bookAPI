const mongoose = require("mongoose");
//creating a book schema
const authorSchema = mongoose.Schema({
    id : Number,
    name : String,
    books : [String]
});
// create a book modal
const authorModel = mongoose.model("authors", authorSchema);

module.exports = authorModel;