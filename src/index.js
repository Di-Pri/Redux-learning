import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  // Store с помощью provider передаётся в реакт компоненты
  // в которых мы используем state
  // тем самым связываем redux с react
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
