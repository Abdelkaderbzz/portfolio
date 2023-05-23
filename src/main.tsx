import React from "react";
import ReactDOM from "react-dom/client";
import RoutesProvider from "./router/router";
import "./main.scss";
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RoutesProvider />
  </Provider>
);
