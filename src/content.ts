export interface Experience {
  period: string;
  role: string;
  organization: string;
  kind: string;
  summary: string;
  highlights: string[];
  tools: string[];
}

export interface ProjectDetail {
  heading: string;
  copy: string;
}

export interface Project {
  title: string;
  kicker: string;
  summary: string;
  proof: string;
  details?: ProjectDetail[];
  tools: string[];
  capture: string;
  link?: string;
}

export interface Education {
  program: string;
  detail: string;
}

export interface ProfileLink {
  label: string;
  href: string;
}

export interface LabProject {
  title: string;
  href: string;
  image: string;
  images?: string[];
  summary: string;
  question: string;
  details?: ProjectDetail[];
  tools: string[];
}

export interface NewsItem {
  date: string;
  kind: string;
  title: string;
  copy: string;
}

export interface ResearchTopic {
  id: string;
  title: string;
  question: string;
  summary: string;
  contributions: string[];
  methods: string[];
}

export interface Course {
  code: string;
  title: string;
  description: string;
  topics: string[];
}

export const profile = {
  name: 'Harsh Dave',
  mark: 'HD',
  kicker: 'Computational genomics · software',
  role: 'Graduate research assistant',
  degree: 'M.S. Computer Science, Texas A&M',
  thesis:
    'I study how tuberculosis bacteria respond to drugs and evolve, using statistics and genomic data.',
  summary:
    'I also build software for reading papers, exploring genes, studying, and keeping up with everyday tasks.',
  advisor: 'Thomas R. Ioerger',
  lab: 'Ioerger Lab, Texas A&M University',
  labHref: 'https://people.engr.tamu.edu/ioerger/index.html',
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
    { label: 'Resume', href: '/portfolio/resume.pdf' },
    { label: 'CV', href: '/portfolio/cv.pdf' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hdav' },
    { label: 'GitHub', href: 'https://github.com/Harsh4873' },
    { label: 'Devpost', href: 'https://devpost.com/hdav3228' },
    { label: 'Email', href: 'mailto:hdav4873@gmail.com' },
  ] satisfies ProfileLink[],
  portrait: '/portfolio/portrait.jpg',
  portraitFallback: '/portfolio/portrait.svg',
  researchLead:
    'My research in the Ioerger Lab focuses on Mycobacterium tuberculosis. I write analysis code, compare statistical models, and build tools for working with genomic data.',
  contact: 'Interested in the research or something I’ve built? I’m happy to talk.',
};

export const news: NewsItem[] = [
  {
    date: '2026',
    kind: 'Software',
    title: 'More tools on harsh.bet',
    copy: 'Added study, recipe, and timer apps next to the research and personal tools.',
  },
  {
    date: 'Jun 2026',
    kind: 'Lab',
    title: 'Graduate assistant, Ioerger Lab',
    copy: 'Started computational work on M. tuberculosis gene function, TnSeq, and related bioinformatics in the Ioerger Lab.',
  },
  {
    date: '2026',
    kind: 'Degree',
    title: 'B.S. Computer Science and Statistics',
    copy: 'Completed the undergraduate degrees Summa Cum Laude and began the M.S. in Computer Science.',
  },
  {
    date: 'Spring 2026',
    kind: 'Teaching',
    title: 'Teaching assistant, CS 111',
    copy: 'Supported students learning Java and object-oriented programming.',
  },
  {
    date: 'Aug – Dec 2025',
    kind: 'Engineering',
    title: 'Amazon-sponsored capstone',
    copy: 'Built a breach-intelligence platform spanning ingestion, search, graph relationships, and analyst views.',
  },
  {
    date: '2024',
    kind: 'Hackathon',
    title: 'Alpha · Tidal Hackathon, 1st place',
    copy: 'A math-learning app with interactive explanations and visualizations.',
  },
  {
    date: '2024',
    kind: 'Hackathon',
    title: 'TAMU Datathon, 2nd of 50 teams',
    copy: 'Used web scraping and AI tools to investigate clues during the competition.',
  },
];

export const researchTopics: ResearchTopic[] = [
  {
    id: 'drug-response',
    title: 'Drug response',
    question: 'Which genes matter when TB bacteria encounter rifampicin?',
    summary: 'I analyze transposon-sequencing data to study how gene disruption affects bacterial fitness across drug and growth conditions. The work includes differences between strains, media, and carbon sources.',
    contributions: [
      'Build gene-level linear models and compare nested models with likelihood-ratio tests.',
      'Test interactions to examine how a drug response changes with the experimental conditions.',
      'Apply false-discovery-rate correction across genes and prepare figures and tables for the research team.',
    ],
    methods: ['Python', 'pandas', 'SciPy', 'statsmodels', 'TnSeq', 'Linear models'],
  },
  {
    id: 'genome-evolution',
    title: 'Genome evolution',
    question: 'How does selection differ across tuberculosis genomes?',
    summary: 'I compare evidence of evolutionary selection across tuberculosis genomes. The analysis brings together Bayesian estimates and independent statistical checks.',
    contributions: [
      'Prepare sequence alignments and run genomic analyses with Python and Slurm on high-performance computing clusters.',
      'Compare GenomegaMap posterior estimates of dN/dS, the rate of protein-changing substitutions relative to synonymous substitutions.',
      'Cross-check results using pN/pS mutation counts, multiple-testing correction, and PAML/codeml models.',
    ],
    methods: ['GenomegaMap', 'PAML / codeml', 'Bayesian inference', 'Python', 'Slurm'],
  },
  {
    id: 'research-software',
    title: 'Research software',
    question: 'How can I make the tools I need easier to use?',
    summary: 'Looking up genes and reading papers are part of my daily work. I built MtbScope, the Research app, and a few study tools to make those tasks easier.',
    contributions: [
      'Build gene search and comparison views with annotations and links to the original sources.',
      'Import open-access papers by DOI, PMID, or PMCID and organize their text, figures, tables, and references.',
      'Parse PDFs on the device and keep exam decks in a separate app, with notes, cards, quiz, blanks, and matching.',
    ],
    methods: ['React', 'TypeScript', 'Europe PMC', 'NCBI', 'PDF.js'],
  },
];

export const courseworkTerm = 'Fall 2026 coursework';

export const coursework: Course[] = [
  {
    code: 'CSCE 671',
    title: 'Computer-Human Interaction',
    description: 'Graduate study of how people use software, how interfaces are designed, and how to evaluate whether a design works.',
    topics: ['Accessibility and inclusive design', 'Research methods and usability evaluation', 'Reading and discussing HCI research'],
  },
  {
    code: 'CSCE 627',
    title: 'Theory of Computability',
    description: 'Formal models of computation and the limits of what algorithms can solve.',
    topics: ['Finite automata and formal languages', 'Turing machines and decidability', 'Reductions and computational complexity'],
  },
];

export const experiences: Experience[] = [
  {
    period: 'Jun 2026 - present',
    role: 'Graduate Assistant Research (Computational Genomics)',
    organization: 'Ioerger Lab · Texas A&M University',
    kind: 'Research',
    summary:
      'Analyze TB drug-response experiments and genomic selection in the Ioerger Lab, using statistical models and high-performance computing.',
    highlights: [
      'Fit gene-level linear models to TnSeq data and test drug effects and interactions with growth conditions.',
      'Prepare genomic data and run GenomegaMap and PAML/codeml analyses using Python and Slurm.',
      'Compare model results, apply multiple-testing corrections, and prepare research figures and tables.',
    ],
    tools: ['Python', 'Slurm', 'TnSeq', 'GenomegaMap', 'PAML / codeml'],
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
      'Contributed to the architecture, implementation, and delivery of the platform.',
    ],
    tools: ['Python', 'AWS', 'LangChain', 'Elasticsearch', 'MongoDB', 'AWS Neptune'],
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
      'Explained bugs through questions and small code examples.',
    ],
    tools: ['Java', 'Object-oriented programming', 'Mentorship', 'Code review'],
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
      'Handled differences in data formats, coverage, timing, and missing values.',
    ],
    tools: ['Python', 'APIs', 'Web scraping', 'Predictive modeling'],
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
      'Contributed to deployment and access control for the research platform.',
    ],
    tools: ['React', 'TypeScript', 'Cloud infrastructure', 'Auth0'],
  },
];

export const projects: Project[] = [
  {
    title: 'Alpha',
    kicker: 'Tidal Hackathon · 1st place',
    summary:
      'A math-learning app with interactive explanations, visualizations, and support for notes and PDFs.',
    proof: 'Input validation reduced tool-call failures from 25% to 6%. The app also included Math Studio, notes, and PDF uploads.',
    tools: ['React', 'TypeScript', 'Multi-model AI', 'Visualization'],
    capture: '/portfolio/other-captures/alpha.png',
    link: 'https://devpost.com/software/alpha-ek9j1u',
  },
  {
    title: 'Point of Sale System',
    kicker: 'Scrum master + lead developer',
    summary:
      'A full-stack point-of-sale platform covering ordering, inventory, analytics, authentication, APIs, and accessible customer flows.',
    proof: 'Led the team delivery process while building across React, PostgreSQL, AWS, OAuth2, and WCAG 2.1 requirements.',
    tools: ['React', 'PostgreSQL', 'AWS', 'OAuth2', 'Accessibility'],
    capture: '/portfolio/other-captures/pos.png',
  },
  {
    title: 'AI Investigation Challenge',
    kicker: 'TAMU Datathon · 2nd of 50 teams',
    summary:
      'Used AI tools and web scraping to investigate clues at TAMU Datathon.',
    proof: 'Placed second among 50 teams at TAMU Datathon 2024.',
    tools: ['Prompt engineering', 'Web scraping', 'Evidence synthesis'],
    capture: '/portfolio/other-captures/datathon.png',
  },
  {
    title: 'Sign Sense',
    kicker: 'Computer vision + real-time recognition',
    summary:
      'A gamified sign-language learning experience with real-time hand-sign feedback, lessons, progress, and a DIY practice flow.',
    proof: 'The team labeled and split training data for a YOLOv5 model on SageMaker, then served recognition through FastAPI to a Svelte interface.',
    tools: ['YOLOv5', 'SageMaker', 'Svelte', 'FastAPI'],
    capture: '/portfolio/other-captures/sign-sense.png',
    link: 'https://devpost.com/software/sign-sensor',
  },
  {
    title: 'ProfFinder',
    kicker: 'Faculty and course search',
    summary:
      'A HowdyHack class and section search tool, backed by a custom Texas A&M course database.',
    proof: 'Built under a 24-hour HowdyHack deadline: a manually assembled course database powered class and section search, schedule cards, GPA distributions, and professor reviews.',
    tools: ['SQL', 'JavaScript', 'Data pipelines', 'Product design'],
    capture: '/portfolio/other-captures/proffinder.png',
    link: 'https://devpost.com/software/prof-finder',
  },
];

export const labProjects: LabProject[] = [
  {
    title: 'PickLedger',
    href: '/pickledger/',
    image: '/portfolio/project-captures/pickledger.png',
    images: ['/portfolio/project-captures/pickledger.png', '/portfolio/project-captures/pickledger-2.png'],
    summary: 'A public board of sports picks, source records, and graded results, published from committed JSON.',
    question: 'In-house models write an immutable pregame ledger. Grading runs every 15 minutes. Unapproved bets publish as passes at zero units until a version clears a holdout.',
    details: [
      { heading: 'How scoring works', copy: 'Settled picks are scored with Brier score, log loss, and calibration error against market prices. Missing prices are research rows, not profit and loss.' },
      { heading: 'What is not claimed', copy: 'No model is approved to stake. The approval file stays empty until a fitted version has at least 100 independently priced settled picks and a positive lower bound.' },
    ],
    tools: ['Python', 'scikit-learn', 'TypeScript', 'GitHub Actions'],
  },
  {
    title: 'MtbScope',
    href: '/genes/',
    image: '/portfolio/project-captures/mtbscope.png',
    images: ['/portfolio/project-captures/mtbscope.png', '/portfolio/project-captures/mtbscope-browse.png', '/portfolio/project-captures/mtbscope-compare.png'],
    summary: 'A static catalog of 4,018 H37Rv genes, built to compare them without treating missing data as zero.',
    question: 'Search by gene ID, symbol, or product. Pin up to eight genes. Literature comes from Europe PMC. The catalog is the TB Genome Portal protein table, reimplemented independently.',
    details: [
      { heading: 'Catalog', copy: '4,018 protein-coding genes, with annotations from TBDB, RefSeq, PATRIC, TubercuList, and NCBI. There is no app server.' },
      { heading: 'Comparison', copy: 'The compare tray stops at eight genes and stays in the browser. Ranking is a weighted mean over signals that actually have a measurement. Nulls are skipped, not scored as zero.' },
      { heading: 'What it is not', copy: 'Unpublished selection results are not part of the public catalog. Plots on a gene page are published portal figures, not a new analysis.' },
    ],
    tools: ['React', 'TypeScript', 'Genomics', 'Europe PMC'],
  },
  {
    title: 'Research',
    href: '/research/',
    image: '/portfolio/project-captures/sift.png',
    images: ['/portfolio/project-captures/sift.png', '/portfolio/project-captures/sift-paper.png'],
    summary: 'A browser paper reader. Full text comes from Europe PMC and NCBI, or from a PDF parsed on the device.',
    question: 'Paste a PMID, PMCID, DOI, or a list of them. Tables, figures, and equations stay with the paper. Paywalled papers need a local PDF, and that file is not uploaded.',
    details: [
      { heading: 'Full text', copy: 'Open-access XML is fetched from Europe PMC, then NCBI. JATS is turned into sections, tables, figures, and equations. A list can hold up to 120 identifiers.' },
      { heading: 'PDFs', copy: 'PDF.js reads the first 80 pages in the browser. The file stays in IndexedDB and is not part of sync.' },
      { heading: 'Study decks', copy: 'Exam cards, quiz, blanks, and matching live in Quizlet. This app is the paper library.' },
    ],
    tools: ['React', 'TypeScript', 'PDF.js', 'Europe PMC', 'NCBI'],
  },
  {
    title: 'Quizlet',
    href: '/quizlet/',
    image: '/portfolio/project-captures/quizlet.png',
    summary: 'Notes, flashcards, quiz, blanks, and matching for two bundled decks: 140 computability cards and 41 statistics cards.',
    question: 'A signed-out visit starts empty. Sync is limited to a provisioned Google account. Cards move through four mastery boxes, from unseen to mastered.',
    details: [
      { heading: 'Decks', copy: 'The computability deck is 140 cards, labeled terms, rules, theorems, and examples, studied as one deck. The statistics deck is 41 cards. The card text is not reprinted here.' },
      { heading: 'Import', copy: 'Markdown or JSON can replace a deck. Progress stores seen, correct, wrong, and starred, plus a best match time.' },
    ],
    tools: ['React', 'TypeScript', 'Firebase'],
  },
  {
    title: 'Simplfy',
    href: '/simplfy/',
    image: '/portfolio/project-captures/simplfy.png',
    images: ['/portfolio/project-captures/simplfy.png', '/portfolio/project-captures/simplfy-learn.png'],
    summary: 'A workbook of 288 statistics and tuberculosis plates. It is not a chatbot.',
    question: 'Each catalogue lesson is teach, example, practice, say-it-back, shelf, then papers. 168 plates are tuberculosis and 120 are statistics. Thirteen have a hand-written tutor script. The rest are derived from the plate.',
    details: [
      { heading: 'What a plate contains', copy: 'An analogy, one worked example, and three checks: conceptual, calculation, and figure. There are 11 figure types and 36 linked papers.' },
      { heading: 'What it does not do', copy: 'There is no live model. File lessons from an uploaded note skip the shelf and the papers.' },
    ],
    tools: ['React', 'TypeScript', 'Vite'],
  },
  {
    title: 'Daymark',
    href: '/daymark/',
    image: '/portfolio/project-captures/daymark.png',
    images: ['/portfolio/project-captures/daymark.png', '/portfolio/project-captures/daymark-week.png'],
    summary: 'A local-first habit log with period-aware streaks and an optional private sync.',
    question: 'A habit is a check, count, duration, quantity, or distance, with a daily, weekly, or monthly target. The current period does not break a streak. Strength uses an exponential smooth with a half-life of about 13 misses.',
    tools: ['React', 'TypeScript', 'IndexedDB'],
  },
  {
    title: 'Slate',
    href: '/slate/',
    image: '/portfolio/project-captures/slate.png',
    summary: 'A local-first task board. Lists, a completion gesture, and a per-task pomodoro.',
    question: 'The board writes to localStorage and IndexedDB, and the newer copy wins. A focus timer is 25 minutes, a short break is 5, and a long break is 15 after four focus blocks. The running timer stays on the device.',
    details: [
      { heading: 'What the board shows', copy: 'Sections, collapse, and drag. Checked tasks sink. There is no seeded demo list.' },
      { heading: 'What is not in the board', copy: 'Due dates and priorities exist on the task record and in a Gmail import script. The board itself edits the title.' },
    ],
    tools: ['React', 'TypeScript', 'Firebase'],
  },
  {
    title: 'Fare',
    href: '/fare/',
    image: '/portfolio/project-captures/fare.png',
    images: ['/portfolio/project-captures/fare.png', '/portfolio/project-captures/fare-log.png'],
    summary: 'A local-first calorie and macro log. Each entry freezes the nutrition that was true that day.',
    question: 'Search starts in usuals and a bundled USDA set of 5,403 foods, plus transcribed restaurant menus. Brand lookup and barcodes run only when you submit them. Past days do not change if a food is edited later.',
    details: [
      { heading: 'Snapshot', copy: 'Every log line stores per-serving nutrition and the total. The snapshot is the record. The food catalog is not.' },
      { heading: 'Lookup', copy: 'Barcodes go to Open Food Facts. FatSecret calls go through a server proxy so the key is not in the page. Targets are whatever you type. The app does not prescribe a diet.' },
    ],
    tools: ['Nutrition', 'Barcode search', 'Private data'],
  },
  {
    title: 'Recipes',
    href: '/recipes/',
    image: '/portfolio/project-captures/recipes.png',
    images: ['/portfolio/project-captures/recipes.png', '/portfolio/project-captures/recipes-2.png'],
    summary: 'One hundred one-serving ovo-lacto meals. Macros are calculated from ingredient snapshots, not typed in.',
    question: 'Each meal is 800 to 1,300 kcal. Search, cuisine, protein, time, and calorie band all run in the browser. Grocery links open a store search. They are not live prices.',
    details: [
      { heading: 'Nutrition', copy: 'Totals come from per-100-gram ingredient rows. Eggs and dairy are allowed. Meat, fish, and gelatin are rejected by a fail-closed check.' },
      { heading: 'Grocery', copy: 'Sixty-two product guides, with package and storage notes. The page does not scrape a retailer.' },
    ],
    tools: ['React', 'TypeScript', 'USDA snapshots'],
  },
  {
    title: 'Gym',
    href: '/gym/',
    image: '/portfolio/project-captures/gym.png',
    images: ['/portfolio/project-captures/gym.png', '/portfolio/project-captures/gym-2.png'],
    summary: 'A local-first lifting log. The weekly plan and a past workout are different records.',
    question: 'A logged day keeps an exercise snapshot, so deleting a movement from the template does not rewrite history. A local PR is a higher set volume, weight times reps, not a tested one-rep max. The exercise list mirrors 876 movements.',
    details: [
      { heading: 'Program versus log', copy: 'Supersets are stored on the session. The calendar marks a day completed, partial, planned, skipped, or unlogged.' },
      { heading: 'Sync', copy: 'The browser is the first copy. Google sync is optional and closed to accounts that are not on the private vault.' },
    ],
    tools: ['Training', 'Programs', 'Progress history'],
  },
  {
    title: 'Notes',
    href: '/notes/',
    image: '/portfolio/project-captures/notes.png',
    summary: 'A notes workspace whose source of truth is the account, not a file on the laptop.',
    question: 'Folders, labels, pin, and search. Rich text is TipTap: headings, lists, tasks, tables, and links, or plain text with a rich backup. Trash is soft. The client does not permanently delete.',
    details: [
      { heading: 'Limits', copy: 'A note title stops at 240 characters. The body stops at 600,000 characters. A note can hold 12 labels.' },
      { heading: 'What is missing', copy: 'There is no export and no version history. If the account is lost, the notes are gone. There is no second local database of the note bodies.' },
    ],
    tools: ['React', 'TipTap', 'Firestore'],
  },
  {
    title: 'ShotLab',
    href: '/shotlab/',
    image: '/portfolio/project-captures/shotlab.png',
    images: ['/portfolio/project-captures/shotlab.png', '/portfolio/project-captures/shotlab-2.png'],
    summary: 'On-device basketball form from one phone clip, using MediaPipe pose, not a ball tracker.',
    question: 'Thirty-three landmarks, one person. Phases are load, upward motion, release, jump peak, and landing. Release is wrist rise and arm extension, and you can move that frame. Makes and misses are labels you enter.',
    details: [
      { heading: 'Units', copy: 'Drift and landing shift are in shoulder widths, not centimeters. A coaching note waits until there are at least three makes and three misses.' },
      { heading: 'What it does not see', copy: 'No ball, rim, arc, or automatic make. Pose frames stay on the device.' },
    ],
    tools: ['MediaPipe', 'TypeScript', 'IndexedDB'],
  },
  {
    title: 'Timer',
    href: '/timer/',
    image: '/portfolio/project-captures/timer.png',
    images: ['/portfolio/project-captures/timer.png', '/portfolio/project-captures/timer-ocean.png'],
    summary: 'A focus timer with eight canvas scenes and no runtime libraries.',
    question: 'Presets are 5, 10, 15, 25, 50, and 90 minutes. The clock stores the wall-clock end time, so a background tab does not drift. Pomodoro is 25, then 5, and 15 after four focus blocks, only while the tab stays open.',
    details: [
      { heading: 'Scenes', copy: 'Forest, birds, rain, ocean, night, meadow, embers, and snow are drawn in canvas. There is no video and no photo background.' },
      { heading: 'Sound', copy: 'A completion chime is three sine tones. Ambient mode is filtered noise plus a few scene cues.' },
    ],
    tools: ['TypeScript', 'Canvas', 'Web Audio'],
  },
  {
    title: 'Degree Canvas',
    href: '/degree/',
    image: '/portfolio/project-captures/degree.png',
    images: ['/portfolio/project-captures/degree.png', '/portfolio/project-captures/degree-2.png'],
    summary: 'A local planner for the Texas A&M MSCS thesis degree. It checks countable hours, not just cards on a board.',
    question: 'Nine checks: 30 countable credits, 18 graded CSCE, one seminar, research hours, a non-CSCE cap, one 400-level course, and three breadth areas. At most 6 credits of CSCE 691 count. Extra research hours can sit on the board without counting.',
    details: [
      { heading: 'Catalog', copy: 'Thirty-two course codes, tagged from the published pages as of July 28, 2026. Drag a course onto a term. The plan is saved on the device first.' },
      { heading: 'What it is not', copy: 'Not an official degree audit. The committee and the current catalog can differ from this snapshot.' },
    ],
    tools: ['React', 'TypeScript', 'localStorage'],
  },
  {
    title: 'Radar',
    href: '/radar/',
    image: '/portfolio/project-captures/radar.png',
    images: ['/portfolio/project-captures/radar.png', '/portfolio/project-captures/radar-studies.png'],
    summary: 'Three static lists, rebuilt twice a day: papers, Texas A&M events, and paid studies.',
    question: 'Papers come from Europe PMC, PubMed, bioRxiv, medRxiv, OpenAlex, and arXiv. Events come from the university calendar and Get Involved. Studies come from Aggie Research Volunteers and ClinicalTrials.gov. The browser never calls those sites.',
    details: [
      { heading: 'Duplicates', copy: 'Listings merge on identity keys, then on a conservative title match. Each score is a list of named reasons, not a single hidden number.' },
      { heading: 'Pay', copy: 'Studies sort by guaranteed dollars per hour. Raffles and performance bonuses are not wages. Unknown rates stay in their own list instead of sorting as zero.' },
    ],
    tools: ['Astro', 'TypeScript', 'Europe PMC', 'OpenAlex'],
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
];
