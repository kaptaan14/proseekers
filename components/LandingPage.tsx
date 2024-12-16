import React from "react";
import Button from "./Button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="text-center flex flex-col gap-6 ">
      <div>
        <h1 className="font-bold text-2xl cursor-pointer">
          proseekers<span className="text-red-500 center">:</span>
        </h1>
      </div>
      <h1 className="text-3xl sm:text-5xl font-bold leading-snug ">
        Create your{" "}
        <span className="text-blue-200">
          dream project <br /> and find{" "}
        </span>{" "}
        <span className="text-blue-200">like-minded</span> individuals.
      </h1>
      <p className="text-gray-200">
        Collaborate with talented individuals to explore unique <br />{" "}
        opportunities and create impactful projects that inspire meaningful
        growth.
      </p>
      <Link href={"/signup"}>
        <Button bgBlack={true}>Join Community</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
