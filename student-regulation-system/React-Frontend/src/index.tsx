import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import { Dashboard } from "./Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
  document.getElementById("root")
);
