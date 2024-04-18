import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { indigo } from '@mui/material/colors';

function ISFCommitteeTable() {
  const rows = [
    { name: "Devesh Khatri", post: "President", semester: "VIII" },
    { name: "Aarya Varma", post: "Vice President", semester: "VIII" },
    { name: "Jay Jogi", post: "Secretary", semester: "VI" },
    { name: "Astha Dhakate", post: "Joint Secretary", semester: "VI" },
    { name: "Mrudul Upam", post: "Treasurer", semester: "VI" },
    { name: "Prathmesh Gavhane", post: "Joint Treasurer", semester: "VI" },
    { name: "Rutika Deshpande", post: "Technical Incharge", semester: "VI" },
    { name: "Sanket Darunkar", post: "Technical Co-incharge", semester: "VI" },
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{bgcolor:indigo[800]}}>
          <TableRow>
            <TableCell sx={{color:'white', fontWeight:'bold'}}>Name</TableCell>
            <TableCell align="right" sx={{color:'white', fontWeight:'bold'}}>Post</TableCell>
            <TableCell align="right" sx={{color:'white', fontWeight:'bold'}}>Semester</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.post}</TableCell>
              <TableCell align="right">{row.semester}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ISFCommitteeTable;
