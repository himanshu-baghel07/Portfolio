import { Box, Container, Card, CardContent, Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

import React, { useContext } from "react";

import ThemeContext from "../Context/ThemeContext";
import AppTheme from "./Colors";

const Projects = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const [themeMode] = useContext(ThemeContext);

  return (
    <div id="projects">
      <Container
        maxWidth="false"
        id={themeMode === "light" ? "projectLight" : "projectDark"}
        sx={{
          paddingBottom: "20px",
        }}
      >
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&family=Ubuntu:wght@300&display=swap');
        </style>
        <Typography
          gutterBottom
          component="div"
          sx={{
            fontFamily: "PT Serif",
            cursor: "text",

            color: currentTheme.ProjectBackground,
            borderRadius: "50px",

            fontSize: { md: "2.3rem", xs: "2rem" },
            textAlign: "center",
          }}
        >
          Projects:
        </Typography>
        <Box
          sx={{
            height: { md: "100%", xs: "100%" },
            display: "flex",
            justifyContent: { md: "space-evenly", xs: "center" },
            alignItems: "center",
            alignContent: { xs: "space-evenly" },
            flexWrap: "wrap",
            padding: "10px",
          }}
        >
          <Card
            id={themeMode === "light" ? "CardLight" : "CardDark"}
            sx={{
              maxWidth: 400,
              height: 300,
              color: currentTheme.CardForeground,
              borderRadius: "15px",
              margin: "10px",
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  cursor: "text",
                  fontFamily: "Ubuntu",
                  marginBottom: "50px",
                  marginTop: "30px",
                  display: "flex",
                  flexDirection: "row",
                  gap: "5px",
                }}
              >
                AnyNotess{" "}
                <a
                  href="https://anynotess.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <LaunchIcon
                    sx={{ fontSize: "25px", color: "red", paddingBottom: "0" }}
                  />
                </a>
              </Typography>
              <Typography
                variant="body1"
                sx={{ cursor: "text", fontFamily: "Ubuntu" }}
              >
                This is the note app and in this app, the user takes note which
                is automatically saved to the server, Before use of this user
                needs to create an account and sign in with this account.
              </Typography>
            </CardContent>
          </Card>
          <br />

          <Card
            id={themeMode === "light" ? "CardLight" : "CardDark"}
            sx={{
              maxWidth: 400,
              height: 300,
              color: currentTheme.CardForeground,
              borderRadius: "15px",
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  cursor: "text",
                  fontFamily: "Ubuntu",
                  marginBottom: "50px",
                  marginTop: "30px",
                  display: "flex",
                  flexDirection: "row",
                  gap: "5px",
                }}
              >
                Weather Finder{" "}
                <a
                  href="https://weather-app-ba5df.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <LaunchIcon sx={{ fontSize: "25px", color: "red" }} />
                </a>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Ubuntu",
                  cursor: "text",
                }}
              >
                In this web app, you can check the weather detail of any city.
                Details like the city temperature, details (cloudy, sunny etc),
                sunrise, and sunset time also show many more—weather details.
              </Typography>
            </CardContent>
          </Card>
          <br />

          <Card
            id={themeMode === "light" ? "CardLight" : "CardDark"}
            sx={{
              maxWidth: 400,
              height: 300,
              color: currentTheme.CardForeground,
              borderRadius: "15px",
              margin: "10px",
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  cursor: "text",
                  fontFamily: "Ubuntu",
                  marginBottom: "50px",
                  marginTop: "30px",
                  display: "flex",
                  flexDirection: "row",
                  gap: "5px",
                }}
              >
                Todo App{" "}
                <a
                  href="https://todoapp-ef35a.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <LaunchIcon sx={{ fontSize: "25px", color: "red" }} />
                </a>
              </Typography>
              <Typography
                variant="body1"
                sx={{ cursor: "text", fontFamily: "Ubuntu" }}
              >
                In this app, users can create daily tasks and checklists. And it
                stores data locally. Implemented various effective design
                practices to create an easy-to-use user interface to increase
                user engagement and productivity
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
};
export default Projects;
