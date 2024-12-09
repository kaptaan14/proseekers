import React from "react";
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold pb-5">Your Profile</h1>
      <div className="mb-10 border border-gray-100 min-h-screen rounded-xl p-5">
        <div className="flex flex-row gap-2 items-center">
          <div className="overflow-hidden w-12 h-12 bg-blue-200 flex items-center justify-center p-1 rounded-full">
            <img className="" src="/profile.png" alt="" />
          </div>
          <div className="flex flex-row justify-between w-full">
            <div>
              <h1 className="text-xl font-bold uppercase">Ashish Singh</h1>
              <p>Student</p>
            </div>
            <div className="flex flex-row gap-3 items-center justify-center">
              <FaGithub size={20} />
              <button className="bg-gray-100 px-2 rounded-md text-gray-200">
                Website
              </button>
              <button className="bg-gray-100 px-2 rounded-md text-gray-200">
                Resume
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1>Experience</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
