import React, { Component } from "react";
import NavBar from "./NavBar";
import TopBar from "./TopBar";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <TopBar />
        <NavBar cart={this.props.cart} />
      </div>
    );
  }
}

export default Header;
