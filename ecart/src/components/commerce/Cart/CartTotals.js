import React from "react";
import { Link } from "react-router-dom";
class CartTotals extends React.Component {
  render() {
    return (
      <div className="shoping__checkout">
        <h5>Cart Total</h5>
        <ul>
          <li>
            Subtotal <span>${this.props.total}</span>
          </li>
          <li>
            Total <span>${this.props.total}</span>
          </li>
        </ul>
        <Link to="/checkout" className="primary-btn">
          PROCEED TO CHECKOUT
        </Link>
      </div>
    );
  }
}

export default CartTotals;
