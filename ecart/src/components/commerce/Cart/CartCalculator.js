import React from "react";

function CartCaltulator(WrappedComponent) {
  return class extends React.Component {
    getCartTotal() {
      var total = 0;
      this.props.cart.map((line) => {
        total = total + line.price;
      });
      return total;
    }

    getItemsCount() {
      return this.props.cart.length;
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          itemsCount={this.getItemsCount()}
          total={this.getCartTotal()}
          subTotal={this.getCartTotal()}
        />
      );
    }
  };
}

export default CartCaltulator;
