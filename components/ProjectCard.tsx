"use client"

import React from "react";
import SkillDiv from "./SkillDiv";
import { MdDelete } from "react-icons/md";

import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";

const ProjectCard = () => {
  const [save, setSave] = React.useState(false);

  const handleSave = () => {
    setSave(!save)
  }

  return (
    <div className="border cursor-pointer border-gray-100 hover:shadow-xl  transition-all duration-700 pt-5 px-5 pb-1 rounded-2xl">
      <div className="flex flex-row gap-3 text-start items-center">
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
          <div>
            <h1 className="font-bold text-xl">Title of the Project</h1>
          </div>
          <div>
            <p className="text-gray-200">Small description of the project</p>
          </div>
          <div>
            <p className="text-gray-200 italic">Unpaid</p>
          </div>
        </div>
      </div>

      <div className="mt-2 flex flex-row gap-2">
        <SkillDiv>C++</SkillDiv>
        <SkillDiv>React</SkillDiv>
        <SkillDiv>NextJS</SkillDiv>
      </div>

      <div className="mt-5 text-gray-200 flex flex-row justify-between">
        <div>
          <p>
            Posted by <span className="underline italic">@hiddencaptain</span>{" "}
          </p>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">
          <MdDelete className="hover:text-red-600" size={30} />
          {!save? <FaRegBookmark  onClick={handleSave} size={20} />:   <FaBookmark className="text-blue-200" onClick={handleSave} size={20} />}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
