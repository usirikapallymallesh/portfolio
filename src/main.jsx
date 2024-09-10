import { StrictMode } from "react";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <>
    <App />
    <ToastContainer theme="colored" />
  </>
  // </StrictMode>,
);
