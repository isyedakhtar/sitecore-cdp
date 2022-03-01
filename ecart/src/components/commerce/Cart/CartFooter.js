import React from "react";
import { Link } from "react-router-dom";
import CartTotals from "./CartTotals";
import CartCaltulator from "./CartCalculator";
const CartWithCalculations = CartCaltulator(CartTotals);

class CartFooter extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="shoping__cart__btns">
            <Link to="/shop" className="primary-btn cart-btn">
              CONTINUE SHOPPING
            </Link>
            <Link to="/shop" className="primary-btn cart-btn cart-btn-right">
              <span className="icon_loading"></span>
              Upadate Cart
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="shoping__continue">
            <div className="shoping__discount">
              <h5>Discount Codes</h5>
              <form action="#">
                <input type="text" placeholder="Enter your coupon code" />
                <button type="submit" className="site-btn">
                  APPLY COUPON
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <CartWithCalculations cart={this.props.cart} />
        </div>
      </div>
    );
  }
}

export default CartFooter;
