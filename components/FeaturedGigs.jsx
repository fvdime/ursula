import React from "react";
import ProductCard from "./ProductCard";


const FeaturedGigs = ({data}) => {

  return (
    <div className="max-w-screen-xl mx-auto p-4 my-8">
      <div className="my-4">
        <h1 className="text-3xl font-semibold">Explore Now</h1>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 my-8">
        {/* {data?.map((item) => (
        <ProductCard key={item._id} item={item}/>
        ))} */}
      </div>
    </div>
  );
};

export default FeaturedGigs;
