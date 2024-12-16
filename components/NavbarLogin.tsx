import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import Link from "next/link";
import { IoIosLogOut } from "react-icons/io";
import { auth, signOut } from "../auth";

const NavbarLogin = async () => {
  const session = await auth();
  const imgUrl = session?.user?.image || undefined;

  return (
    <div className="flex  bg-white shadow-sm flex-row items-center justify-between relative px-2 sm:px-10 py-3  border-b border-gray-100">
      <div>
        <h1 className="font-bold text-2xl cursor-pointer">
          <Link href="/">
            proseekers<span className="text-red-500">:</span>
          </Link>
        </h1>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <button className="hover:text-blue-200 hover:bg-blue-100 p-2 rounded-full transition-all duration-200 group relative">
          <IoSearchSharp size={20} />
          <div className="absolute flex flex-col gap-2 text-white top-10 backdrop-blur-sm bg-black left-1/2 invisible group-hover:visible -translate-x-1/2 z-10 text-sm p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Search</span>
          </div>
        </button>
        <button className="hover:text-blue-200 hover:bg-blue-100 p-2 rounded-full transition-all duration-200 group relative">
          <FaRegBell size={18} />
          <div className="absolute flex flex-col gap-2 text-white top-10 backdrop-blur-sm bg-black left-1/2 invisible group-hover:visible -translate-x-1/2 z-10 text-sm p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Notifications</span>
          </div>
        </button>
        <div className="hover:text-blue-200 transition-all duration-200 relative group">
          <IoMdAddCircle size={25} />

          <div className="absolute top-10 left-1/2 -translate-x-1/2 text-sm w-32 bg-black backdrop-blur-sm p-2 rounded shadow-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
            <Link
              href="/post-project"
              className="block p-2 text-center w-full text-white hover:text-blue-200 transition-colors duration-200"
            >
              Post a Project
            </Link>
            <Link
              href="/post-trade"
              className="block text-center p-2 w-full text-white hover:text-blue-200 transition-colors duration-200"
            >
              Post a Trade
            </Link>
          </div>
        </div>
        <div className="relative group">
          <div className="border w-9 h-9 rounded-full cursor-pointer overflow-hidden">
            <Link href={"/profile"}>
              <img src={imgUrl} alt="User avatar" />
            </Link>
          </div>
          <div className="absolute top-10 right-0 sm:-right-2/3 w-32 bg-black backdrop-blur-sm p-2 rounded shadow-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
            <Link
              href="/profile"
              className="block p-2 text-center w-full text-gray-200 hover:text-blue-200 hover:underline transition-colors duration-200"
            >
              View Profile
            </Link>
            <form
              action={async () => {
                "use server";

                await signOut();
              }}
            >
              <button
                type="submit"
                className="flex flex-row items-center gap-1 justify-center text-center p-2 w-full text-red-500 hover:text-red-600  transition-colors duration-200"
              >
                <IoIosLogOut />
                Logout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarLogin;
