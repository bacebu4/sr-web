import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./translations/i18next";
import App from "./App";
import { UserContextProvider } from "./userStore/userContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
