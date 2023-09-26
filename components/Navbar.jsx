import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link href="/" className="flex items-center">
            <h1 className="text-3xl pr-2">✧</h1>
            <span className="self-center text-2xl font-semibold whitespace-nowrap uppercase">
              ursula
            </span>
          </Link>
          <div className="">
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div>
                <input
                  type="search"
                  className="block min-w-full p-2 pl-8 text-sm text-gray-900 border border-gray-400 rounded-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search..."
                  required
                />
              </div>
            </form>
          </div>
          <div className="flex items-center">
            <Link href="/auth">
              <button
                type="button"
                className="border border-gray-800 focus:ring-3 focus:outline-none focus:ring-sky-300 font-medium rounded-3xl text-sm px-8 py-2 text-center mr-3 md:mr-0 hover:bg-gray-800 hover:text-white"
              >
                Join
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <nav className="border-y  border-gray-400">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <a href="#" className="text-gray-900  hover:underline">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:underline">
                  Photography
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900  hover:underline">
                  Illustration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900  hover:underline">
                  Logo Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900  hover:underline">
                  Logo Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900  hover:underline">
                  Logo Design
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
