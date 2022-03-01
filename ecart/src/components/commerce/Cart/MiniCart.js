import React from "react";
import { Link } from "react-router-dom";

class MiniCart extends React.Component {
  render() {
    return (
      <div className="header__cart">
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-heart"></i> <span>0</span>
            </a>
          </li>
          <li>
            <Link to="/cart">
              <i className="fa fa-shopping-bag"></i>{" "}
              <span>{this.props.itemsCount}</span>
            </Link>
          </li>
        </ul>
        <div className="header__cart__price">
          Total: <span>{this.props.total}</span>
        </div>
      </div>
    );
  }
}

export default MiniCart;
