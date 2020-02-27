import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginNavbar = styled.nav`
  display: flex;
  background: ${props => props.theme.secondaryColor};

  .brand-name {
    padding: 1%;
    text-decoration: none;
    font-size: 30px;
    color: ${props => props.theme.primaryColor};
    width: 100%;
  }

  ul {
    display: flex;
    justify-content: flex-end;
    padding: 1%;
    width: 50%;
    list-style: none;

    li {
      margin: 2%;

      a {
        color: ${props => props.theme.fontColorDark};
        text-decoration: none;
      }
    }
  }
`;

export const LoginNavigation = () => {
  return (
    <LoginNavbar>
      <Link className="brand-name" to="/">
        How To
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </LoginNavbar>
  );
};
