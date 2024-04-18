import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Table,
    TableRow,
    TableBody,
    TableCell,
    TableHead,
    TableContainer,
    Select,
    FormControl,
    MenuItem,
} from '@mui/material';
import axios from 'axios';


export default function RollListDashboard() {
    const [rollLists, setRollLists] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [file, setFile] = useState(null);
    const [name, setName] = useState(''); // New state for name
    const [year, setYear] = useState('First Year');

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const renewRollLists = () => {
        axios
            .get('http://127.0.0.1:5000/api/rollLists')
            .then((response) => {
                setRollLists(response.data);
            })
            .catch((error) => console.error('Error fetching rollList:', error));
    };

    useEffect(() => {
        renewRollLists();
    }, []);

    const handleDialogOpen = () => {
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('year', year); 
        formData.append('pdf', file);

        axios
            .post('http://127.0.0.1:5000/api/rollLists', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                renewRollLists();
                handleDialogClose();
            })
            .catch((error) => console.error('Error adding rollList:', error));
    };

    const handleDelete = (timetableId) => {
        axios
            .delete(`http://127.0.0.1:5000/api/rollLists/${timetableId}`)
            .then(() => {
                renewRollLists();
            })
            .catch((error) => console.error('Error deleting rollList:', error));
    };
    return (
        <>
            <Container maxWidth="xl" sx={{ py: 3 }}>
                <Typography variant="h6" my={3} py={3} textAlign={'center'} fontWeight={'bold'} color={'primary'} borderBottom={'2px solid'} borderColor={'primary'}>
                    Roll List
                </Typography>
                <Box display="flex" alignItems="end" flexDirection={'column'}>
                    <Button variant="contained" color="primary" onClick={handleDialogOpen}>
                        Add New Roll List
                    </Button>
                    <br />
                    <small> (Adding Roll List of existing year will replace it)</small>
                </Box>
                {/* Display timetables here */}
                <TableContainer>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Year</TableCell>
                                {/* <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell> */}
                                <TableCell sx={{ fontWeight: 'bold' }}>PDF</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rollLists.map((rollList) => (
                                <TableRow key={rollList._id}>
                                    <TableCell>{rollList.year}</TableCell>
                                    {/* <TableCell>{rollList.name}</TableCell> */}
                                    <TableCell>
                                        <a href={rollList.pdfUrl} target="_blank" rel="noopener noreferrer">
                                            View PDF
                                        </a>
                                    </TableCell>
                                    <TableCell>
                                        <Button color="primary" onClick={() => handleDelete(rollList._id)}>
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>

            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle>Add New RollList</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        {/* <TextField margin="dense" id="name" label="Roll Name" type="text" fullWidth variant="outlined" value={name} onChange={handleNameChange} /> */}
                        <Select
                            value={year}
                            onChange={handleYearChange}
                            label="Year"
                            fullWidth
                        >
                            <MenuItem value={'First Year'}>First Year</MenuItem>
                            <MenuItem value={'Second Year'}>Second Year</MenuItem>
                            <MenuItem value={'Third Year'}>Third Year</MenuItem>
                            <MenuItem value={'Fourth Year'}>Fourth Year</MenuItem>
                        </Select>
                        <TextField margin="dense" id="file" type="file" fullWidth variant="outlined" onChange={handleFileChange} />
                        {/* <TextField margin='dense' id='class' label='Class' type='text' fullWidth variant='outlined' value={class} onChange={handleClassChange} /> */}

                        <DialogActions>
                            <Button onClick={handleDialogClose} color="primary">
                                Cancel
                            </Button>
                            <Button type="submit" color="primary">
                                Upload
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}
