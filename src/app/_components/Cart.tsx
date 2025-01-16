"use client";
import useClients from "@/hook/useClients";
import { useCart } from "@mrvautin/react-shoppingcart";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cart = () => {
  const { totalUniqueItems } = useCart();
  const client = useClients();
  if (!client) {
    return;
  }
  return (
    <div>
      <div className="relative size-4 md:size-6 top-[0.125rem] px-3 flex items-center">
        <Link href="/cart">
          {" "}
          <Image src="/svg/cart.svg" alt="cart" fill />
        </Link>
        <div className="absolute rounded-full size-3 top-[-5px] right-[-5] md:size-4 bg-white flex justify-center items-center md:top-[-5px] md:right-[-8]">
          <p className="text-blue-400 text-[0.75rem] font-semibold">
            {totalUniqueItems}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
