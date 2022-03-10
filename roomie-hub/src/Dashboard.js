import "./App.css";

import ChoreTable from "./components/ChoresTable";
import RoommatesList from "./components/RoommatesList.js";
import NewChoreModal from "./components/NewChoreModal.js";
import NewAccountModal from "./components/NewAccountModal.js"

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { useState } from "react";

function Dashboard({onLogout, currentUser}) {

  const [showModal, setShowModal] = useState(false);
  const [showNewAccountModal, setNewAccountModal] = useState(false);

  const handleShowNewChoreModal = () => setShowModal(true);
  const handleHideNewChoreModal = () => setShowModal(false);

  const handleShowNewAccountModal = () => setNewAccountModal(true);
  const handleHideNewAccountModal = () => setNewAccountModal(false);

  const [chores, setChores] = useState([]);
  const [accounts, setAccounts] = useState([]);

  const addChore = (chore) => {
    const id = (Math.random() * 1000).toFixed(0); // generate uuid?
    const newChore = { id, ...chore };
    setChores([...chores, newChore]);
    console.log(chores);

    handleHideNewChoreModal();
  };

  const removeChore = (chore) => {
    console.log(chore)
    const newChores = chores.filter((c) => c.id !== chore.id)
    console.log(newChores)
    setChores(newChores)
  }

  const addAccount = (account) => {
    const id = (Math.random() * 1000).toFixed(0);
    const newAccount = { id, ...account };
    setAccounts([...accounts, newAccount])
    console.log(accounts)

    handleHideNewAccountModal();
  }

  return (
    <div className="App">
      <Modal
        open={showModal}
        onClose={handleHideNewChoreModal}
      >
        <NewChoreModal roommates={accounts} onAdd={addChore} currentUser={currentUser} />
      </Modal>

      <Modal
        open={showNewAccountModal}
        onClose={handleHideNewAccountModal}
      >
        <NewAccountModal onAddAccount={addAccount} />
      </Modal>

      <Stack spacing={2}>
        <Stack direction="row" spacing={4}>
          <Stack>
            <h1>
              Welcome, {currentUser}
            </h1>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                onClick={handleShowNewChoreModal}
                style={{ maxWidth: '200px' }}
              >
                New Chore
              </Button>

              <Button
                variant="contained"
                onClick={handleShowNewAccountModal}
                style={{ maxWidth: '300px' }}
              >
                Add Roommate
              </Button>

              <Button
                variant="contained"
                onClick={onLogout}
                style={{ maxWidth: '200px' }}
              >
                Log Out
              </Button>
            </Stack>
          </Stack>

          <RoommatesList accounts={accounts} currentUser={currentUser}/>

        </Stack>

        <ChoreTable chores={chores} onRemove={removeChore} currentUser={currentUser}/>

      </Stack>
    </div>
  );
}

export default Dashboard;
