import React, { Component } from "react";
import Product from "./product";
import ProductsList from "./productsList";

class products extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="card-group col-md-3">
        {ProductsList.map((p) => {
          return (
            <Product onAddToCart={this.onAddToCart} key={p.id} product={p} />
          );
        })}
      </div>
    );
  }
  onAddToCart = (product) => {
    this.props.addCartLine(product);
  };
}

export default products;
