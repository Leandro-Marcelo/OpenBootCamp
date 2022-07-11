import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
/* importando bootstrap icon */
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
/* Es ideal de que bootstrap este por encima de nuestro CSS */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
