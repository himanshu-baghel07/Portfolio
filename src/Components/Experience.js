import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";

import React, { useContext } from "react";

import ThemeContext from "../Context/ThemeContext";
import AppTheme from "./Colors";
import { DateRange, Link, Work } from "@mui/icons-material";

const Experience = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <div id="experience">
      <Container
        maxWidth="false"
        sx={{
          backgroundColor: `${currentTheme.experienceBackground}`,
          paddingBottom: "20px",
        }}
      >
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Mukta&family=PT+Serif:wght@700&display=swap');
        </style>

        <Box
          component="section"
          sx={{
            padding: { xs: "40px 16px", md: "60px 24px" },
            backgroundColor: "transparent",
          }}
        >
          {/* Section Title */}
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
              marginBottom: "30px",
            }}
          >
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
              Frontend Developer at Block Stack
            </Typography>
          </Box>

          {/* Experience Card */}
          <Card
            elevation={3}
            sx={{
              maxWidth: "800px",
              margin: "0 auto",
              backgroundColor:
                currentTheme.expCardBackground || "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: `1px solid ${
                currentTheme.borderColor || "rgba(255, 255, 255, 0.1)"
              }`,
            }}
          >
            <CardContent sx={{ marginBottom: { md: "-20px" } }}>
              <Grid container spacing={4}>
                {/* Company Logo/Image area */}
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRight: {
                      md: `1px solid ${
                        currentTheme.borderColor || "rgba(255, 255, 255, 0.1)"
                      }`,
                    },
                    paddingRight: { md: 2 },
                    marginBottom: { xs: 2, md: 0 },
                  }}
                >
                  <Box
                    component="img"
                    src="https://blockstack.tech/wp-content/themes/blockstack/assets/images/logo-white.svg" // Replace with actual logo path
                    alt="Block Stack Logo"
                    sx={{
                      maxWidth: "100%",
                      height: "auto",
                      maxHeight: "80px",
                      filter:
                        currentTheme.mode === "dark"
                          ? "brightness(0.8) contrast(1.2)"
                          : "none",
                    }}
                  />
                </Grid>

                {/* Experience Details */}
                <Grid item xs={12} md={9}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 1,
                    }}
                  >
                    <Work
                      sx={{
                        marginRight: 1,
                        color: currentTheme.iconColor || "primary.main",
                      }}
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        color: currentTheme.headingColor || "text.primary",
                      }}
                    >
                      <strong>Block Stack</strong>
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 2,
                    }}
                  >
                    <DateRange
                      sx={{
                        marginRight: 1,
                        color: currentTheme.iconColor || "text.secondary",
                        fontSize: "1rem",
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: currentTheme.subtleText || "text.secondary",
                      }}
                    >
                      August 2023 - Present
                    </Typography>

                    <Box
                      sx={{
                        marginLeft: "auto",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Link
                        sx={{
                          marginRight: 0.5,
                          color: currentTheme.iconColor,
                          fontSize: "1rem",
                        }}
                      />
                      <a
                        href="https://blockstack.tech/"
                        target="_blank"
                        rel="noopener"
                        sx={{
                          color: currentTheme.linkColor || "primary.main",
                        }}
                      >
                        blockstack.tech
                      </a>
                    </Box>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: currentTheme.subtleText || "text.primary",
                      marginBottom: 2,
                    }}
                  >
                    Block Stack is a global Web 3.0 infrastructure company
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
};
export default Experience;
