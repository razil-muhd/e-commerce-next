import React from 'react'
import Image from "next/image";
import img1 from "@public/images/FP-1.jpg";
import Featured from '@/components/Card/Featured';
const Products = [
     {
        image:img1,
        text:{
            heading:"Product1",
            desc:"HElloooooooooooo",
            price:499
        },
        
     },
     {
        image:img1,
        text:{
            heading:"Product2",
            desc:"HElloooooooooooo",
            price:699
        },
        
     },
     {
        image:img1,
        text:{
            heading:"Product3",
            desc:"HElloooooooooooo",
            price:799
        },
        
     },
     {
        image:img1,
        text:{
            heading:"Product4",
            desc:"HElloooooooooooo",
            price:999
        },
        
     },
     {
        image:img1,
        text:{
            heading:"Product5",
            desc:"HElloooooooooooo",
            price:99
        },
        
     },
     {
        image:img1,
        text:{
            heading:"Product6",
            desc:"HElloooooooooooo",
            price:9
        },
        
     },
     {
        image:img1,
        text:{
            heading:"Product7",
            desc:"HElloooooooooooo",
            price:4865
        },
        
     },
     {
        image:img1,
        text:{
            heading:"Product8",
            desc:"HElloooooooooooo",
            price:567
        },
        
     }

]


const page = () => {
  return (
    <div className="pt-[4.944rem]">
         <div>
        <h1 className="text-center font-semibold text-3xl font-sans pt-5">
         Men Products
        </h1>
       
      </div>
      <div className="grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"  >
        {Products.map((items,i)=><Featured key={i} image={items.image} heading={items.text.heading} desc={items.text.desc} price={items.text.price}/>)}
      </div>
      
    </div>
  )
}

export default page
