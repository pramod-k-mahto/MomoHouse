import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

import { CartProvider } from "./context/CartProvider.jsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <Auth0Provider
        domain="dev-0dxli2liaejazv04.us.auth0.com"
        clientId="WS7X1CTeLBPu2PY3bY8w4ZJ21cXmAOYe"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
      
    </CartProvider>
  </BrowserRouter>
);
