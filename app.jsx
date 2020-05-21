import React from "react";
import Sidebar from "./components/sidebar/sidebar.jsx";
import {
    Pilotage,
    Ticket,
    Contract,
    Library,
    Application,
    Profile
}  from "./client"
import "./app.scss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const App = () => ( 
  <Router>
    <div className="main">
      <Sidebar />
      <div className="section-rightContent">
        <Switch>
          <Route exact path="/">
            <Pilotage />
          </Route>
          <Route path="/ticket">
            <Ticket />
          </Route>
          <Route path="/contract">
            <Contract />
          </Route>
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/application">
            <Application />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
