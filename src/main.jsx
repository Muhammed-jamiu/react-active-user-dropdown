import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import "./globa.css";
import Appp from "./practiesone/Appp.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Appp></Appp>
    </BrowserRouter>
  </StrictMode>
);
