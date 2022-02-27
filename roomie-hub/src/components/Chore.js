import React from "react";

const Chore = ({ chore }) => {
  return (
    <div style={{ width: "250px", border: "1px solid black" }}>
      <h1>{chore.title}</h1>
      <p>{chore.description}</p>
      <p>assigned to {chore.assignee}</p>
      <p>due by {chore.dueDate}</p>
    </div>
  );
};

Chore.defaultProps = {
  title: "Title",
  description: "description",
  assignee: "person",
  dueDate: "today",
};

export default Chore;
