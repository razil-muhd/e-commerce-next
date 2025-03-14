
import React from "react";

import Featured from "@/components/Card/Featured";
import { storageUrl } from "../utils/baseurl";


type props = {
  products: [
    {
      product: string;
      description: string;
      _id: string;
      image: string;
      price: string;
    }
  ];
};

const Featurepdct = async ({ products }: props) => {
  console.log("::", products);

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

      {/* <Link href={`/shop/products/${products._id}`}> */}
      <div className="grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((item, i) => (
          <Featured
            key={i}
            id={item._id}
            images={storageUrl + item.image}
            desc={item.description}
            heading={item.product}
            price={item.price}
          />
        ))}
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Featurepdct;
