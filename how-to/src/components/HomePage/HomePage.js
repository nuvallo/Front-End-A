import React from "react";
import Styled from "styled-components";
import { ProtectedNavbar } from "../Navbars/ProtectedNavigation";
import SearchBar from "./SearchBar";
import { HowToList } from "./Cards/HowToList";

const CardWrapper = Styled.div`
  display: flex;
  flex-display: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

export const HomePage = () => {
  return (
    <div>
      <ProtectedNavbar />
      <SearchBar />
      <CardWrapper>
        <HowToList />
      </CardWrapper>
    </div>
  );
};
