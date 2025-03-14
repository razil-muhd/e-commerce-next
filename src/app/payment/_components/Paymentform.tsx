"use client";
import Loadersvg from "@/components/svg/Loadersvg";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const Paymentform = () => {
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    if (!stripe || !elements) {
      return;
    }
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/payment/paymentinner",
      },
    });
    console.log("stripe errorr::", error); 
    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.

    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-96 p-4 h-screen border border-black shadow-2xl flex flex-col justify-center w-full rounded-lg"
    >
      <PaymentElement
        id="payment-element"
        className="border border-white shadow-lg p-5"
      />
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className="bg-blue-500 border-blue-500 shadow-2xl rounded-lg text-white p-3"
      >
        <span id="button-text">
          {isLoading ? (
            <div className="flex items-center justify-center" id="spinner">
              <Loadersvg style={{ width: "50px", height: "25px" }} />
            </div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
    </form>
  );
};

export default Paymentform;
