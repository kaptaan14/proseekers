import React from "react";

const TradeForm = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center  px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center justify-center">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight ">
          Post your Trade
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6 mb-10">
          <div>
            <label htmlFor="title" className="block text-sm/6 font-medium ">
              What do you want to learn?
            </label>
            <div className="mt-2">
              <input
                id="skill"
                name="skill"
                type="text"
                required
                placeholder="Technology/Skill"
                autoComplete="skill"
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
                What skill/technology do you trade with?
              </label>
            </div>
            <div className="mt-2">
              <input
                id="skill"
                name="skill"
                type="text"
                required
                placeholder="Technology/Skill"
                autoComplete="skill"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
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

export default TradeForm;
