import HomeComponents from "@/components/HomeComponents";
import ProjectCard from "@/components/ProjectCard";
import TradeCard from "@/components/TradeCard";
import React from "react";

const page = () => {
  return (
    <div className="mb-20 sm:mb-10 ">
      <HomeComponents />
      <div>
        <h1 className="pb-5 font-bold">Recommended Projects for you</h1>
        <div className="flex flex-col gap-5">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>

        <div className="flex items-center w-full">
          <div className="flex-grow border-t border-gray-300"></div>

          <div className="text-center py-10 px-4">Show more</div>

          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <h1 className="py-10 font-bold">Recommended Skills for you</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <TradeCard />
          <TradeCard />
          <TradeCard />
          <TradeCard />
          <TradeCard />
          <TradeCard />
        </div>

        <div className="flex items-center w-full">
          <div className="flex-grow border-t border-gray-300"></div>

          <div className="text-center py-10 px-4">Show more</div>

          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
