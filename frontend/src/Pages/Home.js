import { Box, Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../components/NavBar'
import SwipeableTextMobileStepper from '../components/SwipeableTextMobileStepper'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <Box>
            <NavBar />

            <img src='./img/deptatglance.jpeg' width={'100%'} />

            <Container maxWidth='xl'>
                <SwipeableTextMobileStepper />
            </Container>
            {/* milestones */}

            {/* Overview */}
            {/* <Container maxWidth='xl' sx={{ pb: 5 }}> */}
            {/* <Typography variant='h3'my={3} py={3} textAlign={'center'} fontWeight={'bold'} borderBottom={'2px solid'}>Overview of  ECE Department</Typography>
                <Grid2 container spacing={5}>
                    <Grid2 xs={4}>
                        <Card sx={{width:'100%'}} elevation={10}>
                            <CardMedia >
                                <img src='./img/caraousel/1.jpeg' width={'100%'} />
                            </CardMedia>
                            <CardContent sx={{textAlign:'center'}}>
                                HOD Cabin
                            </CardContent>
                        </Card>
                    </Grid2>
                    <Grid2 xs={4}>
                        <Card sx={{width:'100%'}} elevation={10}>
                            <CardMedia >
                                <img src='./img/caraousel/1.jpeg' width={'100%'} />
                            </CardMedia>
                            <CardContent sx={{textAlign:'center'}}>
                                HOD Cabin
                            </CardContent>
                        </Card>
                    </Grid2>
                    <Grid2 xs={4}>
                        <Card sx={{width:'100%'}} elevation={10}>
                            <CardMedia >
                                <img src='./img/caraousel/1.jpeg' width={'100%'} />
                            </CardMedia>
                            <CardContent sx={{textAlign:'center'}}>
                                HOD Cabin
                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2> */}
            {/* </Container> */}


            <Footer />
        </Box>
    )
}
