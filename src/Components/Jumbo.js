import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Typography
} from "@mui/material";
import IosShareIcon from '@mui/icons-material/IosShare';

import React, { useContext } from "react";

import ThemeContext from "../Context/ThemeContext";
import AppTheme from "./Colors";
import react from './react.jpg'
import web from './web.jpg'


const Jumbo = () => {

    const theme = useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]
    return (
        <div id='jumbo'>
            <Container maxWidth="false" sx={{
                backgroundColor: `${currentTheme.jumboBackground}`,
              paddingBottom:'20px'
            }} >
       <style>
  @import url('https://fonts.googleapis.com/css2?family=Mukta&family=PT+Serif:wght@700&display=swap');
</style>
                  <Typography 
                        sx={{
                            fontFamily: 'PT Serif',
                            fontSize:{md:'2rem',xs:'1.8rem'},
                            textAlign: 'center',
                            color: `${currentTheme.JumboHeading}`,
                            textDecoration:{xs:'underline',md:'none'}
                        }}>
                        Certification Courses
                    </Typography>
                <Box
                    sx={{
                        height: { md: '100%', xs: '100%'},
                        backgroundColor: 'transparent',
                        display:'flex',
                        justifyContent: {md:'space-evenly',sm:'space-around',xs:'center'},
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    padding:'10px',
                    
                    }}
                >
                  
                    <Card sx={{
                        maxWidth: {md:350,sm:280},
                        backgroundColor: `${currentTheme.cardBackground}`,
                        color: `${currentTheme.foreground}`,
                        // marginBottom:{xs:'30px'},
                        borderRadius:'15px',
                        cursor:'text'
                    }}>
                        
                            <CardMedia
                                component="img"
                                height="300"
                                image={react}
                                alt="react"
                                style={{cursor:'text'}}
                            />
                            <CardContent >
                                <Typography variant="h6" component="div" sx={{ fontFamily: 'Mukta' ,cursor:'text',marginBottom:'25px'}}>
                                    ReactJS Developers Certification Course<a
                                        style={{ color: 'red' }}
                                        href="https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/2410/certificates/53635/7789047_53635.pdf?1675577916"
                                    ><IosShareIcon /></a>
                                </Typography>
                                <Typography  sx={{ fontFamily: 'Mukta',cursor:'text',fontSize:'1rem' }} >
                                    React allow developers to create reusable UI components that can be combined to create complex user interfaces and many more.
                                </Typography>
                            </CardContent>
                        
                    </Card>
                    <br />
                    <Card
                        sx={{
                            maxWidth:{md:350,sm:280},
                            backgroundColor: `${currentTheme.cardBackground}`,
                            color: `${currentTheme.foreground}`,
                            // marginBottom:{xs:'40px'},
                            // marginTop:{md:'10px'},
                            borderRadius:'15px'
                        }}>
                       
                            <CardMedia
                                component="img"
                                height="300"
                                image={web}
                                alt="web"
                                style={{cursor:'text'}}
                            />
                            <CardContent>
                                <Typography gutterBottom
                                    variant="h6"
                                    component="div"
                                    sx={{ fontFamily: 'Mukta',cursor:'text',marginBottom:'25px'}} >
                                    Responsive Web-Design Certification
                                    <a
                                        style={{ color: 'red' }}
                                        href="https://www.freecodecamp.org/certification/himbaghel/responsive-web-design"
                                    ><IosShareIcon /></a>
                                </Typography>
                                <Typography  sx={{ fontFamily: 'Mukta',cursor:'text' ,fontSize:'1rem'}}>
                                    In this Responsive Design course, I'll learn the languages like HTML and CSS and webpages that respond to different screen sizes.
                                </Typography>
                            </CardContent>
                     
                    </Card>
                </Box>
            </Container>
        </div>
    )
}
export default Jumbo