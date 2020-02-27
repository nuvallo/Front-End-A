import React, { useState } from "react";
import styled from "styled-components";
import { LoginNavigation } from "./LoginNavigation";

const LoginForm = styled.form`
  background-color: ${props => props.theme.primaryColor};
  width: 40%;
  margin: 15% auto;
  text-align: center;
  border-radius: 15px;

  button {
    padding: 10px;
    margin: 4% 0;
    background: ${props => props.theme.secondaryColor};
  }

  div {
    color: ${props => props.theme.fontColorLight};
    margin: 5%;
    padding: 5%;

    label {
      margin-right: 2%;
    }

    input {
      padding: 1%;
      border-radius: 5px;
    }
  }
`;

export const LoginPage = () => {
  const [cred, setCred] = useState({
    username: "",
    password: ""
  });

  const handleChanges = e => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const submit = e => {
    e.preventDefault();
    console.log(cred);
  };
  return (
    <div>
      <LoginNavigation />
      <LoginForm onSubmit={submit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChanges}
          />
        </div>

        <button>Login</button>
      </LoginForm>
    </div>
  );
};
