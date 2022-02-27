import * as React from 'react';

import tableHeader from "../App.css";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ChoreTable({rows}) {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center"><tableHeader>Title</tableHeader></TableCell>
                        <TableCell align="center"><tableHeader>Due Date</tableHeader></TableCell>
                        <TableCell align="center"><tableHeader>Assignee</tableHeader></TableCell>
                        <TableCell align="center"><tableHeader>Description</tableHeader></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.title}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{row.title}</TableCell>
                            <TableCell align="center">{row.dueDate}</TableCell>
                            <TableCell align="center">{row.assignee}</TableCell>
                            <TableCell align="leading">{row.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
