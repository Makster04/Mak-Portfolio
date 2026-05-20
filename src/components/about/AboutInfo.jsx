// AboutInfo.jsx
import React from "react";
import TechStack from "./TechStack";
import GitHubGraph from "./GitHubGraph";
import DNAChart from "./DNAChart";
import codeImage from "../../assets/bosnianparrot.gif";
import './AboutInfo.css';

const locationSteps = [
  { period: "1998–2024", place: "Bellevue, WA" },
  { period: "2024–2025", place: "NYC, NY" },
  { period: "2025–2026", place: "Bellevue, WA" },
  { period: "2026–Present", place: "Washington, D.C." },
];

const eduSteps = [
  { period: "2016–19", school: "Bellevue College", cred: "A.S. Sociology" },
  { period: "2019–22", school: "Univ. of Washington", cred: "B.A. Poli Sci & Int'l Studies" },
  { period: "2024", school: "Code Fellows", cred: "Certificate · Web Design" },
  { period: "2025", school: "Flatiron School", cred: "Certificate · Data Science" },
  { period: "2026", school: "George Washington Univ.", cred: "M.S. Data Science" },
];

const passions = [
  "Deep Conversations", "Gym Rat", "Globe-Trotter",
  "Political Nerd", "Tech Enthusiast", "Basketball",
  "Gaming Competitor", "Cinephile", "Data Wizard",
];

const traits = [
  "Infectious Energy", "Easygoing", "Goofy",
  "Boundless Creativity", "Genuine Compassion",
  "Unstoppable Curiosity", "Natural Entertainer",
];

const visions = [
  { num: "01", label: "ML / AI Engineer" },
  { num: "02", label: "Data Scientist" },
  { num: "03", label: "Podcast Empire" },
  { num: "04", label: "Tech Startup Founder" },
  { num: "05", label: "YouTube Sensation" },
  { num: "06", label: "Hollywood Breakthrough" },
];

const AboutInfo = () => {
  return (
    <div className="about-container">

      {/* ── HERO ── */}
      <header className="about-hero">
        <div className="hero-scan-line" />
        <h1 className="about-title">
          <span className="glitch" data-text="DISCOVER">DISCOVER</span>
          <span className="title-plain"> MY WORLD</span>
        </h1>
        <p className="about-tagline">
          Zdravo World! I'm{" "}
          <span className="hl-name">Mak Trnka</span>{" "}
          — Bosnian heritage, American roots, and coding in my DNA.
          If I can handle{" "}
          <span className="hl-accent">RAKIJA &amp; ĆEVAPI</span>,
          I can conquer{" "}
          <span className="hl-accent">ANY CODE CHALLENGE</span>.
        </p>
      </header>

      {/* ── BENTO GRID ── */}
      <div className="bento-grid">

        {/* Image */}
        <div className="bento-card card-image">
          <div className="img-frame">
            <img src={codeImage} alt="Mak Trnka" className="about-image" />
            <div className="img-corner tl" /><div className="img-corner tr" />
            <div className="img-corner bl" /><div className="img-corner br" />
          </div>
        </div>

        {/* Quick-stat cards */}
        <div className="bento-card card-stat">
          <span className="stat-label">BORN</span>
          <span className="stat-main">APR 12, 1998</span>
          <span className="stat-sub">Richmond, VA</span>
        </div>

        <div className="bento-card card-stat">
          <span className="stat-label">HERITAGE</span>
          <span className="stat-main flag">🇧🇦</span>
          <span className="stat-sub">Bosnia &amp; Herzegovina</span>
        </div>

        <div className="bento-card card-stat">
          <span className="stat-label">SIGN</span>
          <span className="stat-main aries-sign">♈</span>
          <span className="stat-sub">Aries</span>
        </div>

        <div className="bento-card card-stat card-languages">
          <span className="stat-label">LANGUAGES</span>
          <div className="lang-pills">
            <span className="lang-pill">EN</span>
            <span className="lang-pill">BS</span>
            <span className="lang-pill">SR</span>
            <span className="lang-pill">HR</span>
          </div>
        </div>

        {/* Location timeline */}
        <div className="bento-card card-timeline">
          <h3 className="card-heading"><span className="heading-icon">📍</span> LOCATION JOURNEY</h3>
          <div className="timeline">
            {locationSteps.map((s, i) => (
              <div className="tl-row" key={i}>
                <span className="tl-period">{s.period}</span>
                <div className="tl-line-wrap">
                  <div className="tl-dot" />
                  {i < locationSteps.length - 1 && <div className="tl-connector" />}
                </div>
                <span className="tl-place">{s.place}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education timeline */}
        <div className="bento-card card-timeline card-edu">
          <h3 className="card-heading"><span className="heading-icon">🎓</span> EDUCATION PATH</h3>
          <div className="timeline">
            {eduSteps.map((s, i) => (
              <div className="tl-row" key={i}>
                <span className="tl-period">{s.period}</span>
                <div className="tl-line-wrap">
                  <div className="tl-dot" />
                  {i < eduSteps.length - 1 && <div className="tl-connector" />}
                </div>
                <div className="tl-edu-info">
                  <span className="tl-place">{s.school}</span>
                  <span className="tl-cred">{s.cred}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>{/* /bento-grid */}

      {/* ── PASSIONS + TRAITS ── */}
      <div className="tags-row">
        <div className="tag-block">
          <h3 className="section-header">PASSIONS</h3>
          <div className="tag-cloud">
            {passions.map((p, i) => (
              <span className="tag tag-passion" key={i}>{p}</span>
            ))}
          </div>
        </div>
        <div className="tag-block">
          <h3 className="section-header">TRAITS</h3>
          <div className="tag-cloud">
            {traits.map((t, i) => (
              <span className="tag tag-trait" key={i}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── FUTURE VISIONS ── */}
      <div className="visions-section">
        <h3 className="section-header">FUTURE VISIONS</h3>
        <div className="visions-grid">
          {visions.map((v) => (
            <div className="vision-card" key={v.num}>
              <span className="vision-num">{v.num}</span>
              <span className="vision-label">{v.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SUB-COMPONENTS ── */}
      <DNAChart />

      <div className="tech-stack-section">
        <TechStack />
      </div>

      <GitHubGraph />
    </div>
  );
};

export default AboutInfo;
