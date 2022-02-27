import logo from "./logo.svg";
import "./App.css";
import Chores from "./components/Chores";
import Form from "./components/Form";
import { useState } from "react";

/*
design the basic chore component

OneTimeChore:
- represents a chore to complete containing
- data:
  - chore_id: unique id (int)
  - title: title (string)
  - icon: icon to represent the task (image)
  - description: description of the task (string)
  - assignee: A User who the task is assigned to (string)
  - due_date: date the chore must be completed by (string)

RecurringChore:
- represents a chore which recurs to complete
- data:
  - chore_id: unique identifier for the chore
  - title: title of the task
  - icon: an icon to represent the task 
    - (can be added later, but probably a selection from a set of icon images we curate)
  - description: description of the task
  - assignee: A User who the task is assigned to
  - repetition_cadence: A cadence is one of
    - Daily
    - Twice Weekly
    - Weekly
    - Bi-weekly
    - Monthly
  - previous_completion_date: date representing last completion or creation date 
    - `this name sucks come up with a better one`
*/

function App() {
  const [chores, setChores] = useState([]);

  const addChore = (chore) => {
    const id = (Math.random() * 1000).toFixed(0);
    const newChore = { id, ...chore };
    setChores([...chores, newChore]);
    console.log(chores);
  };

  return (
    <div className="App">
      <div style={{ width: "50%", position: "relative", left: "30%" }}>
        <Form onAdd={addChore} />
      </div>
      <h2 style={{position: 'relative', left: '40%'}}>My Chores</h2>
      <div style={{display: 'flex', margin: 'auto'}}>
        <Chores chores={chores} />
      </div>
    </div>
  );
}

export default App;
