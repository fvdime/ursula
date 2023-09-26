"use client";

import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CreateGig = () => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get("/api/categories");
      return response.data;
    },
  });

  return (
    <div>
      <div className="py-8 flex flex-row justify-between items-center">
        <h1 className="font-semibold text-3xl text-gray-800">Create New Gig</h1>
        <button className="border border-slate-500 py-1 px-8 rounded-lg text-slate-500 text-semibold hover:text-white hover:bg-slate-500 transition-all ease-in duration-300">
          Publish
        </button>
      </div>
      <input
        type="text"
        placeholder="Title"
        className="w-full p-8 border-none outline-none text-4xl bg-transparent"
      />
      <div className="flex flex-row items-center justify-start py-4">
        <div>
          <button
            className="border rounded-full py-1 px-2.5 text-lime-600 border-lime-600 text-bold hover:text-white hover:bg-lime-600 transition-all ease-in duration-300"
            onClick={() => setOpen(!open)}
          >
            +
          </button>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <div>
            {open && (
              <div className="flex flex-row items-center justify-start pl-4 gap-4">
                <button className="border rounded-full py-1 px-2.5 text-lime-600 border-lime-600 text-bold hover:text-white hover:bg-lime-600 transition-all ease-in duration-300">
                  +
                </button>
                <button className="border rounded-full py-2 px-2 text-lime-600 border-lime-600 text-bold hover:text-white hover:bg-lime-600 transition-all ease-in duration-300">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                    />
                  </svg>
                </button>
                <button className="border rounded-full py-1 px-2.5 text-lime-600 border-lime-600 text-bold hover:text-white hover:bg-lime-600 transition-all ease-in duration-300">
                  +
                </button>
              </div>
            )}
          </div>
          <div className="my-8">
            <h1 className="my-4 text-lg">Select Category</h1>
            {isLoading ? (
              "loading..."
            ) : (
              <select name="Select Category" id="">
                <option disabled value="">
                  Select Category
                </option>
                {data?.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      </div>
      <ReactQuill
        theme="bubble"
        value={value}
        onChange={setValue}
        placeholder="Tell us about your work!"
        className="placeholder:text-2xl placeholder:text-gray-800"
      />
    </div>
  );
};

export default CreateGig;
