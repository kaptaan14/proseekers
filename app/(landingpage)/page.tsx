import LandingPage from "@/components/LandingPage";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect("/home");
  } else {
    return (
      <div>
        <LandingPage />
      </div>
    );
  }
}
