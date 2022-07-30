import React from 'react';
import ReactDOM from "react-dom";
import App from "./App.js"
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider //import auth0 provider for the whole application
    domain="dev-r99jghi9.us.auth0.com"
    clientId="TZinnqTuK6tn2yo8cfFg1RBzt2bSBeNG"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);


