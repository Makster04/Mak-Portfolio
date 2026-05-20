import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import "./ParticlesBackground.css";

// ─── Custom SVG shapes as data URLs ───────────────────────────────────────────
// Note: `#` must be encoded as `%23` inside data: URLs.
// The particle `color` config has no effect on `image`-type shapes,
// so the yellow fill is baked directly into each SVG.

const Y  = "%23f7f414"; // Yellow fill (%23 = #)
const YD = "%23c9bf00"; // Slightly darker yellow for depth

// ── 5-pointed star ──
const STAR = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><polygon points="25,2 31,18 48,18 35,28 40,46 25,35 10,46 15,28 2,18 19,18" fill="${Y}" stroke="${YD}" stroke-width="1"/></svg>`;

// ── Heraldic shield ──
const SHIELD = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 70"><path d="M30 4 L56 14 L56 36 Q56 58 30 68 Q4 58 4 36 L4 14 Z" fill="${Y}" stroke="${YD}" stroke-width="1.5"/><path d="M30 14 L46 21 L46 37 Q46 52 30 60 Q14 52 14 37 L14 21 Z" fill="${YD}" opacity="0.35"/></svg>`;

// ── Fleur-de-lis ──
const FLEUR = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125"><ellipse cx="50" cy="26" rx="13" ry="22" fill="${Y}"/><path d="M50 54 C38 54 16 46 13 31 C10 18 22 9 31 19 C28 13 29 6 35 10 L40 38 Z" fill="${Y}"/><path d="M50 54 C62 54 84 46 87 31 C90 18 78 9 69 19 C72 13 71 6 65 10 L60 38 Z" fill="${Y}"/><rect x="37" y="66" width="26" height="11" rx="3" fill="${Y}"/><path d="M34 77 L66 77 L63 94 L37 94 Z" fill="${Y}"/><rect x="34" y="94" width="32" height="9" rx="3" fill="${Y}"/></svg>`;

// ──────────────────────────────────────────────────────────────────────────────

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "#0a0a0a" },
          image: "linear-gradient(135deg, #12086c 20%, #020f70 100%)",
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
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: { quantity: 3 },
            repulse: {
              distance: 120,
              duration: 0.5,
              easing: "ease-out-quad",
            },
          },
        },
        particles: {
          links: {
            color: "#fff700",
            distance: 160,
            enable: true,
            opacity: 0.25,
            width: 1.2,
          },
          collisions: { enable: false },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "out" },
            random: true,
            speed: 1.4,
            straight: false,
          },
          number: {
            density: { enable: true, area: 900 },
            value: 75,
          },
          opacity: {
            value: { min: 0.45, max: 0.85 },
            animation: {
              enable: true,
              speed: 0.7,
              minimumValue: 0.2,
              sync: false,
            },
          },
          shape: {
            type: "image",
            options: {
              image: [
                { src: STAR,   width: 50,  height: 50  },
                { src: SHIELD, width: 60,  height: 70  },
                { src: FLEUR,  width: 100, height: 125 },
              ],
            },
          },
          size: {
            value: { min: 16, max: 34 },
            random: { enable: true },
          },
          rotate: {
            value: { min: 0, max: 360 },
            direction: "random",
            animation: {
              enable: true,
              speed: 4,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesComponent;
