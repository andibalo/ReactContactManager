import Contacts from "./components/Contacts";
import Header from "./components/Header";
import React from "react";
import AddContact from "./components/AddContact";
import About from "./components/About";
import Page404 from "./components/404";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header brand="Contact Manager" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/contact/add" component={AddContact} />
            <Route exact path="/about" component={About} />
            <Route path="*" component={Page404} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
