import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

import React, { useContext } from "react";

import ThemeContext from "../Context/ThemeContext";
import AppTheme from "./Colors";
import reactHooks from "./react hooks.png";
import reactRouter from "./reactRouter.png";

const Articles = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const [themeMode] = useContext(ThemeContext);

  return (
    <div id="articles">
      <Container
        id={
          themeMode === "light"
            ? "articleBackgroundLight"
            : "articleBackgroundDark"
        }
        maxWidth="false"
        sx={{
          backgroundColor: `${currentTheme.articleBackground}`,
          paddingBottom: "20px",
        }}
      >
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Mukta&family=PT+Serif:wght@700&display=swap');
        </style>
        <Typography
          sx={{
            fontFamily: "PT Serif",
            fontSize: { md: "2.2rem", xs: "1.8rem" },
            textAlign: "center",
            color: `${currentTheme.JumboHeading}`,
            textDecoration: { xs: "underline", md: "none" },
            textShadow: `1px 5px 2px  ${currentTheme.articleHeading}`,
          }}
        >
          Articles
        </Typography>
        <Box
          sx={{
            height: { md: "100%", xs: "100%" },
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: {
              md: "space-evenly",
              sm: "space-around",
              xs: "center",
            },
            alignItems: "center",
            flexWrap: "wrap",
            padding: "10px",
          }}
        >
          <Card
            sx={{
              maxWidth: { md: 350, sm: 280 },
              backgroundColor: `${currentTheme.articleCardBackground}`,
              color: `${currentTheme.foreground}`,
              // marginBottom:{xs:'30px'},
              borderRadius: "15px",
              cursor: "text",
            }}
          >
            <CardMedia
              component="img"
              height="250"
              image={reactHooks}
              alt="react"
              style={{ cursor: "text", objectFit: "fill" }}
            />
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontFamily: "Mukta",
                  cursor: "text",
                  marginBottom: "25px",
                  display: "flex",
                  flexDirection: "row",
                  gap: "5px",
                }}
              >
                React Hooks
                <a
                  style={{
                    color: "red",
                    display: "flex",
                    alignItems: "center",
                  }}
                  href="https://dev.to/himanshubaghel07/react-hooks-31mp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkIcon />
                </a>
              </Typography>
              <Typography
                sx={{ fontFamily: "Mukta", cursor: "text", fontSize: "1rem" }}
              >
                Hooks are react feature that was introduced in React 16.8 and
                this allows the developers to use state and react other features
                in functional components
              </Typography>
            </CardContent>
          </Card>
          <br />
          <Card
            sx={{
              maxWidth: { md: 350, sm: 280 },
              backgroundColor: `${currentTheme.articleCardBackground}`,
              color: `${currentTheme.foreground}`,
              // marginBottom:{xs:'40px'},
              // marginTop:{md:'10px'},
              borderRadius: "15px",
            }}
          >
            <CardMedia
              component="img"
              height="250"
              image={reactRouter}
              alt="web"
              style={{ cursor: "text", objectFit: "fill" }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  fontFamily: "Mukta",
                  cursor: "text",
                  marginBottom: "25px",
                  display: "flex",
                  flexDirection: "row",
                  gap: "5px",
                }}
              >
                React Router
                <a
                  style={{
                    color: "red",
                    display: "flex",
                    alignItems: "center",
                  }}
                  href="https://dev.to/himanshubaghel07/react-router-21k8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkIcon />
                </a>
              </Typography>
              <Typography
                sx={{ fontFamily: "Mukta", cursor: "text", fontSize: "1rem" }}
              >
                React Router is a popular library used for handling routing in
                React applications. In this article, I'll show you how someone
                can use React router and with example.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
};
export default Articles;
