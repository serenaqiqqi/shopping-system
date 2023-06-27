import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "antd/dist/reset.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { mainRoute } from "./routes/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route
          path="/admin"
          render={(routeProps) => <App {...routeProps}></App>}
        ></Route>
        {/* 登录界面和404界面 */}
        {mainRoute.map((route) => {
          return <Route key={route.path} exact={true} {...route} />;
        })}
        {/* <Redirect to="/404"></Redirect> */}
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
