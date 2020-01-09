import React, { Component } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import List from "./List";
import NewAccess from "./NewAccess";
import { BrowserRouter, Route } from "react-router-dom";
// import { FirebaseDatabaseProvider } from "@react-firebase/database";
import "../firebase/firebase";

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div className="leftCol">
            <Navbar />

            <Route path="/" exact component={Search} />
            <Route path="/new-access" exact component={NewAccess} />
          </div>
        </BrowserRouter>
        <List />
      </div>
    );
  }
}

export default App;
