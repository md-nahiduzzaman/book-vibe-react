import { createContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { getBooks, getWishlistBooks } from "../../utils";

export const BooksContext = createContext();

const ListedBook = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [ReadBooks, setReadBooks] = useState([]);
  const [WishlistBooks, setWishlistBook] = useState([]);

  useEffect(() => {
    const savedReadBooks = getBooks();
    setReadBooks(savedReadBooks);
  }, []);

  useEffect(() => {
    const savedWishListBooks = getWishlistBooks();
    setWishlistBook(savedWishListBooks);
  }, []);

  const sortData = (data, setData, sortBy) => {
    let sortedData = [...data];
    if (sortBy === "rating") {
      sortedData.sort((a, b) => b.rating - a.rating);
    }
    if (sortBy === "totalPages") {
      sortedData.sort((a, b) => b.totalPages - a.totalPages);
    }
    if (sortBy === "yearOfPublishing") {
      sortedData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    setData(sortedData);
  };

  return (
    <div>
      <BooksContext.Provider value={{ WishlistBooks, ReadBooks }}>
        <div className="w-full h-[100px] bg-gray-100 rounded-lg mb-10">
          <h1 className="font-bold text-5xl flex items-center justify-center text-center pt-7">
            Books
          </h1>
        </div>
        <div className="flex text-center items-center justify-center mb-16">
          <details className="dropdown ">
            <summary className="m-1 btn bg-[#23BE0A] text-white ">
              Sort By <IoIosArrowDown />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                {/* <a onClick={() => sortData(ReadBooks, setReadBooks, "rating")}> */}
                <a
                  onClick={() =>
                    sortData(
                      tabIndex === 0 ? ReadBooks : WishlistBooks,
                      tabIndex === 0 ? setReadBooks : setWishlistBook,
                      "rating"
                    )
                  }
                >
                  Rating
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    sortData(
                      tabIndex === 0 ? ReadBooks : WishlistBooks,
                      tabIndex === 0 ? setReadBooks : setWishlistBook,
                      "totalPages"
                    )
                  }
                >
                  Number of pages
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    sortData(
                      tabIndex === 0 ? ReadBooks : WishlistBooks,
                      tabIndex === 0 ? setReadBooks : setWishlistBook,
                      "yearOfPublishing"
                    )
                  }
                >
                  Publisher year
                </a>
              </li>
            </ul>
          </details>
        </div>
        <div>
          <div>
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center lg:justify-start flex-nowrap ">
              <Link
                onClick={() => setTabIndex(0)}
                to={``}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                  tabIndex === 0 ? "border border-b-0" : "border-b"
                }  rounded-t-lg border-gray-400`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span>Read Books</span>
              </Link>
              <Link
                onClick={() => setTabIndex(1)}
                to={`wishlist`}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                  tabIndex === 1 ? "border border-b-0" : "border-b"
                }  rounded-t-lg border-gray-400`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>Wishlist Books</span>
              </Link>
            </div>
          </div>
        </div>
        <Outlet></Outlet>
      </BooksContext.Provider>
    </div>
  );
};

export default ListedBook;
