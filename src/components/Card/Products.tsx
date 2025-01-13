import React from 'react'
import Image, { StaticImageData } from "next/image";
type Props={
    image: StaticImageData;
    text: string;

}

const Products = ({image,text}:Props) => {
  return (
   <div>
        <div className=" px-12 py-9">
          <div className=" relative h-[25rem]  flex  justify-center items-center  ">
            <Image
              src={image}
              alt="Image"
              fill
              className="rounded-lg  shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            />
             <div className='relative'>
              <h1 className='text-white text-2xl font-bold  px-4 py-2'>{text}</h1>

             </div>
          </div>
         
        </div>
      </div>
  )
}

export default Products
