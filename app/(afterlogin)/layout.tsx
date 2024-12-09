import Footer from "@/components/Footer";
import NavbarLogin from "@/components/NavbarLogin";
import SideNavbar from "@/components/SideNavbar";
import React from "react";
import { auth } from "@/auth";
import { Session } from "inspector/promises";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: React.ReactNode }) => {

  const session = await auth();

  if(!session){
    redirect('/')
  }


  return (
    <div>
      <NavbarLogin />

      <div className="flex flex-row gap-20">
        <div className="sticky top-0 h-screen">
          <SideNavbar />
        </div>

        <div className="flex-1 flex justify-start">
          <div className="w-full max-w-[1135px]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
