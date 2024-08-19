import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import ProductsContext from "./context/products-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductsContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsContext>
);
