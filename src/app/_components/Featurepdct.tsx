import React from "react";
import Image from "next/image";
import img1 from "@public/images/FP-1.jpg";
import img2 from "@public/images/FP-2.jpg";
import img3 from "@public/images/FP-3.jpg";
import img4 from "@public/images/FP-4.jpg";
import img5 from "@public/images/FP-5.jpg";
import img6 from "@public/images/FP-6.jpg";
import img7 from "@public/images/FP-7.jpg";
import img8 from "@public/images/FP-8.jpg";
import Featured from "@/components/Card/Featured";

const products = [
  {
    image: img1,
    text: {
      heading: "Leather Loafer",
      description: "Elegant leather loafer sandal for style.",
      price: 899,
    },
  },
  {
    image: img2,
    text: {
      heading: "Slippers",
      description: "A slipper is a soft indoor shoe.",
      price: 799,
    },
  },
  {
    image: img3,
    text: {
      heading: "Casual Shirts",
      description: "A casual shirt is a relaxed  shirt.",
      price: 999,
    },
  },
  {
    image: img4,
    text: {
      heading: "Watches",
      description: "Watches are wrist-worn timepieces.",
      price: 1299,
    },
  },
  {
    image: img5,
    text: {
      heading: "Trouser",
      description: "Trousers are pants covering the lower body.",
      price: 299,
    },
  },
  {
    image: img6,
    text: {
      heading: "Cap",
      description: "A cap is a snug-fitting headwear.",
      price: 159,
    },
  },
  {
    image: img7,
    text: {
      heading: "Hoodie",
      description: "A hoodie is a sweatshirt with a hood.",
      price: 499,
    },
  },
  {
    image: img8,
    text: {
      heading: "Frock",
      description: "A frock is a woman's or girl's dress.",
      price: 259,
    },
  },
];

const Featurepdct =  () => {

  return (
    <div>
      <div>
        <h1 className="text-center font-semibold text-3xl font-sans pt-5">
          Featured Products
        </h1>
        <h2 className="text-center font-medium text-2xl font-serif pt-3">
          These are our Products
        </h2>
      </div>
      <div className="grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"  >
        {products.map((item:any, i:any) => 
          <Featured  id="" images={item.image} key={i} desc={item.text.description} heading={item.text.heading}   price={item.text.price}/>
        )}
      </div>
    </div>
  );
};

export default Featurepdct;
