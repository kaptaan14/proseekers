"use client";

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoMdSend } from "react-icons/io";

const Modal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null;

  if (isOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className={`bg-white w-full h-[90%] rounded-t-2xl overflow-auto transform transition-transform duration-[1200ms] delay-[300ms] ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <div className="hidden sm:block p-5">
          <button
            onClick={onClose}
            className=" bg-gray-100 rounded-full text-gray-500 p-2 hover:text-black float-right"
          >
            <RxCross2 />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

const MessageCard = ({ isOpen, onClose, children }: any) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      onClick={handleModalOpen}
      className="border group cursor-pointer border-gray-100  transition-all duration-700 p-4 rounded-2xl"
    >
      <div className="flex flex-row gap-3 text-start items-center">
        {/* Project Image  */}
        <div className="w-20 h-20 border border-gray-100  rounded-2xl overflow-hidden">
          <img className="w-20 h-20 object-cover" src="/profile.png" alt="" />
        </div>

        {/* Title description  */}
        <div className="w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <h1 className="font-bold text-xl hover:underline">Jhon Doe</h1>
            <IoIosArrowForward
              size={20}
              className="group-hover:text-blue-200"
            />
          </div>
          <div>
            <p className="text-gray-200 truncate max-w-[16rem] sm:max-w-[24rem]">
              Hello Alice! Nice to meet you. How are you?
            </p>
          </div>
          <div>
            <p className="text-gray-200 italic">2 hours ago.</p>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <div className="flex flex-col justify-between h-full px-4 sm:px-52">
          <div className="flex flex-col p-2  rounded-2xl bg-blue-100 border  w-full h-full mt-5 sm:mt-10 items-start justify-between">
            <div className="flex flex-row pb-1  gap-2  justify-center ">
              <div className="border w-12 h-12 border-gray-200 rounded-2xl p-2 overflow-hidden cursor-pointer">
                <img
                  className="w-full h-full object-cover"
                  src="/profile.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl w-full font-semibold">Ashish Singh</h2>
                <p>Project51</p>
              </div>
            </div>
            <div className="w-full p-2 h-full border-t">Hello from there!</div>
            <div className="w-full bg-white flex flex-row items-center justify-between rounded-full p-2 border">
              <input
                className="bg-white rounded-full outline-none w-full p-6 h-14"
                type="text"
                name=""
                id=""
                placeholder="Type a message..."
              />
              <IoMdSend className="hover:text-blue-200" size={35} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MessageCard;
