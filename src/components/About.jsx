import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-slate-800 min-h-screen px-4 md:px-8 lg:px-64 py-8 md:py-12 lg:py-16 ">
        <h1 className="text-slate-900 dark:text-white text-4xl  py-6">
          --About
        </h1>
        <div className="bg-zinc-100 dark:bg-gray-950 card lg:card-side shadow-xl rounded-lg ">
          <div className="card-body p-6 md:p-8 max-w-[851px]">
            <h2 className="text-slate-900 dark:text-white text-2xl font-bold mb-4">
              OM
            </h2>
            <p className="text-slate-900 dark:text-white text-lg">
              Namaste! I'm Om Wankhede, a UX designer and front-end developer
              based in the vibrant and culturally rich land of India. My passion
              for crafting delightful digital experiences stems from a deep
              appreciation for the intersection of design and technology. With
              roots in both UX design and front-end development, I bring a
              diverse skill set to the table, ensuring that every project I
              undertake is not only visually stunning but also highly functional
              and user-friendly. Growing up in India has instilled in me a deep
              appreciation for diversity, creativity, and innovation. I draw
              inspiration from the rich tapestry of cultures, traditions, and
              landscapes.
            </p>
            <div className="card-actions justify-start mt-6">
              <button className="text-slate-900 dark:text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md focus:outline-none">
                Contact
              </button>
            </div>
          </div>
          <figure>
            <img
              src="/ompng.png"
              alt="Album"
              className="max-h-[336px] w-[336px] lg:w-full pr-4"
            />
          </figure>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
