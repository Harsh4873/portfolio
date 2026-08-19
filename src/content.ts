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
  capture: string;
  link?: string;
}

export interface ProfileFact {
  label: string;
  value: string;
}

export interface Education {
  program: string;
  detail: string;
}

export interface ProfileLink {
  label: string;
  href: string;
}

export type LabCategory = 'Signals' | 'Research' | 'Life systems';

export interface LabProject {
  code: string;
  title: string;
  category: LabCategory;
  href: string;
  image: string;
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

export const labCategories: LabCategory[] = ['Signals', 'Research', 'Life systems'];

export const profile = {
  name: 'Harsh Dave',
  mark: 'HD',
  kicker: 'Computational genomics · systems software',
  degree: 'M.S. Computer Science, Texas A&M',
  summary:
    'Graduate research assistant at the Ioerger Lab. I compare evidence of positive selection in Mycobacterium tuberculosis isolates from patient cohorts with and without diabetes. I also build software for research, sports, training, and everyday life.',
  now: [
    { label: 'Now', value: 'Graduate Assistant Research, Ioerger Lab' },
    { label: 'Focus', value: 'Positive selection in M. tuberculosis' },
    { label: 'Building', value: 'Radar, MtbScope, Recall, and a private systems lab' },
  ] satisfies ProfileFact[],
  education: [
    {
      program: 'B.S. in Computer Science and Statistics, 2026',
      detail: 'Summa Cum Laude',
    },
    {
      program: 'M.S. in Computer Science',
      detail: 'Expected 2028',
    },
  ] satisfies Education[],
  links: [
    { label: 'Resume', href: '/resume.pdf' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hdav' },
    { label: 'GitHub', href: 'https://github.com/Harsh4873' },
    { label: 'Devpost', href: 'https://devpost.com/hdav3228' },
    { label: 'Email', href: 'mailto:hdav4873@gmail.com' },
  ] satisfies ProfileLink[],
  portrait: '/portfolio/portrait.jpg',
  portraitFallback: '/portfolio/portrait.svg',
  researchFacts: [
    { label: 'Lab', value: 'Ioerger Lab, Texas A&M' },
    { label: 'Tools', value: 'Python, GenomegaMap, Slurm, HPRC, PAML' },
    { label: 'Focus', value: 'Reproducible genome-wide analysis and validation' },
    { label: 'Scale', value: '~4,000 genes · 900+ clinical isolates' },
  ] satisfies ProfileFact[],
};

export const experiences: Experience[] = [
  {
    period: 'Jun 2026 - present',
    role: 'Graduate Assistant Research (Computational Genomics)',
    organization: 'Ioerger Lab · Texas A&M University',
    kind: 'Research',
    summary:
      'Building reproducible computational workflows to compare evidence of positive selection in Mycobacterium tuberculosis isolates from patient cohorts with and without diabetes.',
    highlights: [
      'Run a Python and Slurm workflow across roughly 4,000 M. tuberculosis genes from 900+ clinical isolates.',
      'Keep GenomegaMap posterior comparisons alongside pN/pS, chi-square with FDR control, and independent PAML checks.',
      'Trace each comparison back to its cohort, inputs, and parameters before interpreting a biological signal.',
    ],
    tools: ['Python', 'Slurm', 'GenomegaMap', 'Bayesian MCMC', 'PAML', 'HPC'],
    translation: 'The useful part of a pipeline is not that it runs. It is that I can point to what changed, why it changed, and whether the result still holds.',
  },
  {
    period: 'Aug - Dec 2025',
    role: 'Software Engineering Capstone',
    organization: 'Amazon-sponsored · Texas A&M University',
    kind: 'Applied AI',
    summary:
      'Built a breach-intelligence platform with a three-person team, connecting automated ingestion, AI-assisted processing, search, graph relationships, and analyst-facing exploration.',
    highlights: [
      'Worked on a three-person team to take Scrapy and Tor ingestion through LangChain and Gemini entity and threat processing.',
      'Designed a multi-system data path spanning AWS S3, MongoDB, Elasticsearch, Redis, and AWS Neptune.',
      'Delivered Streamlit and Kibana views for querying breach data by sector and geography.',
      'Worked across architecture, implementation, and delivery constraints instead of treating the model as the entire product.',
    ],
    tools: ['Python', 'AWS', 'LangChain', 'Elasticsearch', 'MongoDB', 'AWS Neptune'],
    translation: 'This was the first time I saw that the model is only one part of the job. The useful work was getting data, provenance, and the analyst experience to agree.',
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
    translation: 'Teaching made me care more about the missing mental model than the quick fix.',
  },
  {
    period: 'Jan - May 2025',
    role: 'Undergraduate Researcher',
    organization: 'UrbanResilience.AI Lab · Texas A&M University',
    kind: 'Data systems',
    summary:
      'Developed Python data workflows for air-quality and wildfire-response analysis, joining environmental sensor APIs, web data, and predictive modeling context.',
    highlights: [
      'Joined Los Angeles air-quality APIs with scraped wildfire data before the modeling stage.',
      'Built reusable scraping and preparation workflows for downstream modeling.',
      'Worked through the practical mismatch between real-world sources: formats, coverage, timing, and missingness.',
    ],
    tools: ['Python', 'APIs', 'Web scraping', 'Predictive modeling'],
    translation: 'Real public data taught me to look for the missing context before I got attached to a model.',
  },
  {
    period: 'May - Aug 2024',
    role: 'AI Engineering Intern',
    organization: 'Videomagic · Remote',
    kind: 'Product engineering',
    summary:
      'Worked across machine-learning workflow automation, deepfake-detection data, and backend systems, from data preparation to authenticated product APIs.',
    highlights: [
      'Evaluated PyTorch and Hugging Face frame-level AI-video detection workflows and failure modes.',
      'Built authenticated APIs with Feathers.js, MySQL, Knex, Auth0, and JWT.',
      'Shipped AI features associated with a 15% lift in engagement while connecting model work to the data, API, and authentication around it.',
    ],
    tools: ['PyTorch', 'Hugging Face', 'TypeScript', 'MySQL', 'Auth0'],
    translation: 'A model did not become a product until the data, API, authentication, and human workflow all met in the same place.',
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
    translation: 'I still think reliability and access are product features, even when a user never sees the machinery underneath.',
  },
];

export const researchStages: ResearchStage[] = [
  {
    index: '01',
    label: 'Contrast',
    title: 'Define the cohort question.',
    copy: 'Compare isolates from patients with and without diabetes without treating every observed difference as automatically biological.',
  },
  {
    index: '02',
    label: 'Prepare',
    title: 'Make thousands of genes comparable.',
    copy: 'Validate inputs, align the workflow, and keep enough metadata to trace a gene-level result back to its cohort and parameters.',
  },
  {
    index: '03',
    label: 'Model',
    title: 'Estimate selection under uncertainty.',
    copy: 'Run Bayesian GenomegaMap analyses and keep the posterior distributions and intervals instead of forcing a complex signal into one convenient number.',
  },
  {
    index: '04',
    label: 'Scale',
    title: 'Treat compute as a system.',
    copy: 'Use Python orchestration, Slurm arrays, and high-performance computing to keep genome-wide work traceable when the cluster gets messy.',
  },
  {
    index: '05',
    label: 'Compare',
    title: 'Ask what the evidence can support.',
    copy: 'Compare cohort posteriors and use complementary checks before deciding whether a pattern deserves interpretation.',
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
    proof: 'Input normalization and validation reduced tool-call failure from 25% to 6%. The build also included Math Studio, notes, and source/PDF uploads around the multi-tool workflow.',
    tools: ['React', 'TypeScript', 'Multi-model AI', 'Visualization'],
    capture: '/portfolio/other-captures/alpha.png',
  },
  {
    index: '02',
    title: 'Point of Sale System',
    kicker: 'Scrum master + lead developer',
    summary:
      'A full-stack point-of-sale platform covering ordering, inventory, analytics, authentication, APIs, and accessible customer flows.',
    proof: 'Led the team delivery process while building across React, PostgreSQL, AWS, OAuth2, and WCAG 2.1 requirements.',
    tools: ['React', 'PostgreSQL', 'AWS', 'OAuth2', 'Accessibility'],
    capture: '/portfolio/other-captures/pos.png',
  },
  {
    index: '03',
    title: 'AI Investigation Challenge',
    kicker: 'TAMU Datathon · 2nd of 50 teams',
    summary:
      'A fast-moving investigation workflow using prompt engineering, web scraping, and reverse prompt engineering to connect incomplete evidence.',
    proof: 'Placed second among 50 teams at TAMU Datathon 2024.',
    tools: ['Prompt engineering', 'Web scraping', 'Evidence synthesis'],
    capture: '/portfolio/other-captures/datathon.png',
  },
  {
    index: '04',
    title: 'Sign Sense',
    kicker: 'Computer vision + real-time recognition',
    summary:
      'A gamified sign-language learning experience with real-time hand-sign feedback, lessons, progress, and a DIY practice flow.',
    proof: 'The team labeled and split training data for a YOLOv5 model on SageMaker, then served recognition through FastAPI to a Svelte interface.',
    tools: ['YOLOv5', 'SageMaker', 'Svelte', 'FastAPI'],
    capture: '/portfolio/other-captures/sign-sense.png',
  },
  {
    index: '05',
    title: 'ProfFinder',
    kicker: 'Faculty discovery, made legible',
    summary:
      'A professor-discovery tool that helped students explore faculty research interests using a custom database assembled from Texas A&M data.',
    proof: 'Built under a 24-hour HowdyHack deadline: a manually assembled course database powered class and section search, schedule cards, GPA distributions, and professor reviews.',
    tools: ['SQL', 'JavaScript', 'Data pipelines', 'Product design'],
    capture: '/portfolio/other-captures/proffinder.png',
  },
];

export const labProjects: LabProject[] = [
  {
    code: 'SYS-01',
    title: 'PickLedger',
    category: 'Signals',
    href: '/pickledger/',
    image: '/portfolio/project-captures/pickledger.png',
    status: 'Auditable daily board',
    summary: 'A sports-pick intelligence ledger for daily cards, public source records, consensus signals, player props, and graded outcomes.',
    question: 'Scheduled workflows commit dated JSON, browser rankings aggregate the history, and an ESPN-backed auto-grader settles results. It can publish “Sit out” when there is not enough signal.',
    tools: ['Sports data', 'Automated grading', 'Evidence trails'],
  },
  {
    code: 'SYS-02',
    title: 'MtbScope',
    category: 'Research',
    href: '/genes/',
    image: '/portfolio/project-captures/mtbscope.png',
    status: 'H37Rv gene browser',
    summary: 'A comparison-first browser for tuberculosis genes, with fast search, multi-gene comparison, and source annotations.',
    question: 'Search by Rv ID, symbol, or product, then pin up to eight genes while carrying annotations, locus and operon context, and selection evidence into comparison.',
    tools: ['Genomics', 'Search', 'Data visualization'],
  },
  {
    code: 'SYS-03',
    title: 'Recall',
    category: 'Research',
    href: '/research/',
    image: '/portfolio/project-captures/sift.png',
    status: 'Study sets from real notes',
    summary: 'A local-first study workspace that turns notes and papers into recall sets, then keeps the source material close.',
    question: 'Turn markdown into flashcards, quizzes, cloze prompts, matching, and a reading mode while keeping source material, progress, and regeneration paths connected.',
    tools: ['Local analysis', 'PDF workflows', 'Claim tracking'],
  },
  {
    code: 'SYS-04',
    title: 'Daymark',
    category: 'Life systems',
    href: '/daymark/',
    image: '/portfolio/project-captures/daymark.png',
    status: 'Local-first habits',
    summary: 'A flexible habit tracker for goals, streaks, reviews, notes, and optional cross-device sync.',
    question: 'Goals can be checks, counts, durations, quantities, or distances across daily, weekly, and monthly rhythms, with skips, notes, pauses, heatmaps, and reviews.',
    tools: ['Local-first', 'Reflection', 'Progress'],
  },
  {
    code: 'SYS-05',
    title: 'Slate',
    category: 'Life systems',
    href: '/slate/',
    image: '/portfolio/project-captures/slate.png',
    status: 'Daily planning',
    summary: 'A local-first planner that pairs a time-boxed schedule with flexible, organized to-do lists.',
    question: 'A 7:30–23:30 half-hour grid lives beside sectioned to-do lists; time blocks can move or copy across days and stay local-first.',
    tools: ['Timeboxing', 'Tasks', 'Local-first'],
  },
  {
    code: 'SYS-06',
    title: 'Fare',
    category: 'Life systems',
    href: '/fare/',
    image: '/portfolio/project-captures/fare.png',
    status: 'Private nutrition log',
    summary: 'A fast calorie and macro tracker built around personal foods, barcode search, and durable history.',
    question: 'Food and meal memory learns from pins, frequency, recency, weekday, and mealtime; every diary entry keeps an immutable nutrition and source snapshot.',
    tools: ['Nutrition', 'Barcode search', 'Private data'],
  },
  {
    code: 'SYS-07',
    title: 'Gym',
    category: 'Life systems',
    href: '/gym/',
    image: '/portfolio/project-captures/gym.png',
    status: 'Personal training log',
    summary: 'A workout system for programs, sets, supersets, calendars, weekly progress, and milestones.',
    question: 'Reusable programs track sets, reps, rest, supersets, calendar history, volume trends, and PRs without breaking old workout records when programs change.',
    tools: ['Training', 'Programs', 'Progress history'],
  },
  {
    code: 'SYS-08',
    title: 'Notes',
    category: 'Life systems',
    href: '/notes/',
    image: '/portfolio/project-captures/notes.png',
    status: 'Live-synced writing',
    summary: 'A three-pane writing workspace with folders, labels, pinning, search, a recoverable trash, and rich text that can be turned off.',
    question: 'Firestore is the only copy, so every note, folder, and preference is a separately validated document under a verified Google account. Deleting is two steps: a note is flagged into trash and drops out of every other view and count, and only a confirmed second action removes the document.',
    tools: ['Rich text', 'Live sync', 'Private by account'],
  },
  {
    code: 'SYS-09',
    title: 'ShotLab',
    category: 'Life systems',
    href: '/shotlab/',
    image: '/portfolio/project-captures/shotlab.png',
    status: 'On-device form analysis',
    summary: 'A phone-first shooting lab that measures release, load, jump, and landing geometry from a single clip and compares each rep against your own makes.',
    question: 'A pinned pose model runs in a worker on the device, phases are estimated from pose kinematics with a manual release-frame correction, and drift is reported in shoulder-width units rather than invented centimeters. Arc and automatic make detection are left out until a ball and rim detector exists.',
    tools: ['Pose estimation', 'On-device inference', 'Outcome comparison'],
  },
  {
    code: 'SYS-10',
    title: 'Degree Canvas',
    category: 'Life systems',
    href: '/degree/',
    image: '/portfolio/project-captures/degree.png',
    status: 'Live degree validation',
    summary: 'A drag-and-drop graduate degree planner that checks a term-by-term plan against catalog rules while it is being built.',
    question: 'Courses move between terms on a board while credit minimums, graded-coursework floors, breadth coverage, and research-hour caps are re-evaluated on every change, each with the rule text behind it. Plans stay on the device, and an optional Google sign-in mirrors the board to every device you plan on.',
    tools: ['Rule evaluation', 'Drag and drop', 'Optional sync'],
  },
  {
    code: 'SYS-11',
    title: 'Radar',
    category: 'Signals',
    href: '/radar/',
    image: '/portfolio/project-captures/radar.png',
    status: 'Three engines, one pipeline',
    summary: 'A discovery system for papers worth reading, Texas A&M events worth attending, and paid research studies ranked by guaranteed pay per hour.',
    question: 'Literature and campus listings share normalize, deduplicate, rank, and diff, and every card shows the arithmetic behind its score. Paid studies are a parallel snapshot ranked by guaranteed dollars per hour — raffles never count as wages, and unknown rates sit in their own section. Keeping the previous snapshot is what makes change detection possible: a preprint reaching a journal, a room moving, an event being cancelled. Food is only called free when the source says it is free.',
    tools: ['Multi-source ingestion', 'Explainable ranking', 'Change detection'],
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
