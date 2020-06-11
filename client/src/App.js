import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Books from "./pages/Books"
import Saved from "./pages/Saved"
import Nav from "./components/Nav"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Books />
          </Route>
          <Route path="/books" exact>
            <Books />
          </Route>
          <Route path="/saved" exact>
            <Saved />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
