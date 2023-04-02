import { Box, Container, Typography } from '@mui/material'
import React, { useContext } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import ThemeContext from '../Context/ThemeContext';
import AppTheme from './Colors';
import { Margin } from '@mui/icons-material';
const Contact = () => {
    const theme = useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]
    const [themeMode] = useContext(ThemeContext)
    return (
        <div id='contact'>
            <Container maxWidth='false'
                id={themeMode === 'light' ? 'ContactLight' : 'ContactDark'}
                sx={{
                    marginTop: '-10px',
                    borderBottom: '5px solid black'
                }}
            >
             <style>
  @import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&family=Space+Grotesk:wght@600&family=Ubuntu:wght@300&display=swap');
</style>
                <br />
                <Typography
                    gutterBottom variant="h4" component="div"
                    sx={{
                        fontFamily: 'PT Serif',
                        cursor: 'text', color: currentTheme.ProjectBackground,
                        textAlign: 'center',
                        padding: '5px',
                    }}>
                    Connect with me
                </Typography>
                <Box
                    sx={{
                        height: { md: '30vh', xs: '70%' },
                        display: 'flex',
                        justifyContent:'center',
                        alignItems: 'center',
                        flexDirection:{xs:'column',md:'row'},
                        alignContent:{xs:'center'},
                        flexWrap: 'wrap',
                        color: currentTheme.ContactForeground,
                    
                    }}
                >
                    <Typography
                        gutterBottom variant="h5" component="div"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            fontFamily: 'monospace',
                            cursor: 'text',
                            marginBottom: '30px',
                            marginTop: '10px'
                        }}>
                       <a href="https://www.linkedin.com/in/--himanshubaghel-007-/" style={{textDecoration:'none',color: currentTheme.ContactForeground,fontFamily:'Ubuntu'}}> LinkedIn
                            <LinkedInIcon
                                sx={{
                                    ml: '0.2rem',
                                    mr:'1rem',
                                    color:'blue',
                                    fontSize: '2rem',
                                }} />
                        </a>
                    </Typography>
                    <Typography
                        gutterBottom variant="h5" component="div"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            fontFamily: 'monospace',
                            cursor: 'text',
                            marginBottom: '30px',
                            marginTop: '10px'
                        }}>
                        <a href="https://github.com/himanshu-baghel07" style={{textDecoration:'none',color: currentTheme.ContactForeground,fontFamily:'Ubuntu'}}>GitHub
                            <GitHubIcon
                                sx={{ ml: '0.2rem',mr:'1rem', fontSize: '2rem', color:currentTheme.ContactForeground }} />
                        </a>
                    </Typography>
                    <Typography
                        gutterBottom variant="h5" component="div" sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            fontFamily: 'monospace',
                            cursor: 'text',
                            marginBottom: '30px',
                            marginTop: '10px'
                        }}>
                       <a href="https://twitter.com/himanshubaghel0" style={{textDecoration:'none',color: currentTheme.ContactForeground,fontFamily:'Ubuntu'}} > Twitter
                            <TwitterIcon sx={{ ml: '0.2rem',mr:'1rem', fontSize: '2rem', color: '#00acee' }} />
                        </a>
                    </Typography>
                    <Typography
                        gutterBottom variant="h5" component="div" sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            fontFamily: 'monospace',
                            cursor: 'text',
                            marginBottom: '30px',
                            marginTop: '10px'
                        }}>
                       <a href="https://dev.to/himanshubaghel07" style={{textDecoration:'none',color: currentTheme.ContactForeground,fontFamily:'Ubuntu'}} >DEV.to
                            <LogoDevIcon sx={{ ml: '0.5rem', fontSize: '2rem', color: 'black'}} />
                        </a>
                    </Typography>
                </Box>
                <h3 style={{
                    textAlign: 'center',
                    color: currentTheme.ContactForeground,
                    fontSize: '1.5rem',
                    fontFamily: 'Space Grotesk'
                }}>
                    Built by Himanshu Baghel</h3>
            </Container>
        </div>
    )
}
export default Contact