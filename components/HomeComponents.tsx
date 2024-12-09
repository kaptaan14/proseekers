import React from "react";
import Button from "./Button";

const HomeComponents = () => {
  return (
    <>
      <div className="flex flex-row gap-4">
        <div className="border flex flex-row items-center justify-between gap-10 cursor-pointer p-4 border-gray-100 hover:shadow-xl  transition-all duration-700  rounded-2xl ">
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="font-semibold text-xl">Welcome to Proseekers</h1>
            </div>
            <div>
              <p className="text-sm text-gray-200">
                Find your project to work which enhance your skills <br />
                and provide exposure to get a bright future
              </p>
            </div>
            <div>
              <button className="bg-blue-200 px-4 py-2 text-xl text-white rounded-full">
                Find your project
              </button>
            </div>
          </div>

          <img className="w-40 h-40" src="/hands.svg" alt="" />
        </div>

        <div className="border flex flex-row items-center justify-between cursor-pointer p-4 border-gray-100 hover:shadow-xl  transition-all duration-700 rounded-2xl ">
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="font-semibold text-xl">Trade your skills</h1>
            </div>
            <div>
              <p className="text-sm text-gray-200">
                Share your skill with someone <br /> and learn their expertise
              </p>
            </div>
            <div>
              <button className="bg-blue-200 px-4 py-2 text-xl text-white rounded-full">
                Trade Skills
              </button>
            </div>
          </div>

          <img className="w-40 h-40" src="/klop.svg" alt="" />
        </div>

        <div className="border border-gray-100 rounded-2xl p-5">
          <div className="flex flex-row gap-2 pb-2">
            <div className="bg-blue-200 w-12 h-12 rounded-full border overflow-hidden p-1 flex flex-row">
              <img  src="/profile.png" alt="" />
            </div>
            <div className="">
              <h1 className="font-bold max-w-screen-sm overflow-hidden">Ashish Singh</h1>
              <p className="text-gray-200">Student</p>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-1 py-2">
            <div className="flex justify-between text-sm text-gray-200">
              <h1>Friends</h1>
              <p>8</p>
            </div>
            <div className="flex justify-between text-sm text-gray-200">
              <h1>Projects</h1>
              <p>2</p>
            </div>
            <div className="flex justify-between text-sm text-gray-200">
              <h1>Trades</h1>
              <p>1</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default HomeComponents;
