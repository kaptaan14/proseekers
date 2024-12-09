import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

import { auth } from "../auth";
import Link from "next/link";

const NavbarLogin = async () => {
  const session = await auth();
  const imgUrl = session?.user?.image || undefined;

  return (
    <div className="flex flex-row items-center justify-between px-2 sm:px-10 py-3 mb-4 sm:mb-10 border-b border-gray-100">
      <div>
        <h1 className="font-bold text-2xl cursor-pointer">
          <Link href="/">
            proseekers<span className="text-red-500">:</span>
          </Link>
        </h1>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <button className="hover:text-blue-200 transition-all duration-200">
          <IoSearchSharp size={25} />
        </button>
        <button className="hover:text-blue-200 transition-all duration-200">
          <FaRegBell size={23} />
        </button>
        <button className="hover:text-blue-200 transition-all duration-200">
          <IoMdAddCircle size={25}/>
        </button>
        <div className="border w-9 h-9  rounded-full  cursor-pointer overflow-hidden">
          <img src={imgUrl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavbarLogin;
