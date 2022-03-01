import React, { Component } from "react";
class Login extends Component {
  render() {
    return <div>Neckerchief PDP</div>;
  }
  componentDidMount() {
    var viewEvent = {
      type: "VIEW",
      page: "/Neckerchief",
    };
    this.props.createCdpEvent(viewEvent);
  }
}

export default Login;
