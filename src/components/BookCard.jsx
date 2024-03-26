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
        <div className=" p-6 rounded-md border border-gray-500  ">
          <img
            src={image}
            alt=""
            className="object-cover object-center h-full w-full rounded-md bg-gray-500"
          />
          {/* tags */}
          <div>
            <p>{tags[0]}</p>
            <p>{tags[1]}</p>
          </div>
          {/* book name */}
          <div>
            <h1>{bookName}</h1>
            <p>
              {" "}
              By <span>{author}</span>{" "}
            </p>
          </div>
          <hr />
          <div>
            <p>{category}</p>
            <p>
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
