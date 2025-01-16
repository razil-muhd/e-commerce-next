import Image from "next/image";
import Link from "next/link";

import React from "react";

const page = () => {
  return (
    <div className="pt-[7.944rem] pb-4  grid grid-cols-6 px-[2rem] gap-4">
      <table className="col-span-4 h-fit">
        <thead>
          <tr className="bg-slate-200 ">
            <th></th>
            <th className="py-2">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sub total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="relative h-28 w-28  ">
              <Image src="/images/FP-3.jpg" alt="" fill className="pt-3" />
            </td>
            <td>Shirt</td>
            <td>1000</td>
            <td>
              <div className="flex gap-1">
                <button>+</button>
                <h1 className="border border-black-600 p-1">2</h1>
                <button>-</button>
              </div>
            </td>
            <td>1000</td>
            <td>
              <button className="text-blue-600">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="bg-slate-300 rounded-xl col-span-2 px-[2rem] py-[2rem]">
        <div className="font-bold text-center text-[2rem] pb-[2rem]">
          Cart Total
        </div>
        <div className="pb-[1rem]">Shipping</div>
        <div className="pb-[2rem]">Total</div>
        <div className="text-center">
          <Link href="/checkout" className="border-2 border-stone-700 py-3 px-7 rounded-xl">
            Check Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
