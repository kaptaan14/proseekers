"use client";

import React from "react";

const RadioTag = () => {
  const [projectType, setProjectType] = React.useState("");

  const handleSelection = (e: any) => {
    setProjectType(e.target.value);
  };

  return (
    <div className="flex flex-row">
      <div className="w-full">
        <div>
          <label htmlFor="description" className="block text-sm/6 font-medium ">
            Project Type
          </label>
        </div>
        <div className="mt-2 flex flex-row items-center justify-center">
          <div className="space-x-2 flex w-full">
            <label>
              <input
                defaultChecked
                className="text-sm/6 font-medium "
                type="radio"
                name="projectType"
                value="free"
                onChange={handleSelection}
              />{" "}
              Free
            </label>
            <label>
              <input
                className=""
                type="radio"
                name="projectType"
                value="paid"
                onChange={handleSelection}
              />{" "}
              Paid
            </label>
          </div>
        </div>
      </div>

      {projectType === "paid" ? (
        <div className="w-full ">
          <label className="block text-sm/6 font-medium " htmlFor="">
            Amount <span className="text-gray-200">(in months)</span>
          </label>
          <input
            min="0"
            className="w-full mt-2  block rounded-md bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            type="number"
            name=""
            id=""
          />
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default RadioTag;
