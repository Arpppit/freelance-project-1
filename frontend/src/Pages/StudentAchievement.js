import { Accordion, AccordionDetails, AccordionSummary, Box, Card, Container, FormControl, InputLabel, MenuItem, Paper, Select, Tab, Tabs, Typography } from '@mui/material'
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


export default function StudentAchievement() {

    const [topperlist, setTopperlist] = useState([])
    const [activities, setActivities] = useState([])


    const renewTopperlist = () => {
        axios
            .get('http://127.0.0.1:5000/api/topperlists')
            .then((response) => {
                setTopperlist(response.data);
            })
            .catch((error) => console.error('Error fetching topperlist:', error));
    };

    const renewActivities = () => {

        axios
            .get('http://127.0.0.1:5000/api/activitys')
            .then((response) => {
                setActivities(response.data);
            })
            .catch((error) => console.error('Error fetching activities:', error));
    };


    useEffect(() => {
        renewTopperlist()
        renewActivities();

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



                <Tabs sx={{ mt: 5 }} value={value} onChange={handleChange} variant='fullWidth'>
                    <Tab label="Topper List" />
                    <Tab label="Activities" />
                </Tabs>

                <CustomTabPanel value={value} index={0}>
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

                    {topperlist.map((topper) => (
                        (topper.year === year) &&
                        <div key={topper._id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h3>{topper.year} Topper List</h3>
                            <iframe
                                src={topper.pdfUrl}
                                width="600"
                                height="400"
                                style={{ border: '1px solid black' }}
                            />

                        </div>
                    ))}
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    {activities.map((activity) => (
                        <Card key={activity._id} sx={{ p: 3, my:2 }} elevation={12}>
                            <div key={activity._id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <h3>{activity.name}</h3>
                                <p>{activity.description}</p>
                                <iframe
                                    src={activity.pdfUrl}
                                    width="600"
                                    height="400"
                                    style={{ border: '1px solid black' }}
                                />

                            </div>
                        </Card>
                    ))}

                </CustomTabPanel>



            </Container >

            <Footer />
        </Box >
    )
}
