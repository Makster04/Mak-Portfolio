import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import "./ParticlesBackground.css";

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
            value: "#0a0a0a", // Very dark background
          },
          image: "linear-gradient(135deg, #001a00 20%, #000000 100%)", // Dark green to black gradient
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
              mode: ["connect", "bubble", "Attract"], // 'connect' mode for hover effect
            },
            resize: true,
          },
          modes: {
            connect: {
              distance: 100, // Distance for connecting particles
              links: {
                opacity: 0.5, // Opacity of the connecting lines
              },
            },
            push: {
              quantity: 5, // Increased quantity for more particles
            },
            bubble: {
              distance: 150,
              duration: 2,
              size: 10,
              opacity: 0.8,
            },
          },
        },
        particles: {
          color: {
            value: ["#00ff00", "#39ff14", "#32cd32", "#00ff41"], // Bright green variations
          },
          links: {
            color: "#00ff00", // Bright green links
            distance: 150, // Distance for linking particles
            enable: true,
            opacity: 0.4, // Slightly reduced opacity for green glow effect
            width: 1.5,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out", // Smooth exit
            },
            random: true, // Random movement
            speed: 2, // Increased speed for dynamic motion
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800, // Adjusted for performance
            },
            value: 100, // Number of particles
          },
          opacity: {
            value: { min: 0.3, max: 0.7 }, // Variable opacity
          },
          shape: {
            type: ["circle", "triangle", "polygon", "hexagon"], // More shapes
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
            value: { min: 5, max: 15 }, // Variable size
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesComponent;