(function() {
    // Define the Sitecore CDP (Boxever) settings
    window._boxeverq = window._boxeverq || [];
    window._boxever_settings = {
        client_key: UAT_CLIENT_KEY,
        target: API_TARGET,
        cookie_domain: COOKIE_DOMAIN,
        web_flow_target: WEB_FLOW_TARGET,
        pointOfSale: POINT_OF_SALE
    };

    // Import the Boxever library asynchronously
    (function () {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = false;
        s.src = SCRIPT_SOURCE;
        var x = document.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
    })();
