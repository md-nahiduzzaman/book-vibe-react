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
        <div className="w-[70%]">
          <img src={image} alt="" />
        </div>
        <div>
          <div>
            <h1 className="playfont font-bold text-5xl mb-4">{bookName}</h1>
            <p className="font-medium text-xl">By: {author}</p>
          </div>
          <hr className="mt-6 mb-4" />
          <div>
            <h1 className="font-medium text-xl">{category}</h1>
          </div>
          <hr className="mt-4 mb-6" />
          <div>
            <p className="text-base mb-6">
              <span className="font-bold">Review: </span>
              {review}
            </p>
            <div className="flex gap-6 font-bold items-center ">
              <h1>Tag</h1>
              <p className="text-[#23BE0A] px-3 py-1 bg-green-100 rounded-full font-medium">
                #{tags[0]}
              </p>
              <p className="text-[#23BE0A] px-3 py-1 bg-green-100 rounded-full font-medium">
                #{tags[1]}
              </p>
            </div>
            <hr className="mt-6 mb-6" />
            <div>
              <div className="overflow-x-auto">
                <table className="table w-[50%] ">
                  <tbody className="">
                    {/* row 1 */}
                    <tr className="border-none pb-6">
                      <td className="p-0 pb-4">Number of Pages:</td>
                      <td className="p-0 pb-4 font-semibold">{totalPages}</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="border-none">
                      <td className="p-0 pb-4">Publisher:</td>
                      <td className="p-0 pb-4 font-semibold">{author}</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="border-none">
                      <td className="p-0 pb-4">Year of Publishing:</td>
                      <td className="p-0 pb-4 font-semibold">
                        {yearOfPublishing}
                      </td>
                    </tr>
                    {/* row 4 */}
                    <tr className="border-none">
                      <td className="p-0 pb-4">Rating:</td>
                      <td className="p-0 pb-4 font-semibold">{rating}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex gap-6 mt-8">
              <button
                onClick={() => handleReadBooks(book)}
                className="btn bg-white border-gray-500"
              >
                Read
              </button>
              <button
                onClick={() => handleWishListBooks(book)}
                className="btn bg-[#50B1C9] text-white"
              >
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
