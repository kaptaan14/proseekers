"use client";

import React, { useState } from "react";
import SkillDiv from "./SkillDiv";
import { IoIosArrowForward } from "react-icons/io";
import ProjectView from "./ProjectView";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import Project from "@/public/profile.png";

const ProjectCard = () => {
  const [open, setOpen] = React.useState(false);

  const [saved, setSaved] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const toggleSave = () => {
    setSaved(!saved);
  };

  return (
    <div>
      <div
        className={`border border-b-[3px] rounded-md border-gray-100 bg-white transition-all duration-700 pt-5 px-5 pb-2 `}
      >
        <div
          onClick={toggleOpen}
          className="flex group flex-row gap-3 text-start items-center justify-start"
        >
          {/* Project Image */}
          <div className="border w-20 h-20 border-gray-100 rounded-2xl p-2 overflow-hidden cursor-pointer">
            <Image objectFit="cover" src={Project} alt="" />
          </div>

          {/* Title description */}
          <div className="cursor-pointer w-full">
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
                Tagline of the project
              </p>
            </div>
            <div>
              <p className="text-gray-200 italic">Posted Yesterday</p>
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

        <div className="flex flex-col sm:flex-row justify-between py-2 px-4 my-2 border border-gray-100 hover:border-gray-200">
          <div className="flex  flex-col sm:flex-row sm:items-center  sm:gap-4">
            <h1 className="font-semibold">Frontend Engineer Vella hai</h1>
            <div className="flex flex-row sm:items-center gap-1 mb-2 sm:mb-0">
              <div className="flex flex-row items-center">
                <p className="text-gray-200 text-sm text-start">
                  ₹20000 - ₹50000
                </p>
                <p className="text-gray-200 ">⦁</p>
                <p className="text-gray-200 text-sm">No equity</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <button
              onClick={toggleSave}
              className="border font-semibold hover:border-blue-200 hover:bg-blue-100 rounded-md py-1 text-sm px-2"
            >
              {saved ? "Save" : "Remove"}
            </button>
            <Link
              href={"/projects/project/23"}
              className="border w-full sm:max-w-none text-center font-semibold hover:border-blue-200 hover:bg-blue-200 bg-black text-white rounded-md py-1 text-sm px-2"
            >
              Apply
            </Link>
          </div>
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
        </div>
      </div>
      {/* block h-full max-h-full w-full max-w-full left-0 right-0 bottom-0 transform-none */}
      {open && (
        <div className="fixed top-0 bg-black bg-opacity-70 pt-20 left-0 right-0 bottom-0 cursor-pointer z-50 ">
          <div
            className={`block h-full bg-white px-2 rounded-t-3xl  max-h-full w-full max-w-full left-0 right-0 bottom-0n overflow-y-scroll transform-none"
            }`}
          >
            <button
              className="fixed bg-gray-100 bg-opacity-40 p-1 rounded-full mt-20 top-5 right-5 text-gray-200 hover:text-black font-bold text-xl"
              onClick={toggleOpen}
            >
              <IoMdClose />
            </button>
            <div className="max-w-screen-lg mx-auto py-10">
              <ProjectView />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
