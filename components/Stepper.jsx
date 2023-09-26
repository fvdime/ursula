import React from "react";

const Stepper = () => {
  return (
    <div>
      <div>
        <ol className="flex items-center w-full p-3  text-xs text-center text-gray-900 sm:text-sm sm:p-0 sm:space-x-4">
          <li className="flex items-center">
            <h1 className="text-3xl pr-2">✧</h1>
            <h1 className="font-semibold text-gray-600">≫</h1>
          </li>
          <li className="flex items-center">
            Programming &{" "}
            <span className="hidden sm:inline-flex sm:ml-2 mr-2">Tech</span>
            <h1 className="font-semibold text-gray-600">≫</h1>
          </li>
          <li className="flex items-center">Website Development</li>
        </ol>
      </div>
    </div>
  );
};

export default Stepper;
