import EconomicEvaluation from "../../assets/evaluation_2008_recession";
import NBAClustering from "../../assets/NBA_Clustering.png";
import NBAGraph from "../../assets/NBA_Graph.png";

const projectData2 = [
  {
    title: "Economic Regime Radar",
    about: "Forecasting tool that predicts U.S. macroeconomic regimes using hybrid time-series models and SHAP interpretability.",
    role: "Led end-to-end model development, building a hybrid pipeline with XGBoost, Prophet, and VAR; engineered lag features, applied SMOTE balancing, and visualized interpretability with SHAP.",
    languages: "Python, SQL, pandas, XGBoost, SHAP, Prophet, VAR",
    image: EconomicEvaluation,
    projectLink: "https://github.com/Makster04/FINAL_CAPSTONE_PROJECT",
  },
  {
    title: "NBA Trade Analyzer",
    about: "Machine learning project that evaluates NBA trade fairness by clustering players into archetypes and calculating interpretable trade value metrics.",
    role: "Designed unsupervised clustering and supervised trade-value models; built interpretable insights using SHAP and dimensionality reduction (PCA, t-SNE).",
    languages: "Python, sklearn, pandas, SQL, seaborn, SHAP",
    image: NBAClustering,
    projectLink: "https://github.com/Makster04/Phase_4_Project",
  },
  {
    title: "NBA Trade Market Dashboard",
    about: "Interactive Tableau dashboard that benchmarks team trade positioning across player talent, contract efficiency, and financial flexibility.",
    role: "Designed and implemented dashboard architecture; created Trade Health Index (THI) using Z-scored KPIs, built dynamic filters, and applied LOD/parameter controls for interactivity.",
    languages: "Tableau, SQL, Excel/CSV, Python (data prep)",
    image: NBAGraph,
    projectLink: "https://public.tableau.com/app/profile/mak.trnka/viz/NBATradeMarkets/NBATradeMarkets",
  },
];

export default projectData2;
