import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Container, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import SwipeableTextMobileStepper from '../components/SwipeableTextMobileStepper'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { grey, indigo } from '@mui/material/colors';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Footer from '../components/Footer';
import Card from '@mui/material/Card';


export default function FacultyDetails() {
    const [facultyDetails, setFacultyDetails] = useState([
        {

            name: <b>Dr.(Mrs.) A. P. Rathkanthiwar</b>,
            details:
                <p>Associate Professor<br />
                    Ph.D. (H.O.D.)<br />
                    Experience in Years: 24<br />
                    Publications : 35<br />
                </p>,
            img: './img/etc03-rathkanthiwar.jpg'


        },
        {
            name: <b>Dr.(Mrs) S.A.Chaturvedi</b>,
            details: <p>Associate Professor<br />
                Ph.D.<br />
                Experience in Years: 29<br />
                Publications : 34<br /></p>,
            img: './img/chaturvedi.jpg'
        },
        {
            name: <b>Dr. Abhijit D. Bijwe</b>,
            details: <p>Assistant Professor<br />
                Ph.D<br />
                Experience in Years: 19<br />
                Publications : 17<br /></p>,
            img: './img/abhijeet-bijwe.jpg'
        },
        {
            name: <b>Prof. Vasudevo V. Dabhade</b>,
            details: <p>Assistant Professor<br />
                M.Tech<br />
                Experience in Years: 34<br />
                Publications : 04<br /></p>,
            img: './img/vasudeo-dabhade-sir.jpg'
        },

        {
            name: <b>Dr.(Mrs) V. B. Bagde</b>,
            details:
                <p>Assistant Professor<br />
                    M.Tech, PhD<br />
                    Experience in Years: 23<br />
                    Publications : 18,<br /></p>,
            img: './img/vandana-bagde.jpg'
        },
        {
            name: <b>Dr. Ranjit V. Bobate</b>,
            details: <p>Assistant Professor<br />
                M.Tech , Ph.D submitted<br />
                Experience in Years: 22<br />
                Publications : 34<br /></p>,
            img: './img/ranjit-bobate.jpg'
        },

        {
            name: <b>Prof. Deepak A. Kapgate</b>,
            details: <p>
                Assistant Professor<br />
                M.Tech<br />
                Experience in Years: 26<br />
                Publications : 22<br /></p>,
            img: './img/deepak-kapgate.jpg'
        },

        {
            name: <b>Prof. (Mrs.) Seema S. Wasnik</b>,
            details: <p>Assistant Professor<br />
                M.Tech<br />
                Experience in Years: 18<br />
                Publications : 16<br /></p>,
            img: './img/seema-wasnik.jpg'
        },

        {
            name: <b>Dr. (Mrs.) Gouri P. Halde</b>,
            details: <p>
                Assistant Professor<br />
                Ph.D<br />
                Experience in Years: 18<br />
                Publications : 14<br /></p>,
            img: './img/halde-madam.jpg'
        },

        {
            name: <b>Prof. (Miss.) Sunita I. Parihar</b>,
            details:
                <p>Assistant Professor<br />
                    M.Tech; PhD Pursuing<br />
                    Experience in Years: 18<br />
                    Publications : 24<br /></p>,
            img: './img/parihar-madam.jpg'
        },

        {
            name: <b> Prof. (Mr.) Abhijit V. Warhade</b>,
            details:
                <p>Assistant Professor<br />
                    M.Tech<br />
                    Experience in Years: 13<br />
                    Publications : 07<br /></p>,
            img: './img/abhijeet-warade.jpg'
        },

        {
            name: <b>Prof. (Ms.) Vrushali V. Shirpurkar</b>,
            details:
                <p>Assistant Professor<br />
                    M.Tech<br />
                    Experience in Years: 11<br />
                    Publications : 04<br /></p>,
            img: './img/006etc_vvshirpurkar.jpg'
        },
        {
            name: <b>Prof. (Mr.) Ganesh Sarmokadam</b>,
            details:
                <p>Assistant Professor<br />
                    M.Tech<br />
                    Experience in Years: 19<br />
                    Publications : 02<br /></p>,
            img: './img/Ganesh-Sarmokadam.jpg'
        },
        {
            name: <b>Prof. (Ms.) Prachi D. Pendke</b>,
            details:
                <p>Assistant Professor<br />
                    M.Tech (ECE)<br />
                    Experience in Years: 7.4<br />
                    Publications : 06<br /></p>,
            img: './img/Prachi-Pendke.jpg'
        },
        {
            name: <b>Prof. (Mr.) Pravin R. Lakhe</b>,
            details:
                <p>Assistant Professor<br />
                    M. E.<br />
                    Experience in Years: 19<br />
                    Publications : 25<br /></p>,
            img: './img/Pravin-Lakhe.jpg'
        },
        {
            name: <b>Prof. (Ms.) Neha N. Akhare</b>,
            details:
                <p>Assistant Professor<br />
                    M.Tech<br />
                    Experience in Years: 01<br />
                    Publications : 01<br /></p>,
            img: './img/neha-akhre.jpg'
        },


        {
            name: <b>Prof. (Ms.) Ashwini A. Anjikar</b>,
            details:
                <p>Assistant Professor<br />
                    M.E.(ECE)<br />
                    Experience in Years: 04<br />
                    Publications : 05<br /></p>,
            img: './img/anjikar.jpg'

        },

        {
            name: <b>Prof. (Mrs.) Snehal Wankhade</b>,
            details:
                <p>Assistant Professor<br />
                    M.Tech(ECE)<br />
                    Experience in Years: 2.5<br />
                    Publications : 03<br /></p>,
            img: './img/s-wankhede.jpg'

        },




    ])
    return (
        <Box>
            <NavBar />

            <Typography variant='h3' my={3} py={3} textAlign={'center'} fontWeight={'bold'} color={'primary'} borderBottom={'2px solid'} borderColor={'primary'}>Faculty Details</Typography>
            <Container maxWidth='xl' sx={{ py: 5 }} >

                <Grid2 container spacing={3} display={'flex'} alignItems={'stretch'}>

                    {
                        facultyDetails.map(faculty =>

                            <Grid2 item xs={2} textAlign="center">
                                <Paper elevation={8} style={{ display: 'flex', flexDirection: 'column', padding: 5, justifyContent: "space-around", height:'100%' }}>
                                    <Avatar
                                        src={faculty.img}
                                        sx={{ width: 100, height: 100, bgcolor: 'red', margin: '0 auto' }}
                                    />
                                    <br />
                                    <Typography variant='subtitle2' color='black' fontSize={15} textAlign={'center'}>
                                        {faculty.name}
                                    </Typography>
                                    <Typography variant='subtitle2' color={grey[700]} fontSize={13}>
                                        {faculty.details}
                                    </Typography>

                                </Paper>
                            </Grid2>


                        )
                    }


                </Grid2>

            </Container>

            <Footer />
        </Box >
    )
}
