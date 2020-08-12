import React, { useState } from "react";
//import logo from './logo.svg';
import "./App.css";
import Login from "./login/Login";
import { Switch, Route } from "react-router-dom";
import Userhomescreen from "./Userhomescreen";
import Userfooter from "./Userfooter";
import Userlayout from "./Userlayout";
import PageNotFound from "./error/PageNotFound";

function App() {
  // const [childState, setChildState] = useState([]);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/Userhomescreen" component={Userhomescreen} />
        <Route exact path="/Userlayout" component={Userlayout} />
        <Route exact path="/" component={Login} />
        <Route component={PageNotFound} />
      </Switch>
      <Userfooter></Userfooter>
    </div>
  );
}

export default App;
