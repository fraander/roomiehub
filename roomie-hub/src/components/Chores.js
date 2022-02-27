import React from "react";
import Chore from "./Chore";

const Chores = ({ chores }) => {
  return (
    <>
      {chores.map((chore) => {
        return (<Chore
        key={chore.id}
        chore={chore}
        />)
      })}
    </>
  );
};

export default Chores;
