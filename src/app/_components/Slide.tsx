
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import cn from "../utils/tailwind";
import { storageUrl } from "../utils/baseurl";
import Link from "next/link";

type props = {
  gallery: [
    {
      name: string;
      category: string;
      _id: string;
      image: string;
    }
  ];
};
const Slide = ({ gallery }: props) => {
  const [slide, setSlide] = useState(0);
  const totalimages = gallery.length;
  const next = () => {
    if (slide == totalimages - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };
  const prev = () => {
    if (slide == 0) {
      setSlide(totalimages - 1);
    } else {
      setSlide(slide - 1);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, [slide]);
  return (
    <div
      className={cn(
        "relative h-[4rem] md:h-[14rem] lg:h-[20rem] xl:h-[30rem] w-full flex items-center pt-10",
        { "justify-center": slide == 0 }
      )}
    >
      <Link href={`/shop/${gallery.at(slide)!.category}`}>
        <Image
          className="object-cover w-full h-full"
          src={storageUrl + gallery.at(slide)!.image}
          alt="slide"
          fill
        />
      </Link>
      <div className="text-black absolute text-4xl  flex justify-between w-full px-3  z-50">
        <button onClick={prev}>{"<"}</button>
        <button onClick={next}>{">"}</button>
      </div>
      <div className="text-black relative  px-20 ">
        <h2 className="text-xl  font-semibold transition-transform duration-300">
          {gallery.at(slide)!.name}
        </h2>
        {/* <h1 className=' text-3xl  font-bold'>{gallery.at(slide)!.text.subheading}</h1>
                    <p className='text-xs  font-semibold'>  {gallery.at(slide)!.text.description}</p> */}
        <div className={cn("py-5 flex", { "flex justify-center": slide == 0 })}>
          <button
            className={cn(
              "border-solid hover:border-dotted rounded-md border-2 bg-blue-400 text-white p-3   font-semibold flex ",
              { "bg-[#88c3ed]": slide == 0 }
            )}
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide;
