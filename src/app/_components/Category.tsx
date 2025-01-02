import React from "react";
import Image from "next/image";

const Category = () => {
  return (
    <div>
      <div>
        <h1 className="text-center font-semibold text-3xl font-sans pt-5">
          Categories
        </h1>
        <h2 className="text-center font-medium text-2xl font-serif pt-3">
          These are our Categories
        </h2>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 py-3 px-12">
        <div className="col-span-1 row-span-2">
          <div className="relative w-full h-[450px] overflow-hidden">
            <Image
              src="/images/Men.jpg"
              alt="Men"
              className="object-top object-cover rounded-lg hover:scale-110"
              fill
            />
            <div className="absolute end-4 bottom-0 p-5">
              <button className="bg-gradient-to-r from-blue-500 text-white font-semibold px-5 py-3 rounded-lg shadow-lg hover:shadow-xl hover: hover:to-blue-500  ">
                MEN
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-2">
          <div className="relative w-full h-[450px] overflow-hidden">
            <Image
              src="/images/Woman.jpg"
              alt="Woman"
              className="object-cover  object-top rounded-lg hover:scale-110"
              fill
            />
            <div className="absolute end-4 bottom-0 p-5">
              <button className="bg-gradient-to-r from-blue-500 text-white font-semibold px-5 py-3 rounded-lg shadow-lg hover:shadow-xl hover: hover:to-blue-500 transition-all duration-300">
                WOMEN
              </button>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[200px] overflow-hidden col-span-1 row-span-1">
          <Image
            src="/images/Shoes.jpg"
            alt="Shoes"
            className=" object-top  object-cover rounded-lg hover:scale-110"
            fill
          />
          <div className="absolute end-4 bottom-0 p-5">
            <button className="bg-gradient-to-r from-blue-500 text-white font-semibold px-5 py-3 rounded-lg shadow-lg hover:shadow-xl hover: hover:to-blue-500 transition-all duration-300">
              SHOES
            </button>
          </div>
        </div>
        <div className="relative w-full h-[220px]   overflow-hidden">
          <Image
            src="/images/Kids.jpg"
            alt="Kids"
            className=" object-top object-cover rounded-lg transform transition-transform  hover:scale-110"
            fill
          />
          <div className="absolute end-4 bottom-0 p-5 col-span-1 row-span-1">
            <button className="bg-gradient-to-r from-blue-500 text-white font-semibold px-5 py-3 rounded-lg shadow-lg hover:shadow-xl hover: hover:to-blue-500 transition-all duration-300">
              KIDS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
