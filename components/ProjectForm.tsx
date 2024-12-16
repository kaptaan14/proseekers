import Link from "next/link";
import React from "react";
import RadioTag from "./RadioTag";
import TagInput from "./TagInput";

const ProjectForm = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center  px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center justify-center">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight ">
          Post your Project
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6 mb-10">
          <div>
            <label htmlFor="title" className="block text-sm/6 font-medium ">
              Title
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="text"
                required
                placeholder="Title of your Project"
                autoComplete="title"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="tagline" className="block text-sm/6 font-medium ">
              Project Tagline
            </label>
            <div className="mt-2">
              <input
                id="tagline"
                name="tagline"
                type="text"
                required
                placeholder="Tagline for your project"
                autoComplete="taghline"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="description"
                className="block text-sm/6 font-medium "
              >
                Description
              </label>
            </div>
            <div className="mt-2">
              <textarea
                id="description"
                name="description"
                // type="textarea"
                placeholder="Description of your project in details"
                required
                autoComplete="current-description"
                className="w-full min-h-[10rem] max-h-[10rem] rounded-md bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <RadioTag />

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="description"
                className="block text-sm/6 font-medium "
              >
                Duration <span className="text-gray-200">(in months)</span>
              </label>
            </div>

            <div className="mt-2">
              <div>
                <input
                  min="0"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  type="number"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm/6 font-medium "
            >
              Technologies Used
            </label>
            <TagInput />
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="mt-10 w-full flex flex-row gap-2 items-center justify-center">
          <button className="p-1 rounded-full border border-gray-100"></button>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
