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
      heading: "Sandal",
      description: "Elegant leather loafer sandal for.",
      price: 799,
    },
  },
  {
    image: img3,
    text: {
      heading: "Shirt",
      description: "Elegant leather loafer sandal.",
      price: 699,
    },
  },
  {
    image: img4,
    text: {
      heading: "Watch",
      description: "Elegant leather loafer sandal for.",
      price: 799,
    },
  },
  {
    image: img5,
    text: {
      heading: "Trouser",
      description: "Elegant leather loafer sandal.",
      price: 699,
    },
  },
  {
    image: img6,
    text: {
      heading: "Cap",
      description: "Elegant leather loafer sandal.",
      price: 599,
    },
  },
  {
    image: img7,
    text: {
      heading: "Hoodie",
      description: "Elegant leather loafer sandal for.",
      price: 499,
    },
  },
  {
    image: img8,
    text: {
      heading: "Frock",
      description: "Elegant leather loafer sandal for.",
      price: 399,
    },
  },
];

const Featurepdct = () => {
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
      <div className="grid grid-cols-4 grid-rows-2 py-5">
        {products.map((item, i) => (
          <Featured key={i} desc={item.text.description} heading={item.text.heading} image={item.image} price={item.text.price}/>
        ))}
      </div>
    </div>
  );
};

export default Featurepdct;
