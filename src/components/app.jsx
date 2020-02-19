import React, { Component } from "react";
import NavBar from "./navBar";
import { Route, Switch } from "react-router-dom";

import Movies from "./movies";
import Login from "./login";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/movies" component={Movies} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Movies} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
