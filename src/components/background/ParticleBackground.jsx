import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#808080", // Gray color
          },
          image: "linear-gradient(135deg, blue 20%, black 100%)",
          position: "absolute",
          repeat: "no-repeat",
          size: "cover",
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: ["bubble", "repulse"], // Added 'repulse' mode for hover
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 5, // Increased quantity for more particles
            },
            bubble: {
              distance: 150,
              duration: 2,
              size: 10,
              opacity: 0.8,
            },
            repulse: {
              distance: 100, // Distance for repulse effect on hover
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#1CE5E5"],
          },
          links: {
            color: "#000000", // Changed the color of the links to black
            distance: 150, // Increased distance for links
            enable: true,
            opacity: 0.5, // Reduced opacity for better visual appeal
            width: 1.5,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out", // Changed to 'out' for smoother exit
            },
            random: true, // Enabled random movement
            speed: 2, // Increased speed for more dynamic motion
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800, // Adjusted for better performance
            },
            value: 100, // Reduced number of particles for performance
          },
          opacity: {
            value: { min: 0.3, max: 0.7 }, // Variable opacity for a subtle effect
          },
          shape: {
            type: ["circle", "triangle", "polygon", "hexegon"], // Added more shapes
            options: {
              star: {
                sides: 5,
              },
              polygon: {
                sides: 6,
              },
            },
          },
          size: {
            random: { enable: true, minimumValue: 5 },
            value: { min: 5, max: 15 }, // Variable size for more dynamic visuals
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesComponent;