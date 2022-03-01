import React, { Component } from "react";
import ProductsGrid from "./ProductsGrid";

class Catalog extends React.Component {
  render() {
    return (
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <div className="sidebar">
                <div className="sidebar__item">
                  <h4>Department</h4>
                  <ul style={{ paddingLeft: "0" }}>
                    <li>
                      <a href="#">Category X</a>
                    </li>
                    <li>
                      <a href="#">Category X1</a>
                    </li>
                    <li>
                      <a href="#">Fruit &amp; Nut Gifts</a>
                    </li>
                    <li>
                      <a href="#">Fresh Berries</a>
                    </li>
                    <li>
                      <a href="#">Ocean Foods</a>
                    </li>
                    <li>
                      <a href="#">Butter &amp; Eggs</a>
                    </li>
                    <li>
                      <a href="#">Fastfood</a>
                    </li>
                    <li>
                      <a href="#">Fresh Onion</a>
                    </li>
                    <li>
                      <a href="#">Papayaya &amp; Crisps</a>
                    </li>
                    <li>
                      <a href="#">Oatmeal</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ProductsGrid onAddToCart={this.onAddToCart} />
          </div>
        </div>
      </section>
    );
  }

  onAddToCart = (product) => {
    this.props.addCartLine(product);
  };
}

export default Catalog;
