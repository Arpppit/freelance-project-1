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
} from '@mui/material';
import axios from 'axios';


export default function TimetableDashboard() {
    const [timetables, setTimetables] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [file, setFile] = useState(null);
    const [name, setName] = useState(''); // New state for name

    const renewTimetables = () => {
        axios
            .get('http://127.0.0.1:5000/api/timetables')
            .then((response) => {
                setTimetables(response.data);
            })
            .catch((error) => console.error('Error fetching timetables:', error));
    };

    useEffect(() => {
        renewTimetables();
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
        formData.append('name', name); // Append name from state
        formData.append('pdf', file);

        axios
            .post('http://127.0.0.1:5000/api/timetables', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                renewTimetables();
                handleDialogClose();
            })
            .catch((error) => console.error('Error adding timetable:', error));
    };

    const handleDelete = (timetableId) => {
        axios
            .delete(`http://127.0.0.1:5000/api/timetables/${timetableId}`)
            .then(() => {
                renewTimetables();
            })
            .catch((error) => console.error('Error deleting timetable:', error));
    };
    return (
        <>
            <Container maxWidth="xl" sx={{ py: 3 }}>
                <Typography variant="h6" my={3} py={3} textAlign={'center'} fontWeight={'bold'} color={'primary'} borderBottom={'2px solid'} borderColor={'primary'}>
                    Time Tables
                </Typography>
                <Box display="flex" justifyContent="right">
                    <Button variant="contained" color="primary" onClick={handleDialogOpen}>
                        Add New Timetable
                    </Button>
                </Box>
                {/* Display timetables here */}
                <TableContainer>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{fontWeight:'bold'}}>Name</TableCell>
                                <TableCell sx={{fontWeight:'bold'}}>PDF</TableCell>
                                <TableCell sx={{fontWeight:'bold'}}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {timetables.map((timetable) => (
                                <TableRow key={timetable._id}>
                                    <TableCell>{timetable.name}</TableCell>
                                    <TableCell>
                                        <a href={timetable.pdfUrl} target="_blank" rel="noopener noreferrer">
                                            View PDF
                                        </a>
                                    </TableCell>
                                    <TableCell>
                                        <Button color="primary" onClick={() => handleDelete(timetable._id)}>
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
                <DialogTitle>Add New Timetable</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <TextField margin="dense" id="name" label="Timetable Name" type="text" fullWidth variant="outlined" value={name} onChange={handleNameChange} />
                        <TextField margin="dense" id="file" type="file" fullWidth variant="outlined" onChange={handleFileChange} />
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
