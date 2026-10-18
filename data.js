/* ═══════════════════════════════════════════════════════════════════
   data.js — Syed Mohammad Hamzah Portfolio Data Store
   ═══════════════════════════════════════════════════════════════════
   Centralized data file for managing:
   1. Resume / CV Configuration (Single file path for View & Download)
   2. Projects (2-3 sentence summaries, tech tags, and working links)
   3. Certifications (4 credentials with editable titles, issuers, & links)
   4. Learning Journey (Current Focus: Machine Learning)

   HOW TO EDIT:
   - Resume: Replace 'resume.pdf' in the project root directory. Both
     the 'View Resume' and 'Download Resume' buttons will automatically
     use your new file without modifying any other code.
   - Projects: Update URLs or descriptions in the `projects` array.
   - Certifications: Update certificate titles or paste certificate URLs
     in the `certificates` array.
   - Learning: Update current learning topics in `learningJourney`.
   ═══════════════════════════════════════════════════════════════════ */

const PORTFOLIO_DATA = {
  // ─────────────────────────────────────────────────────────────────
  // 1. RESUME / CV CONFIGURATION
  // ─────────────────────────────────────────────────────────────────
  // Place your resume PDF in the website root directory with this filename.
  // Both View and Download buttons point to this exact file.
  resume: {
    filePath: "resume.pdf",
    downloadName: "Syed_Mohammad_Hamzah_Resume.pdf",
    leadText:
      "Explore my complete technical toolkit, data science internship experience, and academic background in a clean, recruiter-friendly format.",
    note: "File location: resume.pdf (drop your updated resume directly into the website folder)"
  },

  // ─────────────────────────────────────────────────────────────────
  // 2. CURRENTLY LEARNING / LEARNING JOURNEY
  // ─────────────────────────────────────────────────────────────────
  learningJourney: {
    sectionLabel: "// Current Focus",
    sectionTitle: "Learning Journey",
    leadText:
      "Having built a strong foundation in Python, data analysis, and relational databases, I am currently dedicating my primary focus to mastering Machine Learning algorithms, statistical modeling, and predictive workflows.",
    currentFocusTag: "Machine Learning",
    tracks: [
      {
        id: "foundation",
        phase: "Phase 01 · Strong Foundation",
        title: "Data Science Core & Analytics",
        status: "completed",
        statusBadge: "✓ Strong Base Established",
        summary:
          "Mastered core programming, data manipulation, visualization, and database skills necessary for end-to-end data exploration.",
        topics: [
          "Python (NumPy & Pandas) for high-performance data processing and cleaning",
          "Exploratory Data Analysis (EDA) and data pipeline engineering",
          "Statistical & Interactive Visualizations (Matplotlib, Seaborn, Plotly)",
          "Relational Database Querying & Aggregations (SQL / MySQL)",
          "Interactive Web Dashboards & KPI Reporting (Streamlit, Power BI)"
        ]
      },
      {
        id: "machine-learning",
        phase: "Phase 02 · Current Active Focus",
        title: "Machine Learning & Statistical Modeling",
        status: "active",
        statusBadge: "● Active Focus · In Progress",
        summary:
          "Actively studying machine learning algorithms, model evaluation techniques, and scikit-learn workflow pipelines.",
        topics: [
          "Supervised Learning: Linear & Logistic Regression, Decision Trees, Ensembles (Random Forest, Gradient Boosting)",
          "Unsupervised Learning: Clustering techniques (K-Means, Hierarchical), PCA / Dimensionality Reduction",
          "Model Evaluation & Diagnostics: Cross-validation, ROC-AUC, Confusion Matrix, Bias-Variance Tradeoff",
          "Feature Engineering & Selection: Scaling, one-hot encoding, imputation, interaction terms",
          "Scikit-learn Pipelines: Modular training workflows, hyperparameter tuning with GridSearchCV"
        ]
      },
      {
        id: "deep-learning",
        phase: "Phase 03 · Next Milestone",
        title: "Deep Learning & Production ML",
        status: "upcoming",
        statusBadge: "○ Upcoming Milestone",
        summary:
          "Future technical milestones planned following comprehensive machine learning mastery.",
        topics: [
          "Deep Learning foundations and neural network architectures (ANNs, CNNs, RNNs)",
          "Modern Deep Learning frameworks: PyTorch and TensorFlow",
          "Model serving, REST APIs, and basic MLOps monitoring practices"
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // 3. PROJECTS DATA (CONCISE 2-3 SENTENCE SUMMARIES)
  // ─────────────────────────────────────────────────────────────────
  projects: [
    {
      id: "election-campaign-analyzer",
      projectNumber: "01",
      category: "Data Science · Interactive Dashboard",
      filterGroup: "featured",
      title: "Election Campaign Analyzer (2004–2024)",
      subtitle: "20 Years of Indian Lok Sabha General Election Intelligence",
      isHighlighted: true,
      achievementBadge: "🏆 Best Project — Data Science In-house Internship/Training, Sipher Web Pvt. Ltd.",
      // Concise 2-3 sentence summary:
      description:
        "A production-ready data science pipeline and multi-page Streamlit dashboard analyzing five consecutive Indian Lok Sabha general election cycles (2004–2024). It standardizes 20 years of inconsistent Election Commission records, engineers electoral metrics like victory margins and seat flip dynamics, and generates 13 publication-quality visualizations to deliver actionable campaign intelligence.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit"],
      githubUrl: "https://github.com/syedhamzah-dev/election-campaign-analysis",
      githubLabel: "View on GitHub",
      liveDemoUrl: "https://election-analyzer.streamlit.app/",
      liveDemoLabel: "Live Demo"
    },
    {
      id: "healthcare-efficiency-explorer",
      projectNumber: "02",
      category: "Data Science · 60 Days Claude AI Challenge",
      filterGroup: "featured",
      title: "Healthcare Efficiency Explorer",
      subtitle: "Which countries get the most life expectancy for their healthcare dollar?",
      isHighlighted: true,
      challengeBadge: "⚡ 60 Days Claude AI Challenge",
      // Concise 2-3 sentence summary:
      description:
        "An interactive data dashboard built as a 10-day capstone for the 60 Days Claude AI Challenge, ranking ~193 nations on how efficiently healthcare expenditure translates into life expectancy. Using World Bank Open Data, it computes a transparent percentile-based Efficiency Index and visualizes global spending trends through interactive Plotly scatter plots and outlier spotlights.",
      technologies: ["Python", "Streamlit", "Pandas", "Plotly", "pytest"],
      githubUrl: "https://github.com/syedhamzah-dev/Claude-AI-Challenge",
      githubLabel: "View Challenge Repository",
      liveDemoUrl: "https://healthcare-efficiency-explorer.streamlit.app/",
      liveDemoLabel: "Live Healthcare Dashboard"
    },
    {
      id: "gurgaon-real-estate",
      projectNumber: "03",
      category: "Data Analysis · EDA",
      filterGroup: "analysis",
      title: "Gurgaon Real Estate Analysis",
      subtitle: "Property Pricing Trends & Micro-Market Locality Insights",
      // Concise 2-3 sentence summary:
      description:
        "An end-to-end exploratory data analysis project examining property listings across diverse micro-markets in Gurgaon. It implements robust data cleaning pipelines with Pandas and uncovers critical pricing drivers, locality trends, and property valuation patterns through rich statistical visualizations using Matplotlib and Seaborn.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
      githubUrl: "https://github.com/syedhamzah-dev/gurgaon-real-estate-analysis",
      githubLabel: "View on GitHub",
      liveDemoUrl: null
    },
    {
      id: "customer-behaviour",
      projectNumber: "04",
      category: "Data Analysis & BI Dashboard",
      filterGroup: "analysis",
      title: "Customer Behaviour Analysis",
      subtitle: "Retail Purchasing Patterns & Interactive Power BI Dashboard",
      // Concise 2-3 sentence summary:
      description:
        "A retail intelligence project evaluating consumer purchasing patterns and product performance from transaction records. It preprocesses data with Python, executes relational aggregation queries in MySQL, and delivers an interactive Power BI dashboard featuring dynamic KPIs and revenue distributions for business decision-making.",
      technologies: ["Python", "SQL (MySQL)", "Power BI", "Data Analysis"],
      githubUrl: "https://github.com/syedhamzah-dev/customer_behaviour_analysis",
      githubLabel: "View on GitHub",
      liveDemoUrl: null
    },
    {
      id: "interactive-data-viz",
      projectNumber: "05",
      category: "Web Visualization Practice",
      filterGroup: "practice",
      isPractice: true,
      title: "Interactive Data Viz Website",
      subtitle: "Client-Side DOM Manipulation & Dynamic Charting",
      // Concise 2-3 sentence summary:
      description:
        "A client-side frontend data visualization website built to practice interactive charting and DOM state manipulation with vanilla web technologies. It dynamically renders visual graphics without heavy external frameworks, demonstrating lightweight UI styling and responsive layouts.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Data Viz"],
      githubUrl: null,
      liveDemoUrl: "https://idyllic-biscochitos-96f0a4.netlify.app/",
      liveDemoLabel: "Live Demo"
    }
  ],

  // ─────────────────────────────────────────────────────────────────
  // 4. CERTIFICATIONS DATA (4 CREDENTIALS)
  // ─────────────────────────────────────────────────────────────────
  // Edit titles, issuing organizations, dates, or URLs directly here.
  certificates: [
    {
      id: "cert-claude",
      number: "01",
      title: "Claude AI — 60 Days Challenge",
      issuer: "AB Talks / Claude AI Challenge",
      badge: "60-Day Intensive",
      issueDate: null, // e.g. "2024" (add your certificate issue date if printed)
      url: null // Paste your certificate link or Google Drive URL here
    },
    {
      id: "cert-sipher",
      number: "02",
      title: "Data Science In-house Internship/Training — Sipher Web Pvt. Ltd.",
      issuer: "Sipher Web Pvt. Ltd.",
      badge: "Best Project Award",
      issueDate: null,
      url: null
    },
    {
      id: "cert-iu-da",
      number: "03",
      title: "Data Analytics — Integral University",
      issuer: "Integral University",
      badge: "Academic Certification",
      issueDate: null,
      url: null
    },
    {
      id: "cert-iu-linux",
      number: "04",
      title: "Linux Programming — Integral University",
      issuer: "Integral University",
      badge: "Academic Certification",
      issueDate: null,
      url: null
    }
  ]
};
