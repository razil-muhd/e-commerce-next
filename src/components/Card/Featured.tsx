import React from "react";
import Image, { StaticImageData } from "next/image";



type Props = {
  image: StaticImageData;
  heading: string;
  desc: string;
  price: number;
};
const Featured = ({ image, heading, desc, price }: Props) => {
  return (
    <div>
      <div className=" px-12 ">
        <div className=" relative h-[25rem]  ">
          <Image
            src={image}
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
    </div>
  );
};

export default Featured;
