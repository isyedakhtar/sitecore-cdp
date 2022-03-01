import React from "react";
import Header from "./Header";
import Cart from "../commerce/Cart/Cart";
import Hero from "./Hero";
import Catalog from "../commerce/Catalog";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login";
import { Routes } from "react-router-dom";
//This component WebRouter is Not required - Can be safely Deleted. The logic is in App.js
const WebRouter = (props) => {
  console.log("Router props", props.cartLines);
  return (
    <div>
      <BrowserRouter>
        <Header cart={props.cartLines} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/shop" element={<Catalog />} />
          <Route path="/cart" element={<Cart cartLines={props.cartLines} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default WebRouter;
