import React from "react";
import MiniCart from "../commerce/Cart/MiniCart";
import { BrowserRouter, Route, Link } from "react-router-dom";
import CartCaltulator from "../commerce/Cart/CartCalculator";
const WithCalaultaions = CartCaltulator(MiniCart);

const navBar = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="header__logo">
            <Link to="/">
              <img src="img/logo.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <nav className="header__menu">
            <ul>
              <li className="active">
                <a href="./index.html">Home</a>
              </li>
              <li>
                <Link to="/shop"> Shop</Link>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul className="header__menu__dropdown">
                  <li>
                    <a href="./shop-details.html">Shop Details</a>
                  </li>
                  <li>
                    <a href="./shoping-cart.html">Shoping Cart</a>
                  </li>
                  <li>
                    <a href="./checkout.html">Check Out</a>
                  </li>
                  <li>
                    <a href="./blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="./blog.html">Blog</a>
              </li>
              <li>
                <a href="./contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-3">{<WithCalaultaions cart={props.cart} />}</div>
      </div>
      <div className="humberger__open">
        <i className="fa fa-bars"></i>
      </div>
    </div>
  );
};

export default navBar;
