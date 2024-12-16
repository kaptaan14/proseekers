"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNavbar = () => {
  const pathname = usePathname();
  return (
    <div className=" grid grid-cols-5 sm:flex fixed bg-white sm:bg-transparent items-center  bottom-0 flex-col  justify-start min-w-0 pt-1 px-1 sm:pt-10 sm:sticky sm:h-[calc(100vh-64px)] gap-2 w-full sm:top-0 ">
      <Link className="w-full" href="/home">
        <div
          className={`flex flex-col items-center  justify-center text-center gap-2 px-4 sm:px-7 py-2 rounded-lg ${
            pathname === "/home"
              ? "text-blue-500 bg-blue-50 border border-blue-500"
              : "text-gray-200 hover:bg-blue-50"
          }`}
        >
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="text-current"
          >
            <path
              d="M23.611 8.70837L12.611 0.208369C12.436 0.0732763 12.2211 0 12 0C11.7789 0 11.564 0.0732763 11.389 0.208369L0.389 8.70837C0.268036 8.80173 0.170076 8.92158 0.102642 9.0587C0.0352093 9.19582 9.63811e-05 9.34657 0 9.49937L0 22.9994C0 23.2646 0.105357 23.5189 0.292893 23.7065C0.48043 23.894 0.734784 23.9994 1 23.9994H23C23.2652 23.9994 23.5196 23.894 23.7071 23.7065C23.8946 23.5189 24 23.2646 24 22.9994V9.49937C23.9999 9.34657 23.9648 9.19582 23.8974 9.0587C23.8299 8.92158 23.732 8.80173 23.611 8.70837V8.70837ZM22 21.4994C22 21.632 21.9473 21.7592 21.8536 21.8529C21.7598 21.9467 21.6326 21.9994 21.5 21.9994H2.5C2.36739 21.9994 2.24021 21.9467 2.14645 21.8529C2.05268 21.7592 2 21.632 2 21.4994V10.2364C1.9993 10.1593 2.01644 10.083 2.0501 10.0136C2.08375 9.94423 2.133 9.88357 2.194 9.83637L11.694 2.49537C11.7816 2.42758 11.8892 2.3908 12 2.3908C12.1108 2.3908 12.2184 2.42758 12.306 2.49537L21.806 9.83637C21.867 9.88357 21.9162 9.94423 21.9499 10.0136C21.9836 10.083 22.0007 10.1593 22 10.2364V21.4994Z"
              fill="currentColor"
            ></path>
          </svg>
          <p className="text-sm leading-none">Home</p>
        </div>
      </Link>

      <Link className="w-full" href="/profile">
        <button
          className={`flex flex-col items-center justify-center text-center w-full gap-2 py-2 rounded-lg ${
            pathname === "/profile"
              ? "text-blue-500 bg-blue-50 border border-blue-500"
              : "text-gray-200 hover:bg-blue-50"
          }`}
        >
          <svg fill="none" height="26" viewBox="0 0 24 26" width="24">
            <path
              d="M23 25v-3.106a1.976 1.976 0 00-.77-1.579C20.9 19.3 17.73 17.5 12 17.5s-8.895 1.8-10.23 2.815A1.976 1.976 0 001 21.894V25M18 7A6 6 0 106 7v2a6 6 0 1012 0V7z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <path
              d="M18 6.981A5.566 5.566 0 0114 5c-1.942 2.337-4.673 2-6 2H6M8.083 17.813a4 4 0 007.834 0"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>

          <p className="text-sm leading-none">Profile</p>
        </button>
      </Link>

      <Link className="w-full" href="/projects">
        <div
          className={`flex flex-col items-center justify-center text-center gap-2 px-4 sm:px-7 py-2 rounded-lg ${
            pathname.startsWith("/projects")
              ? "text-blue-500 bg-blue-50 border border-blue-500"
              : "text-gray-200 hover:bg-blue-50"
          }`}
        >
          <svg fill="none" height="26" viewBox="0 0 16 16" width="24">
            <path
              d="M2.56684 4.23096H13.1765C14.3177 4.23096 15.2433 5.15669 15.2433 6.29921V12.2062C15.2433 13.3487 14.3177 14.2744 13.1765 14.2744H2.56684C1.42562 14.2744 0.5 13.3487 0.5 12.2062V6.29921C0.5 5.15669 1.42562 4.23096 2.56684 4.23096Z"
              stroke="currentColor"
            ></path>
            <mask fill="white" id="path-2-inside-1">
              <path
                clipRule="evenodd"
                d="M4.87891 3.90224C4.87891 2.4837 5.44618 1.33398 6.14522 1.33398H9.6019C10.3009 1.33398 10.8682 2.4837 10.8682 3.90224"
                fillRule="evenodd"
              ></path>
            </mask>
            <path
              d="M6.47891 3.90224C6.47891 3.38456 6.5858 2.9948 6.68491 2.79385C6.73437 2.69354 6.75182 2.70076 6.69421 2.75018C6.62637 2.80838 6.4365 2.93398 6.14522 2.93398V-0.266016C4.85136 -0.266016 4.12376 0.752284 3.81494 1.37847C3.45565 2.10701 3.27891 3.00138 3.27891 3.90224H6.47891ZM6.14522 2.93398H9.6019V-0.266016H6.14522V2.93398ZM9.6019 2.93398C9.31062 2.93398 9.12075 2.80838 9.05291 2.75018C8.9953 2.70076 9.01274 2.69354 9.06221 2.79385C9.16132 2.9948 9.26821 3.38456 9.26821 3.90224H12.4682C12.4682 3.00138 12.2915 2.10701 11.9322 1.37847C11.6234 0.752284 10.8958 -0.266016 9.6019 -0.266016V2.93398Z"
              fill="currentColor"
              mask="url(#path-2-inside-1)"
            ></path>
            <path
              d="M8.727 7.54053H7.01577C6.54323 7.54053 6.16016 7.92381 6.16016 8.39661C6.16016 8.86941 6.54323 9.2527 7.01577 9.2527H8.727C9.19954 9.2527 9.58262 8.86941 9.58262 8.39661C9.58262 7.92381 9.19954 7.54053 8.727 7.54053Z"
              fill="currentColor"
            ></path>
            <path d="M0.597656 11.1792H15.2643" stroke="currentColor"></path>
          </svg>

          <p className="text-sm leading-none">Projects</p>
        </div>
      </Link>

      <Link className="w-full" href="/messages">
        <div
          className={`flex flex-col items-center justify-center text-center gap-2 px-4 sm:px-7 py-2 rounded-lg ${
            pathname.startsWith("/messages")
              ? "text-blue-500 bg-blue-50 border border-blue-500"
              : "text-gray-200 hover:bg-blue-50"
          }`}
        >
          <svg fill="none" height="26" viewBox="0 0 16 16" width="24">
            <path
              d="M8 0.557129C3.58867 0.557129 0 3.5398 0 7.20713C0.00988202 8.04845 0.196406 8.87832 0.547486 9.64296C0.898567 10.4076 1.40637 11.0899 2.038 11.6458L0.620667 14.4751C0.558582 14.5988 0.53655 14.7388 0.557626 14.8756C0.578702 15.0124 0.641842 15.1393 0.738283 15.2386C0.834724 15.3379 0.959684 15.4047 1.09582 15.4298C1.23196 15.4548 1.37252 15.4369 1.498 15.3785L5.48533 13.5225C6.30487 13.7455 7.15064 13.8577 8 13.8558C12.4113 13.8558 16 10.8725 16 7.2058C16 3.53913 12.4113 0.557129 8 0.557129ZM8 12.5238C7.19552 12.5255 6.39523 12.4078 5.62533 12.1745C5.46799 12.1265 5.29845 12.1383 5.14933 12.2078L3.10267 13.1605C3.07128 13.1751 3.03611 13.1796 3.00204 13.1733C2.96798 13.1671 2.93671 13.1504 2.91259 13.1255C2.88846 13.1006 2.87268 13.0689 2.86744 13.0347C2.8622 13.0004 2.86775 12.9654 2.88333 12.9345L3.46267 11.7778C3.53093 11.6414 3.55036 11.4857 3.51773 11.3368C3.48509 11.1878 3.40236 11.0545 3.28333 10.9591C2.69392 10.5236 2.21182 9.9592 1.87386 9.30893C1.5359 8.65867 1.35102 7.93976 1.33333 7.20713C1.33333 4.2738 4.324 1.89046 8 1.89046C11.676 1.89046 14.6667 4.27513 14.6667 7.20713C14.6667 10.1391 11.676 12.5238 8 12.5238Z"
              fill="currentColor"
            ></path>
          </svg>

          <p className="text-sm leading-none">Messages</p>
        </div>
      </Link>

      <Link className="w-full" href="/trade">
        <div
          className={`flex flex-col items-center justify-center text-center gap-2 px-7 py-2 rounded-lg ${
            pathname === "/trade"
              ? "text-blue-500 bg-blue-50 border border-blue-500"
              : "text-gray-200 hover:bg-blue-50"
          }`}
        >
          <svg fill="none" height="26" viewBox="0 0 24 26" width="24">
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M22 8.5C22 12.09 19.09 15 15.5 15C15.33 15 15.15 14.99 14.98 14.98C14.73 11.81 12.19 9.26999 9.01999 9.01999C9.00999 8.84999 9 8.67 9 8.5C9 4.91 11.91 2 15.5 2C19.09 2 22 4.91 22 8.5Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>{" "}
              <path
                d="M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.84999 9.00999 9.01999 9.01999C12.19 9.26999 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>{" "}
              <path
                d="M5.59 2H3C2.45 2 2 2.45 2 3V5.59C2 6.48 3.07999 6.92999 3.70999 6.29999L6.29999 3.70999C6.91999 3.07999 6.48 2 5.59 2Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>{" "}
              <path
                d="M18.41 22H21C21.55 22 22 21.55 22 21V18.41C22 17.52 20.92 17.07 20.29 17.7L17.7 20.29C17.08 20.92 17.52 22 18.41 22Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>{" "}
            </g>
          </svg>

          <p className="text-sm leading-none">Trade</p>
        </div>
      </Link>
    </div>
  );
};

export default SideNavbar;
