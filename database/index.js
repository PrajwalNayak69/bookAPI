const books = [{
    ISBN : "12345ONE",
    title: "Getting started ",
    authors : ["1", "2", "3"],
    language : "en",
    pubdate  : "2021 -07 -07",
    numOfPage : 2254,
    category : ["fiction", "programing" ,"web dev"],
    publication : [1],
},
{
    ISBN : "12345TWO",
    title: "Getting started PYTHON",
    authors : ["1", "2"],
    language : "en", 
    pubdate  : "2021 -07 -07",
    numOfPage : 225,
    category : ["fiction", "programing" ,"web dev"],
    publication : [1],
},
];

const authors = [{
    id : "1",
    name : "prajwa l",
    books : "12345ONE"

},
{
    id : "2",
    name : "prajwal again",
    books : "12345TWO"

},];
 
const publications = [{
    id : 1,
    name : "chakra",
    books : "12345ONE"
},];

module.exports = {books, authors, publications};