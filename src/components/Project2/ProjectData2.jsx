const ProjectData2 = [
  {
    title: "Economic Regime Radar",
    subtitle: "Hybrid Regime Time-Series Pipeline Model",
    about: "Forecasts U.S. macroeconomic regimes using hybrid models and SHAP interpretability.",
    businessProblem: "CFOs and hedge funds lack proactive tools to anticipate downturns with lead time.",
    objective: "Forecast upcoming economic regimes with transparency and accuracy.",
    stakeholders: "CFOs, Hedge Funds, Central Banks, Fintech, Economists.",
    modelsUsed: "XGBoost, Prophet, VAR, SHAP, SMOTE, etc.",
    evaluationMetrics: [
      { label: "Accuracy", value: "82%" },
      { label: "F1 (Recession)", value: "0.72" },
      { label: "Lead Time", value: "3 quarters" }
    ],
    recommendations: "Use forecast outputs to plan capital, hiring, and portfolio shifts.",
    languages: "Python, SQL, pandas, SHAP, XGBoost.",
    nextSteps: "Deploy a dashboard, add LSTM, simulate policy impacts.",
    projectLink: "https://github.com/Makster04/FINAL_CAPSTONE_PROJECT",
    presentationLink: "https://github.com/Makster04/FINAL_CAPSTONE_PROJECT/blob/main/Final_Capstone_Project_Presentation.pdf",
    category: "Economics",
    color: "#3b82f6", // Blue
  },
  {
    title: "NBA Trade Analyzer",
    subtitle: "Unsupervised Interpretability Model",
    about: "Evaluates NBA trade fairness by clustering players and calculating interpretable trade value metrics.",
    businessProblem: "NBA front offices lack objective, explainable tools for assessing player fit, role, and salary fairness.",
    objective: "Cluster players into archetypes and predict trade fairness using SHAP-based insights.",
    stakeholders: "NBA GMs, analysts, fantasy sports tools, media, fans.",
    modelsUsed: "K-Means, Random Forest (fit/value), SHAP, PCA, t-SNE, etc.",
    evaluationMetrics: [
      { label: "R² (Trade Value)", value: "0.972" },
      { label: "R² (Fit Index)", value: "0.927" },
      { label: "R² (Salary)", value: "0.96" }
    ],
    recommendations: "Use Trade Value Index and Player Fit Index in real-time trade assessments.",
    languages: "Python, sklearn, SHAP, pandas, SQL, seaborn",
    nextSteps: "Add seasonal data trends; simulate trade chains; build a 'What-If' trade simulator.",
    projectLink: "https://github.com/Makster04/Phase_4_Project",
    presentationLink: "https://github.com/Makster04/Phase_4_Project/blob/main/PowerPoint_Phase4Project.pdf",
    category: "Sports Analytics",
    color: "#10b981", // Green
  }
];

export default ProjectData2;