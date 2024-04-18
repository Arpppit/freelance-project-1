import { Accordion, AccordionDetails, AccordionSummary, Box, Container, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import SwipeableTextMobileStepper from '../components/SwipeableTextMobileStepper'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { indigo } from '@mui/material/colors';
import { useTheme } from '@emotion/react';
import Footer from '../components/Footer';
import axios from 'axios';


export default function TimeTable() {

    const [timetables, setTimetables] = useState([])

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

    const [table, setTable] = useState('');

    const handleTableChange = (event) => {
        setTable(event.target.value);
    }

    return (
        <Box>
            <NavBar />

            <Typography variant='h3' my={3} py={3} textAlign={'center'} fontWeight={'bold'} color={'primary'} borderBottom={'2px solid'} borderColor={'primary'}>Time Table</Typography>
            <Container maxWidth='xl' sx={{ py: 5 }} >

                {/* <embed src="./dummy.pdf" width="100%" height="800" type="application/pdf" /> */}

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Table</InputLabel>
                    <Select
                        label="Table"
                        value={table}
                        onChange={handleTableChange}
                    >
                        {timetables.map((timetable) => (
                            <MenuItem value={timetable.name}>{timetable.name}</MenuItem>
                        ))}

                    </Select>
                </FormControl>


                {timetables.map((timetable) => (
                    (timetable.name === table) &&
                    <div key={timetable._id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h3>{timetable.name}</h3>
                        <iframe
                            src={timetable.pdfUrl}
                            width="600"
                            height="400"
                            style={{ border: '1px solid black' }}
                        />

                    </div>
                ))}

            </Container>

            <Footer />
        </Box>
    )
}
