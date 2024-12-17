"use client";

import React from "react";
import Button from "./Button";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      className="flex fixed top-0 bg-white backdrop-blur-3xl bg-opacity-30 flex-row w-full items-center justify-between border-b px-1 border-gray-100 z-50 shadow-sm py-5 mb-20 sm:px-20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
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
    </motion.div>
  );
};

export default Navbar;
