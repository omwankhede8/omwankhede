import React, { useState } from "react";
import ThemeBtn from "../ToggleSwitch/ThemeBtn";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-white dark:bg-slate-800 max-w pt-4 md:pt-6">
      <div className="flex justify-between px-4 md:px-8">
        <span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Twemoji_1f426.svg/768px-Twemoji_1f426.svg.png?20141214093714"
            alt=""
            className="h-[40px] w-[40px]"
          />
        </span>

        <div
          className="md:hidden"
          style={{ position: "relative", textAlign: "center" }}
        >
          <button
            className="text-red-600 dark:text-gray-100 focus:outline-none"
            onClick={toggleMenu}
            style={{
              position: "absolute",
              bottom: "10px",
              left: "50%",
              transform: "translateX(-50%)",
            }} // Center horizontally
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showMenu ? (
                <path
                  className=""
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div className={`md:flex ${showMenu ? "block" : "hidden"} `}>
          <Link
            to="/"
            className="text-slate-900 dark:text-white px-8 py-4 mx-4 rounded-lg inline-block hover:transition hover:duration-300 hover:transform hover:scale-110"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="text-slate-900 dark:text-white px-8 py-4 mx-4 rounded-lg inline-block hover:transition hover:duration-300 hover:transform hover:scale-110"
            onClick={toggleMenu}
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className="text-slate-900 dark:text-white px-8 py-4 mx-4 rounded-lg inline-block hover:transition hover:duration-300 hover:transform hover:scale-110"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-slate-900 dark:text-white px-8 py-4 mx-4 rounded-lg inline-block hover:transition hover:duration-300 hover:transform hover:scale-110"
            onClick={toggleMenu}
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
