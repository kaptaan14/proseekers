"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiTrendingUp, FiUsers } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

const LandingPage = () => {
  return (
    <div className="text-black  min-h-screen">
      {/* Hero Section */}
      <section className="flex items-center justify-center  px-6">
        <motion.div
          className="text-center flex flex-col sm:px-48"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-7xl font-extrabold leading-snug tracking-tight">
            Build your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              dream project
            </span>{" "}
            and connect with{" "}
            <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
              visionaries.
            </span>
          </h1>
          <div className="flex  items-center justify-center">
            <motion.img
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }} // Fully visible
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-[60%]"
              src="./highlight.png"
              alt=""
            />
          </div>
        </motion.div>
      </section>
      <section className="mt-28 ">
        <motion.div
          className="container mx-auto px-4  sm:px-48 py-20 bg-blue-100"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="flex cursor-pointer flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md"
            >
              <FiCode className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trade Your Skills</h3>
              <p className="text-gray-600">
                Exchange your skills to learn new ones and grow together.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="flex cursor-pointer flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md"
            >
              <FiUsers className="text-green-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Find Project Mates</h3>
              <p className="text-gray-600">
                Collaborate with like-minded individuals on exciting projects.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col cursor-pointer items-center text-center p-6 bg-gray-50 rounded-lg shadow-md"
            >
              <FiTrendingUp className="text-purple-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Make Connections</h3>
              <p className="text-gray-600">
                Grow your network and connect with visionaries across the globe.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-12">
        <div className="sm:px-48 flex  flex-col-reverse sm:flex-row items-center justify-between">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="sm:w-3/5 px-2 sm:px-0"
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              Grow <span className="text-green-400">Together</span>
            </h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              Join a community that thrives on collaboration and mutual growth.
              <br />
              Share knowledge, build relationships, and create innovative
              solutions together.
            </p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="/signup"
              className="inline-block bg-green-500 hover:bg-green-600 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300"
            >
              Join Now
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center sm:w-2/5 "
          >
            <img
              src="./grow.png" // Replace with your image URL
              alt="Grow Together"
              className="w-full rounded-lg "
            />
          </motion.div>
        </div>
      </section>

      <section>
        <div className="flex flex-col sm:flex-row gap-4 justify-between sm:px-48 items-center py-10 sm:py-20 bg-green-500">
          <h1 className="text-3xl text-center sm:text-start sm:text-4xl font-bold text-white">
            Start your project with <br /> Proseekers today
          </h1>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex flex-row items-center gap-2 px-8 py-3 bg-white rounded-md font-semibold">
              <FcGoogle size={25} />
              Continue with Google
            </button>
            <button className=" px-10 py-3 bg-green-700 text-white rounded-md font-semibold">
              Register now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
