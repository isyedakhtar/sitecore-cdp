import React, { Component } from "react";
class SearchProducts extends Component {
  state = {
    searchTerm: "",
  };

  handleSearchTermChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  raiseSearchEvent() {
    var searchEvent = {
      type: "SEARCH",
      product_name: this.state.searchTerm,
    };
    this.props.createCdpEvent(searchEvent);

    console.log(searchEvent);
  }
  render() {
    return (
      <div className="hero__search__form">
        <form action="#">
          <div className="hero__search__categories">
            All Categories
            <span className="arrow_carrot-down"></span>
          </div>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
            placeholder="What do yo u need?"
          />
          <button
            onClick={() => {
              this.raiseSearchEvent();
            }}
            className="site-btn"
          >
            SEARCH
          </button>
        </form>
      </div>
    );
  }
}

export default SearchProducts;
