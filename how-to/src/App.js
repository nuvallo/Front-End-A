import React from "react";
import { Route } from "react-router-dom";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { HomePage as Home } from "./components/HomePage/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LoginPage} />
      <Route path="/home" component={Home} />
    </div>
  );
}

export default App;
