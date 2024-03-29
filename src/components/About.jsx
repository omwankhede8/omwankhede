import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-white dark:bg-slate-800 min-h-screen  snap-mandatory snap-y scroll-smooth snap-center pl-60 pr-60  ">
        <h1 className=" text-slate-900 dark:text-white text-4xl py-10 pt-10">
          --About
        </h1>
        <div className="pt-10">
          <div className="bg-zinc-100 dark:bg-gray-950 card lg:card-side  shadow-xl">
            <div className="card-body max-w-[851px] max-h-[754px]">
              <h2 className="card-title text-slate-900 dark:text-white ">OM</h2>
              <p className=" text-slate-900 dark:text-white max-w-[851px] overflow-auto text-xl tracking-widest ">
                Namaste! I'm Om Wankhede, a UX designer and front-end developer
                based in the vibrant and culturally rich land of India. My
                passion for crafting delightful digital experiences stems from a
                deep appreciation for the intersection of design and technology.
                With roots in both UX design and front-end development, I bring
                a diverse skill set to the table, ensuring that every project I
                undertake is not only visually stunning but also highly
                functional and user-friendly. Growing up in India has instilled
                in me a deep appreciation for diversity, creativity, and
                innovation. I draw inspiration from the rich tapestry of
                cultures, traditions, and landscapes.
              </p>
              <div className="card-actions justify-start">
                <button className="  text-slate-900 dark:text-white btn btn-primary">
                  Contact
                </button>
              </div>
            </div>
            <figure>
              <img
                src="/ompng.png"
                alt="Album"
                className="max-h-[346px] w-[346px] lg:w-full pr-4"
              />
            </figure>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
