import React from "react";
import Image from "next/image";

const Category = () => {
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

   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 px-4 md:px-8 lg:px-12">
   
        <div className="col-span-1 row-span-2">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
            <Image
              src="/images/Men.jpg"
              alt="Men"
              className="object-top object-cover rounded-lg hover:scale-110 transition-transform duration-300"
              fill
            />
            <div className="absolute end-4 bottom-4">
              <button className="bg-gradient-to-r from-blue-500  text-white font-semibold px-5 py-3 rounded-lg  hover:to-blue-700 shadow-xl transition-all duration-300 hover:scale-110">
                MEN
              </button>
            </div>
          </div>
        </div>

     
        <div className="col-span-1 row-span-2">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
            <Image
              src="/images/Woman.jpg"
              alt="Woman"
              className="object-cover object-top rounded-lg hover:scale-110 transition-transform duration-300"
              fill
            />
            <div className="absolute end-4 bottom-4">
              <button className="bg-gradient-to-r from-blue-500  text-white font-semibold px-5 py-3 rounded-lg hover: to-blue-700 shadow-xl transition-all duration-300 hover:scale-110">
                WOMEN
              </button>
            </div>
          </div>
        </div>

     
        <div className="relative w-full h-[150px] md:h-[200px] lg:h-[215px] overflow-hidden">
          <Image
            src="/images/Shoes.jpg"
            alt="Shoes"
            className="object-top object-cover rounded-lg hover:scale-110 transition-transform duration-300"
            fill
          />
          <div className="absolute end-4 bottom-4">
            <button className="bg-gradient-to-r from-blue-500  text-white font-semibold px-5 py-3 rounded-lg  hover: to-blue-700 shadow-xl transition-all duration-300 hover:scale-110">
              SHOES
            </button>
          </div>
        </div>

      
        <div className="relative w-full h-[150px] md:h-[200px] lg:h-[215px] overflow-hidden">
          <Image
            src="/images/Kids.jpg"
            alt="Kids"
            className="object-top object-cover rounded-lg hover:scale-110 transition-transform duration-300"
            fill
          />
          <div className="absolute end-4 bottom-4">
            <button className="bg-gradient-to-r from-blue-500  text-white font-semibold px-5 py-3 rounded-lg  hover:to-blue-700 shadow-xl transition-all duration-300 hover:scale-110">
              KIDS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

