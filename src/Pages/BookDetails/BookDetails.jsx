import { useLoaderData, useParams } from "react-router-dom";
import { saveBook, saveWishlistBooks } from "../../utils";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();

  const book = books.find((book) => book.bookId == id);

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleReadBooks = (book) => {
    saveBook(book, "read");
  };

  const handleWishListBooks = (book) => {
    saveWishlistBooks(book);
  };

  return (
    <div>
      <div className="flex gap-10">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <div>
            <h1>{bookName}</h1>
            <p>By: {author}</p>
          </div>
          <hr />
          <div>
            <h1>{category}</h1>
          </div>
          <hr />
          <div>
            <p>
              <span>Review</span>
              {review}
            </p>
            <div>
              <h1>Tag</h1>
              <p>#{tags[0]}</p>
              <p>#{tags[1]}</p>
            </div>
            <hr />
            <div>
              <div className="overflow-x-auto">
                <table className="table w-[50%] ">
                  <tbody>
                    {/* row 1 */}
                    <tr className="border-none">
                      <td>Number of Pages:</td>
                      <td>{totalPages}</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="border-none">
                      <td>Publisher:</td>
                      <td>{author}</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="border-none">
                      <td>Year of Publishing:</td>
                      <td>{yearOfPublishing}</td>
                    </tr>
                    {/* row 4 */}
                    <tr className="border-none">
                      <td>Rating:</td>
                      <td>{rating}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex gap-6">
              <button onClick={() => handleReadBooks(book)} className="btn">
                Read
              </button>
              <button onClick={() => handleWishListBooks(book)} className="btn">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
