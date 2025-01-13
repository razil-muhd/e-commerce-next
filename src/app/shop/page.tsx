import React from "react";
import Image from "next/image";
import img1 from "@public/images/27277.jpg";
import Products from "../../components/Card/Products";

const Images = [
  {
    image: img1,
    heading: "Men",
  },
  {
    image: img1,
    heading: "Women",
  },
  {
    image: img1,
    heading: "Kids",
  },
  {
    image: img1,
    heading: "Shoes",
  },
  {
    image: img1,
 
  heading: "Shirts",
    
  },
  {
    image: img1,
    
      heading: "Shirts",
    },
    {
      image: img1,
      
        heading: "Shirts",
      },
      {
        image: img1,
        
          heading: "Shirts",
        },
        {
          image: img1,
          
            heading: "Shirts",
          },
          {
            image: img1,
            
              heading: "Shirts",
            }
  
];

const page = () => {
  return (
    <div className="pt-[4.944rem] ">
      <div className="text-center text-3xl md:pt-5  font-semibold">
        Categories
      </div>
      <div className="grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
          Images.map((item,i)=>
            <Products key={i} image={item.image} text={item.heading}/>
          )
        }
      
     </div>
    </div>
  );
};

export default page;
