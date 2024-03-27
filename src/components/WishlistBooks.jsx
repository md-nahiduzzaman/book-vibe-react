import { useContext } from "react";

import BookCardLand from "./BookCardLand";
import { BooksContext } from "../Pages/ListedBook/ListedBook";

const WishlistBooks = () => {
  const { WishlistBooks } = useContext(BooksContext);

  return (
    <div>
      <div className="">
        {WishlistBooks.map((book) => (
          <BookCardLand key={book.bookId} book={book}></BookCardLand>
        ))}
      </div>
    </div>
  );
};

export default WishlistBooks;
