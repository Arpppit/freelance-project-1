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
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';
import axios from 'axios';


export default function PreviouspaperDashboard() {
    const [previouspapers, setPreviouspapers] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [file, setFile] = useState(null);
    const [name, setName] = useState(''); // New state for name

    const renewPreviouspapers = () => {
        axios
            .get('http://127.0.0.1:5000/api/previouspapers')
            .then((response) => {
                setPreviouspapers(response.data);
            })
            .catch((error) => console.error('Error fetching previouspapers:', error));
    };

    useEffect(() => {
        renewPreviouspapers();
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
        formData.append('year', year); // Append name from state
        formData.append('name', name); // Append name from state
        formData.append('pdf', file);

        axios
            .post('http://127.0.0.1:5000/api/previouspapers', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                renewPreviouspapers();
                handleDialogClose();
            })
            .catch((error) => console.error('Error adding previouspaper:', error));
    };

    const handleDelete = (previouspaperId) => {
        axios
            .delete(`http://127.0.0.1:5000/api/previouspapers/${previouspaperId}`)
            .then(() => {
                renewPreviouspapers();
            })
            .catch((error) => console.error('Error deleting previouspaper:', error));
    };


    const [year, setYear] = useState('First Year');

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }



    return (
        <>
            <Container maxWidth="xl" sx={{ py: 3 }}>
                <Typography variant="h6" my={3} py={3} textAlign={'center'} fontWeight={'bold'} color={'primary'} borderBottom={'2px solid'} borderColor={'primary'}>
                    Previous Papers
                </Typography>
                <Box display="flex" justifyContent="right">
                    <Button variant="contained" color="primary" onClick={handleDialogOpen}>
                        Add New Previous Paper
                    </Button>
                </Box>
                {/* Display previouspapers here */}
                <TableContainer>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Year</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>PDF</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {previouspapers.map((previouspaper) => (
                                <TableRow key={previouspaper._id}>
                                    <TableCell>{previouspaper.year}</TableCell>
                                    <TableCell>{previouspaper.name}</TableCell>
                                    <TableCell>
                                        <a href={previouspaper.pdfUrl} target="_blank" rel="noopener noreferrer">
                                            View PDF
                                        </a>
                                    </TableCell>
                                    <TableCell>
                                        <Button color="primary" onClick={() => handleDelete(previouspaper._id)}>
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
                <DialogTitle>Add New Previouspaper</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Year</InputLabel>
                            <Select
                                label="Year"
                                value={year}
                                onChange={handleYearChange}
                            >
                                <MenuItem value="First Year">First Year</MenuItem>
                                <MenuItem value="Second Year">Second Year</MenuItem>
                                <MenuItem value="Third Year">Third Year</MenuItem>
                                <MenuItem value="Fourth Year">Fourth Year</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField margin="dense" id="name" label="Previouspaper Name" type="text" fullWidth variant="outlined" value={name} onChange={handleNameChange} />
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
