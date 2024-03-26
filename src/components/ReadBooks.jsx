import { useEffect, useState } from "react";
import { getBooks } from "../utils";
import BookCard from "./BookCard";
import EmptyState from "./EmptyState";

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
      <h1>Reading Books: {ReadBooks.length}</h1>
      <div className="grid grid-cols-4">
        {ReadBooks.map((book) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default ReadBooks;
