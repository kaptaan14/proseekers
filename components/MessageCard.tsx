import React from "react";

const MessageCard = () => {
  return (
    <div className="border cursor-pointer border-gray-100  transition-all duration-700 p-4 rounded-2xl">
      <div className="flex flex-row gap-3 text-start items-center">
        {/* Project Image  */}
        <div className="border w-20 h-20 border-gray-100  rounded-2xl p-2 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/profile.png"
            alt=""
          />
        </div>

        {/* Title description  */}
        <div>
          <div>
            <h1 className="font-bold text-xl">Jhon Doe</h1>
          </div>
          <div>
            <p className="text-gray-200">Hello Alice! Nice to meet you. How are you?</p>
          </div>
          <div>
            <p className="text-gray-200 italic">2 hours ago.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
