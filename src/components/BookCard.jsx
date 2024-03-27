import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
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

  return (
    <div>
      <Link to={`/book/${bookId}`}>
        <div className=" p-6 rounded-md border border-gray-200 w-96 ">
          <img
            src={image}
            alt=""
            className="object-cover object-center h-full w-full rounded-md bg-gray-500"
          />
          {/* tags */}
          <div className="flex gap-3 mt-6 mb-4">
            <p className="text-[#23BE0A] px-3 py-1 bg-green-100 rounded-full font-medium">
              {tags[0]}
            </p>
            <p className="text-[#23BE0A] px-3 py-1 bg-green-100 rounded-full font-medium">
              {tags[1]}
            </p>
          </div>
          {/* book name */}
          <div>
            <h1 className="playfont font-bold text-2xl mb-4">{bookName}</h1>
            <p className=" font-medium">
              {" "}
              By: <span>{author}</span>{" "}
            </p>
          </div>
          <hr className="mt-4 mb-4" />
          <div className="flex justify-between font-medium">
            <p>{category}</p>
            <p className="flex items-center gap-3">
              {rating}
              <CiStar></CiStar>{" "}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
