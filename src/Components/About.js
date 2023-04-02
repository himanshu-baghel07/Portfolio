import {
    Box,
    Card,
    CardContent,
    Container,
    Typography
} from '@mui/material'
import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from './Colors'

const About = () => {
    const theme = useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]
    const [themeMode] = useContext(ThemeContext)
    return (
        <div id='about'>
            <Container maxWidth='false'
                sx={{
                    backgroundColor: '#F05454',
                    opacity: 1,
                    backgroundImage: 'radial-gradient(' + currentTheme.aboutForeground + ' 1.6px, ' + currentTheme.aboutBackground + ' 1.6px)',
                    backgroundSize: '32px 32px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}
            >
              <style>
  @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
</style>
                <Box
                    sx={{
                        height: {md:'60vh',xs:'100%'},
                        backgroundColor: 'transparent',
                        marginBottom:{xs:'10px'},
                        marginTop:{xs:'10px'}
                    }}
                >
                </Box>
                <Card 
                 id={themeMode === 'light' ? 'AboutLight' : 'AboutDark'}
                sx={{
                    maxWidth: { xs: '85%', md: '80%' },
                    boxShadow: '2px 2px 15px 1px ' + currentTheme.aboutShadow + ' ',
                    display: 'flex',
                    flexWrap: 'wrap',
                    backgroundColor: currentTheme.aboutSectionBackground,
                    color: currentTheme.aboutSectionForeground,
                    marginBottom:{xs:'30px'},
                    marginTop:{xs:'30px'},
                    borderRadius:'15px',
                    
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: { xs: '100%', md: '100%' },
                        
                    }}>
                       
                            <CardContent>
                                <Typography variant='h5' sx={{
                                    textAlign: 'center',
                                    border: '1px solid black',
                                    backgroundColor: currentTheme.aboutHeadingBackground,
                                    color: currentTheme.aboutHeadingForeground,
                                    cursor:'text',
                                    fontFamily: 'Mukta'
                                }}>About Me</Typography>
                                <Typography gutterBottom sx={{ fontFamily: 'Mukta', marginTop: '25px',cursor:'text',fontSize:'1.1rem' }}>
                                    Hi there! My name is Himanshu Baghel and I'm a frontend developer with a passion for
                                    building beautiful and intuitive user interfaces.
                                    I refined my skills in a variety of technologies,
                                    including JavaScript, React, HTML-5, Material UI, CSS-3, Bootstrap, Redux, Git, and APIs.
                                </Typography>
                            </CardContent>
                   
                    </Box>
                </Card>
            </Container>
        </div>
    )
}
export default About