// import { getAllBooks } from "../../db/queries/index";
import { getAllBooks } from "../lib/fake-data";
import BookList from "../ui/books/BookList";

const BookListPage = async () => {
  const books = await getAllBooks();

  return <BookList books={books} />;
};

export default BookListPage;
