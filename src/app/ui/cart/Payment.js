"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { CreditCardIcon } from "@heroicons/react/24/solid";

function payment() {
  const router = useRouter();
  const makePayment = () => {
    router.push("/store/track-order");
  };
  return (
    <div className="w-full max-w-xs">
      <form>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Card Number{" "}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="card"
            type="text"
            placeholder="Exter Card Number"
          />
        </div>

        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name on the Card
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter the Name"
          />
        </div>

        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="expiry"
          >
            Card Expiry
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="expiry"
            type="date"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cvv"
          >
            CVV/PIN
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="cvv"
            type="password"
            placeholder="Enter CVV or PIN"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => makePayment()}
          >
            Make Payment
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Reset Values
          </a>
        </div>
      </form>
    </div>
  );
}

export default payment;
