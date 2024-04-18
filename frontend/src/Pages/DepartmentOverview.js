import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../components/NavBar'
import SwipeableTextMobileStepper from '../components/SwipeableTextMobileStepper'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { indigo } from '@mui/material/colors';
import { useTheme } from '@emotion/react';
import Footer from '../components/Footer';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';



export default function DepartmentOverview() {
    return (
        <Box>
            <NavBar />

            <Typography variant='h3' my={3} py={3} textAlign={'center'} fontWeight={'bold'} color={'primary'} borderBottom={'2px solid'} borderColor={'primary'}>Department  Overview</Typography>
            <Container maxWidth='xl' sx={{ py: 5 }} >

                <Accordion sx={{ bgcolor: indigo[100] }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography><h3><strong>About Department</strong></h3></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            •	<b>Priyadarshini College of Engineering, Nagpur</b> is one of the prestigious engineering institutes run by Lokmanya Tilak Jankalyan Sikshan Sanstha (LTJSS), Nagpur. This department is dedicated to the advancement, propagation and exploitation of knowledge in the field of engineering and technology. The department offers a four-year course culminating in the bachelor's degree in Electronics and Communication Engineering and Masters of Engineering for two year with specialization in Communication. Department also runs a Research Center with intake for 10 PhD scholars. Dept is having state of the art equipments in laboratories. Team of dedicated, highly qualified faculty members is always kin to share their expertise with young budding engineers. Departmental faculty, supporting staff and students function like a close knit family which creates a very conducive atmosphere for student's development. All staff members are approachable to students for any of their problems, whether academic or non-academic. The department aims to develop the students technically and make them mentally strong to face the challenges ahead. The Department also strives to offer its students excellent instructional and educational opportunities in Electronics and Communication Engineering, thus providing a durable technical foundation in an environment of rapid technical change. In this process, it enables and promotes their professional growth through contact with best professional practices. The department thus tries to play a role of resource and technical leadership in national level development activities.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ bgcolor: indigo[100] }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography><h3><strong>Key Strengths</strong></h3></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <ul>
                                <li>Well equipped lab to conduct research in Image Processing, VLSI, Networking etc.</li>
                                <li>Well qualified and experienced faculty rich in Industrial and Teaching experience.</li>
                                <li>Guest lecturers are invited from eminent personalities in industries and research foundations & workshops in various areas of expertise.</li>
                                <li>Access to Internet for students and staff through 48 Mbps leased line.</li>
                                <li>Effective teaching learning process is implemented by schemes like Teacher Guardian Scheme, Class Teacher scheme, continuous assessment of students etc.</li>
                                <li>Students are encouraged to undertake training in industries in vacations.</li>
                            </ul>

                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ bgcolor: indigo[100] }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography><h3><strong>Vision</strong></h3></Typography>

                    </AccordionSummary>

                    <AccordionDetails>
                        <Grid2 container spacing={0} alignItems={'center'} flexDirection={'row'}>
                            <Grid2 item xs={3}>
                                <img src='./img/vision.png' style={{width:'100%', height:'auto'}}/>
                            </Grid2>
                            <Grid2 item xs={9} display= 'flex' alignItems={'center'}>
                                <Typography>
                                    Developing versatile technocrats in the field of Electronics and Communication Engineering to cater to the needs of technological and socio economic development of the country and globe.
                                </Typography>
                            </Grid2>
                        </Grid2>
                    </AccordionDetails>

                </Accordion>
                <Accordion sx={{ bgcolor: indigo[100] }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography><h3><strong>Mission</strong></h3></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid2 container spacing={0}  >
                            <Grid2 item xs={3}>
                                <img src='./img/mission.png' style={{width:'100%', height:'auto'}}/>

                            </Grid2>
                            <Grid2 item xs={9} display= 'flex' alignItems={'center'}>
                                <Typography>
                                    <ul>
                                        <li>To foster research based quality technical education in Electronics and Communication Engineering.</li>
                                        <li>To develop skilled engineers to meet the rapid technological advances in the industries.</li>
                                        <li>To develop multifaceted personalities with sound academics and business acumen.</li>
                                        <li>To nurture high moral values in budding technocrats.</li>
                                        <li>To provide engineers with perfect blend of knowledge and social responsibilities to the society.</li>
                                    </ul>
                                </Typography>
                            </Grid2>
                        </Grid2>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ bgcolor: indigo[100] }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography><h3><strong>Program Outcomes (PO)</strong></h3></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <ul>
                                <li><strong>Engineering Knowledge:</strong></li>
                                Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.
                                <li><strong>Problem Analysis:</strong></li>
                                Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.
                                <li><strong>Design/Development of Solutions:</strong></li>
                                Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.
                                <li><strong>Conduct investigations of complex problems:</strong></li>
                                Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.
                                <li><strong>Modern tool usage:</strong></li>
                                Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.
                                <li><strong>The engineer and society:</strong></li>
                                Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.
                                <li><strong>Environment and sustainability:</strong></li>
                                Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development
                                <li><strong>Ethics:</strong></li>
                                Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.
                                <li><strong>Individual and team work:</strong></li>
                                Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings
                                <li><strong>Communication:</strong></li>
                                Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.
                                <li><strong>Project management and finance:</strong></li>
                                Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.
                                <li><strong>Life-long learning:</strong></li>
                                Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.

                            </ul>

                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ bgcolor: indigo[100] }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography><h3><strong>Program Outcomes (POES)</strong></h3></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <ol>
                                <li>To organise students to succeed in employment/profession and/or to pursue postgraduate & research education in Electronics & Communication Engineering and allied Engineering disciplines.</li>

                                <li>To provide students with a solid foundation in mathematical, scientific and engineering fundamentals required to formulate, analyze & solve engineering problems related to Electronics & Communication Engineering in particular and Engineering practice in general.</li>

                                <li>To prepare students with good scientific and engineering span so as to understand, analyze, design, create novel systems and solve multidisciplinary problems.</li>

                                <li>To inculcate in students professional and ethical attitude, effective communication proficiency, teamwork and an ability to relate engineering to global perspective issues and social context.</li>

                                <li>To provide students with an academic environment that cultivates excellence, ethics, transparency, leadership and encourage awareness of life-long learning.</li>
                            </ol>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Container>

            <Footer />
        </Box>
    )
}
