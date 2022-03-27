import "./App.css";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

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

                    <TextField
                        required
                        id="filled-basic"
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

<TextField
                        required
                        id="filled-basic"
                        label="Group Code"
                        variant="outlined"
                        value={groupCode}
                        onChange={(e) => setGroupCode(e.target.value)}
                    />

                    <Button
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
