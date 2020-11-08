import React from "react";
import "./App.css";
import Header from "./Header";
import Recommended from "./Recommended";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Searchpage from "./Searchpage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchterm">
          <div className="app__page">
              <Sidebar />
              <Searchpage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <Recommended />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
