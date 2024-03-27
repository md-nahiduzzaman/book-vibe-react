import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <h1 className="font-black text-6xl mb-8 playfont">Page Not Found</h1>
        <p className="font-semibold text-3xl mb-10 ">Something Went Wrong!</p>
        <button
          onClick={() => navigate("/")}
          className="p-4 border  rounded-lg bg-[#23BE0A] text-white"
        >
          Take Me Home
        </button>
      </div>
    </section>
  );
};

export default ErrorPage;
