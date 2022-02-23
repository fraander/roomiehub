import * as React from 'react';
import { useState } from "react";
import './App.css';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';

const preview_roommates = ["Frank", "Theo", "Venna"]



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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Roomie Hub</h1>
        <p>Keep track of chores with your roommates!</p>

        <p>
          {showNewChoreModal == true
            ? <Button
              variant="contained"
              onClick={() => setNewChoreModal(!showNewChoreModal)}
            >
              New Chore
            </Button>
            : <Button
              variant="contained"
              onClick={() => setNewChoreModal(!showNewChoreModal)}
            >
              Cancel
            </Button>

          }
        </p>

        <p>
          {showNewChoreModal == true
            ? <Stack spacing={2}>
              <NewChoreModal />
            </Stack>
            : null
          }
        </p>

        <toggleableNewChoreModal />
      </header>
    </div>
  );
}

export default App;
