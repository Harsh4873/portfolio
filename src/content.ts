export type RouteId = 'start' | 'experience' | 'research' | 'projects' | 'about';

export interface NavigationItem {
  id: RouteId;
  index: string;
  label: string;
}

export interface Experience {
  period: string;
  role: string;
  organization: string;
  kind: string;
  summary: string;
  highlights: string[];
  tools: string[];
  translation: string;
}

export interface Project {
  index: string;
  title: string;
  kicker: string;
  summary: string;
  proof: string;
  tools: string[];
  link?: string;
}

export interface PersonalCoordinate {
  index: string;
  horizon: string;
  title: string;
  copy: string;
}

export interface CuriosityThread {
  index: string;
  title: string;
  copy: string;
  signals: string[];
}

export type LabCategory = 'Signals' | 'Research' | 'Life systems';

export interface LabProject {
  code: string;
  title: string;
  category: LabCategory;
  href: string;
  status: string;
  summary: string;
  question: string;
  tools: string[];
}

export interface ResearchStage {
  index: string;
  label: string;
  title: string;
  copy: string;
}

export interface ResearchCheck {
  label: string;
  title: string;
  copy: string;
}

export interface PersonalLens {
  index: string;
  label: string;
  title: string;
  copy: string;
}

export const navigation: NavigationItem[] = [
  { id: 'start', index: '00', label: 'Start' },
  { id: 'experience', index: '01', label: 'Experience' },
  { id: 'research', index: '02', label: 'Research' },
  { id: 'projects', index: '03', label: 'Projects' },
  { id: 'about', index: '04', label: 'About' },
];

export const routeTitles: Record<RouteId, string> = {
  start: 'Portfolio — Harsh Dave',
  experience: 'Experience · Portfolio — Harsh Dave',
  research: 'Research · Portfolio — Harsh Dave',
  projects: 'Projects · Portfolio — Harsh Dave',
  about: 'About · Portfolio — Harsh Dave',
};

export const proofPoints = [
  { value: '3.92', label: 'Undergraduate GPA' },
  { value: '2× B.S.', label: 'Computer Science + Statistics' },
  { value: 'Summa', label: 'Cum Laude · May 2026' },
  { value: 'M.S. ’28', label: 'Computer Science, in progress' },
];

export const personalCoordinates: PersonalCoordinate[] = [
  {
    index: '01',
    horizon: 'Now',
    title: 'Read evolution through data.',
    copy: 'In the Ioerger Lab, I am studying positive selection in Mycobacterium tuberculosis across patient cohorts while making the analysis reproducible enough to inspect gene by gene.',
  },
  {
    index: '02',
    horizon: 'Next',
    title: 'Become fluent across the boundary.',
    copy: 'My M.S. is a chance to deepen both sides of the work: the statistical judgment to ask a defensible question and the engineering discipline to build the system that answers it.',
  },
  {
    index: '03',
    horizon: 'Long horizon',
    title: 'Build biotechnology that earns trust.',
    copy: 'I want to help create tools for biological discovery, diagnostics, and health that make difficult evidence more useful to researchers and, eventually, to patients.',
  },
];

export const operatingQuestions = [
  'What data do we actually have?',
  'What are we really measuring?',
  'Which assumption is carrying the result?',
  'What breaks when the scale changes?',
  'Can someone else reproduce this?',
  'Is there a simpler way to make it useful?',
];

export const curiosityThreads: CuriosityThread[] = [
  {
    index: 'A',
    title: 'Biological inference',
    copy: 'How do we separate a meaningful evolutionary signal from noise, modeling choices, and cohort differences?',
    signals: ['Genomes', 'Uncertainty', 'Disease'],
  },
  {
    index: 'B',
    title: 'Compute underneath AI',
    copy: 'What happens between pressing Enter and receiving an answer—from routing and accelerators to scheduling, context, and failure modes?',
    signals: ['Agents', 'HPC', 'Infrastructure'],
  },
  {
    index: 'C',
    title: 'Measurable everyday systems',
    copy: 'How can software reduce friction in planning, training, nutrition, and sports analysis without turning life into a spreadsheet?',
    signals: ['Routines', 'Training', 'Sports'],
  },
];

export const experiences: Experience[] = [
  {
    period: 'Jun 2026 — Now',
    role: 'Graduate Assistant Research (Computational Genomics)',
    organization: 'Ioerger Lab · Texas A&M University',
    kind: 'Research',
    summary:
      'Building reproducible computational workflows to compare evidence of positive selection in Mycobacterium tuberculosis isolates from patient cohorts with and without diabetes.',
    highlights: [
      'Prepare and orchestrate genome-wide analysis across approximately 4,000 genes with Python, GenomegaMap, Slurm arrays, and Texas A&M high-performance computing systems.',
      'Compare Bayesian posterior outputs across cohorts and develop complementary pN/pS, chi-square, FDR-controlled, and PAML validation views.',
      'Translate model output into inspectable tables, figures, and biology-first explanations for a computational genomics manuscript in preparation.',
    ],
    tools: ['Python', 'Slurm', 'GenomegaMap', 'Bayesian MCMC', 'PAML', 'HPC'],
    translation: 'Scientific computing taught me that a pipeline is not just automation; every transformation is part of the argument.',
  },
  {
    period: 'Aug — Dec 2025',
    role: 'Software Engineering Capstone',
    organization: 'Amazon-sponsored · Texas A&M University',
    kind: 'Applied AI',
    summary:
      'Built a breach-intelligence platform with a three-person team, connecting automated ingestion, AI-assisted processing, search, graph relationships, and analyst-facing exploration.',
    highlights: [
      'Designed a multi-system data path spanning AWS S3, MongoDB, Elasticsearch, Redis, and AWS Neptune.',
      'Integrated LangChain-assisted enrichment and delivered Streamlit and Kibana views for querying breach data by sector and geography.',
      'Worked across architecture, implementation, and delivery constraints instead of treating the model as the entire product.',
    ],
    tools: ['Python', 'AWS', 'LangChain', 'Elasticsearch', 'MongoDB', 'AWS Neptune'],
    translation: 'The useful AI work was the connective tissue: dependable ingestion, clear provenance, and an interface that helped an analyst decide what to inspect next.',
  },
  {
    period: 'Spring 2026',
    role: 'Teaching Assistant, CS 111',
    organization: 'Texas A&M University',
    kind: 'Teaching',
    summary:
      'Supported students learning Java and object-oriented programming by turning abstract concepts, debugging patterns, and assignment feedback into practical next steps.',
    highlights: [
      'Guided students through Java, object-oriented programming, and problem-solving fundamentals.',
      'Reviewed weekly submissions with actionable, consistent feedback.',
      'Used questions and small examples to reveal the mental model behind a bug rather than only supplying a correction.',
    ],
    tools: ['Java', 'Object-oriented programming', 'Mentorship', 'Code review'],
    translation: 'Teaching exposed the difference between being able to do something and being able to explain why it works.',
  },
  {
    period: 'Jan — May 2025',
    role: 'Undergraduate Researcher',
    organization: 'UrbanResilience.AI Lab · Texas A&M University',
    kind: 'Data systems',
    summary:
      'Developed Python data workflows for air-quality and wildfire-response analysis, joining environmental sensor APIs, web data, and predictive modeling context.',
    highlights: [
      'Connected environmental sensor data with emergency-response context for Los Angeles-area analysis.',
      'Built reusable scraping and preparation workflows for downstream modeling.',
      'Worked through the practical mismatch between real-world sources: formats, coverage, timing, and missingness.',
    ],
    tools: ['Python', 'APIs', 'Web scraping', 'Predictive modeling'],
    translation: 'Messy public data made source quality and missing context feel as important as the eventual model.',
  },
  {
    period: 'May — Aug 2024',
    role: 'AI Engineering Intern',
    organization: 'Videomagic · Remote',
    kind: 'Product engineering',
    summary:
      'Worked across machine-learning workflow automation, deepfake-detection data, and backend systems, from data preparation to authenticated product APIs.',
    highlights: [
      'Applied PyTorch and Hugging Face models to AI-generated video detection workflows.',
      'Built authenticated APIs with Feathers.js, MySQL, Knex, Auth0, and JWT.',
      'Connected model experimentation to the data, API, authentication, and workflow requirements around it.',
    ],
    tools: ['PyTorch', 'Hugging Face', 'TypeScript', 'MySQL', 'Auth0'],
    translation: 'A promising model becomes a product only after the data, API, authentication, and human workflow all meet it.',
  },
  {
    period: 'Early undergraduate research',
    role: 'Cloud Team Research Member',
    organization: 'SpaceCraft VR · College Station, Texas',
    kind: 'Cloud systems',
    summary:
      'Helped an eight-person research team automate cloud infrastructure for simulation work and build a secure React and TypeScript sandbox.',
    highlights: [
      'Automated cloud infrastructure and deployment work for the research platform.',
      'Hardened access flows with Auth0 and clearer authentication boundaries.',
      'Learned to treat deployment and access control as part of the experience rather than after-the-fact infrastructure.',
    ],
    tools: ['React', 'TypeScript', 'Cloud infrastructure', 'Auth0'],
    translation: 'The earliest systems lesson still holds: reliability and access are product features, even when users never see the machinery.',
  },
];

export const researchStages: ResearchStage[] = [
  {
    index: '01',
    label: 'Contrast',
    title: 'Define the cohort question.',
    copy: 'Frame a comparison between M. tuberculosis isolates from patients with diabetes and patients without diabetes without assuming that any observed difference is automatically biological.',
  },
  {
    index: '02',
    label: 'Prepare',
    title: 'Make thousands of genes comparable.',
    copy: 'Validate inputs, align the workflow, and preserve enough metadata to trace approximately 4,000 gene-level analyses back to their source cohorts and parameters.',
  },
  {
    index: '03',
    label: 'Model',
    title: 'Estimate selection under uncertainty.',
    copy: 'Run Bayesian GenomegaMap analyses and retain posterior distributions and intervals rather than collapsing a complex signal into a single convenient number.',
  },
  {
    index: '04',
    label: 'Scale',
    title: 'Treat compute as a system.',
    copy: 'Use Python orchestration, Slurm arrays, and high-performance computing to make genome-wide work traceable and reproducible.',
  },
  {
    index: '05',
    label: 'Compare',
    title: 'Ask what the evidence can support.',
    copy: 'Compare cohort posteriors and use complementary statistical checks before deciding whether a pattern is robust enough to interpret.',
  },
];

export const researchChecks: ResearchCheck[] = [
  {
    label: 'Posterior view',
    title: 'Bayesian comparison',
    copy: 'Compare posterior parameters and credible intervals across cohorts while keeping model uncertainty visible.',
  },
  {
    label: 'Count-based view',
    title: 'pN/pS + chi-square',
    copy: 'Use polymorphism ratios and contingency tests as a complementary lens, then control the multiple-testing burden with FDR.',
  },
  {
    label: 'Evolutionary view',
    title: 'PAML validation',
    copy: 'Use an independent evolutionary-modeling workflow to check whether the broader interpretation is method-dependent.',
  },
];

export const projects: Project[] = [
  {
    index: '01',
    title: 'Alpha',
    kicker: 'Tidal Hackathon · 1st place',
    summary:
      'An interactive math-learning environment that orchestrates multiple AI and visualization tools so students can move from a question to an explorable explanation.',
    proof: 'Reduced tool-call failure from 25% to 6% while coordinating Gemini, OpenRouter, Claude, Manim, Desmos, and Wolfram Alpha.',
    tools: ['React', 'TypeScript', 'Multi-model AI', 'Visualization'],
  },
  {
    index: '02',
    title: 'Point of Sale System',
    kicker: 'Scrum master + lead developer',
    summary:
      'A full-stack point-of-sale platform covering ordering, inventory, analytics, authentication, APIs, and accessible customer flows.',
    proof: 'Led the team delivery process while building across React, PostgreSQL, AWS, OAuth2, and WCAG 2.1 requirements.',
    tools: ['React', 'PostgreSQL', 'AWS', 'OAuth2', 'Accessibility'],
  },
  {
    index: '03',
    title: 'AI Investigation Challenge',
    kicker: 'TAMU Datathon · 2nd of 50 teams',
    summary:
      'A fast-moving investigation workflow using prompt engineering, web scraping, and reverse prompt engineering to connect incomplete evidence.',
    proof: 'Placed second among 50 teams at TAMU Datathon 2024.',
    tools: ['Prompt engineering', 'Web scraping', 'Evidence synthesis'],
  },
  {
    index: '04',
    title: 'Sign Sense',
    kicker: 'Computer vision + real-time recognition',
    summary:
      'A sign-language recognition experience that connects a YOLOv5 vision model with a Svelte product interface and FastAPI backend.',
    proof: 'Built with AWS SageMaker, Svelte, and FastAPI around a YOLOv5 recognition workflow.',
    tools: ['YOLOv5', 'SageMaker', 'Svelte', 'FastAPI'],
  },
  {
    index: '05',
    title: 'ProfFinder',
    kicker: 'Faculty discovery, made legible',
    summary:
      'A professor-discovery tool that helped students explore faculty research interests using a custom database assembled from Texas A&M data.',
    proof: 'Combined SQL, JavaScript, HTML/CSS, and collected faculty data in a student-facing interface.',
    tools: ['SQL', 'JavaScript', 'Data pipelines', 'Product design'],
  },
];

export const labProjects: LabProject[] = [
  {
    code: 'SYS-01',
    title: 'PickLedger',
    category: 'Signals',
    href: '/pickledger/',
    status: 'Public daily board',
    summary: 'A sports-pick intelligence ledger for daily cards, public source records, consensus signals, player props, and graded outcomes.',
    question: 'Can prediction records stay transparent enough to evaluate the process, not just celebrate the wins?',
    tools: ['Sports data', 'Automated grading', 'Evidence trails'],
  },
  {
    code: 'SYS-02',
    title: 'MtbScope',
    category: 'Research',
    href: '/genes/',
    status: '4,018-gene browser',
    summary: 'A comparison-first browser for tuberculosis genes, with fast search, multi-gene comparison, and source annotations.',
    question: 'How can a large biological dataset become navigable while preserving its source annotations and comparisons?',
    tools: ['Genomics', 'Search', 'Data visualization'],
  },
  {
    code: 'SYS-03',
    title: 'Sift',
    category: 'Research',
    href: '/research/',
    status: 'Source-grounded workspace',
    summary: 'A paper-reading workspace for PDFs, structured briefs, claim tracking, notes, and contextual analysis.',
    question: 'Can analysis move faster while every important claim stays connected to its source?',
    tools: ['Local analysis', 'PDF workflows', 'Claim tracking'],
  },
  {
    code: 'SYS-04',
    title: 'Daymark',
    category: 'Life systems',
    href: '/daymark/',
    status: 'Local-first habits',
    summary: 'A flexible habit tracker for goals, streaks, reviews, notes, and optional cross-device sync.',
    question: 'What if consistency could bend around real life without losing the long-term signal?',
    tools: ['Local-first', 'Reflection', 'Progress'],
  },
  {
    code: 'SYS-05',
    title: 'Slate',
    category: 'Life systems',
    href: '/slate/',
    status: 'Daily planning',
    summary: 'A local-first planner that pairs a time-boxed schedule with flexible, organized to-do lists.',
    question: 'How little structure is needed to turn intention into a day that is actually possible?',
    tools: ['Timeboxing', 'Tasks', 'Local-first'],
  },
  {
    code: 'SYS-06',
    title: 'Fare',
    category: 'Life systems',
    href: '/fare/',
    status: 'Private nutrition log',
    summary: 'A fast calorie and macro tracker built around personal foods, barcode search, and durable history.',
    question: 'Can lower-friction logging make nutrition data more honest and therefore more useful?',
    tools: ['Nutrition', 'Barcode search', 'Private data'],
  },
  {
    code: 'SYS-07',
    title: 'Gym',
    category: 'Life systems',
    href: '/gym/',
    status: 'Personal training log',
    summary: 'A workout system for programs, sets, supersets, calendars, weekly progress, and milestones.',
    question: 'How do you make progressive overload visible without letting tracking interrupt the workout?',
    tools: ['Training', 'Programs', 'Progress history'],
  },
];

export const skillGroups = [
  {
    label: 'Build',
    items: ['Python', 'Java', 'C++', 'TypeScript', 'JavaScript', 'SQL', 'R', 'React', 'FastAPI'],
  },
  {
    label: 'Model',
    items: ['PyTorch', 'Hugging Face', 'LangChain', 'NumPy', 'SciPy', 'pandas', 'Statistical modeling'],
  },
  {
    label: 'Ship',
    items: ['AWS', 'PostgreSQL', 'MongoDB', 'Elasticsearch', 'Docker', 'Git', 'Linux'],
  },
  {
    label: 'Research',
    items: ['Slurm', 'HPRC', 'GenomegaMap', 'PAML', 'dN/dS', 'MCMC', 'FASTA pipelines'],
  },
];

export const personalLenses: PersonalLens[] = [
  {
    index: '01',
    label: 'How I think',
    title: 'Persistent, practical, and suspicious of magic.',
    copy: 'I like ambitious ideas, but I bring them back to concrete questions: what is measured, which assumption matters, what could fail, and whether there is a simpler path. “It just works” and “it just does not work” both make me want to look underneath.',
  },
  {
    index: '02',
    label: 'How I teach',
    title: 'Find the missing mental model.',
    copy: 'Teaching introductory computer science showed me that people rarely need more rules. They need an explanation that connects the new concept to something they already understand—and enough room to reason through the next bug themselves.',
  },
  {
    index: '03',
    label: 'What fascinates me',
    title: 'The infrastructure behind the interface.',
    copy: 'I test AI tools regularly, but the deeper question is what happens after someone presses Enter: routing, context, accelerators, scheduling, data centers, and the path back to the screen. HPC research makes that invisible machinery feel tangible.',
  },
  {
    index: '04',
    label: 'Where I am going',
    title: 'Research judgment plus engineering range.',
    copy: 'Long term, I want to help build biotechnology products—research infrastructure, discovery tools, diagnostics, or something not yet obvious—with enough scientific understanding to ask the right question and enough engineering skill to investigate it.',
  },
];

export const principles = [
  {
    title: 'Legibility',
    copy: 'Complex systems should explain their state, assumptions, and next action.',
  },
  {
    title: 'Reproducibility',
    copy: 'A result becomes stronger when someone else can rebuild and challenge it.',
  },
  {
    title: 'Useful curiosity',
    copy: 'Explore widely, then convert the interesting part into something practical.',
  },
  {
    title: 'Evidence before confidence',
    copy: 'A clean story is not a substitute for a trustworthy measurement.',
  },
];

export const sports = [
  'Strength training',
  'Badminton',
  'Soccer',
  'Basketball',
  'Boxing',
  'Swimming',
  'Cricket',
  'Jump rope',
];
