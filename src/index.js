import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "./config/AppTheme";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <Router>
    <UserProvider>
      <ThemeProvider theme={customTheme}>
        <App />
        <ToastContainer className="toast-position" />
      </ThemeProvider>
    </UserProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
