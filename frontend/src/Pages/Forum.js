import { Box, Card, CardContent, CardMedia, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../components/NavBar'
import SwipeableTextMobileStepper from '../components/SwipeableTextMobileStepper'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import Footer from '../components/Footer'
import SwipeableTextMobileStepperForum from '../components/SwipeableTextMobileStepperForum'
import { grey, indigo } from '@mui/material/colors'
import CommitteeTable from '../components/CommitteeTable'
import ISFCommitteeTable from '../components/ISFCommitteeTable'

export default function Forum() {
    return (
        <Box>
            <NavBar />
            <SwipeableTextMobileStepperForum />
            <Container maxWidth='lg' sx={{ py: 5 }}>
                <Typography variant='h3' my={3} py={3} textAlign={'center'} fontWeight={'bold'} borderBottom={'2px solid'}>
                    “SPACE”- Students’ Forum
                </Typography>

                <Typography variant='h5' my={3} textAlign={'center'} fontWeight={'bold'}>
                    Students Progressive Association of Communication Engineering (SPACE)
                </Typography>

                <Typography variant='body1' my={3} textAlign={'center'}>
                    Students Progressive Association of Communication Engineering (SPACE)is the  non-profit making Forum for the  students of Electronics & Communication Engineering Department of Priyadarshini College of Engineering, Nagpur, with the motto of Overall Personality Development of Students of our department.
                </Typography>

                <Typography variant='h5' my={3} pt={3} textAlign={'center'} fontWeight={'bold'}>
                    Objective of Students’ Forum:
                </Typography>

                <Typography variant='body1' my={3} textAlign={'center'}>
                    <i>To achieve Overall Personality Development of Students of our department.</i>
                </Typography>

            </Container>
            <Box sx={{ bgcolor: grey[200], py: 7 }}>

                <Container maxWidth='lg'>

                    <Typography variant='h4' my={3} textAlign={'center'} fontWeight={'bold'}>
                        Activities of Students’ Forum:
                    </Typography>

                    <Typography variant='body1' my={3} textAlign={'center'}>
                        The following activities will  be conducted under the Students’ Forum for achievement of the objective :
                    </Typography>

                    <Typography variant='body1' my={3}  >
                        <Grid2 container spacing={5}>
                            <Grid2 xs={6}>

                                <ul>
                                    <li>Organize lectures by experts from industry, R&D disorganization and other   institutions.</li>
                                    <li>Organize Cultural programme</li>
                                    <li>Organize Sport programme</li>
                                    <li>Organize quiz programme.</li>
                                    <li>Organize Coaching programme for attending job interview</li>
                                    <li>Organize Training programme on report writing, Project Management</li>
                                    <li>Organize Counselling and Motivational Program</li>
                                    <li>Organize Entrepreneurship development programme</li>
                                </ul>
                            </Grid2>
                            <Grid2 xs={6}>
                                <ul>
                                    <li>Organize Lectures on Moral Values and Ethics</li>
                                    <li>Organize Lectures on Moral Values and Ethics</li>
                                    <li>Organize Group Discussions, brain-storming sessions, group activities</li>
                                    <li>Organize Training in public speaking</li>
                                    <li>Organize Visits to industry, work sites</li>
                                    <li>Organize Programme in leadership and personality development</li>
                                    <li>Organize Training on Environmental Awareness</li>
                                    <li>Organize  Training on Basic Management Skills</li>
                                </ul>
                            </Grid2>
                        </Grid2>
                    </Typography>
                </Container>
            </Box>
            <Container maxWidth='lg' sx={{ py: 5 }}>
                <Grid2 container spacing={5} justifyContent={'center'} alignItems={'center'}>
                    <Grid2 xs={6}>
                        <Paper elevation={10} sx={{ p: 3 }}>
                            <Typography variant='h5' my={3} py={3} textAlign={'center'} fontWeight={'bold'}>
                                Student Body Formation Process:
                            </Typography>

                            <Typography variant='body1' my={3}  >
                                For routine working of the forum students body  of students will be formed by following way:
                                <ol>
                                    <li>Names of Interested Students will be Invited</li>
                                    <li>Interviews will be organized for selection of body members.</li>
                                    <li>After the selection of Body members, The Body will be Installed in the  Installation program.</li>
                                </ol>
                            </Typography>
                        </Paper>
                    </Grid2>
                    <Grid2 xs={6}>
                        <Paper elevation={10} sx={{ p: 3 }}>
                            <Typography variant='h5' my={3} py={3} textAlign={'center'} fontWeight={'bold'}>
                                Execution of Students’ Body Task:
                            </Typography>

                            <Typography variant='body1' my={3}  >
                                <ol>
                                    <li>All the activities will be conducted by the Body</li>
                                    <li>All work will be assigned through discussions in the Body meetings</li>
                                </ol>
                            </Typography>
                        </Paper>
                    </Grid2>
                </Grid2>
            </Container>

            <Box sx={{ bgcolor: grey[200] }}>
                <Container maxWidth='lg' sx={{ py: 5 }}>
                    <Typography variant='h4' my={3} py={3} textAlign={'center'} fontWeight={'bold'}>
                        SPACE Committee 2023-24
                    </Typography>
                    <CommitteeTable />
                </Container>
            </Box>
            <Box sx={{ bgcolor: indigo[100] }}>
                <Container maxWidth='lg' sx={{ py: 5 }}>
                    <Typography variant='h4' my={3} py={3} textAlign={'center'} fontWeight={'bold'}>
                        ISF Committee 2023-24
                    </Typography>
                    <ISFCommitteeTable />
                </Container>
            </Box>
            <Footer />
        </Box >
    )
}
