import React from "react";
import ReactDOM from "react-dom/client";
import './assets/css/index.css'
import App from "./components/App";

import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BrowserRouter } from "react-router-dom";

AOS.init()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


