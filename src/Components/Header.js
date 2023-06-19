import {
  AppBar,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import propTypes from "prop-types";
import { Box } from "@mui/system";

import React, { useContext, useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "./Colors";

import AnchorLink from "react-anchor-link-smooth-scroll";

const drawerWidth = "100vw";
const drawerheight = "100vh";

const Header = () => {
  const windowGlobal = typeof window !== "undefined" && window;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  const handleScroll = () => {
    const offset = windowGlobal.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      windowGlobal.addEventListener("scroll", handleScroll);
      return () => {
        windowGlobal.removeEventListener("scroll", handleScroll);
      };
    }
  });

  const handleDrawerToggle = () => {
    setMobileOpen((isOpen) => !isOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <CloseIcon sx={{ fontSize: "40px", ml: 5, mt: 1, cursor: "pointer" }} />
      <Typography
        variant="h6"
        component="div"
        sx={{
          textAlign: "center",
          flexGrow: 1,
          fontSize: "3rem",
          fontWeight: 600,
          fontFamily: "monospace",
        }}
      >
        Menu
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <AnchorLink
                href="#heroSection"
                style={{
                  fontSize: "1.7rem",
                  textDecoration: "none",
                  color: `${currentTheme.foreground}`,
                }}
              >
                Home
              </AnchorLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <AnchorLink
                href="#about"
                style={{
                  fontSize: "1.7rem",
                  textDecoration: "none",
                  color: `${currentTheme.foreground}`,
                }}
              >
                About
              </AnchorLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <AnchorLink
                href="#jumbo"
                style={{
                  fontSize: "1.7rem",
                  textDecoration: "none",
                  color: `${currentTheme.foreground}`,
                }}
              >
                Certifications
              </AnchorLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <AnchorLink
                href="#projects"
                style={{
                  fontSize: "1.7rem",
                  textDecoration: "none",
                  color: `${currentTheme.foreground}`,
                }}
              >
                Projects
              </AnchorLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <AnchorLink
                href="#contact"
                style={{
                  fontSize: "1.7rem",
                  textDecoration: "none",
                  color: `${currentTheme.foreground}`,
                }}
              >
                Connect with me
              </AnchorLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "rgb(4, 4, 76)" }}>
      <CssBaseline />
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Cabin:wght@600&display=swap');
      </style>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: scrolled ? currentTheme.navColor : "transparent",
          color: "white",
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            aria-label="open-drawer"
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuOpenIcon
              sx={{ fontSize: "40px", color: `${currentTheme.foreground}` }}
            />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "right",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <Button sx={{ mr: 15, fontSize: "1.2rem", fontFamily: "Cabin" }}>
              <AnchorLink
                href="#heroSection"
                style={{
                  textDecoration: "none",
                  color: `${currentTheme.foreground}`,
                }}
              >
                Home
              </AnchorLink>
            </Button>

            <Button sx={{ mr: 15, fontSize: "1.2rem", fontFamily: "Cabin" }}>
              <AnchorLink
                href="#about"
                style={{
                  textDecoration: "none",
                  color: `${currentTheme.foreground}`,
                }}
              >
                About
              </AnchorLink>
            </Button>

            <Button sx={{ mr: 15, fontSize: "1.2rem", fontFamily: "Cabin" }}>
              <AnchorLink
                href="#projects"
                style={{
                  textDecoration: "none",
                  color: `${currentTheme.foreground}`,
                }}
              >
                Projects
              </AnchorLink>
            </Button>
          </Box>
          <ThemeToggler />
        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex" }} component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: "true" }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: drawerheight,
              backgroundColor: currentTheme.DrawerBackground,
              color: currentTheme.DrawerForeground,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
Header.propTypes = {
  window: propTypes.func,
};
export default Header;
