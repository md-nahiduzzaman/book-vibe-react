import { useEffect, useState } from "react";
import { getBooks, getWishlistBooks } from "../utils";
import BookCard from "./BookCard";

const WishlistBooks = () => {
  const [WishlishBooks, setWishlistBook] = useState([]);

  useEffect(() => {
    const savedWishListBooks = getWishlistBooks();
    setWishlistBook(savedWishListBooks);
  }, []);

  return (
    <div>
      <h1>Wishlist Books: {WishlishBooks.length}</h1>
      <div>
        <div className="grid grid-cols-4">
          {WishlishBooks.map((book) => (
            <BookCard book={book}></BookCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistBooks;
