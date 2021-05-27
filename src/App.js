import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./container/Home";
import About from "./container/About";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          {" "}
          <Home />{" "}
        </Route>

        <Route path="/about" exact>
          {" "}
          <About />{" "}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
