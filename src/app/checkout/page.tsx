import React from "react";
import Checkoutform from "./_components/Checkoutform";
import Bill from "./_components/Bill";

const page = () => {
  return (
    <div className="md:pt-[4.944rem] sm:pt-[2.455rem]  pb-2  ">
      <h1 className=" text-2xl font-semibold px-32 py-10 ">Billing details</h1>
      <div className="grid grid-cols-2">
        <div className="flex ">
          <Checkoutform />
        </div>
        <div> <Bill/></div>
      </div>
    </div>
  );
};

export default page;
