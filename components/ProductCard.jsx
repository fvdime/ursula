import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({key, item}) => {
  return (
    <div key={key}>
      <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow h-96 flex flex-col justify-evenly items-center">
        <div className="relative w-full h-64">
          {item.image ? <Image
          fill
          className="p-4 rounded-t-lg object-cover absolute" 
          src={item?.image} 
        alt="gig image" /> :
        <Image
          fill
          className="p-4 rounded-t-lg object-cover absolute" 
          src='/2.jpg' 
        alt="gig image" /> }
          
        </div>
        <div className="px-5 pb-4">
          <Link href="#">
            <h5 className="text-sm text-gray-500">
              {item.title}
            </h5>
          </Link>
          <div className="flex items-center justify-between pt-2">
            <div className="flex flex-row items-center justify-center">
              <img
                className="w-8 h-8 rounded-full shadow-lg"
                src="/3.jpg"
                alt="user image"
                />
              <h5 className="ml-2 text-sm font-medium text-gray-900">
                {item.userName}
              </h5>
            </div>
            <span className="text-sm font-semibold text-gray-700">
              From ${item.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
