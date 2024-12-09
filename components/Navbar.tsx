import React from "react";
import Button from "./Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between py-5 mb-20 ">
      <div>
        <h1 className="font-bold text-2xl">
          proseekers<span className="text-red-500">:</span>
        </h1>
      </div>
      <div className="flex gap-3">
        <Link href={"/login"}>
          <Button>Log In</Button>
        </Link>
        <Link href={"/signup"}>
          <Button bgBlack={true}>Sign Up</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
