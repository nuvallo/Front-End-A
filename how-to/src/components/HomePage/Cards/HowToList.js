import React, { useContext } from "react";
import { HowToCard } from "./HowToCard";
import { GlobalContext } from "../../../context/GlobalState";

export const HowToList = () => {
  const { howTo } = useContext(GlobalContext);
  return (
    <>
      {howTo.map(guide => {
        return <HowToCard data={guide} />;
      })}
    </>
  );
};
