import { useEffect, useState } from "react";
import { getBooks, getWishlistBooks } from "../utils";
import BookCard from "./BookCard";
import BookCardLand from "./BookCardLand";

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
        <div className="">
          {WishlishBooks.map((book) => (
            <BookCardLand book={book}></BookCardLand>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistBooks;
