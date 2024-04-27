import { NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import lottie1 from "../../../public/Lottie/touranimation.json";

const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 max-w-7xl mx-auto">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-raleway"
            >
              {navlinks}
            </ul>
          </div>
          <Lottie style={{width:"100px"}} animationData={lottie1} />
          <a className="text-4xl font-bold font-rancho">Tropical Tours</a>
        </div>
        <div className="navbar-center hidden lg:flex font-raleway">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end flex gap-2">
          <div className="flex gap-2 font-raleway">
            <button className="btn">
              <NavLink to="/login">Login</NavLink>
            </button>
            <button className="btn">
              <NavLink to="/register">Register</NavLink>
            </button>
          </div>
          <div className="avatar online">
            <div className="w-14 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
