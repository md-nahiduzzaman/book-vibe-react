import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <section className="py-6">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <IoLocationSharp></IoLocationSharp>
                <span>Holding 1, Patira Dhaka - 1229</span>
              </p>
              <p className="flex items-center">
                <MdLocalPhone></MdLocalPhone>
                <span>+88 0125 252 5254</span>
              </p>
              <p className="flex items-center">
                <MdEmail></MdEmail>
                <span>contact@bookvibe.com</span>
              </p>
            </div>
          </div>
          <form
            novalidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Leroy Jenkins"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75  bg-gray-100 p-4"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="leroy@jenkins.com"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75  bg-gray-100 p-4"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                className="block w-full rounded-md  bg-gray-100 p-4"
              ></textarea>
            </label>
            <button
              type="button"
              className="self-center px-8 py-3 text-lg w-full rounded  bg-[#23BE0A] text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
