import React from "react";
import { Route } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LoginPage} />
    </div>
  );
}

export default App;
