import { useContext } from "react";

import BookCardLand from "./BookCardLand";
import { BooksContext } from "../Pages/ListedBook/ListedBook";

const ReadBooks = () => {
  const { ReadBooks } = useContext(BooksContext);

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
