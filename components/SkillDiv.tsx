import React from "react";

const SkillDiv = ({ children }: { children: React.ReactNode }) => {
  return <p className="bg-green-100 py-1 px-2 text-green-800 font-semibold rounded-md text-[10px]">{children}</p>;
};

export default SkillDiv;
