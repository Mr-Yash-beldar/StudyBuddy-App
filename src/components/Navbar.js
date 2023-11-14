import React from "react";
import Logo from "../assests/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
   let isLoggedIn=props.isLoggedIn;
   let setIsLoggedIn=props.setIsLoggedIn;
  return (
    <div className="flex items-center justify-between py-4 w-11/12 max-w-[1160px] mx-auto">
      <Link to="/">
        <img src={Logo} alt="Logo" width="160" height="32" loading="lazy"></img>
      </Link>
      <nav className="hidden md:block">
        <ul className="text-purple-100 flex gap-x-6">
          <li>
            <NavLink to="/">
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <p>About</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <p>Contact</p>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="md:flex items-center gap-x-4 hidden">
        {!isLoggedIn ? (
          <Link to="/login">
            <button onClick={()=>setIsLoggedIn(true)} className="bg-gray-900 text-purple-50 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Log in
            </button>
          </Link>
        ) : (
          <Link to="/">
            <button className="bg-gray-900 text-purple-50 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Log Out
            </button>
          </Link>
        )}

        {!isLoggedIn ? (
          <Link to="/signup">
            <button className="bg-gray-900 text-purple-50 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Sign up
            </button>
          </Link>
        ) : (
          <Link to="/dashboard">
            <button className="bg-gray-900 text-purple-50 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Dashboard
            </button>
          </Link>
        )}
      </div>
      <button className="md:hidden mr-4">
        <svg
          stroke="currentColor"
          fill="#AFB2BF"
          stroke-width="0"
          viewBox="0 0 1024 1024"
          font-size="24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
