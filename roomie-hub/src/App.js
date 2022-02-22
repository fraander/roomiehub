import * as React from 'react';
import './App.css';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const preview_model = {
  users: {
    user_f: "Frank",
    user_t: "Theo",
    user_v: "Venna"
  },
  chores: {
    chore_1: {
      title: "Take out trash",
      // assignee: user_f,
      description: "Bag is full. Once trash is taken out the bag also needs replacing."
    }
  }
}

const NewChoreModal = () => {
  const roommates = ["Frank", "Veena", "Theo"] // get this list from the backend

  return (
    <div style={{ padding: 20 }}>
      <fieldset>
        <legend><h2>Create new chore</h2></legend>

        <TextField id="filled-basic" label="Chore Title" variant="outlined" />

        <p> {/* Convert to MUI version */}
          <span>Due Date: </span><input type="date"></input>
        </p>
        
        <p> {/* Convert to MUI version */}
          <span>Assignee: </span>
          <select>
            {roommates.map((roommate) => (
              <option value={roommate}>{roommate}</option>
            ))}
          </select>
        </p>

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

      </fieldset>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Roomie Hub</h1>
        <p>Keep track of chores with your roommates!</p>


        <NewChoreModal />
      </header>
    </div>
  );
}

export default App;
