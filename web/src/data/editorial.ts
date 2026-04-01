export type EditorialMember = {
  id: string;
  name: string;
  /** Shown under the name, e.g. role or one-line credential */
  headline: string;
  /** Short educational line for the card */
  qualification: string;
  /** Path under /public; use null to always show placeholder */
  imageSrc: string | null;
  bioParagraphs: string[];
};

const PLACEHOLDER = "/editorial/placeholder-avatar.svg";

/**
 * Image files: add photos as /public/editorial/<filename>.
 * Supported: .jpg, .jpeg, .png, .webp — update `imageSrc` if your filenames differ.
 * Members without a file use the placeholder until you add an image.
 */
export const editorialTeam: EditorialMember[] = [
  {
    id: "japji-kaur",
    name: "Dr. Japji Kaur",
    headline: "Editor in Chief",
    qualification: "Ph.D. in Economics, Delhi Technological University",
    imageSrc: "/editorial/japji-kaur.jpg",
    bioParagraphs: [
      "Dr. Japji Kaur is a data-driven research and analytics professional with a Ph.D. in Economics from Delhi Technological University. She specializes in empirical data analysis, quantitative research, and insight generation to support strategic decision-making across business and technology environments.",
      "With strong expertise in data analytics, statistical modeling, and consumer insight analysis, Dr. Kaur has experience transforming complex datasets into actionable insights that can support product development, marketing strategy, and technology-driven decision processes. She is proficient in analytical and programming tools including SPSS, STATA, R, Python, NVivo, and SmartPLS, enabling advanced data modeling, predictive analysis, and behavioral insights.",
      "Currently working as a Research Manager at Athena Education, Gurgaon, she leads research initiatives involving data analysis, market insights, and performance evaluation to guide strategic planning and innovation. Her professional experience also includes over six years of teaching and research at Delhi Technological University and academic collaboration with BML Munjal University, where she developed strong capabilities in data interpretation, research design, and analytical problem-solving.",
      "Dr. Kaur is particularly interested in roles at the intersection of technology, data analytics, and strategy, including marketing analytics, product analytics, research consulting, and technology development teams, where she can leverage data-driven methodologies to optimize business performance and user engagement.",
    ],
  },
  {
    id: "neha-dawar",
    name: "Neha Dawar",
    headline: "Managing Editor",
    qualification: "Ph.D. in Finance (Corporate Governance)",
    imageSrc: null,
    bioParagraphs: [
      "Neha Dawar is a detail-oriented Finance & Audit Professional with 8+ years of experience in financial reporting, R2R processes, and audit support within global service environments. She has strong expertise in balance sheet reconciliations, month-end close (WD+1 to WD+3), and internal controls, with hands-on experience in BlackLine, SAP, Oracle, and OneStream. She has a proven track record of enhancing control frameworks, preparing SOPs, and ensuring compliance with regulatory and audit requirements including SOX-aligned processes.",
      "She brings strong exposure to risk assessment, audit documentation, and process standardization, with the ability to work in high-pressure close cycles and collaborate effectively with global stakeholders. She holds a PhD in Finance (Corporate Governance), adding a strong foundation in governance, risk, and compliance. She is passionate about driving process improvements, strengthening internal controls, and delivering high-quality work.",
    ],
  },
  {
    id: "praveen-kumar",
    name: "Dr. Praveen Kumar",
    headline: "Associate Editor",
    qualification: "Ph.D. in Economics, Kurukshetra University",
    imageSrc: "/editorial/DrPraveen.jpeg",
    bioParagraphs: [
      "Dr. Praveen Kumar is a faculty member in Economics (Contract) at the National Institute of Technology Kurukshetra. He holds a Ph.D. in Economics from Kurukshetra University, with a research focus on regional growth and inequalities in India, particularly examining pre- and post-economic reform periods.",
      "Dr. Kumar qualified the UGC National Eligibility Test in 2012 and has a strong academic background in economics. His research expertise spans environmental economics, sustainable development, energy transition, economic growth, and inequality, with a particular focus on emerging economies including BRICS and the European Union.",
      "He has an impressive publication record in high-impact, peer-reviewed international journals such as Springer Nature, MDPI, and Frontiers. His work extensively explores themes like CO₂ emissions, environmental sustainability, FDI, and policy dynamics using advanced econometric techniques.",
      "Dr. Kumar is actively engaged in interdisciplinary research and has contributed significantly to the literature on climate change economics and development policy. His scholarly contributions are indexed in Scopus, reflecting his growing impact in the academic community.",
    ],
  },
  {
    id: "vishal-dagar",
    name: "Dr. Vishal Dagar",
    headline: "Associate Editor",
    qualification:
      "Economist; listed among global top 2% scientists (Elsevier–Stanford, 2023–2025)",
    imageSrc: null,
    bioParagraphs: [
      "Dr. Vishal Dagar is an economist and researcher with more than five years of teaching and research experience across academia, policy, and industry. He is listed among the top 2% of scientists globally (Elsevier–Stanford composite score, 2023, 2024, and 2025).",
      "He has published more than 75 SSCI/SCI research papers in more than 25 leading journals and has reviewed more than 1,500 research papers for over 250 verified leading and reputed journals (FT 50; ABDC: A*, A, and B), including the Journal of Business Ethics, Energy Economics, Energy Policy, International Review of Financial Analysis, International Review of Economics & Finance, Review of International Business & Finance, Technological Forecasting & Social Change, Economic Analysis & Policy, Finance Research Letters, Socio-Economic Planning Sciences, European Management Journal, Management Decision, Resources Policy, Structural Change & Economic Dynamics, and others.",
    ],
  },
  {
    id: "tayyaba-rani",
    name: "Dr. Tayyaba Rani",
    headline: "Associate Editor",
    qualification: "Ph.D., Xi’an Jiaotong University, China",
    imageSrc: "/editorial/tayyaba-rani.jpg",
    bioParagraphs: [
      "Dr. Tayyaba Rani is an applied economics researcher with a Ph.D. from Xi’an Jiaotong University, China, specializing in energy economics, environmental sustainability, and financial development. Her research focuses on the dynamic interplay between digitalization, green investment, financial inclusion, and sustainable economic growth, with a particular emphasis on South Asian and emerging economies.",
      "With extensive expertise in empirical and quantitative research, Dr. Rani is proficient in advanced econometric techniques and statistical tools, including R, Stata, and EViews, enabling robust data analysis and policy-relevant insights. She has authored more than 19 publications in high-impact international journals such as Technology in Society, Energy Policy, Resources Policy, and Environmental Progress & Sustainable Energy.",
      "Dr. Rani also brings valuable academic experience, having taught finance, accounting, and economics courses at both undergraduate and graduate levels. Her research contributions aim to inform evidence-based policymaking and promote sustainable development through interdisciplinary and data-driven approaches.",
      "Her editorial and research interests lie at the intersection of energy economics, environmental policy, digital transformation, and sustainable development, where she seeks to contribute to advancing high-quality academic scholarship and impactful research dissemination.",
    ],
  },
  {
    id: "diksha-arora",
    name: "Dr. Diksha Arora",
    headline: "Associate Editor",
    qualification: "Ph.D., Delhi Technological University",
    imageSrc: "/editorial/diksha-arora.jpg",
    bioParagraphs: [
      "Dr. Diksha Arora is an accomplished Economics educator and researcher who holds a Ph.D. from Delhi Technological University, with a focus on tech startups in the Delhi-NCR region. She has served as faculty at DTU and the University of Delhi, demonstrating strong teaching capability across diverse domains of economics. With top-tier academic achievements including a Junior Research Fellowship (AIR 4) and multiple research publications, Dr. Arora combines deep subject knowledge with practical experience. She is also certified in UGC-NET and CTET, proficient in digital teaching tools, and actively engaged in academic development through workshops, internships, and extracurricular activities. Known for her collaborative spirit and interdisciplinary outlook, she contributes effectively to diverse academic and research initiatives.",
    ],
  },
];

export { PLACEHOLDER };
