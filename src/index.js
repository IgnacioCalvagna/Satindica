import React from "react";
import ReactDOM from "react-dom/client";
import './assets/css/index.css'
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

AOS.init()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


