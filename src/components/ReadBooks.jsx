import { useEffect, useState } from "react";
import { getBooks } from "../utils";
import BookCard from "./BookCard";
import EmptyState from "./EmptyState";
import BookCardLand from "./BookCardLand";

const ReadBooks = () => {
  const [ReadBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const savedReadBooks = getBooks();
    setReadBooks(savedReadBooks);
  }, []);

  if (ReadBooks.length < 1) {
    return <EmptyState></EmptyState>;
  }
  return (
    <div>
      <div className="">
        {ReadBooks.map((book) => (
          <BookCardLand key={book.bookId} book={book}></BookCardLand>
        ))}
      </div>
    </div>
  );
};

export default ReadBooks;
