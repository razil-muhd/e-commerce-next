import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  images: string;
  heading: string;
  desc: string;
  price: string;
  id:string

  par?:string
};
const Featured = ({ images, heading, desc, price,id}: Props) => {
  return (
    <Link href={`/shop/products/${id}`}>
      <div className=" px-12 ">
        <div className=" relative h-[25rem]  ">
          <Image
            src={images}
            alt="Image"
            fill
            className="rounded-lg  shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold">{heading}</h1>
          <h1 className="text-1xl font-semibold">{desc}</h1>
          <h1 className="text-2xl font-semibold pb-8">₹{price}</h1>
        </div>
      </div>
    </Link>
  );
};

export default Featured;
