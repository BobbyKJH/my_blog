import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style/common/GlobalStyle";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);
