import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200 sm:h-[70vh] rounded-3xl">
        <div className="hero-content flex-col lg:flex-row-reverse gap-28">
          <img src="images/heroimg.png" className="max-w-sm" />
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl  font-bold playfont mb-3 sm:mb-12 sm:leading-relaxed">
              Books to freshen up <br /> your bookshelf
            </h1>

            <Link to={"/listedbooks"}>
              <button className="btn bg-[#23BE0A] text-white mb-6">
                View The List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
