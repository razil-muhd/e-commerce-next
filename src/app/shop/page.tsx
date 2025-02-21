import React from "react";

import Products from "../../components/Card/Products";

import { FrontendHome } from "@/api/Api";
import { storageUrl } from "../utils/baseurl";

const Categorypageapi = async () => {
  const response = await FrontendHome.Categorypageapi();

  return response.data;
};

const page = async() => {
  const res = await Categorypageapi();
  const categorydynamic = res.data
  
  return (
    <div className="pt-[4.944rem] ">
      <div className="text-center text-3xl md:pt-5  font-semibold">
        Categories
      </div>
    
        <div className="grid gap-3 grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categorydynamic.map((item:{image:string,category:string,_id:string}, i:number) => (
            <Products
              key={i}
              image={storageUrl+ item.image}
              text={item.category}
              id={item._id}
            />
          ))}
        </div>
     
    </div>
  );
};

export default page;
