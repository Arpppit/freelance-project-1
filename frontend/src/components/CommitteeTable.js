import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { blue, indigo } from '@mui/material/colors';

function CommitteeTable() {
  const rows = [
    { name: "Yash Sambare", post: "President", semester: "VIII" },
    { name: "Sumidha Mankawde", post: "Vice President", semester: "VIII" },
    { name: "Akansha Shirsat", post: "Secretary", semester: "VI" },
    { name: "Harshid Katre", post: "Joint Secretary", semester: "VI" },
    { name: "Vishwas Salwatkar", post: "Treasurer", semester: "VI" },
    { name: "Shruti Parate", post: "Joint Treasurer", semester: "VI" },
    { name: "Gaurav Gowardipe", post: "Cultural Incharge", semester: "VIII" },
    { name: "Vaishnavi Thakre", post: "Cultural Co-incharge", semester: "VI" },
    { name: "Vaibhav Malewar", post: "Cultural Co-incharge", semester: "VI" },
    { name: "Ishita Ramteke", post: "Cultural Co-incharge", semester: "VI" },
    { name: "Parth Bhujade", post: "Sport Incharge (Boys)", semester: "VI" },
    { name: "Shreya Gabhane", post: "Sport Incharge (Girls)", semester: "VI" },
    { name: "Sarthak Fale", post: "Sport Co-incharge", semester: "VI" },
    { name: "Aadarsh Tople", post: "Media Incharge", semester: "VI" },
    { name: "Dhanashree Kawale", post: "Media Co-incharge", semester: "VI" },
    { name: "Shruti Lanjewar", post: "Social Incharge", semester: "VI" },
    { name: "Kuniket Bobade", post: "Social Co-incharge", semester: "VI" },
    { name: "Sejal Adle", post: "Magazine Incharge", semester: "VI" },
    { name: "Aachal Nandeshwar", post: "Magazine Co-incharge", semester: "VI" },
    { name: "Khushi Ansari", post: "Magazine Co-incharge", semester: "VI" },
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{bgcolor:indigo[800], color:'white'}}>
          <TableRow>
            <TableCell style={{color:'white'}}><b>Name</b></TableCell>
            <TableCell align="right" style={{color:'white'}}><b>Post</b></TableCell>
            <TableCell align="right" style={{color:'white'}}><b>Semester</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{bgcolor:indigo[50]}}>
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

export default CommitteeTable;
