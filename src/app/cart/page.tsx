"use client";
import useClients from "@/hook/useClients";
import { useCart } from "@mrvautin/react-shoppingcart";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const { items, updateItemQuantity, removeItem, totalItemsAmount } = useCart();
  const client = useClients();
  if (!client) {
    return null;
  }
  console.log("items:", items);

  return (
    <div className="pt-[7.944rem] pb-4 px-4 md:px-[2rem] grid grid-cols-1 md:grid-cols-6  gap-4 h-screen">
   
      <div className="col-span-1 md:col-span-4 overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-slate-200 text-sm md:text-base">
              <th className="p-2 px-20"></th>
              <th className="py-2">Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sub total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr className="text-center text-sm md:text-base" key={i}>
                <td className="relative h-28 w-28">
                  <Image
                    src={item.images.at(0)}
                    alt=""
                    fill
                    className="pt-3 object-cover px-3"
                  />
                </td>
                <td>{item.title}</td>
                <td>{Math.round(item.price)}</td>
                <td>
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => updateItemQuantity(item, "increase", 1)}
                      className="px-2 py-1 "
                    >
                      +
                    </button>
                    <h1 className="  px-1 py-1">
                      {item.quantity}
                    </h1>
                    <button
                      onClick={() => updateItemQuantity(item, "decrease", 1)}
                      className="px-2 py-1  rounded-md"
                    >
                      -
                    </button>
                  </div>
                </td>
                <td>{Math.round(item.itemTotal!)}</td>
                <td>
                  <button
                    className="text-blue-600 hover:underline px-2"
                    onClick={() => removeItem(item)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

   
      <div className="bg-slate-300 rounded-xl p-4 md:col-span-2 h-fit">
        <div className="font-bold text-center text-xl md:text-2xl pb-4">
          Cart Total
        </div>
        <div className="flex justify-between pb-4 text-sm md:text-base">
          <div>Total</div>
          <div>{Math.round(totalItemsAmount)}</div>
        </div>
        <div className="text-center">
          <Link
            href="/checkout"
            className="inline-block border-2 border-stone-700 py-3 px-7 rounded-xl hover:bg-stone-700 hover:text-white transition"
          >
            Check Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
