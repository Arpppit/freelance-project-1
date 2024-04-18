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
    Drawer,
    IconButton,
    Divider,
    Menu,
    MenuItem,
} from '@mui/material';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TimetableDashboard from './TimetableDashboard';
import ListIcon from '@mui/icons-material/List';
import RollListDashboard from './RollListDashboard';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import AssignmentDashboard from './AssignmentDashboard';
import QuestionbankDashboard from './QuestionbankDashboard';
import PreviouspaperDashboard from './PreviouspaperDashboard';
import SyllabusDashboard from './SyllabusDashboard';
import TopperlistDashboard from './TopperListDashboard';
import ActivityDashboard from './ActivityDashboard';

export default function AdminDashboard() {

    const [open, setOpen] = useState(false);
    const [option, setOption] = useState(0);

    const options = ['Timetable', 'Roll List', 'Assignment', 'Question Bank', 'Previous Papers', 'Syllabus', 'Topper List', 'Activities']

    return (
        <Box>
            <NavBar />
            <Drawer

                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
                variant="temporary"
                sx={{
                    display: { xs: 'block', md: 'none' },
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}

            >
                <MenuItem sx={{ py: 3, borderBottom: '1px solid grey' }}>
                </MenuItem>
                {options.map((item, index) => (
                    <MenuItem key={index} sx={{ borderBottom: '1px solid grey' }} onClick={() => { setOption(index); setOpen(false) }}>
                        <Button fullWidth variant={index == option ? 'contained' : 'text'} key={index}>{item}</Button>

                    </MenuItem>

                ))
                }
            </Drawer>



            <Box minHeight={'100vh'} p={3}>
                <Button sx={{ my: 3, display: { xs: 'flex', md: 'none' } }} size='large' variant='contained' startIcon={<ListIcon />} onClick={() => setOpen(true)}>
                    Menu
                </Button>
                <Grid2 container spacing={2}>
                    <Grid2 display={{ xs: 'none', md:'block' }} md={2} sx={{ borderRight: '1px solid grey' }}>
                        <Box>
                            {options.map((item, index) => (
                                <MenuItem key={index} sx={{ borderBottom: '1px solid grey' }} onClick={() => { setOption(index); setOpen(false) }}>
                                    <Button variant={index == option ? 'contained' : 'text'} fullWidth key={index}>{item}</Button>

                                </MenuItem>

                            ))
                            }
                        </Box>
                    </Grid2>
                    <Grid2 xs={12} sm={12} md={10}>

                        <Divider />
                        {option === 0 && <TimetableDashboard />}
                        {option === 1 && <RollListDashboard />}
                        {option === 2 && <AssignmentDashboard />}
                        {option === 3 && <QuestionbankDashboard />}
                        {option === 4 && <PreviouspaperDashboard />}
                        {option === 5 && <SyllabusDashboard />}
                        {option === 6 && <TopperlistDashboard />}
                        {option === 7 && <ActivityDashboard />}


                    </Grid2>
                </Grid2>
            </Box>

            <Footer />
        </Box>
    );
}
