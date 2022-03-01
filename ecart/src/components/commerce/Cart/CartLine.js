import React from "react";

class CartLine extends React.Component {
  render() {
    return (
      <tr>
        <td className="shoping__cart__item">
          <img
            src={this.props.cartLine.imageUrl}
            style={{ width: "130px" }}
            alt=""
          />
          <h5>{this.props.cartLine.name}</h5>
        </td>
        <td className="shoping__cart__price">${this.props.cartLine.price}</td>
        <td className="shoping__cart__quantity">
          <div className="quantity">
            <div className="pro-qty">
              <span className="dec qtybtn">-</span>
              <input type="text" value="1" readOnly />
              <span className="inc qtybtn">+</span>
            </div>
          </div>
        </td>
        <td className="shoping__cart__total">${this.props.cartLine.price}</td>
        <td className="shoping__cart__item__close">
          <button
            onClick={() => this.props.onCartLineDelete(this.props.cartLine.id)}
            className="icon_close"
          ></button>
        </td>
      </tr>
    );
  }
}

export default CartLine;
