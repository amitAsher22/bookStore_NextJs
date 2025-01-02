import BookCard from "../books/BookCard";

const BookList = ({ books }) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {books.map((book) => {
        return <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BookList;
