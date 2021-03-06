import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";

import Movies from "./components/movies";
import Login from "./components/login";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/movies" component={Movies} />
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/" exact component={Movies} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
