import React from "react";
import Image from "next/image";
import img1 from "@public/images/FP-1.jpg";
import Featured from "@/components/Card/Featured";
const Products = [
  {
    image: img1,
    text: {
      id: "0",
      heading: "Product1",
      desc: "HElloooooooooooo",
      price: 499,
    },
  },
  {
    image: img1,
    text: {
      id: "1",
      heading: "Product2",
      desc: "HElloooooooooooo",
      price: 699,
    },
  },
  {
    image: img1,
    text: {
      id: "2",
      heading: "Product3",
      desc: "HElloooooooooooo",
      price: 799,
    },
  },
  {
    image: img1,
    text: {
      id: "3",
      heading: "Product4",
      desc: "HElloooooooooooo",
      price: 999,
    },
  },
  {
    image: img1,
    text: {
      id: "4",
      heading: "Product5",
      desc: "HElloooooooooooo",
      price: 99,
    },
  },
  {
    image: img1,
    text: {
      id: "5",
      heading: "Product6",
      desc: "HElloooooooooooo",
      price: 9,
    },
  },
  {
    image: img1,
    text: {
      id: "6",
      heading: "Product7",
      desc: "HElloooooooooooo",
      price: 4865,
    },
  },
  {
    images: img1,
    text: {
      id: "7",
      heading: "Product8",
      desc: "HElloooooooooooo",
      price: 567,
    },
  },
];

const page = async ({
  params,
}: {
  params: Promise<{ products: string }>
}) => {
  const par = (await params).products
  console.log("par:",par)
  const tes = await fetch(
    `https://dummyjson.com/products/category/${par}`
  );
  const tesdynamic = await tes.json();
  // console.log("testdynamic:", tesdynamic.products.at(0).images);

  return (
    <div className="pt-[4.944rem]">
      <div>
        <h1 className="text-center font-semibold text-3xl font-sans pt-5">
         Products
        </h1>
      </div>
      <div className="grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tesdynamic.products.map((items: any, i: number) => (
          <Featured
            key={i}
            images={items.images.at(0)}
            heading={items.title}
            desc={items.description}
            price={items.price}
            id={items.id}
            par={par}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
