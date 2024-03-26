import { useEffect, useState } from "react";
import BookCard from "../../components/BookCard";

const FeaturedBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        const topRated = data.sort((a, b) => b.rating - a.rating).slice(0, 3);
        setBooks(topRated);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>Featured Books</h1>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
