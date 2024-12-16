import NavbarLogin from "@/components/NavbarLogin";
import SideNavbar from "@/components/SideNavbar";
import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="">
      <NavbarLogin />

      <div className="sm:grid sm:grid-cols-[96px_1fr_96px] sm:justify-items-center w-full sm:mx-auto sm:gap-[32px] ">
        <SideNavbar />

        <div className="w-full mb-16 px-2 sm:px-0  max-w-[1136px] pt-10">{children}</div>
      </div>
    </div>
  );
};

export default layout;
