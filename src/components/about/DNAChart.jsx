import React, { useState, useEffect, useRef } from "react";
import {
  PieChart, Pie, Cell, BarChart, Bar,
  XAxis, YAxis, Tooltip, ResponsiveContainer,
} from "recharts";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ─── Each country ISO (zero-padded) → the exact region label it belongs to ───
// If that label doesn't exist in the active tab, the country stays blank
const COUNTRY_TO_REGION = {
  "070": "🇧🇦🇭🇷🇲🇪🇷🇸 Bosnian, Croatian, Montenegrin & Serbian",
  "191": "🇧🇦🇭🇷🇲🇪🇷🇸 Bosnian, Croatian, Montenegrin & Serbian",
  "499": "🇧🇦🇭🇷🇲🇪🇷🇸 Bosnian, Croatian, Montenegrin & Serbian",
  "688": "🇧🇦🇭🇷🇲🇪🇷🇸 Bosnian, Croatian, Montenegrin & Serbian",
  "008": "🇦🇱🇲🇰 Albanian & Macedonian",
  "807": "🇦🇱🇲🇰 Albanian & Macedonian",
  "300": "🇬🇷 Broadly Greek & Balkan",
  "203": "🇨🇿🇭🇺🇸🇰🇵🇱 Czech, Hungarian, Slovak & Southern Polish",
  "348": "🇨🇿🇭🇺🇸🇰🇵🇱 Czech, Hungarian, Slovak & Southern Polish",
  "703": "🇨🇿🇭🇺🇸🇰🇵🇱 Czech, Hungarian, Slovak & Southern Polish",
  "616": "🇨🇿🇭🇺🇸🇰🇵🇱 Czech, Hungarian, Slovak & Southern Polish",
  "705": "🇸🇮 Slovenian",
  "040": "🇦🇹🇩🇪 Austrian & Southern German",
  "276": "🇦🇹🇩🇪 Austrian & Southern German",
  "428": "🇱🇻 Latvian",
  "792": "🇹🇷 Anatolian",
};
// ─── Confidence level data ────────────────────────────────────────────────────
// 100
// 90
//80
//70
//0
//
// ─── Confidence level data ────────────────────────────────────────────────────
const CONFIDENCE_LEVELS = {
  ci50: {
    label: "50%", subtitle: "50% CONFIDENCE INTERVAL — MOST SPECIFIC, MANY (MIS)ASSUMPTIONS", maxDomain: 85,
    data: [
      { region: "🇧🇦🇭🇷🇲🇪🇷🇸 Bosnian, Croatian, Montenegrin & Serbian", percent: 80.4, color: "#f5a623" },
      { region: "🇨🇿🇭🇺🇸🇰🇵🇱 Czech, Hungarian, Slovak & Southern Polish", percent: 14.0, color: "#c0392b" },
      { region: "🇸🇮 Slovenian",                  percent: 1.7, color: "#9b2335" },
      { region: "🇦🇹🇩🇪 Austrian & Southern German", percent: 1.7, color: "#9b2335" },
      { region: "🇱🇻 Latvian",                    percent: 1.1, color: "#7b1fa2" },
      { region: "🇹🇷 Anatolian",                  percent: 0.7, color: "#6a1b9a" },
      { region: "🇦🇱🇲🇰 Albanian & Macedonian",   percent: 0.4, color: "#4a148c" },
    ],
  },
  ci70: {
    label: "70%", subtitle: "70% CONFIDENCE INTERVAL — MOST BALANCED", maxDomain: 85,
    data: [
      { region: "🇧🇦🇭🇷🇲🇪🇷🇸 Bosnian, Croatian, Montenegrin & Serbian", percent: 66.7, color: "#f5a623" },
      { region: "Broadly European",           percent: 22.3, color: "#f0822a" },
      { region: "Broadly Central & Eastern European", percent: 5.3, color: "#e03e3e" },
      { region: "🇨🇿🇭🇺🇸🇰🇵🇱 Czech, Hungarian, Slovak & Southern Polish", percent: 2.3, color: "#c0392b" },
      { region: "🇬🇷 Broadly Greek & Balkan",   percent: 1.3, color: "#9b2335" },
      { region: "🇸🇮 Slovenian",                percent: 0.9, color: "#7b1fa2" },
      { region: "🇹🇷 Anatolian",                percent: 0.6, color: "#6a1b9a" },
      { region: "🇦🇹🇩🇪 Austrian & Southern German", percent: 0.5, color: "#4a148c" },
      { region: "Unassigned",                  percent: 0.1, color: "#646262" },
    ],
  },
  ci90: {
    label: "90%", subtitle: "90% CONFIDENCE INTERVAL — MOST BROAD, ONLY WHAT'S CERTAIN", maxDomain: 85,
    data: [
      { region: "🇧🇦🇭🇷🇲🇪🇷🇸 Bosnian, Croatian, Montenegrin & Serbian", percent: 51.4, color: "#f5a623" },
      { region: "Broadly European",           percent: 43.8, color: "#f0822a" },
      { region: "Broadly Central & Eastern European", percent: 1.4, color: "#9b2335" },
      { region: "Unassigned",                 percent: 1.1, color: "#646262" },
      { region: "🇬🇷 Broadly Greek & Balkan",  percent: 0.9, color: "#7b1fa2" },
      { region: "🇨🇿🇭🇺🇸🇰🇵🇱 Czech, Hungarian, Slovak & Southern Polish", percent: 0.8, color: "#7b1fa2" },
      { region: "🇹🇷 Anatolian",               percent: 0.5, color: "#6a1b9a" },
      { region: "🇸🇮 Slovenian",               percent: 0.1, color: "#4a148c" },
    ],
  },
};

const TABS = [
  { key: "ci50", label: "50%" },
  { key: "ci70", label: "70%" },
  { key: "ci90", label: "90%" },
];

// ─── Tooltips ─────────────────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div style={{
      background: "#0d0d0d", border: `1px solid ${d.color}`, borderRadius: 6,
      padding: "8px 14px", fontFamily: "'Space Mono', monospace", fontSize: 13,
      color: "#f1f1f1", boxShadow: `0 0 14px ${d.color}55`,
    }}>
      <div style={{ color: d.color, fontWeight: 700 }}>{d.region}</div>
      <div>{d.percent}%</div>
    </div>
  );
};

const CustomBarTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: "#0d0d0d", border: `1px solid #e63946`, borderRadius: 6,
      padding: "8px 14px", fontFamily: "'Space Mono', monospace", fontSize: 13, color: "#f1f1f1",
    }}>
      <div style={{ color: "#e63946", fontWeight: 700 }}>{label}</div>
      <div>{payload[0].value}%</div>
    </div>
  );
};

// ─── Pie label ────────────────────────────────────────────────────────────────
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, payload }) => {
  if (payload.percent < 2) return null;
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="#fff" textAnchor="middle" dominantBaseline="central"
      style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 700 }}>
      {payload.percent.toFixed(1)}%
    </text>
  );
};

// ─── Map — colors pulled live from active tab's data ─────────────────────────
const AncestryMap = ({ tabData }) => {
  const [tooltip, setTooltip] = useState(null);

  // Build a lookup: region label → color, from the current tab's data
  const regionColorMap = Object.fromEntries(tabData.map((d) => [d.region, d.color]));

  const getCountryColor = (isoCode) => {
    const regionLabel = COUNTRY_TO_REGION[isoCode];
    if (!regionLabel) return null;
    return regionColorMap[regionLabel] || null; // null = not in this tab → blank
  };

  // Build legend only from regions that actually have countries on the map in this tab
  const visibleRegions = tabData.filter((d) =>
    Object.values(COUNTRY_TO_REGION).includes(d.region)
  );

  return (
    <div>
      <div style={{ color: "#888888", fontSize: 10, letterSpacing: 2, textAlign: "center", marginBottom: 8 }}>
        GEOGRAPHIC ORIGINS
      </div>
      <div style={{
        background: "#696a6d", borderRadius: 8, border: "1px solid #1e1e1e",
        overflow: "hidden", position: "relative",
      }}>
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{ rotate: [-20, -52, 0], scale: 680 }}
          width={620} height={400}
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const id = String(geo.id).padStart(3, "0");
                const color = getCountryColor(id);
                const isHighlighted = !!color;
                return (
                  <Geography key={geo.rsmKey} geography={geo}
                    fill={isHighlighted ? color : "#161616"}
                    stroke="#0d0d0d" strokeWidth={0.5}
                    onMouseEnter={() => isHighlighted && setTooltip(geo.properties.name)}
                    onMouseLeave={() => setTooltip(null)}
                    style={{
                      default: { outline: "none" },
                      hover: {
                        outline: "none",
                        fill: isHighlighted ? color : "#161616",
                        filter: isHighlighted ? "brightness(1.4)" : "none",
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        {tooltip && (
          <div style={{
            position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)",
            background: "#0d0d0d", border: "1px solid #333", borderRadius: 6,
            padding: "3px 10px", fontFamily: "'Space Mono', monospace",
            fontSize: 10, color: "#ccc", pointerEvents: "none", whiteSpace: "nowrap",
          }}>
            {tooltip}
          </div>
        )}
      </div>

      {/* Legend — only shows regions visible on the map for this tab */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px 12px", marginTop: 8, justifyContent: "center" }}>
        {visibleRegions.map(({ region, color }) => (
          <div key={region} style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: color, flexShrink: 0 }} />
            <span style={{ color: "#555", fontSize: 9, fontFamily: "'Space Mono', monospace" }}>
              {region}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function DNAChart() {
  const [activeTab, setActiveTab]     = useState("ci50");
  const [activeIndex, setActiveIndex] = useState(null);
  const [visible, setVisible]         = useState(false);
  const ref = useRef(null);

  const { data: DNA_DATA, subtitle, maxDomain } = CONFIDENCE_LEVELS[activeTab];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleTabChange = (key) => {
    setActiveIndex(null);
    setActiveTab(key);
  };

  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: "opacity 0.7s ease, transform 0.7s ease",
      margin: "48px 0", padding: "36px 24px",
      background: "linear-gradient(135deg, #0d0d0d 0%, #111318 100%)",
      border: "1px solid #222", borderRadius: 16,
      boxShadow: "0 8px 40px rgba(230,57,70,0.12)",
      fontFamily: "'Space Mono', monospace",
    }}>

      {/* Header */}
      <div style={{
        display: "flex", flexWrap: "wrap", alignItems: "center",
        justifyContent: "space-between", gap: 16, marginBottom: 8,
      }}>
        <div>
          <div style={{
            background: "linear-gradient(90deg, #e63946, #f4a261)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            fontSize: 20, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase",
          }}>
            🧬 DNA ANCESTRY — 23andMe
          </div>
          <div style={{ color: "#555", fontSize: 10, marginTop: 4, letterSpacing: 2 }}>
            {subtitle}
          </div>
        </div>
        <div style={{
          display: "flex", background: "#0a0a0a", border: "1px solid #2a2a2a",
          borderRadius: 999, padding: 3, gap: 2,
        }}>
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button key={tab.key} onClick={() => handleTabChange(tab.key)} style={{
                padding: "6px 14px", borderRadius: 999, border: "none", cursor: "pointer",
                fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 700,
                letterSpacing: 1, transition: "all 0.22s ease",
                background: isActive ? "linear-gradient(90deg, #e63946, #f4a261)" : "transparent",
                color: isActive ? "#fff" : "#555",
                boxShadow: isActive ? "0 0 12px rgba(230,57,70,0.35)" : "none",
              }}>
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Two-column layout */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: 24,
        justifyContent: "center", alignItems: "flex-start", marginTop: 28,
      }}>

        {/* LEFT: Pie + legend */}
        <div style={{ flex: "1 1 300px", minWidth: 280, maxWidth: 380 }}>
          <div style={{ color: "#888", fontSize: 10, letterSpacing: 2, textAlign: "center", marginBottom: 10 }}>
            COMPOSITION
          </div>
          <ResponsiveContainer width="100%" height={270}>
            <PieChart>
              <Pie
                data={DNA_DATA} cx="50%" cy="50%"
                outerRadius={110} innerRadius={40} dataKey="percent"
                labelLine={false} label={renderCustomLabel}
                onMouseEnter={(_, i) => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                stroke="none" isAnimationActive animationBegin={0} animationDuration={500}
              >
                {DNA_DATA.map((entry, index) => (
                  <Cell key={entry.region} fill={entry.color}
                    opacity={activeIndex === null || activeIndex === index ? 1 : 0.35}
                    style={{ cursor: "pointer", transition: "opacity 0.2s" }}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: "flex", flexDirection: "column", gap: 5, marginTop: 6 }}>
            {DNA_DATA.map((d, i) => (
              <div key={d.region}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                style={{
                  display: "flex", alignItems: "center", gap: 5, cursor: "pointer",
                  opacity: activeIndex === null || activeIndex === i ? 1 : 0.3,
                  transition: "opacity 0.2s",
                }}
              >
                <div style={{ width: 10, height: 10, borderRadius: 2, background: d.color, flexShrink: 0 }} />
                <span style={{ color: "#bbb", fontSize: 11 }}>{d.region}</span>
                <span style={{ color: d.color, marginLeft: "auto", fontWeight: 700, fontSize: 11 }}>
                  {d.percent}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{
          width: 1, alignSelf: "stretch",
          background: "linear-gradient(to bottom, transparent, #2a2a2a, transparent)",
          flexShrink: 0,
        }} />

        {/* RIGHT: Bar + Map stacked */}
        <div style={{ flex: "1 1 300px", minWidth: 280, maxWidth: 440, display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <div style={{ color: "#888", fontSize: 10, letterSpacing: 2, textAlign: "center", marginBottom: 10 }}>
              RANKED BREAKDOWN
            </div>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart
                data={[...DNA_DATA].sort((a, b) => b.percent - a.percent)}
                layout="vertical" margin={{ top: 0, right: 24, left: 0, bottom: 0 }}
                barCategoryGap="18%"
              >
                <XAxis type="number" domain={[0, maxDomain]}
                  tick={{ fill: "#555", fontSize: 10, fontFamily: "'Space Mono', monospace" }}
                  axisLine={{ stroke: "#1e1e1e" }} tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                />
                <YAxis type="category" dataKey="region" width={200}
                  tick={{ fill: "#999", fontSize: 9, fontFamily: "'Space Mono', monospace" }}
                  axisLine={false} tickLine={false}
                />
                <Tooltip content={<CustomBarTooltip />} cursor={{ fill: "rgba(255,255,255,0.02)" }} />
                <Bar dataKey="percent" radius={[0, 4, 4, 0]} isAnimationActive animationDuration={500}>
                  {[...DNA_DATA].sort((a, b) => b.percent - a.percent).map((entry) => (
                    <Cell key={entry.region} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Map receives the active tab's data so colors are always in sync */}
          <AncestryMap tabData={DNA_DATA} />
        </div>
      </div>

      {/* Footer */}
      <div style={{
        textAlign: "center", marginTop: 24, color: "#333", fontSize: 10,
        letterSpacing: 1.5, borderTop: "1px solid #161616", paddingTop: 16,
      }}>
        SOURCE: 23andMe GENETIC TESTING · RESULTS MAY UPDATE AS REFERENCE PANELS EVOLVE
      </div>
    </div>
  );
}
