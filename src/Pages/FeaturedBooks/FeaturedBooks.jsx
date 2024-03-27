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
      <div className="w-full h-[100px] bg-gray-100 rounded-lg mb-10">
        <h1 className="font-bold text-5xl flex items-center justify-center text-center pt-7">
          Featured Books
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
