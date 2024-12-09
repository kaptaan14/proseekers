import React from "react";

import { auth } from "../auth";

const NavbarLogin = async () => {
  const session = await auth();
  const imgUrl = session?.user?.image || undefined
  console.log(session)
  return (
    <div className="flex flex-row items-center justify-between px-10 py-3 mb-10 border-b border-gray-100">
      <div>
        <h1 className="font-bold text-2xl">
          proseekers<span className="text-red-500">:</span>
        </h1>
      </div>
      <div className="border w-9 h-9  rounded-full  cursor-pointer overflow-hidden">
        <img src={imgUrl} alt="" />
      </div>
    </div>
  );
};

export default NavbarLogin;
