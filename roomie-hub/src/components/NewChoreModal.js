import * as React from 'react';
import { useState } from "react";
import '../App.css';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker'

const NewChoreModal = ({ roommates, onAdd }) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [dueDate, setDueDate] = useState(null);

  const addChore = (e) => {
    if (title !== "") {
      e.preventDefault();

      onAdd({ title, description, assignee, dueDate });

      setTitle("");
      setDescription("");
      setAssignee("");
      setDueDate(null);
    }
  };

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

  return (
    <div>
      <Box sx={style}>
        <Stack spacing={2}>
          <legend><h2>Create new chore</h2></legend>

          <TextField
            required
            id="filled-basic"
            label="Chore Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Due Date"
              value={dueDate}
              onChange={(newValue) => {
                setDueDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <FormControl>
            <InputLabel id="assignee-label">Assignee</InputLabel>
            <Select
              labelId="assignee-label"
              id="assignee-label"
              value={assignee}
              label="Assignee"
              onChange={(e) => setAssignee(e.target.value)}
            >
              <MenuItem value={""}>None</MenuItem>
              {roommates.map((roommate) => (
                <MenuItem value={roommate.name}>{roommate.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

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