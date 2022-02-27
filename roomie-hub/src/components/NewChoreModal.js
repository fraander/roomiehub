import * as React from 'react';
import { useState } from "react";
import '../App.css';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';

const preview_roommates = ["Frank", "Theo", "Venna"]

const NewChoreModal = ({ onAdd }) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [dueDate, setDueDate] = useState("");

  const addChore = (e) => {
    e.preventDefault();

    onAdd({ title, description, assignee, dueDate });

    setTitle("");
    setDescription("");
    setAssignee("");
    setDueDate(getToday()); // TODO: fix

    // >> hide modal
  };

  const getToday = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return(today);
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const roommates = preview_roommates // get this list from the backend

  return (
    <div>
      <Box sx={style}>
        <Stack spacing={2}>
          <legend><h2>Create new chore</h2></legend>

          <TextField
            id="filled-basic"
            label="Chore Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            id="date"
            label="Due Date"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <Select
            label="Assignee" // Make this show up
            value={assignee} // Make this update properly
            onChange={(e) => setAssignee(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <p>
            <Button variant="contained" onClick={addChore}>Create Chore</Button>
          </p>

        </Stack>
      </Box>
    </div>
  );
};

export default NewChoreModal;