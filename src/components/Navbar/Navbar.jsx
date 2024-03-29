import React from "react";
import ThemeBtn from "../ToggleSwitch/ThemeBtn";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-white dark:bg-slate-800 max-w pt-[20px] ">
      <div className="flex justify-between px-[121px]">
        {" "}
        <span className=" text-slate-900 dark:text-white font-black  border-2 py-1 mx-3 px-2 rounded-lg text-2xl">
          O.
        </span>
        <div className="pl-[40%]">
          <Link
            to="/"
            className="text-slate-900 dark:text-white px-8 py-4 mx-4 rounded-lg inline-block hover:transition hover:duration-300 hover:transform hover:scale-110"
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="text-slate-900 dark:text-white px-8 py-4 mx-4 rounded-lg inline-block hover:transition hover:duration-300 hover:transform hover:scale-110"
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className="text-slate-900 dark:text-white px-8 py-4 mx-4 rounded-lg inline-block hover:transition hover:duration-300 hover:transform hover:scale-110"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-slate-900 dark:text-white px-8 py-4 mx-4 rounded-lg inline-block hover:transition hover:duration-300 hover:transform hover:scale-110"
          >
            Contact
          </Link>
        </div>
        <ThemeBtn />
      </div>
    </nav>
  );
};

export default Navbar;
