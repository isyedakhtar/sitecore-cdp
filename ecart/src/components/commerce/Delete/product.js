import React, { Component } from "react";

class product extends Component {
  render() {
    var { id, name, description, price, imageUrl } = this.props.product;
    return (
      <div key={id} className="card" style={{ width: "18rem" }}>
        <h5 className="card-header text-center">{name}</h5>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{description}</p>
          <footer className="blockquote-footer">
            Price <cite title="Source Title">{price}</cite>
          </footer>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              this.props.onAddToCart(this.props.product);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  }
}

export default product;
