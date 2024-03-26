import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200 h-[70vh] rounded-3xl">
        <div className="hero-content flex-col lg:flex-row-reverse gap-28">
          <img src="images/heroimg.png" className="max-w-sm" />
          <div>
            <h1 className="text-5xl font-bold playfair mb-12 leading-relaxed">
              Books to freshen up <br /> your bookshelf
            </h1>

            <Link to={"/listedbooks"}>
              <button className="btn bg-[#23BE0A] text-white">
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
