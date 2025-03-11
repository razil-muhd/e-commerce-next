import React from "react";
import Image from "next/image";
import { storageUrl } from "../utils/baseurl";
import Link from "next/link";

type Props = {
  categories: {
    category: string;
    _id: string;
    image: string;
  }[];
};

const Category = ({ categories }: Props) => {
  return (
    <div className="container mx-auto px-4">
      <div>
        <h1 className="text-center font-semibold text-3xl font-sans pt-5">
          Categories
        </h1>
        <h2 className="text-center font-medium text-2xl font-serif pt-3">
          These are our Categories
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gr gap-4 py-10 px-4 md:px-8 lg:px-12">
        <Link href={`/shop/${categories.at(0)?._id}`} passHref>
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-lg cursor-pointer">
            <Image
              src={storageUrl + categories.at(0)?.image}
              alt={categories.at(0)?.category || "Category"}
              className="object-cover object-top hover:scale-110 transition-transform duration-300"
              fill
            />
            <div className="absolute end-4 bottom-4">
              <button className="bg-gradient-to-r from-blue-500 text-white font-semibold px-5 py-3 rounded-lg hover:to-blue-700 shadow-xl transition-all duration-300 hover:scale-110">
                {categories.at(0)?.category}
              </button>
            </div>
          </div>
        </Link>

        <Link href={`/shop/${categories.at(1)?._id}`} passHref>
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-lg cursor-pointer">
            <Image
              src={storageUrl + categories.at(1)?.image}
              alt={categories.at(1)?.category || "Category"}
              className="object-cover object-top hover:scale-110 transition-transform duration-300"
              fill
            />
            <div className="absolute end-4 bottom-4">
              <button className="bg-gradient-to-r from-blue-500 text-white font-semibold px-5 py-3 rounded-lg hover:to-blue-700 shadow-xl transition-all duration-300 hover:scale-110">
                {categories.at(1)?.category}
              </button>
            </div>
          </div>
        </Link>

       <div className=" flex flex-col gap-4   ">
          <Link href={`/shop/${categories.at(2)?._id}`} passHref>
            <div className="relative w-full h-[150px] md:h-[200px] lg:h-[215px] overflow-hidden rounded-lg cursor-pointer">
              <Image
                src={storageUrl + categories.at(2)?.image}
                alt={categories.at(2)?.category || "Category"}
                className="object-cover object-top hover:scale-110 transition-transform duration-300"
                fill
              />
              <div className="absolute end-4 bottom-4">
                <button className="bg-gradient-to-r from-blue-500 text-white font-semibold px-5 py-3 rounded-lg hover:to-blue-700 shadow-xl transition-all duration-300 hover:scale-110">
                  {categories.at(2)?.category}
                </button>
              </div>
            </div>
          </Link>
  
          <Link href={`/shop/${categories.at(3)?._id}`} passHref>
            <div className="relative w-full h-[150px] md:h-[200px] lg:h-[215px] overflow-hidden rounded-lg cursor-pointer">
              <Image
                src={storageUrl + categories.at(3)?.image}
                alt={categories.at(3)?.category || "Category"}
                className="object-cover object-top hover:scale-110 transition-transform duration-300"
                fill
              />
              <div className="absolute end-4 bottom-4">
                <button className="bg-gradient-to-r from-blue-500 text-white font-semibold px-5 py-3 rounded-lg hover:to-blue-700 shadow-xl transition-all duration-300 hover:scale-110">
                  {categories.at(3)?.category}
                </button>
              </div>
            </div>
          </Link>
       </div>
      </div>
    </div>
  );
};

export default Category;
