import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function RoommatesTable({ accounts }) {
    return (
        accounts.map((account) => (
            <p>{account.id}</p> // id shows, but not title
        ))
        // <TableContainer component={Paper}>
        //     <Table sx={{ minWidth: 650 }} aria-label="simple table">
        //         <TableHead>
        //             <TableRow>
        //                 <TableCell width="1px"></TableCell>
        //                 <TableCell align="leading"><tableHeader>Name</tableHeader></TableCell>
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {accounts.map((account) => (
        //                 <TableRow
        //                     key={account.id}
        //                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        //                 >
        //                     <TableCell align="leading"><p>{account.title}</p></TableCell>
        //                 </TableRow>
        //             ))}
        //         </TableBody>
        //     </Table>
        // </TableContainer>
    );
}