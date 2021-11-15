import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore from "./redux/store";

const { store, persistor } = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <App store={store} persistor={persistor} />
  </React.StrictMode>,
  document.getElementById("root")
);
