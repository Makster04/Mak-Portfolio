// Import Statements
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { IconContext } from "react-icons";

// Component Definition
const Contact = () => {
  // Component JSX
  return (
    <IconContext.Provider value={{ color: "#32CD30", size: "50px" }}>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#f5f5f5",
          padding: "3rem",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            marginBottom: "2rem",
            fontFamily: "Fira Code",
            color: "#333",
          }}
        >
          Have a <span style={{ color: "#32CD30" }}>Question</span> on your
          mind??
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "2rem", color: "#666" }}>
          Or just want to discuss a project? Contact me using any of the links below!
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ width: "100%", maxWidth: 360, margin: "0 auto" }}>
              <List>
                <ListItem disablePadding className="contact-list-item">
                  <ListItemButton
                    href="https://www.linkedin.com/in/mak-trnka/"
                    target="_blank"
                  >
                    <ListItemIcon>
                      <BsLinkedin className="contact-icon" />
                    </ListItemIcon>
                    <ListItemText primary="LinkedIn" className="contact-text" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className="contact-list-item">
                  <ListItemButton
                    href="https://github.com/Makster04"
                    target="_blank"
                  >
                    <ListItemIcon>
                      <BsGithub className="contact-icon" />
                    </ListItemIcon>
                    <ListItemText primary="GitHub" className="contact-text" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className="contact-list-item">
                  <ListItemButton
                    href="https://twitter.com/yourprofile"
                    target="_blank"
                  >
                    <ListItemIcon>
                      <BsTwitter className="contact-icon" />
                    </ListItemIcon>
                    <ListItemText primary="Twitter" className="contact-text" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding className="contact-list-item">
                  <ListItemButton
                    onClick={() =>
                      (window.location = "mailto:maktrnka@gmail.com")
                    }
                  >
                    <ListItemIcon>
                      <HiMailOpen className="contact-icon" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Mail (maktrnka@gmail.com)"
                      className="contact-text"
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </IconContext.Provider>
  );
};

// Export Component
export default Contact;