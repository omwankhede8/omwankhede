import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-slate-800 min-h-screen snap-mandatory snap-y scroll-smooth snap-center">
        <div className="ml-4 md:ml-60 mr-4 md:mr-64 pt-16 md:pt-[13rem]">
          <h1 className="text-slate-900 dark:text-white text-5xl font-normal tracking-wider">
            Hello, My name is Om Wankhede
          </h1>
          <h2 className="text-slate-900 dark:text-white text-3xl mt-4 md:w-2/4">
            I am a UX Designer / Frontend Developer Based in India
          </h2>
          <Link
            to="/contact"
            className="inline-block mt-8 px-6 py-3 text-slate-900 dark:text-white border-2 border-gray-300 rounded-xl text-lg hover:scale-110 hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-300"
          >
            Contact me
          </Link>
          <div className="flex justify-start mt-8 space-x-5">
            <a href="https://twitter.com/Omwankh99942718" target="_blank">
              <img
                src="/Twitter.png"
                alt="Twitter"
                className="w-10 h-10 hover:scale-110"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/om-wankhede-702257217/"
              target="_blank"
            >
              <img
                src="/LinkedIn.png"
                alt="LinkedIn"
                className="w-10 h-10 hover:scale-110"
              />
            </a>
            <a href="https://www.instagram.com/omwankhede8/" target="_blank">
              <img
                src="/Instagram.png"
                alt="Instagram"
                className="w-10 h-10 hover:scale-110"
              />
            </a>
          </div>
          <div className="flex justify-center mt-8">
            <button className="animate-bounce-slow">
              <Link
                to="/portfolio"
                className="px-6 py-3 text-slate-500 dark:text-white hover:scale-125 hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-gray-300 rounded-md flex items-center"
              >
                Projects{" "}
                <img src="/Down.png" alt="Down Arrow" className="ml-2 w-5" />
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
