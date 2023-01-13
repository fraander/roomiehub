import React from "react";

import ChoreTable from "./ChoresTable";
import RoommatesList from "./RoommatesList.js";
import NewChoreModal from "./NewChoreModal.js";
import NewAccountModal from "./NewAccountModal.js";
import Join from "./Join";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import { useState } from "react";

function Dashboard({ onLogout, currentUser, groupCode }) {
  const [showModal, setShowModal] = useState(false);
  const [showNewAccountModal, setNewAccountModal] = useState(false);

  const handleShowNewChoreModal = () => setShowModal(true);
  const handleHideNewChoreModal = () => setShowModal(false);

  const handleShowNewAccountModal = () => setNewAccountModal(true);
  const handleHideNewAccountModal = () => setNewAccountModal(false);

  const localStorageChoreData = localStorage.getItem(`chores_${groupCode}`);
  const localStorageRoommateData = localStorage.getItem(
    `roommates_${groupCode}`
  );

  const [chores, setChores] = useState(
    !!localStorageChoreData ? JSON.parse(localStorageChoreData) : []
  );
  const [roommates] = useState(
    !!localStorageRoommateData ? JSON.parse(localStorageRoommateData) : []
  );

  // insert a chore
  const addChore = (chore) => {
    const id = chores.length;
    const newChore = { id, ...chore };
    const newChores = [...chores, newChore];

    setChores(newChores);
    localStorage.setItem(`chores_${groupCode}`, JSON.stringify(newChores));

    console.log(chores);

    handleHideNewChoreModal();
  };

  // remove a chore
  const removeChore = (chore) => {
    console.log(chore);
    const newChores = chores.filter((c) => c.id !== chore.id);

    setChores(newChores);
    localStorage.setItem(`chores_${groupCode}`, JSON.stringify(newChores));

    console.log(newChores);
  };

  return (
    <div className="App">
      <Modal // new chore modal
        open={showModal}
        onClose={handleHideNewChoreModal}
      >
        <NewChoreModal
          roommates={roommates}
          onAdd={addChore}
          currentUser={currentUser}
        />
      </Modal>

      <Modal // new roommate modal
        open={showNewAccountModal}
        onClose={handleHideNewAccountModal}
      >
        <NewAccountModal groupCode={groupCode} />
      </Modal>

      <Stack spacing={2}>
        <Stack direction="row" spacing={4}>
          <Join
            currentUser={currentUser}
            groupCode={groupCode}
            handleShowNewChoreModal={handleShowNewChoreModal}
            handleShowNewAccountModal={handleShowNewAccountModal}
            onLogout={onLogout}
          />
          <RoommatesList accounts={roommates} currentUser={currentUser} />{" "}
          {/* Roommates list */}
        </Stack>
        <ChoreTable
          chores={chores}
          onRemove={removeChore}
          currentUser={currentUser}
        />{" "}
        {/* Chores table */}
      </Stack>
    </div>
  );
}

export default Dashboard;
