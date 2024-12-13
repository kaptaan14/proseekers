import SignIn from "@/components/SignIn";
import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return <SignIn />;
};

export default page;
