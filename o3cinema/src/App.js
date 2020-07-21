import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Movie from "./components/Movie";
import NavBar from "./components/navBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:movie_id" component={Movie} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
