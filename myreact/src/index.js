import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import App2 from "./App2";
import StateBasic from "./StateBasic";
import FortuneTelling from "./FortuneTeling";
import FortuneTelling_2 from "./FortuneTelling-2";
import FortuneTelling_3 from "./FortuneTelling-3";
import FortuneTelling_4 from "./FortuneTelling-4";
import QueryMeigen from "./form/ReactQuery";
import Form from "./form/FormYup_practice";
import FormDiray from "./form/FormDiary";
import MuiTest from "./mui/Mui_test";
import { Query, QueryClient, QueryClientProvider } from "react-query";
import ReactQuery_test from "./form/ReactQuery_test";
import UseEffect_test from "./useEffect/UseEffect_test";
import UseReducer_test from "./useReducer/UseReducer";
const dayjs = require("dayjs");
const root = ReactDOM.createRoot(document.getElementById("root"));

// setInterval(root.render(<p>現在時刻:{new Date().toLocaleString()}</p>), 1000);

const test = "ボタン";
const title = "現在時刻";
const type = "time";
const btName = "占う";
const cli = new QueryClient();

root.render(
  <React.StrictMode>
    {
      <QueryClientProvider client={cli}>
        {/* <QueryMeigen></QueryMeigen> */}
        {/* <ReactQuery_test></ReactQuery_test> */}
        {/* <UseEffect_test></UseEffect_test> */}
        <UseReducer_test></UseReducer_test>
      </QueryClientProvider>
    }
    {/* <MuiTest></MuiTest> */}
    {/* <FormDiray></FormDiray> */}
    {/* <Form></Form> */}
    {/* <FortuneTelling_4 btName={btName}></FortuneTelling_4> */}
    {/* <App test={test} />
    <App2 title={title} type={type}></App2>
    <StateBasic init={0}></StateBasic> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
