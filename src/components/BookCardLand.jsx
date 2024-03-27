import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { TfiLocationPin } from "react-icons/tfi";

const BookCardLand = ({ book }) => {
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
      <div className=" p-6 rounded-md border border-gray-200 flex gap-6 mb-8 ">
        <div>
          <img
            src={image}
            alt=""
            className="object-cover object-center h-[250px] rounded-md bg-gray-500"
          />
        </div>
        <div className="w-full">
          {/* book name */}
          <div>
            <h1 className="playfont font-bold text-2xl mb-4">{bookName}</h1>
            <p className=" font-medium">
              {" "}
              By: <span>{author}</span>{" "}
            </p>
          </div>
          {/* tags */}
          <div className="flex gap-3 mt-6 mb-4 items-center">
            <p className="font-bold">Tag</p>
            <p className="text-[#23BE0A] px-3 py-1 bg-green-100 rounded-full font-medium">
              <span>#</span>
              {tags[0]}
            </p>
            <p className="text-[#23BE0A] px-3 py-1 bg-green-100 rounded-full font-medium">
              <span>#</span>
              {tags[1]}
            </p>
            <p className="flex items-center gap-3">
              <TfiLocationPin />
              Year of Publishing: {yearOfPublishing}
            </p>
          </div>
          <div className="flex gap-8">
            <p className="flex items-center gap-3">
              <HiOutlineUsers />
              Publisher:{publisher}
            </p>
            <p className="flex items-center gap-3">
              <HiOutlineDocumentChartBar />
              Pages {totalPages}
            </p>
          </div>

          <hr className="mt-4 mb-4 w-full" />
          <div className="flex items-center gap-4 font-medium">
            <p className="bg-blue-100 text-blue-600 p-3 rounded-full">
              Category: {category}
            </p>
            <p className="bg-orange-100 text-orange-600 p-3 rounded-full">
              Rating: {rating}
            </p>
            <Link>
              <button className="bg-[#23BE0A] text-white p-3 rounded-full">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCardLand;
