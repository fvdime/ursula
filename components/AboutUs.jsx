import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 my-8 bg-gray-50 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <div className="max-w-full">
            <h1 className="font-bold text-3xl my-4">
              The best part? EVERYTHING
            </h1>
            <div className="p-5">
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-800 ">
                Noteworthy technology
              </h5>
              <p className="mb-3 text-gray-500">
                <span className="text-gray-900 text-2xl mr-2">❀</span>Here are
                the biggest enterprise technology acquisitions of 2021 so far,
                in reverse chronological order.
              </p>
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-800 ">
                Noteworthy technology
              </h5>
              <p className="mb-3 text-gray-500">
                <span className="text-gray-900 text-2xl mr-2">❀</span>Here are
                the biggest enterprise technology acquisitions of 2021 so far,
                in reverse chronological order.
              </p>
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-800 ">
                Noteworthy technology
              </h5>
              <p className="mb-3 text-gray-500">
                <span className="text-gray-900 text-2xl mr-2">❀</span>Here are
                the biggest enterprise technology acquisitions of 2021 so far,
                in reverse chronological order.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-2">
            <div className="border border-lime-500 bg-lime-500 py-16 rounded-2xl">
              <h1 className="text-8xl text-white text-center">✧</h1>
            </div>
            <div className="flex flex-row justify-center items-center">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                odit, aperiam quos nobis laudantium sunt, architecto sint
                commodi dolor modi iste quaerat omnis? Recusandae qui ducimus
                odio esse, assumenda reprehenderit?
              </div>
              <div className="flex flex-col items-end justify-around my-4">
                <div className="flex flex-col items-center justify-center gap-2 pr-5">
                  <span className="bg-gray-900 py-2 px-4 text-gray-900">.</span>
                  <span className="bg-lime-500 py-2 px-4 text-lime-500">.</span>
                  <span className="bg-slate-300 py-2 px-4 text-slate-300">
                    .
                  </span>
                </div>
                <h1 className="text-8xl">✧</h1>
              </div>
            </div>
            <div className="w-full flex flex-row justify-center gap-2">
              <div className="bg-gray-900 text-lime-400 min-h-full p-4 rounded-xl">
                <p className="my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias aliquam alias in nihil. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Id ut ullam provident quae autem
                  modi quaerat eum.
                </p>
                <button className="bg-lime-400 text-gray-900 rounded-3xl px-4 py-1 self-center ml-8">
                  Click For More
                </button>
              </div>
              <div className="p-8"></div>
            </div>
            <div className="border border-gray-200 w-full rounded-xl p-4 flex flex-col justify-between items-center">
              <h3 className="text-center py-4 font-semibold ">
                Subscribe to our newsletter
              </h3>

              <form className="my-8">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
                  Your Email
                </label>
                <div>
                  <input
                    type="search"
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-lime-500 focus:border-lime-500 mb-8"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className="text-white right-2.5 bottom-2.5 bg-gray-800 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
