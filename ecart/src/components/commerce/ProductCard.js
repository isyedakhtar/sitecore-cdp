import React from "react";

class ProductCard extends React.Component {
  onAddToCart(product) {
    this.props.onAddToCart(product);

    var viewEvent = {
      type: "ADD_PRODUCT",
      product: {
        name: product.name,
        quantity: 2,
        price: product.price,
        currency: "AUD",
      },
    };

    this.props.createCdpEvent(viewEvent);
  }
  render() {
    var { id, name, price, imageUrl } = this.props.product;

    return (
      <div key={id}>
        <div className="product__item">
          <div
            className="product__item__pic set-bg"
            style={{
              backgroundImage: "url(" + imageUrl + ")",
            }}
          >
            <ul className="product__item__pic__hover">
              <li>
                <a href="#">
                  <i className="fa fa-heart"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-retweet"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    this.onAddToCart(this.props.product);
                  }}
                >
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="product__item__text">
            <h6>{name}</h6>
            <h5>${price}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
