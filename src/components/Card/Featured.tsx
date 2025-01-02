import React from 'react'
import Image, { StaticImageData } from "next/image";
type Props={image:StaticImageData,heading:string,desc:string,price:number}
const Featured = ({image,heading,desc,price}:Props) => {
  return (
    <div>
         
                <div className=" px-12 rounded-lg ">
                  <div className=" relative h-[25rem]  ">
                    <Image src={image} alt="Image" fill />
                  </div>
                  <div className="text-center">
                    <h1 className="text-3xl font-semibold">{heading}</h1>
                    <h1 className="text-1xl font-semibold">{desc}</h1>
                    <h1 className="text-2xl font-semibold">₹{price}</h1>
                  </div>
                </div>
               
                </div>
   
  )
}

export default Featured
