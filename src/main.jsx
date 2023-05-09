import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./FirstApp";
import { Nicolas } from "./NameApp";
import { Properties } from "./Props";
import { CounterApp } from "./CounterApp";
import "../src/styles.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
        <Nicolas />
        <Properties />
        <CounterApp value = {20}/>
    </React.StrictMode>
)