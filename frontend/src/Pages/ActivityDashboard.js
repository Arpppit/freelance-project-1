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


export default function ActivityDashboard() {
    const [activitys, setActivitys] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [file, setFile] = useState(null);
    const [name, setName] = useState(''); // New state for name
    const [description, setDescription] = useState(''); // New state for description



    const renewActivitys = () => {
        axios
            .get('http://127.0.0.1:5000/api/activitys')
            .then((response) => {
                setActivitys(response.data);
            })
            .catch((error) => console.error('Error fetching activitys:', error));
    };

    useEffect(() => {
        renewActivitys();
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
        formData.append('description', description); // Append name from state
        formData.append('pdf', file);

        axios
            .post('http://127.0.0.1:5000/api/activitys', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                renewActivitys();
                handleDialogClose();
            })
            .catch((error) => console.error('Error adding activity:', error));
    };

    const handleDelete = (activityId) => {
        axios
            .delete(`http://127.0.0.1:5000/api/activitys/${activityId}`)
            .then(() => {
                renewActivitys();
            })
            .catch((error) => console.error('Error deleting activity:', error));
    };


    const [year, setYear] = useState('First Year');

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }



    return (
        <>
            <Container maxWidth="xl" sx={{ py: 3 }}>
                <Typography variant="h6" my={3} py={3} textAlign={'center'} fontWeight={'bold'} color={'primary'} borderBottom={'2px solid'} borderColor={'primary'}>
                    Activitys
                </Typography>
                <Box display="flex" justifyContent="right">
                    <Button variant="contained" color="primary" onClick={handleDialogOpen}>
                        Add New Activity
                    </Button>
                </Box>
                {/* Display activitys here */}
                <TableContainer>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Description</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>PDF</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {activitys.map((activity) => (
                                <TableRow key={activity._id}>
                                    <TableCell>{activity.name}</TableCell>
                                    <TableCell>{activity.description}</TableCell>
                                    <TableCell>
                                        <a href={activity.pdfUrl} target="_blank" rel="noopener noreferrer">
                                            View PDF
                                        </a>
                                    </TableCell>
                                    <TableCell>
                                        <Button color="primary" onClick={() => handleDelete(activity._id)}>
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
                <DialogTitle>Add New Activity</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        
                        <TextField margin="dense" id="name" label="Activity Name" type="text" fullWidth variant="outlined" value={name} onChange={handleNameChange} />
                        <TextField margin="dense" id="description" label="Description" type="text" multiline fullWidth variant="outlined" value={description} onChange={handleDescriptionChange} />
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
