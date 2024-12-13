import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default async function SignUp() {
  return (
    <div className="flex   min-h-screen   flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl">
          proseekers<span className="text-red-500">:</span>
        </h1>
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight ">
          Sign up to create account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6 mb-10">
          <div className="flex flex-row gap-1 w-full">
            <div className="w-[50%]">
              <label htmlFor="email" className="block text-sm/6 font-medium ">
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  required
                  placeholder="Jhon"
                  autoComplete="firstname"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="w-[50%]">
              <label htmlFor="email" className="block text-sm/6 font-medium ">
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  required
                  placeholder="Doe"
                  autoComplete="firstname"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium ">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jhondoe@example.com"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium "
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create account
            </button>
          </div>
        </form>

        <div className="flex items-center w-full">
          <div className="flex-grow border-t border-gray-300"></div>

          <span className="px-4 text-gray-600">or</span>

          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="mt-10 w-full flex flex-row gap-2 items-center justify-center">
          <button className="p-1 rounded-full border border-gray-100">
            <FcGoogle size={25} />
          </button>
          <button className="p-1 rounded-full border border-gray-100">
            <FaGithub size={25} />
          </button>
        </div>
        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Already have an account?{"  "}
          <Link
            href={"/login"}
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
