import React from "react";

import Featured from "@/components/Card/Featured";
import { FrontendHome } from "@/api/Api";
import { storageUrl } from "@/app/utils/baseurl";

const Getproducts = async (id: string) => {
  const response = await FrontendHome.Getproductsapi(id);

  return response.data;
};

const page = async ({ params }: { params: Promise<{ products: string }> }) => {
  const id = (await params).products;

  const res = await Getproducts(id);
  const products = res.data;

  // console.log(products)

  return (
    <div className="pt-[4.944rem]">
      <div>
        <h1 className="text-center font-semibold text-3xl font-sans pt-5">
          Products
        </h1>
        <div className="flex justify-end px-4">
          {" "}
          <h1 className=" bg-blue-400 text-white p-1">Filter</h1>
        </div>
        <div className="flex justify-end px-4 pt-1">
          {" "}
          <h1 className=" bg-blue-400 text-white p-1">Sorter by name</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products?.map(
          (
            items: {
              image: string;
              product: string;
              title: string;
              description: string;
              price: string;
              _id: string;

              par?: string;
            },
            i: number
          ) => (
            <Featured
              key={i}
              images={storageUrl + items.image}
              heading={items.product}
              desc={items.description}
              price={items.price}
              id={items._id}
              par={items.par}
            />
          )
        )}
      </div>
    </div>
  );
};

export default page;
