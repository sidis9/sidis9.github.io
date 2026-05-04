// ─────────────────────────────────────────────────────────────────
// data.js — Siddhartha Baniya portfolio content
// Populated from real project work and resume.
// ─────────────────────────────────────────────────────────────────
 
const DATA = {
 
  // ── Identity ─────────────────────────────────────────────────
  name: "Siddhartha Baniya",
  role: "Marketing & Business Intelligence Analyst",
  tagline: "I build the dashboards, run the analysis, and translate both into decisions teams can actually act on. I've also run a DTC consumer brand from zero — so I know what the numbers look like from the operator side.",
  about: "Five-plus years working at the intersection of marketing and data. I built and ran my own direct-to-consumer brand from zero (2018–2023), and held a full-time marketing analytics role on a small B2B team in parallel — building dashboards in Power BI and Looker Studio, reconciling cross-platform data, and reporting weekly to leadership. I'm most interested in companies where the data team and the go-to-market team are in the same room.",
 
  contact: {
    email: "dis.baniya@gmail.com",
    linkedin: "linkedin.com/in/siddhartha-baniya",
    github: "github.com/sidis9",
  },
 
  // ── Projects ─────────────────────────────────────────────────
  // hero: true  →  the live-dashboard card (gets accent CTA)
  // pdf: true   →  show "Download PDF" link
  // link: url   →  external link (live dashboard, case study, etc.)
  projects: [
    {
      id: "edtech-funnel",
      title: "EdTech Funnel Analysis & Experimentation Strategy",
      subtitle: "Live Streamlit Dashboard · Python · Pandas · Plotly · Scipy · 32,593 students across 7 courses (OULAD)",
      description: "An interactive growth analytics dashboard analyzing where students drop off in an EdTech platform — and which experiments could improve activation, retention, and revenue. Built on the Open University Learning Analytics Dataset and deployed live on Streamlit Cloud.",
      results: [
        "18% of students log in but never start a course — the largest drop-off in the funnel",
        "Activated students are 2.4× more likely to pass (57.5% vs 23.9% completion rate)",
        "Modeled a 10% activation lift as approximately $652K in additional revenue (interactive simulator on the dashboard)",
        "Proposed three experiments with hypotheses and expected lift: guided onboarding flow (8–12%), progress streak nudges (10–15%), and a micro-assessment in lesson one (15–20%)",
      ],
      tags: ["Live Dashboard", "Streamlit", "Python", "Plotly", "Funnel Analysis", "Experiment Design"],
      hero: true,
      link: "https://sidis9-edtech-funnel.streamlit.app",
      linkLabel: "Open the live dashboard ↗",
    },
    {
      id: "mala-pasal",
      title: "Mala Pasal — Building a DTC Consumer Brand from Zero",
      subtitle: "Founder & Operator · 2018–2023 · Direct-to-consumer gemstone fine jewelry",
      description: "A five-year case study of running a real consumer brand: audience research, segmentation, positioning, go-to-market, and the full launch-to-retention loop. What started as an undergraduate experiment became my first real product marketing practice and the source of the data instincts I still rely on.",
      results: [
        "Segmented audience into Premium Buyer (25–44, authenticity-driven) vs Budget Buyer (18–24, style-driven) using polls and surveys before committing inventory",
        "Built a four-stage GTM motion: awareness teasers → poll-based validation → limited-quantity drops → UGC-driven growth",
        "Reached six-figure (NPR) revenue in three months, broke even in 15 days, grew followers 0 → 1,300+ with above-average repeat-purchase rate",
        "Reduced CAC by ~30% and reached ~20× ROAS at peak through positioning, social proof, and segmented messaging",
      ],
      tags: ["Consumer DTC", "Segmentation", "Go-to-Market", "Meta Ads", "Retention", "Positioning"],
      pdf: true,
      pdfPath: "projects/mala-pasal.pdf",
    },
    {
      id: "email-audit",
      title: "Email Lifecycle Audit & A/B Test Plan — B2B Childcare SaaS",
      subtitle: "Marketing Analytics Assessment · 22-email sequence across MQL → Demo → Post-Demo → Rescheduling → Opportunity",
      description: "An end-to-end audit of a B2B SaaS lifecycle email program serving the U.S. childcare market. Diagnosed where high-intent prospects were dropping off, identified what was working, and designed a 4-email pilot test with control/test split, success metrics, and a 12-week timeline.",
      results: [
        "Identified the binding risk: high-intent prospects dropping off at MQL and Rescheduling stages — MQL sequence decays from 24% open at EM1 to 12% by EM5",
        "Surfaced a 2× lift on vertical-specific copy (43.6% open vs 24% for generic) — recommended building dedicated vertical content for EM2 through EM5",
        "Flagged EM4 unsubscribe spike at 2.05% (highest in dataset) — recommended removing EM4–EM5 from MQL sequence for 90 days to protect list quality",
        "Designed a 4-email pilot: hypothesis, audience split, message flow, HubSpot workflows, A/B testing, success metrics (open rate >30%, demo booking +15%, unsubscribe <1%)",
      ],
      tags: ["HubSpot", "Email Lifecycle", "A/B Testing", "B2B SaaS", "MQL Funnel", "Test Design"],
      pdf: true,
      pdfPath: "projects/email-audit.pdf",
    },
    {
      id: "fintech-growth",
      title: "Fintech Product Growth — How Early Activation Predicts Retention & LTV",
      subtitle: "Product Analytics · PostgreSQL · Python · Pandas · Matplotlib · 4,312 users",
      description: "An end-to-end activation analysis using the UCI Online Retail II dataset modeled as a fintech lifecycle. Defined activation as two transactions within seven days, then measured retention, engagement, and lifetime-value differences across cohorts.",
      results: [
        "Only ~10% of users activated early — a major engagement bottleneck",
        "Activated users generated ~5× higher lifetime value ($7,266 vs $1,452) and ~3× more transactions (11.5 vs 3.7)",
        "Retention curves stabilized around 25–30% for activated users vs ~10% for non-activated",
        "Modeled a 5-point activation lift (10% → 15%) as approximately $1.19M in additional lifetime revenue",
      ],
      tags: ["PostgreSQL", "Python", "Cohort Analysis", "LTV", "Activation", "Retention"],
      pdf: true,
      pdfPath: "projects/fintech-growth.pdf",
    },
    {
      id: "fraud-detection",
      title: "Detecting Anomalous Corporate Expense Transactions with ML",
      subtitle: "Machine Learning Case Study · Decision Tree · Random Forest · RapidMiner · 6.36M transactions",
      description: "A supervised classification project exploring how machine learning can enhance fraud detection in corporate finance workflows where rule-based systems miss subtle or emerging patterns. Built and compared two models on a 6.36M-row PaySim-style dataset.",
      results: [
        "Trained Decision Tree (baseline, interpretable) and Random Forest (ensemble, production-style) classifiers on 11 transaction features",
        "Random Forest outperformed: 99.88% accuracy, 99.91% precision, 50.28% recall, 0.782 AUC vs Decision Tree at 0.661 AUC",
        "Identified that fraudulent transactions concentrate in CASH_OUT and TRANSFER types with anomalous balance signatures",
        "Honest takeaway: 50% recall is the binding constraint for production — next iterations should explore class-imbalance handling, isolation-forest framing, and NLP on expense narratives",
      ],
      tags: ["Machine Learning", "Classification", "Random Forest", "RapidMiner", "Fraud Detection"],
      pdf: true,
      pdfPath: "projects/fraud-detection.pdf",
    },
    {
      id: "sentiment-analysis",
      title: "Sentiment Analysis on Customer Reviews",
      subtitle: "NLP & Voice-of-Customer Analytics · Sentiment scoring · Segment analysis · Themes",
      description: "An end-to-end sentiment analysis on customer review data — combining sentiment distribution, rating correlations, price-point patterns, segment comparisons, and text themes into actionable business recommendations.",
      results: [
        "55.2% of reviews scored negative, 30.0% positive, 14.8% neutral — diagnosed underlying dissatisfaction patterns",
        "Found a clear correlation between star ratings and sentiment scores (1-star: 0.22, 4-star: 0.55) — quantifying the experience gap to address",
        "Identified a price-point inflection at $12 where sentiment drops sharply (0.39) versus $10–$11 (above 0.6) — value-perception signal",
        "Translated findings into pricing, segmentation, and product-feedback recommendations for the customer-experience team",
      ],
      tags: ["NLP", "Voice of Customer", "Sentiment Analysis", "Segmentation", "Pricing Insight"],
      pdf: true,
      pdfPath: "projects/sentiment-analysis.pdf",
    },
    {
      id: "huckberry-retention",
      title: "Huckberry — Closing the First-to-Second Purchase Gap",
      subtitle: "DTC Retention Strategy · Public-data analysis · Three experiments",
      description: "A diagnostic of where Huckberry's retention model is leaking, drawn entirely from public customer reports and brand reporting. Two observations and three concrete experiments worth running.",
      results: [
        "House brands (Flint & Tinder, Proof, Wills) drive repeat purchase but suffer from inconsistent sizing — the highest-margin product is also the highest churn risk",
        "Email is positioned as the retention channel but the welcome flow captures zero behavioral or preference data and blasts a generic catalog within 24 hours",
        "Proposed: a post-purchase fit-feedback loop, a category-segmented welcome sequence, and a house-brand cohort retention analysis",
      ],
      tags: ["DTC Retention", "Email Lifecycle", "Cohort Analysis", "Experiment Design"],
      pdf: true,
      pdfPath: "projects/huckberry-retention.pdf",
    },
    {
      id: "crew-behavioral",
      title: "Crew — How Pocket-Based Budgeting Changes Spending Behavior",
      subtitle: "Behavioral Analysis · Inspired by Crew's pocket-based product",
      description: "A short behavioral analysis exploring how pre-spend pocket constraints change how users spend across essential vs discretionary categories — and what it implies for product messaging and onboarding.",
      results: [
        "Overspending is rare and isolated to discretionary categories; essentials (Groceries, Kids) stay stable — pre-spend constraints prevent accidental overspend",
        "Full-pocket spending happens intentionally in Fun categories — users treat pocket depletion as guilt-free, permissioned spending, not a budgeting failure",
        "Implication: pre-spend visibility shifts budgeting from reactive correction to proactive decision-making — frame spending to zero as success, not failure",
      ],
      tags: ["Behavioral Analytics", "Product Insight", "Excel Modeling"],
      pdf: true,
      pdfPath: "projects/crew-behavioral.pdf",
    },
    {
      id: "gorloks-research",
      title: "Webster University — Violence Prevention Awareness Research",
      subtitle: "Applied Research · MSBA Capstone-style study · 121 students",
      description: "A field study of violence-prevention awareness among Webster University students, designed and analyzed end-to-end. Measured eight awareness themes on a 0–2 scale, scored 121 student interactions, and compared domestic vs international cohorts.",
      results: [
        "Domestic students averaged 10.37 / 16 vs 5.69 / 16 for international students — a substantial knowledge gap across consent, Title IX, and campus resources",
        "Comfort seeking help was nearly identical across groups (3.12 vs 3.24) — the barrier is information, not motivation",
        "Recommended programmatic changes: orientation integration, multilingual materials, and explicit clarification of immigration-related misconceptions",
      ],
      tags: ["Applied Research", "Excel Statistics", "Survey Design", "Higher Ed"],
      pdf: true,
      pdfPath: "projects/gorloks-research.pdf",
    },
  ],
 
  // ── Skills ───────────────────────────────────────────────────
  skills: [
    {
      category: "Analytics & BI",
      items: [
        "SQL (CTEs, window functions, complex joins)",
        "Python (pandas, statistical analysis)",
        "Looker Studio · Tableau · Power BI",
        "Excel & Google Sheets (advanced — pivots, modeling)",
      ],
    },
    {
      category: "Marketing & Growth",
      items: [
        "HubSpot (custom reporting, workflows, lead scoring)",
        "Google Analytics 4 · Google Tag Manager",
        "Paid media (Meta Ads, Google Ads)",
        "Klaviyo (lifecycle email, segmentation)",
      ],
    },
    {
      category: "Data Practice",
      items: [
        "Attribution modeling · funnel analysis · cohort analysis",
        "A/B and multivariate testing · experiment design",
        "Cross-platform data validation & discrepancy reconciliation",
        "Streamlit (live dashboards & internal tools)",
      ],
    },
  ],
 
  // ── Experience ───────────────────────────────────────────────
  experience: [
    {
      role: "Marketing Lead & Founder",
      company: "Mala Pasal",
      period: "May 2018 — Dec 2023",
      bullets: [
        "Built and ran a direct-to-consumer gemstone fine jewelry brand from zero — owned acquisition, retention, attribution, dashboards, content, and customer analytics",
        "Reached six-figure (NPR) revenue in 3 months, ~20× ROAS at peak, ~30% CAC reduction over the run",
        "Built dashboards in Tableau and Looker Studio tracking CAC, ROAS, conversion rates, and customer behavior; delivered weekly performance reads and quarterly strategic reviews",
        "Implemented UTM-based attribution and funnel tracking; reconciled performance data across Google Analytics, ad platforms, and CRM",
      ],
    },
    {
      role: "Marketing Executive (BI Analyst)",
      company: "Smith & Fabricators Pvt. Ltd.",
      period: "Jan 2021 — Jan 2023",
      bullets: [
        "Built and maintained Power BI and Looker Studio dashboards consolidating GA4, HubSpot, Salesforce, and Google Ads data into weekly views for executive and operational audiences",
        "Wrote SQL queries (CTEs, window functions) to extract, validate, and consolidate marketing and CRM data across multiple platforms",
        "Mapped data dependencies between CRM, ad platforms, and analytics; documented data flows and source-of-truth systems to ensure reporting consistency",
        "Designed and analyzed A/B tests on creative, audience targeting, and landing pages; translated statistically meaningful results into recommendations adopted by marketing and creative leads",
      ],
    },
  ],
 
  // ── Education ────────────────────────────────────────────────
  education: [
    {
      degree: "M.S. Business Analytics (STEM-designated)",
      school: "Webster University, Saint Louis, MO",
      year: "2025",
      note: "GPA 3.9 / 4.0",
    },
    {
      degree: "B.A. Business Administration",
      school: "London Metropolitan University",
      year: "2021",
      note: "Upper Second Class Honours",
    },
  ],
 
};