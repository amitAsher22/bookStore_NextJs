import React from "react";
import OrderDetails from "../../ui/cart/OrderDetails";
import Payment from "../../ui/cart/Payment";

function page() {
  return (
    <div className="p-2  flex-col  flex items-center  ">
      <h2 className="text-3xl">Welcome Mr.x</h2>
      <p className="text-xl text-zinc-600 pt-2">
        Thanks a lot for your purchase. Please complete the checkout process by
        paying for your order.
      </p>
      <div>
        <OrderDetails />
        <Payment />
      </div>
    </div>
  );
}

export default page;
