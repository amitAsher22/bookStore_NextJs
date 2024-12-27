"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import { useMyContext } from "../../context/MyContext";

const AddToCard = ({ book }) => {
  const { value, setValue } = useMyContext();

  const handleCart = (e, reason) => {
    e.preventDefault();
    const newData = { ...book, reason };
    setValue([...value, newData]);
    toast.success(` Added  "${newData.title}" to the cart `, {
      autoClose: 1000,
      hideProgressBar: true,
    });
  };

  return (
    <div className="flex justify-around mt-8 border-t-2 p-3 space-x-4 ">
      <button
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-sm"
        onClick={(event) => handleCart(event, "Buy")}
      >
        <ShoppingCartIcon className="w-5 mr-0.5 inline" />
        to Buy
      </button>
      <button
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-sm"
        onClick={(event) => handleCart(event, "Rent")}
      >
        <ShoppingCartIcon className="w-5 mr-0.5 inline" />
        to Rent
      </button>
    </div>
  );
};

export default AddToCard;
