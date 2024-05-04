import React from 'react';

import './Home.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { SocialIcon } from 'react-social-icons/component'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import CardMedia from '@mui/material/CardMedia';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Avatar from '@mui/material/Avatar';

import 'react-social-icons/github'
import 'react-social-icons/linkedin'

import { CiLocationOn } from "react-icons/ci";
import Stack from '@mui/material/Stack';
import video from './assets/5FE78265-C4D4-446D-A134-7CF36D918D8D.mp4';



// Define a functional component



const card = (
    <React.Fragment>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px', }}>
            <Avatar alt="" src="https://media.licdn.com/dms/image/D5616AQEajJP_AOl7Hg/profile-displaybackgroundimage-shrink_350_1400/0/1683527364963?e=1720051200&v=beta&t=VPyHRYguSa6Laywy6S26xyOeqYJ9fyB7h6MSO2LyHk4" />
        </div>

        <CardActions style={{ justifyContent: 'center' }}>

            <SocialIcon target="_blank" url="https://github.com/andrea-fu-123" />
            <SocialIcon target="_blank" url="https://www.linkedin.com/in/andrea-fu-219841175/" />

        </CardActions>
        <CardContent>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CiLocationOn />
                <div style={{ marginLeft: '5px' }}>
                    <Typography variant="h6" component="div">
                        Andrea.cy.fu@gmail.com
                    </Typography>
                </div>


            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body2">
                    Previous Web and Mobile QA Co-op @ Cambio Earth Systems | 4th year Computer Science Student
                    <br />

                </Typography>
            </div>



        </CardContent>

    </React.Fragment>
);

const Home = () => {
    return (
        <div>
            <Stack spacing={2}>
                <Box sx={{
                    maxWidth: 900, marginTop: '50px',
                    maxHeight: '1000px',
                    marginBottom: '20px',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)'
                }}>

                    <CardMedia
                        component="img"

                        height="200"
                        image='https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    />
                    <div className='topBar'>
                        <a href="mailto:andrea.cy.fu@gmail.com">
                            <Button variant="contained">Mail</Button>
                        </a>
                    </div>

                    <Card variant="outlined">{card}</Card>

                </Box>
                <Box sx={{
                    maxWidth: 900, marginTop: '50px', maxHeight: '1000px',
                    marginBottom: '20px',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)'
                }}>
                    <Typography variant="h6" component="div">Full Stack React Budgeting App</Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Full stack budgeting React app. Uses Google Sign in to support user profiles. Uses Chart.js to display each month's spending and earnings.
                        Uses Summary table to keep track of the a spendable 80% of paycheck amount and total spent on each paycheck. Demo also viewable in full screen.
                    </Typography>
                    <div style={{ maxWidth: '100%', height: 'auto' }}>
                        <video
                            style={{ width: '30%', height: '30%' }}
                            autoplay
                            controls
                        >
                            <source src={video} type="video/mp4"/>
                            Your browser does not support HTML video.
                        </video>
                    </div>
                </Box>
                <Box sx={{
                    maxWidth: 900, marginTop: '50px', maxHeight: '40vh',
                    marginBottom: '20px',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)'
                }}>
                    <div style={{ marginLeft: '5px' }}>
                        <Typography variant="h6" component="div">Content Creator Personal Site</Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            An in-progress website for a Twitch creator using MUI and other React components.
                            Contents approved by client and to be deployed on Github Pages in private repository.
                        </Typography>
                    </div>
                    <div style={{ maxWidth: '100%', height: 'auto' }}>
                        <img src="https://i.ibb.co/hgvcZ7w/Screenshot-2024-05-03-at-4-50-34-PM.png" alt= "hero section" style={{ maxWidth: '100%', height: 'auto' }}></img>
                        <img src="https://i.ibb.co/bQNRBtK/Screenshot-2024-05-03-at-4-53-50-PM.png" alt = "main-website" style={{ maxWidth: '100%', height: 'auto' }}></img>
                    </div>

                </Box>

            </Stack>














        </div >

    );
};

// Export the component as the default export
export default Home;