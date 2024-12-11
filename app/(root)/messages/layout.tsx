"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="mb-40 sm:mb-10">
      <h1 className="text-4xl font-bold pb-5">Messages</h1>
      <div className="flex flex-row gap-4 text-gray-200 mb-7">
        <Link
          href={"/messages"}
          className={`cursor-pointer pb-1 hover:text-blue-200 hover:border-gray-100 hover:border-b-2 ${
            pathname === "/messages"
              ? "border-b-2  border-gray-200 text-black hover:text-black hover:border-gray-200"
              : ""
          }  }`}
        >
          Ongoing
        </Link>
        <Link
          href={"/messages/archived"}
          className={`cursor-pointer pb-1 hover:text-blue-200 hover:border-gray-100 hover:border-b-2 ${
            pathname === "/messages/archived"
              ? "border-b-2  border-gray-200 text-black hover:text-black hover:border-gray-200"
              : ""
          }  }`}
        >
          Archived
        </Link>
      </div>
      {children}
    </div>
  );
};

export default layout;
