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
    <div>
      <NavbarLogin />

      <div className="flex flex-row gap-20">
        <div className="sm:sticky sm:top-0  sm:h-screen bg-white p-1 sm:p-0 fixed bottom-0">
          <SideNavbar />
        </div>

        <div className="flex-1 flex justify-start">
          <div className="w-full max-w-6xl px-2 sm:px-0 ">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
