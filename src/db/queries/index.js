import { bookModel } from "@/models/book-model";
// import {
//   replaceMongoIdInArray,
//   replaceMongoIdInObject,
// } from "@/utils/data-until";
async function getAllBooks() {
  const allBooks = await bookModel.find().lean();
  // return replaceMongoIdInArray(allBooks);
  return allBooks;
}

async function getBookById(id) {
  const book = await bookModel.findById(id).lean();
  // return replaceMongoIdInObject(book);
  return book;
}

export { getAllBooks, getBookById };
