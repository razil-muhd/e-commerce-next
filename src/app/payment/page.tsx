"use client";
import { FrontendHome } from "@/api/Api";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import Paymentform from "./_components/Paymentform";

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("orderId");
  const [clientsecretkey, setClientsecretkey] = useState("");
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  console.log("stripe::",stripePromise)
  useEffect(() => {
    const fetchPaymentResponse = async () => {
      try {
        const response = await FrontendHome.PaymentApi(id!);

        console.log("responseeee:", response);
        setClientsecretkey(response.data.data.sessionId);
      } catch (error) {
        console.log("error:::", error);
      }
    };
    fetchPaymentResponse();
  }, [id]);
  console.log("clientsecretkey:", clientsecretkey);
  const options = {
    clientSecret: clientsecretkey,
  };
  return (
    <>
      {clientsecretkey != "" && (
        <Elements stripe={stripePromise} options={options}>
          <Paymentform />
        </Elements>
      )}
    </>
  );
};

export default Page;
