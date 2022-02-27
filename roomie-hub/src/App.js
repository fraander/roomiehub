import "./App.css";
import ChoresTable from "./components/Chores";
import NewChoreModal from "./components/NewChoreModal.js";

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';


import { useState } from "react";

/*
design the basic chore component

OneTimeChore:
- represents a chore to complete containing
- data:
  - chore_id: unique id (int)
  - title: title (string)
  - description: description of the task (string)
  - assignee: A User who the task is assigned to (string)
  - due_date: date the chore must be completed by (string)
*/

function App() {
  const [showModal, setShowModal] = useState(false);
  const [chores, setChores] = useState([]);


  const handleShowNewChoreModal = () => setShowModal(true);
  const handleHideNewChoreModal = () => setShowModal(false);

  const addChore = (chore) => {
    const id = (Math.random() * 1000).toFixed(0); // generate uuid?
    const newChore = { id, ...chore };
    setChores([...chores, newChore]);
    console.log(chores);

    handleHideNewChoreModal();
  };

  return (
    <div className="App">
      <Modal
        open={showModal}
        onClose={handleHideNewChoreModal}
      >
        <NewChoreModal onAdd={addChore} />
      </Modal>

      <h1>Roomie Hub</h1>

      <Button
        variant="contained"
        onClick={handleShowNewChoreModal}
        style={{ maxWidth: '150px' }}
      >
        New Chore
      </Button>

      <div style={{ display: "flex", margin: "auto" }}>
        <ChoresTable chores={chores} />
      </div>
    </div>
  );
}

export default App;
