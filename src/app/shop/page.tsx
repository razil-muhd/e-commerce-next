import React from "react";
import Image from "next/image";
import img1 from "@public/images/27277.jpg";
import Products from "../../components/Card/Products";
import Link from "next/link";

const Images = [
  {
    id: "0",
    image: img1,
    heading: "Men",
  },
  {
    id: "1",
    image: img1,
    heading: "Women",
  },
  {
    id: "2",
    image: img1,
    heading: "Kids",
  },
  {
    id: "3",
    image: img1,
    heading: "Shoes",
  },
  {
    id: "4",
    image: img1,

    heading: "Shirts",
  },
  {
    id: "5",
    image: img1,

    heading: "Shirts",
  },
  {
    id: "6",
    image: img1,

    heading: "Shirts",
  },
  {
    id: "7",
    image: img1,

    heading: "Shirts",
  },
  {
    id: "8",
    image: img1,

    heading: "Shirts",
  },
  {
    id: "9",
    image: img1,

    heading: "Shirts",
  },
];

const page = async() => {
  const res = await fetch('https://dummyjson.com/products/category-list')
  const categorydynamic =await res.json();
  console.log("categorydynamic:",categorydynamic)
  return (
    <div className="pt-[4.944rem] ">
      <div className="text-center text-3xl md:pt-5  font-semibold">
        Categories
      </div>
    
        <div className="grid gap-3 grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categorydynamic.map((item:string, i:any) => (
            <Products
              key={i}
              // image={item.image}
              text={item}
              // id={item.id}
            />
          ))}
        </div>
     
    </div>
  );
};

export default page;
