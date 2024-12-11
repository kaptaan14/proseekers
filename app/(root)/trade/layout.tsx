"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold pb-5">Trade Skill</h1>
      <div className="flex flex-row gap-4 text-gray-200 mb-7">
        <Link
          href={"/trade"}
          className={`cursor-pointer pb-1 hover:text-blue-200 hover:border-gray-100 hover:border-b-2 ${
            pathname === "/trade"
              ? "border-b-2  border-gray-200 text-black hover:text-black hover:border-gray-200"
              : ""
          }  }`}
        >
          Browse All
        </Link>
        <Link
          href={"/trade/saved"}
          className={`cursor-pointer pb-1 hover:text-blue-200 hover:border-gray-100 hover:border-b-2 ${
            pathname === "/trade/saved"
              ? "border-b-2  border-gray-200 text-black hover:text-black hover:border-gray-200"
              : ""
          }  }`}
        >
          Saved
        </Link>
        <Link
          href={"/trade/hidden"}
          className={`cursor-pointer pb-1 hover:text-blue-200 hover:border-gray-100 hover:border-b-2 ${
            pathname === "/trade/hidden"
              ? "border-b-2  border-gray-200 text-black hover:text-black hover:border-gray-200"
              : ""
          }  }`}
        >
          Hidden
        </Link>
      </div>
      {children}
    </div>
  );
};

export default layout;
