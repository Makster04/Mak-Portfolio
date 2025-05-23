// Import Statements

import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import BoltIcon from "@mui/icons-material/Bolt";
import { Link } from "react-router-dom";
import FaceRoundedIcon from "@mui/icons-material/FaceRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FolderSharedRoundedIcon from "@mui/icons-material/FolderSharedRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import { BsGithub } from "react-icons/bs";

// Data

const pages = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Software Projects", href: "/project" },
  { text: "Travel Blog (In the works)", href: "/travel" },
  { text: "Data Science Projects", href: "/Project2" },
  { text: "Contact", href: "/contact" },
  { text: "Fork Project", href: "https://github.com/Makster04/Mak-portfolio" },
];
const pageIcons = [
  HomeRoundedIcon,
  FaceRoundedIcon,
  FolderSharedRoundedIcon,
  FolderSharedRoundedIcon,
  FolderSharedRoundedIcon,
  CallRoundedIcon,
  BsGithub,
];

// Component Definition

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [bgColor, setBgColor] = useState("#000050");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor("#000033"); // Darker color when scrolled
    } else {
      setBgColor("#000050"); // Original color
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: bgColor, transition: "background-color 0.3s" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BoltIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "gold",
              textDecoration: "none",
            }}
          >
            Mak Trnka
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="left">
                    <Link to={page.href}>{page.text}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <BoltIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Mak Trnka
          </Typography>
          <Box
            justifyContent="flex-end"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page, index) => {
              const Icon = pageIcons[index];
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <Button
                    className="header-buttons"
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "flex",
                      fontFamily: "poppins",
                      fontSize: 16,
                      alignItems: "center",
                      marginRight: "1.5rem",
                    }}
                  >
                    <Icon style={{ marginRight: "0.8rem" }} />
                    <Link to={page.href}>
                      <Typography color="white">{page.text}</Typography>
                    </Link>
                  </Button>
                </div>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

// Export Component

export default Header;
