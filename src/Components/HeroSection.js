import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "./Colors";
import space from "./space.png";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const [themeMode] = useContext(ThemeContext);

  return (
    <div id="heroSection">
      <Container
        maxWidth="false"
        id={themeMode === "light" ? "contLight" : "contDark"}
      >
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Lora&family=Noto+Sans+Miao&family=Ubuntu&display=swap');
        </style>
        <Box
          sx={{
            height: { md: "80vh", xs: "100vh", sm: "70vh" },
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: { md: "space-evenly", xs: "center" },
            alignItems: "center",
            alignContent: { xs: "space-evenly", md: "center" },
            flexWrap: "wrap",
          }}
        >
          <Card
            sx={{
              backgroundColor: "transparent",
              pointerEvents: "none",
              marginBottom: "20px",
            }}
            elevation={0}
          >
            <CardMedia
              component="img"
              image={space}
              alt="space man"
              height="300"
              sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            />
          </Card>
          <Card
            sx={{
              width: "400px",
              height: "300px",
              backgroundColor: "transparent",
            }}
            elevation={0}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: { md: "1.7rem", xs: "1.5rem" },
                  color: "white",
                  fontFamily: "Noto Sans Miao",
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "25%",
                  marginRight: "25%",
                  // width: '150px',
                  borderRadius: "20px",
                  backgroundColor: "#151957",
                  marginBottom: { md: "10px", xs: "0" },
                }}
              >
                Hello, I am
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "2.5rem", xs: "2rem" },
                  color: `${currentTheme.foreground}`,
                  fontFamily: "PT Serif",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                Himanshu Baghel
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { md: "1.8rem", xs: "1.5rem" },
                  color: `${currentTheme.foreground}`,
                  fontFamily: "Lora",
                }}
              >
                (Frontend Developer)
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  fontSize: { md: "1.5rem", xs: "1rem" },
                  color: `${currentTheme.foreground}`,
                  fontFamily: "monospace",
                }}
              >
                <HomeIcon sx={{ mr: "0.3rem", color: "green" }} />
                <a
                  style={{
                    marginRight: "0.5rem",
                    textDecoration: "none",
                    color: `${currentTheme.link}`,
                    marginBottom: { xs: "20px" },
                    fontFamily: "PT Serif",
                  }}
                  href="https://www.google.com/maps/place/Gwalior,+Madhya+Pradesh/@26.2141559,78.1908989,12z/data=!3m1!4b1!4m6!3m5!1s0x3976c5d1792291fb:0xff4fb56d65bc3adf!8m2!3d26.2124007!4d78.1772053!16zL20vMDE5Nl9o"
                >
                  Gwalior,
                </a>{" "}
                India
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
};
export default HeroSection;
