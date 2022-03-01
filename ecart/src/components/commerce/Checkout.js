import React from "react";

class Checkout extends React.Component {
  state = {
    email: "",
    fName: "",
    lName: "",
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  checkout() {
    this.props.createCdpEvent(this.identityEvent());
    this.props.createCdpEvent(this.checkoutEvent());
  }

  identityEvent() {
    return {
      type: "IDENTITY",
      page: "checkout",
      email: this.state.email,
      identifiers: [
        {
          provider: "ordercloud",
          id: this.state.email,
        },
      ],
    };
  }

  checkoutEvent() {
    return {
      type: "CHECKOUT",
      page: "checkout",
      reference_id: "ABC123",
      status: "PURCHASED",
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="checkout__form">
          <h4>Billing Details</h4>
          <form action="#">
            <div className="row">
              <div className="col-lg-8 col-md-6">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="checkout__input">
                      <p>
                        Fist Name<span>*</span>
                      </p>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="checkout__input">
                      <p>
                        Last Name<span>*</span>
                      </p>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div className="checkout__input">
                  <p>
                    Address<span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Street Address"
                    className="checkout__input__add"
                  />
                  <input type="text" placeholder="Apartment, State, Zip" />
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="checkout__input">
                      <p>
                        Phone<span>*</span>
                      </p>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="checkout__input">
                      <p>
                        Email<span>*</span>
                      </p>
                      <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="checkout__input">
                  <p>
                    Order notes<span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="checkout__order">
                  <h4>Your Order</h4>
                  <div className="checkout__order__products">
                    Products <span>Total</span>
                  </div>
                  <ul>
                    <li>
                      Vegetable’s Package <span>$75.99</span>
                    </li>
                    <li>
                      Fresh Vegetable <span>$151.99</span>
                    </li>
                    <li>
                      Organic Bananas <span>$53.99</span>
                    </li>
                  </ul>
                  <div className="checkout__order__subtotal">
                    Subtotal <span>$750.99</span>
                  </div>
                  <div className="checkout__order__total">
                    Total <span>$750.99</span>
                  </div>
                  <div className="checkout__input__checkbox">
                    <label>
                      Create an account?
                      <input type="checkbox" id="acc-or" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <p>If you are returning customer, login.</p>
                  <button
                    onClick={() => {
                      this.checkout();
                    }}
                    className="site-btn"
                  >
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Checkout;
