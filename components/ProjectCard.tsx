"use client";

import React from "react";
import SkillDiv from "./SkillDiv";
import { MdDelete } from "react-icons/md";

import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const ProjectCard = () => {
  const [save, setSave] = React.useState(false);

  const handleSave = () => {
    setSave(!save);
  };

  return (
    <div className="border hover:scale-[1.02] hover:shadow-sm border-gray-100 bg-white  transition-all duration-700 pt-5 px-5 pb-2 rounded-2xl">
      <div className="flex group flex-row gap-3 text-start items-center justify-start">
        {/* Project Image  */}
        <div className="border w-20 h-20 border-gray-100  rounded-2xl p-2 overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover"
            src="/profile.png"
            alt=""
          />
        </div>

        {/* Title description  */}
        <div className="cursor-pointer  w-full">
          <div className="flex flex-row items-center justify-between">
            <h1 className="font-bold text-xl hover:underline">
              Title of the Project
            </h1>

            <IoIosArrowForward
              size={20}
              className="group-hover:text-blue-200"
            />
          </div>
          <div>
            <p className="text-gray-200 truncate max-w-[16rem] sm:max-w-[24rem]">
              Small description of the project Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Sequi quo beatae itaque odio et
              eligendi soluta inventore accusamus, magnam excepturi.
            </p>
          </div>
          <div>
            <p className="text-gray-200 italic">Unpaid</p>
          </div>
        </div>
      </div>

      <div className="mt-2 flex flex-row gap-2 overflow-scroll scroll-container max-w-[22rem] sm:max-w-full">
        <SkillDiv>C++</SkillDiv>
        <SkillDiv>React</SkillDiv>
        <SkillDiv>NextJS</SkillDiv>
        <SkillDiv>NextJS</SkillDiv>
        <SkillDiv>NextJS</SkillDiv>
      </div>

      <div className="mt-5 text-gray-200 flex flex-row justify-between">
        <div>
          <p>
            Posted by{" "}
            <span className="underline italic cursor-pointer">
              @hiddencaptain
            </span>{" "}
          </p>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">
          <MdDelete className="hover:text-red-600 cursor-pointer" size={30} />
          {!save ? (
            <FaRegBookmark
              className="cursor-pointer"
              onClick={handleSave}
              size={22}
            />
          ) : (
            <FaBookmark
              className="text-blue-200 cursor-pointer"
              onClick={handleSave}
              size={22}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
