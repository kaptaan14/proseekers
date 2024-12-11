import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
const layout =  ({ children }: { children: React.ReactNode }) => {




  return (
    <>
      <div className="max-w-screen-xl mx-auto px-2">
        <Navbar />
        <div className="min-h-screen">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default layout;
