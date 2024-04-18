import { Accordion, AccordionDetails, AccordionSummary, Box, Container, FormControl, InputLabel, MenuItem, Select, Tab, Tabs, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import SwipeableTextMobileStepper from '../components/SwipeableTextMobileStepper'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { indigo } from '@mui/material/colors';
import { useTheme } from '@emotion/react';
import Footer from '../components/Footer';
import axios from 'axios';
import PropTypes from 'prop-types';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function LearningMaterial() {

    const [assignments, setAssignments] = useState([]);
    const [questionBanks, setQuestionBanks] = useState([]);
    const [previousPapers, setPreviousPapers] = useState([]);
    const [syllabuses, setSyllabuses] = useState([]);

    const renewAssignments = () => {
        axios
            .get('http://127.0.0.1:5000/api/assignments')
            .then((response) => {
                setAssignments(response.data);
            })
            .catch((error) => console.error('Error fetching assignments:', error));
    };

    const renewQuestionBanks = () => {
        axios
            .get('http://127.0.0.1:5000/api/questionbanks')
            .then((response) => {
                setQuestionBanks(response.data);
            })
            .catch((error) => console.error('Error fetching questionbanks:', error));
    };

    const renewPreviousPapers = () => {
        axios
            .get('http://127.0.0.1:5000/api/previouspapers')
            .then((response) => {
                setPreviousPapers(response.data);
            })
            .catch((error) => console.error('Error fetching previouspapers:', error));
    };

    const renewSyllabuses = () => {
        axios
            .get('http://127.0.0.1:5000/api/syllabuses')
            .then((response) => {
                setSyllabuses(response.data);
            })
            .catch((error) => console.error('Error fetching syllabuses:', error));
    };




    useEffect(() => {
        renewAssignments();
        renewQuestionBanks();
        renewPreviousPapers();
        renewSyllabuses();
    }, []);

    const [year, setYear] = useState('First Year');

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }



    return (
        <Box>
            <NavBar />

            <Typography variant='h3' my={3} py={3} textAlign={'center'} fontWeight={'bold'} color={'primary'} borderBottom={'2px solid'} borderColor={'primary'}>Learning Material</Typography>
            <Container maxWidth='xl' sx={{ py: 5 }} >

                {/* <embed src="./dummy.pdf" width="100%" height="800" type="application/pdf" /> */}

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


                <Tabs sx={{ mt: 5 }} value={value} onChange={handleChange} variant='fullWidth'>
                    <Tab label="Assignment" />
                    <Tab label="Question Bank" />
                    <Tab label="Previous Papers" />
                    <Tab label="Syllabus" />
                </Tabs>

                <CustomTabPanel value={value} index={0}>
                    {assignments.map((assignment) => (
                        (assignment.year === year) &&
                        <div key={assignment._id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h3>{assignment.name}</h3>
                            <iframe
                                src={assignment.pdfUrl}
                                width="600"
                                height="400"
                                style={{ border: '1px solid black' }}
                            />

                        </div>
                    ))}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    {questionBanks.map((questionBank) => (
                        (questionBank.year === year) &&
                        <div key={questionBank._id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h3>{questionBank.name}</h3>
                            <iframe
                                src={questionBank.pdfUrl}
                                width="600"
                                height="400"
                                style={{ border: '1px solid black' }}
                            />

                        </div>
                    ))}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    {previousPapers.map((previousPaper) => (
                        (previousPaper.year === year) &&
                        <div key={previousPaper._id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h3>{previousPaper.name}</h3>
                            <iframe
                                src={previousPaper.pdfUrl}
                                width="600"
                                height="400"
                                style={{ border: '1px solid black' }}
                            />

                        </div>
                    ))}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    {syllabuses.map((syllabus) => (
                        (syllabus.year === year) &&
                        <div key={syllabus._id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h3>{syllabus.name}</h3>
                            <iframe
                                src={syllabus.pdfUrl}
                                width="600"
                                height="400"
                                style={{ border: '1px solid black' }}
                            />

                        </div>
                    ))}
                </CustomTabPanel>


            </Container>

            <Footer />
        </Box>
    )
}
