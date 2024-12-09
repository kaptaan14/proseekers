import HomeComponents from "@/components/HomeComponents";
import ProjectCard from "@/components/ProjectCard";
import TradeCard from "@/components/TradeCard";
import React from "react";

const page = () => {
  return (
    <div className="mb-10">
      <HomeComponents />
      <div>
        <h1 className="py-10 font-bold">Recommended projects for you</h1>
        <div className="flex flex-col gap-5">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="text-center p-10">Show more</div>

        <h1 className="py-10 font-bold">Recommended Skills for you</h1>

        <div className="grid grid-cols-2 gap-4 ">
          <TradeCard />
          <TradeCard />
          <TradeCard />
          <TradeCard />
          <TradeCard />
          <TradeCard />
        </div>

        <div className="text-center p-10">Show more</div>
      </div>
    </div>
  );
};

export default page;