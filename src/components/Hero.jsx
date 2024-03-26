const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200 h-[70vh] rounded-3xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="images/heroimg.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn btn-primary">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
