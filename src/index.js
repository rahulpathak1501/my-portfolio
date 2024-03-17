import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
import Login from "./pages/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

//const store = createStore();

root.render(<Login />);
