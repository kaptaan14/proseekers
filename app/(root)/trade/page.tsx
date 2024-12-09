import TradeCard from "@/components/TradeCard";
import React from "react";

const page = () => {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold pb-5">Trade Skill</h1>
      <div className="flex flex-row gap-4 text-gray-200 mb-7">
        <div className="border-b-2 border-gray-200 pb-1 cursor-pointer">
          Browse all
        </div>
        <div className="pb-1 cursor-pointer">Saved</div>
        <div className="pb-1 cursor-pointer">Hidden</div>
      </div>
      <div className="flex flex-wrap gap-1">
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />
        <TradeCard />


        
      </div>
    </div>
  );
};

export default page;
