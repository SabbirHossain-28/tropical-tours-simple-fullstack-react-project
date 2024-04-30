import { NavLink, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import lottie1 from "../../../public/Lottie/touranimation.json";
import { useContext } from "react";
import { AuthContext } from "../../AuthContextProvider/ContextProvider";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const navigate=useNavigate()
  console.log(user);
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allSpots">All Tourist Spots</NavLink>
      </li>
      <li>
        <NavLink to="/addToristSpot">Add Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to="/myAddedSpotList">My Spot List</NavLink>
      </li>
    </>
  );
  const handleUserLogOut=()=>{
    userLogOut()
    .then(()=>{
      Swal.fire({
        title: "You are successfully logout",
        text: "You won't be able to revert this!",
        icon: "success",
        confirmButtonColor: "#3085d6",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/")
        }
      });
    })
  }
  return (
    <div className="bg-slate-200">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
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
          <Lottie style={{ width: "100px" }} animationData={lottie1} />
          <a className="text-lg md:text-3xl lg:text-4xl font-bold font-rancho">Tropical Tours</a>
        </div>
        <div className="navbar-center hidden lg:flex font-raleway">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end flex gap-2 mr-8">
          <div className="flex gap-2 font-raleway">
            <button className="btn btn-sm md:btn-md lg:btn">
              <NavLink to="/login">Login</NavLink>
            </button>
            <button className=" btn btn-sm md:btn-md lg:btn ">
              <NavLink to="/register">Register</NavLink>
            </button>
          </div>
          <div className={`avatar ${user ? "online" : "offline"} online`}>
            <div id="btn-tooltip" className="w-14 rounded-full">
              {user ? (
                <img src={user?.photoURL} />
              ) : (
                <IoPersonCircleOutline className="text-6xl"></IoPersonCircleOutline>
              )}
            </div>
            <Tooltip
              anchorSelect="#btn-tooltip"
              clickable
              style={{
                width: "130px",
                height: "60px",
                backgroundColor: "#000000a4",
                borderRadius: "15px",
              }}
            >
              <button
                onClick={handleUserLogOut}
                className="btn btn-xs bg-red-600 border-none mb-1"
              >
                Logout
              </button>
              <p className="text-xs ">{user?.displayName}</p>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
