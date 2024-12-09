import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  bgBlack?: boolean;
  color?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, bgBlack, color }) => {
  let bg = "";
  if (bgBlack) {
    bg =
      "bg-foreground text-white hover:bg-blue-200 hover:border-blue-100  hover:ring-4 hover:ring-blue-100 hover:outline-4";
  } else {
    bg =
      "border hover:bg-blue-100 hover:border-blue-200  hover:ring-4 hover:ring-blue-100 hover:outline-4";
  }
  return (
    <button
      className={`${color} py-2 px-5 rounded-xl font-semibold ${bg} transition-all duration-300 ease-in-out `}
    >
      {children}
    </button>
  );
};

export default Button;
