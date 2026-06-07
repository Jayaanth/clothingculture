import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/globals.css";
import "./styles/admin.css";

import {
  BrandingProvider
} from "./context/BrandingContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <BrandingProvider>

      <App />

    </BrandingProvider>

  </React.StrictMode>

);