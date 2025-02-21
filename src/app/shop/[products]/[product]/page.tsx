import Image from "next/image";
import React from "react";
import AddCart from "../../_components/AddCart";
import { FrontendHome } from "@/api/Api";
import { storageUrl } from "@/app/utils/baseurl";

const Singleproduct = async (_id:string) => {
  const response = await FrontendHome.Singleproductapi(_id);
 return response.data;


};


const page = async ({ params }: { params: Promise<{ product: string }> }) => {
  const _id = (await params).product;
  const res = await Singleproduct(_id);
  const product =res.data;

  console.log("product::::",product)

  return (
    <div className="lg:py-[10.944rem] lg:px-20 md:px-10 md:py-[5.944rem]">
      <div className="flex">
        <div className="relative w-[500px] h-[500px] ">
          <Image src={ storageUrl + product.image} alt="loafer" fill />
        </div>
        <div className="flex flex-col px-10 gap-6">
          <h1 className="text-4xl">{product.name}</h1>
          <h1 className="text-2xl font-bold">${product.price}</h1>

          <h1>{product.category}</h1>
          <p>{product.description}</p>
          <AddCart singleproduct={product}/>
        </div>
      </div>
    </div>
  );
};

export default page;
