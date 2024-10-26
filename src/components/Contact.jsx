import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-slate-800 min-h-screen snap-mandatory snap-y scroll-smooth snap-center pl-4 pr-4 md:pl-60 md:pr-60">
        <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl py-10 text-center md:text-left">
          --Contact
        </h1>
        <div>
          <section className="bg-white dark:bg-gray-900">
            <div className="py-4 lg:py-16 px-4 mx-auto max-w-screen-md">
              <p className="mb-8 lg:mb-16 font-light text-center md:text-left text-gray-500 dark:text-gray-400 sm:text-lg">
                Got a technical issue? Want to send feedback about a beta
                feature? Need details about our Business plan? Let us know.
              </p>

              {/* form  */}
              <form
                action="https://formspree.io/f/xwkgnzdr"
                method="POST"
                className="space-y-8"
              >
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Username"
                    autoComplete="off"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@abcd.com"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  value="send"
                  className="btn btn-primary  px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send message
                </button>
              </form>
            </div>
            <div className="flex justify-center pb-6 lg:pl-36 lg:pr-36  ">
              {/* Map */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.9650040584!2d77.60229029613026!3d12.908283663976707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fc4200bfe1%3A0x987ebf87e35428b5!2sBTM%202nd%20Stage%2C%20BTM%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1729936891402!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              {/* Map */}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
