import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import  RootStore  from "./store/RootStore";
import StoreDevtools from "./utils/StoreDevtools";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");
const rootStore = RootStore();
let Tools = null;
console.log(process.env.NODE_ENV );
if (process.env.NODE_ENV !== "production") {
  Tools = <StoreDevtools></StoreDevtools>;
}

ReactDOM.render(
  <Provider store={rootStore}>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
    {Tools}
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
