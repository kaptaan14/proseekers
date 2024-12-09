import MessageCard from "@/components/MessageCard";
import React from "react";

const page = () => {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold pb-5">Messages</h1>
      <div className="flex flex-row gap-4 text-gray-200 mb-7">
        <div className="border-b-2 border-gray-200 pb-1 cursor-pointer">
          Ongoing
        </div>
        <div className="pb-1 cursor-pointer">Archived</div>
      </div>
      <div className="flex flex-col gap-2">
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </div>
    </div>
  );
};

export default page;
