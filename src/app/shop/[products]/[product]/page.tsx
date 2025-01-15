import Image from "next/image";
import React from "react";

const page = async ({
   params,
}: {
  params: Promise<{ product: string}>
}
) => {
  const par = (await params).product
  const pdt = await fetch (`https://dummyjson.com/products/${[par]}`);
  const singleproduct = await pdt.json();
  console.log("Single:", singleproduct);

  return (
    <div className="lg:py-[10.944rem] lg:px-20 md:px-10 md:py-[5.944rem]">
      <div className="flex">
        <div className="relative w-[500px] h-[500px] ">
          <Image src={singleproduct.images.at(0)} alt="loafer" fill />
        </div>
        <div className="flex flex-col px-10 gap-6">
          <h1 className="text-4xl">{singleproduct.title}</h1>
          <h1 className="text-2xl font-bold">${singleproduct.price}</h1>
          <h1>{singleproduct.category}</h1>
          <p>
            {singleproduct.description}
          </p>
          <button className="border border-solid bg-sky-600 text-white  w-20 rounded-lg p-1">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
