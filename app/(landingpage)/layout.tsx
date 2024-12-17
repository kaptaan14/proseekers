import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
const layout =  ({ children }: { children: React.ReactNode }) => {




  return (
    <>
      <div className=" ">
        <Navbar />
        <div className="min-h-screen  mt-44">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default layout;
