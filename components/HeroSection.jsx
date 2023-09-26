import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error("Failed!")
  }

  return res.json()
}

const HeroSection = async () => {

  const data = await getData() 

  return (
    <>
      <div className="w-full h-96 bg-slate-300 mb-24 md:mb-32">
        <div>
          <nav className="">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
              <Link href="/" className="flex items-center">
                <h1 className="text-3xl text-white pr-2">✧</h1>
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white uppercase">
                  ursula
                </span>
              </Link>
              <div className="flex items-center">
                <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-900 dark:text-white hover:underline"
                      aria-current="page"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-900 dark:text-white hover:underline"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-900 dark:text-white hover:underline"
                    >
                      Explore
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex md:order-2">
                <Link href="/auth">
                  <button
                    type="button"
                    className="text-white border border-white focus:ring-3 focus:outline-none focus:ring-sky-300 font-medium rounded-3xl text-sm px-8 py-2 text-center mr-3 md:mr-0 hover:bg-white hover:text-slate-300"
                  >
                    Join
                  </button>
                </Link>
              </div>
            </div>
          </nav>
          <div className="container mt-72 mx-auto md:px-6">
            <section className="">
              <div className="container px-6 md:px-12">
                <div className="block rounded-lg bg-[hsla(0,0%,100%,0.6)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                  <div>
                    <div>
                      <form>
                        <div className="relative mb-8">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              className="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                              />
                            </svg>
                          </div>
                          <input
                            type="search"
                            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Search..."
                            required
                          />
                        </div>
                      </form>
                    </div>
                    <div className="pl-3">
                      <span className="text-gray-600 font-lg">
                        Categories:{" "}
                      </span>
                      {data?.map((item) => (
                      <Link href={`/category/${item.id}`} key={item._id}>
                      <button
                      
                        type="button"
                        className="text-gray-500 border border-gray-500 focus:ring-3 focus:outline-none focus:ring-sky-300 font-medium rounded-3xl text-sm px-4 py-1 text-center mr-3 md:mr-3"
                      >
                        {item.title}
                      </button>
                      </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
