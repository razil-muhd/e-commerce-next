"use client";
import useClients from "@/hook/useClients";
// import Products from "@/components/Card/Products";
import { useCart } from "@mrvautin/react-shoppingcart";
// import { title } from "process";
import React from "react";
type Props = {
  singleproduct: {
    _id: string;
    image: string;
    name: string;
    price: number;
  };
};

const AddCart = ({ singleproduct }: Props) => {
  const { addItem, items, addShipping } = useCart();
  const client = useClients();
  if(!client){
    return
  }
  const products = {
    id:singleproduct._id,
    images: singleproduct.image,
    title:singleproduct.name,
    price:singleproduct.price
  }
  console.log("items::",items)
  console.log("products::",products)
  return (
    <div>
      <button
        onClick={() => {
          addItem(products);
          addShipping({ description: "", cost: 20 });
        }}
        className="border border-solid bg-sky-400 text-white  w-20 rounded-lg p-1"
      >
        Buy Now
      </button>
    </div>
  );
};

export default AddCart;
