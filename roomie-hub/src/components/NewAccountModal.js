import * as React from 'react';
import { useState } from "react";
import '../App.css';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const NewAccountModal = ({ onAddAccount }) => {

  const [name, setName] = useState("");

  const createAccount = (e) => {
    e.preventDefault();

    onAddAccount({ name });

    setName("");
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
          <legend><h2>Create account</h2></legend>

          <TextField
            id="filled-basic"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>
            <Button variant="contained" onClick={createAccount}>Create Account</Button>
          </p>

        </Stack>
      </Box>
    </div>
  );
};

export default NewAccountModal;