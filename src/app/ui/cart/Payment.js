"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CreditCardIcon } from "@heroicons/react/24/solid";

function payment() {
  const router = useRouter();
  const [formData, setFormData] = useState({ card: "", name: "", expired: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const makePayment = () => {
    router.push("/store/track-order");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetAll = () => {
    setFormData({ card: "", name: "", expired: "" });
  };
  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Card Number{" "}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="card"
            placeholder="Exter Card Number"
            onChange={handleChange}
            value={formData.card}
            name="card"
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
            onChange={handleChange}
            value={formData.name}
            name="name"
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
            onChange={handleChange}
            value={formData.expired}
            name="expired"
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
          <button
            onClick={resetAll}
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Reset Values
          </button>
        </div>
      </form>
    </div>
  );
}

export default payment;
