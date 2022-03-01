import React from "react";

function BoxeverHoc(WrappedComponent) {
  return class extends React.Component {
    constructor() {
      super();
      this.boxever = window.Boxever;
      this.boxeverq = window._boxeverq;
      this.createCdpEvent = this.createCdpEvent.bind(this);
      this.addFixedData = this.addFixedData.bind(this);
    }

    createCdpEvent(eventData) {
      eventData = this.addFixedData(eventData);
      this.boxeverq.push(function () {
        window.Boxever.eventCreate(eventData, function (data) {}, "json");
      });

      //Added only to test interactive
      var callFlowsContext = {
        context: {
          channel: "WEB", // update before using. e.g. “WEB”
          language: "en", // update before using. e.g. “en”
          currencyCode: "USD", // update before using. e.g. “EUR”
          pointOfSale: "cdp-tenant.sitecore.com", // or value from your data layer
          browserId: window.Boxever.getID(),
          clientKey: "cdp31vqw5187pofzo6uj9hr5slxwlukr",
          friendlyId: "sya_test_interactive",
        },
      };
      console.log("calling interactive", window.Boxever.pointOfSale);
      window.Boxever.callFlows(
        callFlowsContext,
        function (response) {
          console.log(response);
        },
        "json"
      );
    }

    addFixedData(viewEvent) {
      viewEvent.channel = "WEB";
      viewEvent.pos = "cdp-tenant.sitecore.com";
      viewEvent.browser_id = this.boxever.getID();
      return viewEvent;
    }

    render() {
      return (
        <React.Fragment>
          <WrappedComponent
            {...this.props}
            createCdpEvent={this.createCdpEvent}
          />
        </React.Fragment>
      );
    }
  };
}
export default BoxeverHoc;
