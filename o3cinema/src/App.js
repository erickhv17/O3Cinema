import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Movie from "./components/Movie";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home></Home>
        <Switch>
          <Route path="/:movie_id" component={Movie} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
