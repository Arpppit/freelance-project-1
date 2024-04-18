import { Box, Container } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'

export default function Footer() {
    return (
        <Box bgcolor={'black'} py={3} color={'white'}>
            <Container maxWidth='xl'>
                <Grid2 container>
                    <Grid2 xs={7}>
                        Contact: 07104 299 681
                        <br/>
                        <br/>
                        Email: electrocomms.pce@gmail.com
                        <br/>
                        <br/>
                        Address: Priyadarshini Campus, Hingna Rd, Digdoh Hills, Nagpur, Maharashtra 440019
                    </Grid2>
                    <Grid2 xs={5}>
                        <b>Other Useful Links</b>
                        <br/>
                        <br/>
                        <a href='https://erp.ltjss.net' style={{color:'white'}}>ERP login</a>
                        <br/>
                        <br/>
                        <a href='https://pcenagpur.edu.in/' style={{color:'white'}}>College Website</a>
                        <br/>
                        <br/>
                        <a href='https://nagpuruniversity.ac.in' style={{color:'white'}}>University Website</a>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}
