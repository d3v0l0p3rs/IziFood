import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import App from "./Components/App/view";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
