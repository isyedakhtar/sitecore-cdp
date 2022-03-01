import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Cart from "../commerce/Cart/Cart";
import Hero from "./Hero";
import Catalog from "../commerce/Catalog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Login from "./Login";
import Checkout from "../commerce/Checkout";
import BoxeverHoc from "./BoxeverHoc";
const CheckoutWithEvents = BoxeverHoc(Checkout);
const LoginWithEvents = BoxeverHoc(Login);
class App extends Component {
  state = {
    cartLines: [],
  };
  constructor() {
    super();

    this.setState({ cartLines: [] });
  }

  addCartLine = (cartLine) => {
    var lines = this.state.cartLines;
    var updatedLines = [...lines, cartLine];
    this.setState({ cartLines: updatedLines });
    localStorage.setItem("CartLines", JSON.stringify(updatedLines));
  };

  removeCartLine = (id) => {
    // SHould be inside the cart
    var confirm = window.confirm("delete?");
    if (!confirm) {
      return;
    }

    var updatedLines = this.state.cartLines.filter((f) => {
      return f.id !== id;
    });

    this.setState({ cartLines: updatedLines });
    localStorage.setItem("CartLines", JSON.stringify(updatedLines));
  };

  componentDidMount() {
    var persistedCartlines = JSON.parse(localStorage.getItem("CartLines"));
    if (persistedCartlines) {
      this.setState({ cartLines: persistedCartlines });
    }
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header cart={this.state.cartLines} />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route
              path="/shop"
              element={<Catalog addCartLine={this.addCartLine} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cartLines={this.state.cartLines}
                  removeCartLine={this.removeCartLine}
                />
              }
            />
            <Route path="/login" element={<LoginWithEvents />} />
            <Route path="/checkout" element={<CheckoutWithEvents />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
