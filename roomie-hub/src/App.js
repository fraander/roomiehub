import * as React from 'react';
import { useState } from "react";
import './App.css';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';

const preview_roommates = ["Frank", "Theo", "Venna"]

// const preview_chores = {
//   chore_1: {
//     title: "Take out trash",
//     // assignee: user_f,
//     description: "Bag is full. Once trash is taken out the bag also needs replacing."
//   }
// }

const NewChoreModal = () => {
  const roommates = preview_roommates // get this list from the backend

  return (
    <div>
      <fieldset> {/*Need to style the fieldset a little more to match*/}
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

          <TextField // need to make width flexible
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            defaultValue=""
          />
          <p>
            <Button variant="contained">Create Chore</Button>
          </p>

        </Stack>
      </fieldset>
    </div>
  );
};

function App() {
  const [showNewChoreModal, setNewChoreModal] = useState(false);

  const handleShowNewChoreModal = (e) => {
    setNewChoreModal(e.target.checked);
  };

  const toggleableNewChoreModal = (e) => {
    if (showNewChoreModal) {
      return <NewChoreModal />;
    }
    return null;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Roomie Hub</h1>
        <p>Keep track of chores with your roommates!</p>

        <p>
          <Button
            variant="contained"
            // make this button show the modal something
          >New Chore</Button>
        </p>

        <toggleableNewChoreModal/>
      </header>
    </div>
  );
}

export default App;
