import React, { useState } from "react";

const Form = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [dueDate, setDueDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ title, description, assignee, dueDate });

    setTitle("");
    setDescription("");
    setAssignee("");
    setDueDate("");
  };

  return (
    <div style={{width: "90%"}}>
      <form className="form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            placeholder="add title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            placeholder="add description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="assignee">Assignee: </label>
          <input
            type="text"
            placeholder="add person"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dueDate">Due By: </label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <input type="submit" className="button" value="Add Chore" />
      </form>
    </div>
  );
};

export default Form;
