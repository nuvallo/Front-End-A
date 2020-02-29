import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { Signup } from "./components/SignupPage/SignupPage";
import { HomePage as Home } from "./components/HomePage/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import styled from "styled-components";
import axios from "axios";
import "./App.css";

const Div = styled.div`
  font-family: ${props => props.theme.fontFamily};
`;

function App() {
  return (
    <Div className="App">
      <Switch>
        <ProtectedRoute exact path="/protected" component={Home} />
        <Route exact path="/" component={LoginPage} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Div>
  );
}

export default App;
