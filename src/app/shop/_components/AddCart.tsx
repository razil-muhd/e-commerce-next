"use client";
import Products from "@/components/Card/Products";
import { useCart } from "@mrvautin/react-shoppingcart";
import React from "react";
type Props = {
  singleproduct: {
    id: string;
    images: string;
    title: string;
    price: number;
  };
};

const AddCart = ({ singleproduct }: Props) => {
  const { addItem, items, addShipping } = useCart();
  console.log("items:", items);
  return (
    <div>
      <button
        onClick={() => {
          addItem(singleproduct);
          addShipping({ description: "", cost: 20 });
        }}
        className="border border-solid bg-sky-600 text-white  w-20 rounded-lg p-1"
      >
        Buy Now
      </button>
    </div>
  );
};

export default AddCart;
