import EconomicEvaluation from "../../assets/evaluation_2008_recession.png";
import NBAClustering from "../../assets/NBA_Clustering.png";
import NBAGraph from "../../assets/NBA_Graph.png";
import RegimeScores from "../../assets/ds/regime_classification_scores.webp";
import ProphetJobs from "../../assets/ds/prophet_jobs_forecast.webp";
import RegimeForecast from "../../assets/ds/regime_forecast_summary.webp";
import NBATradeScenario from "../../assets/ds/nba_trade_scenario.webp";
import NBAShapTradeValue from "../../assets/ds/nba_shap_trade_value.webp";

const projectData2 = [
  {
    title: "Economic Regime Radar",
    badge: "Capstone Project",
    period: "Apr 2025",
    about: "Forecasting tool that predicts U.S. macroeconomic regimes using hybrid time-series models and SHAP interpretability.",
    role: "Led end-to-end model development, building a hybrid pipeline with XGBoost, Prophet, and VAR; engineered lag features, applied SMOTE balancing, and visualized interpretability with SHAP.",
    metrics: [
      { value: "83.7%", label: "Accuracy on 49 randomly held-out quarters" },
      { value: "0.933", label: "Recession F1 on 7 held-out quarters" },
    ],
    highlights: [
      "Problem: traditional economic forecasts are described as vague and too late to act on, so CFOs, fund managers, and central banks need a clear forward signal of the next quarter's regime (Boom, Stable, Slowdown, Recession).",
      "Approach: built lag and 4-quarter rolling features from FRED and BLS economic indicators, forecast indicators with VAR, Prophet, and XGBoost, then classified regimes with a SMOTE-balanced XGBoost model explained by SHAP.",
      "Result: reproduced the rule-based regime labels on a 49-quarter random holdout with 83.7% accuracy and Recession F1 0.933 (7 quarters); Slowdown was the weakest class at F1 0.692 (13 quarters).",
    ],
    tools: ["XGBoost", "Prophet", "statsmodels", "SHAP", "imbalanced-learn", "scikit-learn", "pandas", "SQLite"],
    images: [
      {
        src: EconomicEvaluation,
        alt: "Evaluation around the 2008 downturn: regime-change detection lead time, SHAP feature importance over time, and classification errors",
      },
      {
        src: RegimeScores,
        alt: "Economic regimes by quarter with the model's regime-change prediction score",
      },
      {
        src: ProphetJobs,
        alt: "Prophet forecast of jobs added after COVID with a 95% interval",
      },
      {
        src: RegimeForecast,
        alt: "2025 regime forecast summary with SHAP drivers",
      },
    ],
    links: [
      {
        type: "presentation",
        label: "Presentation (PDF)",
        href: "https://github.com/Makster04/FINAL_CAPSTONE_PROJECT/blob/main/Final_Capstone_Project_Presentation.pdf?raw=1",
      },
      {
        type: "notebook",
        label: "Notebook",
        href: "https://github.com/Makster04/FINAL_CAPSTONE_PROJECT/blob/main/Notebook.ipynb",
      },
      {
        type: "github",
        label: "GitHub Repo",
        href: "https://github.com/Makster04/FINAL_CAPSTONE_PROJECT",
      },
    ],
  },
  {
    title: "NBA Trade Analyzer",
    badge: "Phase 4 Project",
    period: "Mar 2025",
    about: "Machine learning project that evaluates NBA trade fairness by clustering players into archetypes and calculating interpretable trade value metrics.",
    role: "Designed unsupervised clustering and supervised trade-value models; built interpretable insights using SHAP and dimensionality reduction (PCA, t-SNE).",
    metrics: [
      { value: "0.972", label: "Trade Value Index R², 10-fold CV, 184 players" },
      { value: "0.960", label: "Salary Cap Impact test R², tuned, 184 players" },
      { value: "0.927", label: "Player Fit Index test R², from 184 players" },
    ],
    highlights: [
      "Problem: existing NBA trade models are often subjective and lack transparency, so front offices need an objective way to judge trade fairness across player performance, team fit, and salary.",
      "Approach: merged Basketball-Reference stats, team ratings, and contracts for 184 players in SQLite, clustered 18 scaled stats into 3 archetypes with K-Means, and scored players with three formula-based indices.",
      "Result: Random Forests predicted the indices with R² of 0.927 (Player Fit, test split), 0.972 (Trade Value, 10-fold CV), and 0.960 (Salary Cap Impact, test split); SHAP plots show which inputs raise or lower each score.",
    ],
    tools: ["pandas", "SQLite", "scikit-learn", "SHAP", "Matplotlib", "seaborn", "NumPy"],
    images: [
      {
        src: NBAClustering,
        alt: "K-Means player clusters shown with PCA and t-SNE",
      },
      {
        src: NBATradeScenario,
        alt: "Trade scenario chart plotting Trade Value Index against Player Fit Index for example players",
      },
      {
        src: NBAShapTradeValue,
        alt: "SHAP summary of the features driving the Trade Value Index",
      },
    ],
    links: [
      {
        type: "presentation",
        label: "Presentation (PDF)",
        href: "https://github.com/Makster04/Phase_4_Project/blob/main/PowerPoint_Phase4Project.pdf?raw=1",
      },
      {
        type: "notebook",
        label: "Notebook",
        href: "https://github.com/Makster04/Phase_4_Project/blob/main/Project.ipynb",
      },
      {
        type: "github",
        label: "GitHub Repo",
        href: "https://github.com/Makster04/Phase_4_Project",
      },
    ],
  },
  {
    title: "NBA Trade Market Dashboard",
    badge: "Tableau Dashboard",
    period: "",
    about: "Interactive Tableau dashboard that benchmarks team trade positioning across player talent, contract efficiency, and financial flexibility.",
    role: "Designed and implemented the dashboard architecture.",
    metrics: [],
    highlights: [
      "Purpose: benchmark each team's trade positioning across player talent, contract efficiency, and financial flexibility.",
      "Metric: a Trade Health Index (THI) built from Z-scored KPIs.",
      "Interactivity: dynamic filters plus LOD and parameter controls.",
    ],
    tools: ["Tableau", "SQL", "Excel / CSV", "Python (data prep)"],
    images: [
      {
        src: NBAGraph,
        alt: "Chart of cap space versus payroll tax burden for each NBA team",
      },
    ],
    links: [
      {
        type: "dashboard",
        label: "View Live Dashboard",
        href: "https://public.tableau.com/app/profile/mak.trnka/viz/NBATradeMarkets/Dashboard2",
      },
    ],
  },
];

export default projectData2;
