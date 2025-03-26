import React from "react";
import ReactDOM from "react-dom/client";  // Use 'react-dom/client' instead of 'react-dom'
import App from "./App";
import {Provider} from 'react-redux';
import store from './Store/index';
const root = ReactDOM.createRoot(document.getElementById("root"));

window.store = store;

root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);
