import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { keyframes } from "@emotion/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";

// Theme
const ACCENT = "#32CD30";
const ACCENT_SOFT = "rgba(50, 205, 48, 0.25)";
const ACCENT_GLOW = "rgba(50, 205, 48, 0.45)";

// Animations
const pulse = keyframes`
  0%, 100% { text-shadow: 0 0 8px rgba(50, 205, 48, 0.35), 0 0 10px #000; }
  50%      { text-shadow: 0 0 24px rgba(50, 205, 48, 0.9), 0 0 10px #000; }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// Contact links
const contacts = [
  {
    label: "LinkedIn",
    detail: "Let's connect",
    href: "https://www.linkedin.com/in/mak-trnka/",
    Icon: BsLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    detail: "See my code",
    href: "https://github.com/Makster04",
    Icon: BsGithub,
    external: true,
  },
  {
    label: "Handshake",
    detail: "View my profile",
    href: "https://gwu.joinhandshake.com/profiles/maktrnka",
    Icon: FaHandshake,
    external: true,
  },
  {
    label: "Email",
    detail: "maktrnka@gmail.com",
    href: "mailto:maktrnka@gmail.com",
    Icon: HiMailOpen,
    external: false,
  },
];

// Single contact card
const ContactCard = ({ label, detail, href, Icon, external, index }) => (
  <Box
    component="a"
    href={href}
    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    aria-label={`${label}: ${detail}`}
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.75rem",
      padding: { xs: "1.5rem 1rem", md: "2rem 1rem" },
      borderRadius: "18px",
      border: `1px solid ${ACCENT_SOFT}`,
      backgroundColor: "rgba(12, 12, 12, 0.6)",
      backdropFilter: "blur(8px)",
      textDecoration: "none",
      color: "white",
      opacity: 0,
      animation: `${fadeUp} 0.6s ease-out forwards`,
      animationDelay: `${0.15 + index * 0.1}s`,
      transition:
        "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease",
      "& .contact-icon": {
        fontSize: { xs: "2.75rem", md: "3.25rem" },
        color: ACCENT,
        transition: "transform 0.25s ease, filter 0.25s ease",
      },
      "&:hover, &:focus-visible": {
        transform: "translateY(-6px)",
        borderColor: ACCENT,
        backgroundColor: "rgba(20, 20, 20, 0.75)",
        boxShadow: `0 10px 30px -10px ${ACCENT_GLOW}`,
        outline: "none",
      },
      "&:hover .contact-icon, &:focus-visible .contact-icon": {
        transform: "scale(1.12)",
        filter: `drop-shadow(0 0 10px ${ACCENT_GLOW})`,
      },
    }}
  >
    <Icon className="contact-icon" />
    <Typography
      component="span"
      sx={{ fontFamily: "Fira Code, monospace", fontWeight: 600, fontSize: "1.1rem" }}
    >
      {label}
    </Typography>
    <Typography
      component="span"
      sx={{
        fontSize: "0.85rem",
        color: "rgba(255, 255, 255, 0.65)",
        wordBreak: "break-word",
        textAlign: "center",
      }}
    >
      {detail}
    </Typography>
  </Box>
);

// Component Definition
const Contact = () => {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        position: "relative",
        zIndex: 2,
        backgroundColor: "transparent",
        padding: { xs: "6rem 1.25rem", md: "10rem 2rem" },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontFamily: "Fira Code, monospace",
          fontSize: { xs: "2rem", sm: "2.75rem", md: "3.5rem" },
          fontWeight: 500,
          lineHeight: 1.2,
          color: "white",
          textShadow: "0 0 10px #000",
          marginBottom: "1.25rem",
          animation: `${fadeUp} 0.6s ease-out both`,
        }}
      >
        Have a{" "}
        <Box
          component="span"
          sx={{ color: ACCENT, fontWeight: 700, animation: `${pulse} 2.5s ease-in-out infinite` }}
        >
          QUESTION
        </Box>{" "}
        on your mind?
      </Typography>

      <Typography
        sx={{
          maxWidth: 560,
          margin: "0 auto 3.5rem",
          fontSize: { xs: "1rem", md: "1.15rem" },
          lineHeight: 1.7,
          color: "rgba(255, 255, 255, 0.8)",
          textShadow: "0 0 8px #000",
          animation: `${fadeUp} 0.6s ease-out 0.08s both`,
        }}
      >
        Want to talk about a project, an opportunity, or just say hi? Reach out on any
        of the platforms below. I'll get back to you soon.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: { xs: "1rem", md: "1.5rem" },
          maxWidth: 960,
          margin: "0 auto",
        }}
      >
        {contacts.map((contact, index) => (
          <ContactCard key={contact.label} index={index} {...contact} />
        ))}
      </Box>
    </Box>
  );
};

// Export Component
export default Contact;
