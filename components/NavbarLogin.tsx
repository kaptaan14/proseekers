import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

import { auth } from "../auth";
import Link from "next/link";

const NavbarLogin = async () => {
  const session = await auth();
  const imgUrl = session?.user?.image || undefined;

  return (
    <div className="flex flex-row items-center justify-between  relative px-2 sm:px-10 py-3 mb-4 sm:mb-10 border-b border-gray-100">
      <div>
        <h1 className="font-bold text-2xl cursor-pointer">
          <Link href="/">
            proseekers<span className="text-red-500">:</span>
          </Link>
        </h1>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <button className="hover:text-blue-200 transition-all duration-200 group relative">
          <IoSearchSharp size={25} />
          <div className="absolute flex flex-col gap-2 top-8  backdrop-blur-sm   bg-gray-100 left-1/2 -translate-x-1/2  z-10 text-sm p-2 rounded shadow-lg opacity-0  group-hover:opacity-100 transition-opacity duration-300">
            <span>Search</span>
          </div>
        </button>
        <button className="hover:text-blue-200 transition-all duration-200 group relative">
          <FaRegBell size={23} />
          <div className="absolute flex flex-col gap-2 top-8  backdrop-blur-sm  bg-gray-100 left-1/2 -translate-x-1/2  z-10 text-sm p-2 rounded shadow-lg opacity-0  group-hover:opacity-100 transition-opacity duration-300">
            <span>Notifications</span>
          </div>
        </button>
        <button className="hover:text-blue-200 transition-all duration-200 relative group">
          <IoMdAddCircle size={25} />
          <div className="absolute flex flex-col gap-2 top-8 w-32 backdrop-blur-sm    bg-gray-100 left-1/2 -translate-x-1/2  z-10 text-sm p-2 rounded shadow-lg opacity-0  group-hover:opacity-100 transition-opacity duration-300">
            <button className="p-2 w-full rounded text-gray-200 hover:text-blue-200">
              Post a Project
            </button>
            <button className="p-2 w-full rounded text-gray-200 hover:text-blue-200">
              Post a Trade
            </button>
          </div>
        </button>
        <div className=" relative group">
          <div className="border w-9 h-9  rounded-full  cursor-pointer overflow-hidden">
            <img src={imgUrl} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarLogin;
