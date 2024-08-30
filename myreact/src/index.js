import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import App2 from "./App2";
import StateBasic from "./StateBasic";
import FortuneTelling from "./FortuneTeling";

const root = ReactDOM.createRoot(document.getElementById("root"));

// setInterval(root.render(<p>現在時刻:{new Date().toLocaleString()}</p>), 1000);

const test = "ボタン";
const title = "現在時刻";
const type = "time";
const btName = "占う";

root.render(
  <React.StrictMode>
    <FortuneTelling btName={btName}></FortuneTelling>
    {/* <App test={test} />
    <App2 title={title} type={type}></App2>
    <StateBasic init={0}></StateBasic> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
