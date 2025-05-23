import React from "react";
import Slide from "./_components/Slide";
import Category from "./_components/Category";
import { FrontendHome } from "@/api/Api";
import Featurepdct from "./_components/Featurepdct";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";

const Homepageapi = async () => {
  const response = await FrontendHome.Homepageapi();

  return response.data.data;
};

const page = async () => {
  const res = await Homepageapi();
  const session = await getServerSession(authOptions);
  console.log("session::", session);
  const banners = res.banners;
  const categories = res.categories;
  const products = res.featuredproducts;

  return (
    <div className="md:pt-[4.944rem] sm:pt-[2.455rem] ">
      <Slide gallery={banners} />
      <Category categories={categories} />
      <Featurepdct products={products} />
    </div>
  );
};

export default page;
