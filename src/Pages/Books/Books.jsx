import React, { useEffect, useState } from "react";
import BookCard from "../../components/BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <div className="grid grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
