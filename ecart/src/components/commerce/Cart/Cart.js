import React, { Component } from "react";
import CartHeader from "./CartHeader";
import CartLine from "./CartLine";
import CartFooter from "./CartFooter";

class Cart extends React.Component {
  onCartLineDelete = (id) => {
    this.props.removeCartLine(id);
  };
  render() {
    return (
      <div className="shoping-cart spad">
        <div className="row">
          <div className="col-lg-12">
            <div className="shoping__cart__table">
              <table>
                <CartHeader></CartHeader>
                <tbody>
                  {this.props.cartLines.map((line) => {
                    return (
                      <CartLine
                        key={line.id}
                        cartLine={line}
                        onCartLineDelete={this.onCartLineDelete}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <CartFooter cart={this.props.cartLines} />
      </div>
    );
  }
}

export default Cart;
