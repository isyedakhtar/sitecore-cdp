import React from "react";
import ProductCard from "./ProductCard";
import ProductsList from "./productsList";
import BoxeverHoc from "../main/BoxeverHoc";
const ProductWithEvents = BoxeverHoc(ProductCard);

class ProductsGrid extends React.Component {
  render() {
    return (
      <div className="col-lg-9 col-md-7">
        <div className="filter__item">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="filter__sort">
                <span>Sort By</span>
                <select style={{ display: "none" }}>
                  <option value="0">Default</option>
                  <option value="0">Default</option>
                </select>
                <div className="nice-select" tabIndex="0">
                  <span className="current">Default</span>
                  <ul className="list">
                    <li data-value="0" className="option selected">
                      Default
                    </li>
                    <li data-value="0" className="option">
                      Default
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="filter__found">
                <h6>
                  <span>16</span> Products found
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-3">
              <div className="filter__option">
                <span className="icon_grid-2x2"></span>
                <span className="icon_ul"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {ProductsList.map((p) => {
            return (
              <div key={p.id} className="col-lg-4 col-md-6 col-sm-6">
                <ProductWithEvents onAddToCart={this.onAddToCart} product={p} />
              </div>
            );
          })}
        </div>
        <div className="product__pagination">
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">
            <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
      </div>
    );
  }
  onAddToCart = (product) => {
    this.props.onAddToCart(product);
  };
}

export default ProductsGrid;
