import Hero from "../../components/Hero";
import Books from "../Books/Books";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <div className="mt-28">
        <div>
          <h1 className="playfont font-bold text-4xl text-center mb-10">
            Books
          </h1>
        </div>
        <Books></Books>
      </div>
    </div>
  );
};

export default Home;
