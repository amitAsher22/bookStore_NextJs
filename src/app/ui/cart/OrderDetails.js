"use client";
import React from "react";
import { useContext } from "react";
import { useMyContext } from "@/app/context/MyContext";

const Orderdetails = () => {
  const { value, setValue } = useMyContext();

  const booksToBuy = value.filter((book) => {
    return book.reason === "Buy";
  });
  const bookToRent = value.filter((book) => {
    return book.reason === "Rent";
  });

  const priceToBuy = booksToBuy.reduce(
    (accumulator, book) => accumulator + book.sellPrice,
    0
  );
  const priceToRent = booksToBuy.reduce(
    (accumulator, book) => accumulator + book.rentPrice,
    0
  );

  return (
    <div className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:ml-4 xl:ml-4 2xl:ml-4 lg:mr-4 xl:mr-4 2xl:mr-4">
      <h2 className="text-2xl pb-4">Order Details </h2>
      {
        <ul>
          <li>
            buying {booksToBuy.length} books for {priceToBuy}
          </li>
          <li>
            Renting {bookToRent.length} books for {priceToRent}
          </li>
        </ul>
      }
    </div>
  );
};

export default Orderdetails;
