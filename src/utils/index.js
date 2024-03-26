import toast from "react-hot-toast";

export const getBooks = () => {
  let books = [];
  const storeBooks = localStorage.getItem("books");
  if (storeBooks) {
    books = JSON.parse(storeBooks);
  }
  return books;
};

export const saveBook = (book) => {
  let books = getBooks();
  const isExist = books.find((b) => b.bookId == book.bookId);
  if (isExist) {
    return toast.error("Already Read This Book");
  }
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  toast.success("Successfully Read This Book");
};

export const getWishlistBooks = () => {
  let books = [];
  const storeBooks = localStorage.getItem("wishlistbooks");
  if (storeBooks) {
    books = JSON.parse(storeBooks);
  }
  return books;
};

export const saveWishlistBooks = (book) => {
  let booksR = getBooks();
  const isExistR = booksR.find((b) => b.bookId == book.bookId);

  let books = getWishlistBooks();
  const isExist = books.find((b) => b.bookId == book.bookId);

  if (isExistR) {
    return toast.error("Already Read This Book");
  } else if (isExist) {
    return toast.error("Already Added to Wishlist");
  }
  books.push(book);
  localStorage.setItem("wishlistbooks", JSON.stringify(books));
  toast.success("Successfully Add This Book to Wishlist");
};
