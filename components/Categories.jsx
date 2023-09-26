import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  const imgData = [
    {
      id: 1,
      source: "/1.jpg",
    },
    {
      id: 2,
      source: "/2.jpg",
    },
    {
      id: 3,
      source: "/3.jpg",
    },
    {
      id: 4,
      source: "/4.jpg",
    },
    {
      id: 5,
      source: "/1.jpg",
    },
    {
      id: 6,
      source: "/2.jpg",
    },
    {
      id: 7,
      source: "/3.jpg",
    },
    {
      id: 8,
      source: "/4.jpg",
    },
    {
      id: 9,
      source: "/1.jpg",
    },
  ];

  return (
    <div className="relative flex flex-col justify-center items-start overflow-hidden mx-auto max-w-screen-xl overflow-x-hidden p-4 pb-0">
      <div className="p-2">
        <h1 className="text-3xl font-semibold">Popular Now</h1>
      </div>
      <div className="w-full h-[245px] overflow-y-hidden overflow-hidden hover:overflow-x-scroll whitespace-nowrap scroll-smooth">
        {imgData.map((item) => (
          // eslint-disable-next-line @next/next/no-img-element
          <Link key={item.id} href={`/blog/${item.id}`}>
            <div className="inline-block h-full sm:w-1/2 md:w-1/3 lg:w-1/4 overflow-hidden">
              <Image
                className="w-[340px] h-[235px] object-cover p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-xl relative"
                src={item.source}
                alt="category image"
                width={340}
                height={235}
              />
              {/* <div className="absolute top-4">
              <h2 className="text-lg">category name</h2>
            </div> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
