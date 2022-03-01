import React, { Component } from "react";
const CartHeader = () => {
  return (
    <thead>
      <tr>
        <th className="shoping__product">Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        <th></th>
      </tr>
    </thead>
  );
};

export default CartHeader;
