import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-white dark:bg-slate-800 min-h-screen snap-mandatory snap-y scroll-smooth snap-center ">
        <div className="  ml-60 mr-64 pt-[13rem]  ">
          <h1 className="  text-slate-900 dark:text-white text-5xl font-normal tracking-wider inline-block">
            Hello, My name is Om Wankhede
          </h1>
          <h2 className="text-slate-900 dark:text-white text-3xl w-2/4  py-4 pt-10 ">
            I am a UX Designer / Frontend Developer Based in India
          </h2>

          <Link
            to="/contact"
            className="inline-block text-slate-900 dark:text-white border-2 border-gray-300 rounded-xl text-base py-5 px-4 my-10 hover:transition hover:duration-300 hover:transform hover:scale-110"
          >
            Contact me
          </Link>
          <div className="flex space-x-5 ">
            <a href="https://twitter.com/Omwankh99942718" target="_blank">
              <img
                src="/Twitter.png"
                alt=""
                className="w-10 h-10 hover:transition hover:duration-300 hover:transform hover:scale-110"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/om-wankhede-702257217/"
              target="_blank"
            >
              <img
                src="/LinkedIn.png"
                alt=""
                className="w-10 h-10 hover:transition hover:duration-300 hover:transform hover:scale-110"
              />
            </a>
            <a href="https://www.instagram.com/omwankhede8/" target="_blank">
              <img
                src="/Instagram.png"
                alt=""
                className="w-10 h-10 hover:transition hover:duration-300 hover:transform hover:scale-110"
              />
            </a>
          </div>
        </div>
        <div className="flex justify-center ">
          <button className="animate-bounce-slow ">
            <Link
              to="/portfolio"
              className="inline-block text-slate-500 dark:text-white pt-4 hover:transition duration-300 transform hover:scale-125 shadow-md hover:shadow-lg rounded-md px-4 py-2"
            >
              Projects <img src="/Down.png" alt="" className="ml-4 w-5" />
            </Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
