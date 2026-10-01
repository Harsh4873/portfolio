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
    copy: 'Added study, recipe, timer, car-search, and daily-overview apps next to the research and personal tools.',
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
      'Turn notes into flashcards and quizzes, with progress saved between study sessions.',
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
      'A professor-discovery tool that helped students explore faculty research interests using a custom database assembled from Texas A&M data.',
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
    summary: 'Tracks sports picks, their sources, and results over time.',
    question: 'Collects picks daily, compares source records, and grades results using ESPN data.',
    tools: ['Sports data', 'Automated grading', 'Source records'],
  },
  {
    title: 'MtbScope',
    href: '/genes/',
    image: '/portfolio/project-captures/mtbscope.png',
    images: ['/portfolio/project-captures/mtbscope.png', '/portfolio/project-captures/mtbscope-browse.png', '/portfolio/project-captures/mtbscope-compare.png'],
    summary: 'Search and compare tuberculosis genes, with annotations and links to sources.',
    question: 'Search by gene ID, symbol, or product. Compare up to eight genes with their annotations, locations, and operons.',
    details: [
      { heading: "Why I built it", copy: "I wanted an easier way to look up TB genes while working on genomic analyses. MtbScope brings gene records and source annotations into a searchable interface." },
      { heading: "What I built", copy: "Search across 4,018 H37Rv protein-coding genes, filter the catalog, and compare up to eight genes side by side. Comparison links can be saved and shared." },
      { heading: "A useful detail", copy: "Gene pages combine annotations, sequences, published plots, and literature links. Ranking features account for missing measurements rather than treating missing values as zero." },
    ],
    tools: ['React', 'TypeScript', 'Genomics', 'Europe PMC'],
  },
  {
    title: 'Research',
    href: '/research/',
    image: '/portfolio/project-captures/sift.png',
    images: ['/portfolio/project-captures/sift.png', '/portfolio/project-captures/sift-paper.png'],
    summary: 'Read research papers and turn notes into flashcards, quizzes, and study exercises.',
    question: 'Import papers by DOI, PMID, PMCID, or PDF. Read the full text, search claims and data, or make study exercises from your own notes.',
    details: [
      { heading: "Why I built it", copy: "I needed a convenient way to read papers closely and study from my own notes." },
      { heading: "Reading papers", copy: "Review imports open-access full text through Europe PMC and NCBI. It keeps tables, figures, equations, and references with the paper, and supports searching within a saved library." },
      { heading: "Studying notes", copy: "Notes can become flashcards, quizzes, fill-in-the-blank questions, and matching exercises. PDF files are parsed on the device, and study progress can be saved. Exam decks also live in Quizlet." },
    ],
    tools: ['React', 'TypeScript', 'PDF.js', 'Europe PMC', 'NCBI'],
  },
  {
    title: 'Quizlet',
    href: '/quizlet/',
    image: '/portfolio/project-captures/quizlet.png',
    summary: 'Flashcards for exam prep, with quiz, blanks, and matching.',
    question: 'Decks stay on the device. Sync is optional, and a new account starts empty. Cards, a quiz, fill-in-the-blank, and matching sit in one place.',
    tools: ['Flashcards', 'Quiz', 'On device'],
  },
  {
    title: 'Simplfy',
    href: '/simplfy/',
    image: '/portfolio/project-captures/simplfy.png',
    images: ['/portfolio/project-captures/simplfy.png', '/portfolio/project-captures/simplfy-learn.png'],
    summary: 'A study buddy for statistics and tuberculosis biology: analogy, worked example, practice, then explain it back.',
    question: 'Lessons live on a shelf you can filter. Each one starts with a plain-language picture of the idea, then a worked problem, then practice.',
    tools: ['Statistics', 'Study', 'Biology'],
  },
  {
    title: 'Daymark',
    href: '/daymark/',
    image: '/portfolio/project-captures/daymark.png',
    images: ['/portfolio/project-captures/daymark.png', '/portfolio/project-captures/daymark-week.png'],
    summary: 'A flexible habit tracker for goals, streaks, reviews, notes, and optional cross-device sync.',
    question: 'Track habits by count, time, or distance. Set daily, weekly, or monthly targets and review progress with notes and heatmaps.',
    tools: ['Habits', 'Streaks', 'Optional sync'],
  },
  {
    title: 'Slate',
    href: '/slate/',
    image: '/portfolio/project-captures/slate.png',
    summary: 'A to-do list with sections, due dates, priorities, and optional sync across devices.',
    question: 'Add tasks with dates and priorities using text shortcuts. Tasks are saved on the device, with optional account sync.',
    tools: ['Tasks', 'Due dates', 'Optional sync'],
  },
  {
    title: 'Today',
    href: '/today/',
    image: '/portfolio/project-captures/today.png',
    images: ['/portfolio/project-captures/today.png', '/portfolio/project-captures/today-2.png'],
    summary: 'One daily view across tasks, habits, nutrition, and training.',
    question: 'Pulls the day together from Slate, Daymark, Fare, and Gym so the next useful thing is easier to see.',
    tools: ['Tasks', 'Habits', 'Training'],
  },
  {
    title: 'Fare',
    href: '/fare/',
    image: '/portfolio/project-captures/fare.png',
    images: ['/portfolio/project-captures/fare.png', '/portfolio/project-captures/fare-log.png'],
    summary: 'Track calories and macros with saved foods, barcode search, and meal history.',
    question: 'Find frequently logged foods quickly. Past entries keep their original nutrition values when a saved food changes.',
    details: [
      { heading: "Why I built it", copy: "I wanted a straightforward way to track meals and nutrition without another subscription." },
      { heading: "What it supports", copy: "Saved foods and meals, barcode search, calorie and macro totals, and suggestions based on previous entries. Past meals retain the nutrition values recorded at the time." },
    ],
    tools: ['Nutrition', 'Barcode search', 'Private data'],
  },
  {
    title: 'Recipes',
    href: '/recipes/',
    image: '/portfolio/project-captures/recipes.png',
    images: ['/portfolio/project-captures/recipes.png', '/portfolio/project-captures/recipes-2.png'],
    summary: 'A library of substantial vegetarian lunches and dinners, with macros and grocery notes.',
    question: 'Search meals, read the steps, and see practical grocery guidance. The library is built to be cooked from, not just saved.',
    tools: ['Recipes', 'Macros', 'Search'],
  },
  {
    title: 'Gym',
    href: '/gym/',
    image: '/portfolio/project-captures/gym.png',
    images: ['/portfolio/project-captures/gym.png', '/portfolio/project-captures/gym-2.png'],
    summary: 'Log workouts, follow training programs, and track progress.',
    question: 'Reusable programs track sets, reps, rest, supersets, calendar history, volume trends, and PRs without breaking old workout records when programs change.',
    details: [
      { heading: "Why I built it", copy: "I wanted to log workouts without paying for a subscription." },
      { heading: "What it supports", copy: "Reusable training programs, sets, reps, rest, supersets, workout history, volume trends, and personal records. Changes to a program preserve earlier workout records." },
    ],
    tools: ['Training', 'Programs', 'Progress history'],
  },
  {
    title: 'Notes',
    href: '/notes/',
    image: '/portfolio/project-captures/notes.png',
    summary: 'Write and organize notes with folders, labels, search, and optional rich-text formatting.',
    question: 'Notes sync through a Google account. Deleted notes go to trash and can be restored before permanent deletion.',
    tools: ['Rich text', 'Live sync', 'Private by account'],
  },
  {
    title: 'ShotLab',
    href: '/shotlab/',
    image: '/portfolio/project-captures/shotlab.png',
    images: ['/portfolio/project-captures/shotlab.png', '/portfolio/project-captures/shotlab-2.png'],
    summary: 'Analyze basketball shooting form from a video and compare shots with previous makes.',
    question: 'Estimates body position and shooting phases on the device. The release frame can be adjusted manually. It does not track the ball or detect makes automatically.',
    tools: ['Pose estimation', 'On-device inference', 'Outcome comparison'],
  },
  {
    title: 'Timer',
    href: '/timer/',
    image: '/portfolio/project-captures/timer.png',
    images: ['/portfolio/project-captures/timer.png', '/portfolio/project-captures/timer-ocean.png'],
    summary: 'A focus timer with living scenes such as forest, rain, ocean, and snow.',
    question: 'Pick a scene and set a session on one screen. The scenes are drawn in the browser.',
    tools: ['Focus', 'Scenes', 'Timer'],
  },
  {
    title: 'Degree Canvas',
    href: '/degree/',
    image: '/portfolio/project-captures/degree.png',
    images: ['/portfolio/project-captures/degree.png', '/portfolio/project-captures/degree-2.png'],
    summary: 'Plan a graduate degree by moving courses between terms and checking catalog requirements.',
    question: 'Checks credit totals, breadth requirements, and research-hour limits as courses move between terms. Plans are saved on the device, with optional Google account sync.',
    tools: ['Rule evaluation', 'Drag and drop', 'Optional sync'],
  },
  {
    title: 'Cars',
    href: '/cars/',
    image: '/portfolio/project-captures/cars.png',
    images: ['/portfolio/project-captures/cars.png', '/portfolio/project-captures/cars-board.png'],
    summary: 'A swipe deck of dealer-listed used cars, with photos, flags, and a searchable board.',
    question: 'Each card shows price, miles, a photo gallery, a green flag, and a red flag. The board adds search, make, place, and sort. Likes can sync with the other signed-in tools.',
    tools: ['Search', 'Photos', 'Filters'],
  },
  {
    title: 'Radar',
    href: '/radar/',
    image: '/portfolio/project-captures/radar.png',
    images: ['/portfolio/project-captures/radar.png', '/portfolio/project-captures/radar-studies.png'],
    summary: 'Browse research papers, Texas A&M events, and paid studies.',
    question: 'Combines listings from multiple sources, removes duplicates, and tracks changes. Paid studies are ranked by guaranteed hourly pay, with unknown rates listed separately.',
    details: [
      { heading: "Why I built it", copy: "Papers, campus events, and paid studies were spread across different websites. I wanted to browse them together and notice when a listing changed." },
      { heading: "What I built", copy: "Scheduled collection from paper sources, university calendars, and study listings, with duplicate detection and ranking. Each listing links back to its source." },
      { heading: "A useful detail", copy: "Paid studies are ranked by guaranteed hourly pay. Raffles are excluded from that calculation, and studies with unknown pay rates are listed separately." },
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
