import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="mt-14 mb-14">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#23BE0A] font-bold" : "font-bold"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#23BE0A] font-bold" : "font-bold"
                }
                to="/listedbooks"
              >
                Listed Books
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#23BE0A] font-bold" : "font-bold"
                }
                to="/pagestoread"
              >
                Pages to Read
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#23BE0A] font-bold" : "font-bold"
                }
                to="/featuredbooks"
              >
                Featured Books
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#23BE0A] font-bold" : "font-bold"
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </ul>
          </div>
          <a className="text-4xl font-black">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-6 items-center">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] font-bold border border-[#23BE0A] rounded-lg p-3"
                  : "font-normal"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] font-bold border border-[#23BE0A] rounded-lg p-3"
                  : "font-normal"
              }
              to="/listedbooks"
            >
              Listed Books
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] font-bold border border-[#23BE0A] rounded-lg p-3"
                  : "font-normal"
              }
              to="/pagestoread"
            >
              Pages to Read
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] font-bold border border-[#23BE0A] rounded-lg p-3"
                  : "font-normal"
              }
              to="/featuredbooks"
            >
              Featured Books
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] font-bold border border-[#23BE0A] rounded-lg p-3"
                  : "font-normal"
              }
              to="/contact"
            >
              Contact Us
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <a className="btn bg-[#23BE0A] text-white">Sign In</a>
          <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
