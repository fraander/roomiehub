import "./App.css";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { useState } from "react";

function LoginPage({onLogin}) {

    return (
        <div className="App">
            <Stack>
                <Button
                    onClick={onLogin}
                >
                Login
                </Button>
            </Stack>
        </div>
    );
}

export default LoginPage;
