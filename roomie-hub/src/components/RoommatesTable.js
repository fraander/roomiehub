import * as React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Box';


export default function RoommatesTable({ accounts }) {
    return (
        <Box
            display="flex"
            alignItems="leading"
            sx={{
                backgroundColor: 'primary.main'
            }}
        >
            <Stack paddingLeft="20px" paddingRight="100px" spacing={0}>

                <p style={{ color: 'white' }}><b>Roommates</b></p>
                <ul style={{ color: 'white' }}>
                    {accounts.map((account) => (
                        <li>{account.name}</li>
                    ))}
                </ul>
            </Stack>
        </Box>
    );
}