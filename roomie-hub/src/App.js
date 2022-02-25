import * as React from 'react';
import { useState } from "react";
import './App.css';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';

const preview_roommates = ["Frank", "Theo", "Venna"]

const NewChoreModal = () => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const roommates = preview_roommates // get this list from the backend

  return (
    <div>
      <Box sx={style}>
        <Stack spacing={2}>
          <legend><h2>Create new chore</h2></legend>

          <TextField id="filled-basic" label="Chore Title" variant="outlined" />

          <TextField
            id="date"
            label="Due Date"
            type="date"
            defaultValue="2017-05-24" // set to today by default
          />

          <Select
            label="Assignee" // Make this show up
            value="Frank" // Make this update properly
          >
            {roommates.map((roommate) => (
              <MenuItem value={roommate}>{roommate}</MenuItem>
            ))}
          </Select>

          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            defaultValue=""
          />
          <p>
            <Button variant="contained">Create Chore</Button>
            {/* Need help with passing state so that this button can impact the main window*/}
          </p>

        </Stack>
      </Box>
    </div>
  );
};

function App() {
  const [showNewChoreModal, setNewChoreModal] = useState(false);
  const handleShowNewChoreModal = () => setNewChoreModal(true);
  const handleHideNewChoreModal = () => setNewChoreModal(false);

  const [chores, setChores] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Roomie Hub</h1>
        <p>Keep track of chores with your roommates!</p>

        <Button
          variant="contained"
          onClick={handleShowNewChoreModal}
          style={{maxWidth: '150px'}}
        >
          New Chore
        </Button>

        {/* Table of different chores and their properties */}

        <Modal
          open={showNewChoreModal}
          onClose={handleHideNewChoreModal}
        >
          <NewChoreModal />
        </Modal>
      </header>
    </div>
  );
}

export default App;