import logo from "./logo.svg";
import "./App.css";
import "antd/dist/reset.css";
import { adminRoute } from "./routes/index";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Frame from "../src/components/frame/index";

function App() {
  const meg = { str: "hhh" };
  return (
    <Frame>
      <Switch>
        {adminRoute.map((route) => {
          return (
            <Route key={route.path} path={route.path}>
              {(props) => <route.component exact={route.exact} {...props} />}
            </Route>
          );
        })}
        <Redirect to="/404"></Redirect>
      </Switch>
    </Frame>
  );
}

export default App;
