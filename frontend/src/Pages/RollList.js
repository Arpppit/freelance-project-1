import { Accordion, AccordionDetails, AccordionSummary, Box, Container, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import SwipeableTextMobileStepper from '../components/SwipeableTextMobileStepper'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { indigo } from '@mui/material/colors';
import { useTheme } from '@emotion/react';
import Footer from '../components/Footer';
import axios from 'axios';


export default function RollList() {

    const [rollLists, setRollLists] = useState([])

    const renewRollLists = () => {
        axios
            .get('http://127.0.0.1:5000/api/rollLists')
            .then((response) => {
                setRollLists(response.data);
            })
            .catch((error) => console.error('Error fetching rollLists:', error));
    };

    useEffect(() => {
        renewRollLists();
    }, []);

    const [year, setYear] = useState('First Year');

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }


    return (
        <Box>
            <NavBar />

            <Typography variant='h3' my={3} py={3} textAlign={'center'} fontWeight={'bold'} color={'primary'} borderBottom={'2px solid'} borderColor={'primary'}>Roll List</Typography>
            <Container maxWidth='xl' sx={{ py: 5 }} >

                {/* <embed src="./dummy.pdf" width="100%" height="800" type="application/pdf" /> */}
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Year</InputLabel>
                    <Select
                        value={year}
                        onChange={handleYearChange}
                        label="Year"
                    >
                        <MenuItem value="First Year">First Year</MenuItem>
                        <MenuItem value="Second Year">Second Year</MenuItem>
                        <MenuItem value="Third Year">Third Year</MenuItem>
                        <MenuItem value="Fourth Year">Fourth Year</MenuItem>

                    </Select>
                </FormControl>

                {rollLists.map((rollList) => (
                    (rollList.year === year) &&
                    <div key={rollList._id} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <h3>{rollList.year} Roll List</h3>
                        <iframe
                            src={rollList.pdfUrl}
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
