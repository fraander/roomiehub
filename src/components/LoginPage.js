import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import React from 'react';

import { useState } from "react";

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

function LoginPage({ onLogin }) {

    const [username, setUsername] = useState("");
    const [groupCode, setGroupCode] = useState("");

    return (
        <div className="App">
            <Box sx={style}>
                <Stack spacing={2}>
                    <Stack alignItems="center"> {/* header text */}
                        <h1>Roomie Hub <span role="img" aria-label="Whale">🐳</span></h1>
                    </Stack>

                    <TextField // username text field
                        required
                        id="filled-basic"
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <TextField // group code text field
                        required
                        id="filled-basic"
                        label="Group Code"
                        variant="outlined"
                        value={groupCode}
                        onChange={(e) => setGroupCode(e.target.value)}
                    />

                    <Button // submit button
                        onClick={() => onLogin(username, groupCode)}
                    >
                        Login
                    </Button>
                </Stack>
            </Box>
        </div >
    );
}

export default LoginPage;
