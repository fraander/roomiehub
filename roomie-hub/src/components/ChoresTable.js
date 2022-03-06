import * as React from 'react';

import CheckButton from "./CheckButton"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ChoreTable({ chores, onRemove }) {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell width="1px"></TableCell>
                        <TableCell align="center"><tableHeader>Title</tableHeader></TableCell>
                        <TableCell align="center"><tableHeader>Due Date</tableHeader></TableCell>
                        <TableCell align="center"><tableHeader>Assignee</tableHeader></TableCell>
                        <TableCell align="center"><tableHeader>Description</tableHeader></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {chores.map((chore) => (
                        <TableRow
                            key={chore.title}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="leading">
                                <CheckButton onRemove={() => onRemove(chore)}/>
                            </TableCell>

                            <TableCell align="leading">{chore.title}</TableCell>
                            <TableCell align="leading">{chore.dueDate}</TableCell>
                            <TableCell align="leading">{chore.assignee}</TableCell>
                            <TableCell align="leading">{chore.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
