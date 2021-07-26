const mongoose = require("mongoose");
//creating a book schema
const publicationSchema = mongoose.Schema({
    id : Number,
    name : String,
    books : [String]
});
// create a book modal
const publicationModel = mongoose.model("publications" ,publicationSchema);

module.exports = publicationModel;