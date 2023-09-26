import ProductCard from "@/components/ProductCard";
import Stepper from "@/components/Stepper";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error("Failed!")
  }

  return res.json()
}


const page = async ({searchParams}) => {

  const {cat} = searchParams

  const data = await getData()

  return (
    <div className="max-w-screen-xl mx-auto my-4 p-2">
      <div>
        <div>
          <Stepper />
          <h1 className="my-4 text-2xl font-semibold">Web Development</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data?.map((item) => (
        <ProductCard key={item._id} item={item}/>
        ))}
        </div>
      </div>
    </div>
  );
};

export default page;
