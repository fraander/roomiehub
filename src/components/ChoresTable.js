import * as React from "react";

import CheckButton from "./CheckButton";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function ChoreTable({ chores, onRemove }) {
  // Convert Date from Date -> String
  const formatDueDate = (chore) => {
    const newDate = new Date(chore.dueDate);
    return !!newDate ? `${newDate.getMonth()}/${newDate.getDate()}` : "";
  };

  const header = () => {
    return (
      <TableHead>
        <TableRow>
          <TableCell width="1px"></TableCell>
          <TableCell align="left">
            <b>Title</b>
          </TableCell>
          <TableCell align="left">
            <b>Due Date</b>
          </TableCell>
          <TableCell align="left">
            <b>Assignee</b>
          </TableCell>
          <TableCell align="left">
            <b>Description</b>
          </TableCell>
        </TableRow>
      </TableHead>
    );
  };

  const row = (chore) => {
    return (
      <TableRow
        key={chore.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="left">
          <CheckButton onRemove={() => onRemove(chore)} />
        </TableCell>

        <TableCell align="left">{chore.title}</TableCell>
        <TableCell align="left">{formatDueDate(chore)}</TableCell>
        <TableCell align="left">{chore.assignee}</TableCell>
        <TableCell algin="left">{chore.description}</TableCell>
      </TableRow>
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {header()}
        <TableBody>{chores.map((chore) => row(chore))}</TableBody>
      </Table>
    </TableContainer>
  );
}
