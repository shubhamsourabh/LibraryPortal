const Book = require("../models/book");
async function createBook() {
  const books = new Book({
    title: "History Of Mankind",
    author: "Robert kepling",
    copies: 20,
  });

  const result = await books.save();
  console.log(result);
}

createBook();
