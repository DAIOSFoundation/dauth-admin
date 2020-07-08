import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import GlobalStyle from "../src/styles/GlobalStyle";
import { Provider } from "react-redux";
import configure from "./store/configure";

const store = configure();

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
  </Provider>,
  document.getElementById("root")
);
