import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Profile from "@/public/profile.png";

const MessageCard = () => {
  return (
    <div className="border group cursor-pointer border-gray-100  transition-all duration-700 p-4 rounded-2xl">
      <div className="flex flex-row gap-3 text-start items-center">
        {/* Project Image  */}
        <div className="w-20 h-20 border border-gray-100  rounded-2xl overflow-hidden">
          <Image objectFit="cover" src={Profile} alt="" />
        </div>

        {/* Title description  */}
        <div className="w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <h1 className="font-bold text-xl hover:underline">Jhon Doe</h1>
            <IoIosArrowForward
              size={20}
              className="group-hover:text-blue-200"
            />
          </div>
          <div>
            <p className="text-gray-200 truncate max-w-[16rem] sm:max-w-[24rem]">
              Hello Alice! Nice to meet you. How are you?
            </p>
          </div>
          <div>
            <p className="text-gray-200 italic">2 hours ago.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
