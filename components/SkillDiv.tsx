import React from "react";

const SkillDiv = ({ children }: { children: React.ReactNode }) => {
  return <p className="bg-green-100 py-1 px-2 rounded-full text-sm">{children}</p>;
};

export default SkillDiv;
