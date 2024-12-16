import React from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { MdOutlineReport } from "react-icons/md";

const TradeCard = () => {
  return (
    <div className="border w-full flex flex-col gap-4 cursor-pointer bg-white border-gray-100 hover:shadow-xl transition-all duration-700 px-4 pt-4 pb-1 rounded-md border-b-[3px] ">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-3 text-start items-start">
          {/* Project Image  */}
          <div className="border w-20 h-20 border-gray-100  rounded-2xl p-2 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/profile.png"
              alt=""
            />
          </div>

          {/* Title description  */}
          <div>
            <div className="flex flex-row items-start">
              <h1 className="font-bold text-xl overflow-hidden">Jhon Doe</h1>
            </div>
            <div>
              <p className="text-gray-200">
                Wants to learn{" "}
                <span className="font-bold text-black italic">
                  Machine Learning
                </span>
              </p>
            </div>
            <div>
              <p className="text-gray-200">
                Trade with{" "}
                <span className="font-bold text-black italic">
                  React, NextJS
                </span>
              </p>
            </div>
          </div>
        </div>
        <FaRegBookmark size={20} />
      </div>
      <div className="flex flex-row gap-3">
        <button className="bg-blue-200 text-white px-0 sm:px-3 py-2 rounded-full  hover:shadow-lg hover:shadow-blue-200 transition-all duration-500  w-full">
          Negotiate
        </button>
        <button className="bg-green-400 text-white px-0 sm:px-3 py-2 rounded-full hover:shadow-lg hover:shadow-green-400 transition-all duration-500 w-full">
          Accept Trade
        </button>
      </div>
      <div className="flex justify-end items-center">
        <MdOutlineReport className="text-gray-100" />
        <span className="italic text-gray-100">Report</span>
      </div>
    </div>
  );
};

export default TradeCard;
