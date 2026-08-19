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
  featured?: boolean;
}

export interface NewsItem {
  date: string;
  kind: string;
  title: string;
  copy: string;
}

export interface MethodArea {
  index: string;
  label: string;
  title: string;
  copy: string;
  tags: string[];
}

export interface ResearchOutput {
  title: string;
  href: string;
  kind: string;
  note: string;
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
  kicker: 'Computational genomics · products',
  degree: 'M.S. Computer Science, Texas A&M',
  thesis:
    'I work on Mycobacterium tuberculosis gene function with bioinformatics — TnSeq, genome-scale analysis, and products that make those results inspectable.',
  summary:
    'Graduate research assistant at the Ioerger Lab. I also build products for research, sports, training, and everyday life.',
  advisor: 'Thomas R. Ioerger',
  lab: 'Ioerger Lab, Texas A&M University',
  labHref: 'https://people.engr.tamu.edu/ioerger/index.html',
  now: [
    { label: 'Now', value: 'Graduate Assistant Research, Ioerger Lab' },
    { label: 'Focus', value: 'TB genes, TnSeq, and bioinformatics' },
    { label: 'Products', value: 'MtbScope, Radar, Recall, and a private systems lab' },
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
    { label: 'Advisor', value: 'Thomas R. Ioerger' },
    { label: 'Organism', value: 'Mycobacterium tuberculosis' },
    { label: 'Focus', value: 'Gene function, TnSeq, and genome-scale bioinformatics' },
    { label: 'Scale', value: 'Genome-wide TB datasets on Texas A&M HPRC' },
    { label: 'Compute', value: 'Python, Slurm, high-performance computing' },
  ] satisfies ProfileFact[],
  researchLead:
    'I study Mycobacterium tuberculosis gene function with bioinformatics, including TnSeq and genome-scale analysis.',
};

export const news: NewsItem[] = [
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
    copy: 'An interactive math-learning environment with multi-tool AI orchestration.',
  },
  {
    date: '2024',
    kind: 'Hackathon',
    title: 'TAMU Datathon, 2nd of 50 teams',
    copy: 'An investigation workflow connecting incomplete evidence under a contest deadline.',
  },
];

export const methodAreas: MethodArea[] = [
  {
    index: '01',
    label: 'TnSeq',
    title: 'Gene function at genome scale',
    copy: 'Use transposon sequencing and related assays to ask what TB genes do, rather than treating each locus as a one-off story.',
    tags: ['TnSeq', 'Essentiality', 'Gene function'],
  },
  {
    index: '02',
    label: 'Genes',
    title: 'TB genomes, made comparable',
    copy: 'Work from H37Rv annotation, gene identifiers, and genome-wide tables so a result can be traced back to a locus.',
    tags: ['H37Rv', 'Annotation', 'Comparative genomics'],
  },
  {
    index: '03',
    label: 'Compute',
    title: 'Bioinformatics that can be rerun',
    copy: 'Python workflows and Slurm jobs on Texas A&M HPRC keep genome-scale analyses from becoming a one-time notebook.',
    tags: ['Python', 'Slurm', 'HPRC'],
  },
  {
    index: '04',
    label: 'Products',
    title: 'Tools people can actually open',
    copy: 'The same genome is browsable in MtbScope. Radar ranks papers, campus events, and paid studies. Recall turns notes and papers into study sets.',
    tags: ['MtbScope', 'Radar', 'Recall'],
  },
];

export const researchOutputs: ResearchOutput[] = [
  {
    title: 'MtbScope',
    href: '/genes/',
    kind: 'Product',
    note: 'H37Rv gene browser for search, multi-gene comparison, and source annotations.',
  },
  {
    title: 'Radar',
    href: '/radar/',
    kind: 'Product',
    note: 'Literature, campus listings, and paid studies ranked with the arithmetic shown.',
  },
  {
    title: 'Recall',
    href: '/research/',
    kind: 'Product',
    note: 'Local-first study sets generated from notes and papers, with the source kept close.',
  },
];

export const experiences: Experience[] = [
  {
    period: 'Jun 2026 - present',
    role: 'Graduate Assistant Research (Computational Genomics)',
    organization: 'Ioerger Lab · Texas A&M University',
    kind: 'Research',
    summary:
      'Building computational workflows for Mycobacterium tuberculosis gene function, including TnSeq, genome-scale bioinformatics, and inspectable analysis.',
    highlights: [
      'Analyze TB gene function with bioinformatics methods, including TnSeq and genome-wide datasets.',
      'Run Python and Slurm workflows on Texas A&M HPRC so genome-scale jobs stay reproducible.',
      'Keep gene identifiers, annotations, and parameters close enough that a result can be inspected later.',
    ],
    tools: ['Python', 'R', 'Slurm', 'TnSeq', 'Bioinformatics', 'HPC'],
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
    label: 'Question',
    title: 'Start from gene function.',
    copy: 'Ask what a Mycobacterium tuberculosis gene is doing, not only whether a pipeline finished.',
  },
  {
    index: '02',
    label: 'Measure',
    title: 'Use genome-scale data.',
    copy: 'TnSeq and related assays put thousands of genes on the same table so function can be compared, not just narrated.',
  },
  {
    index: '03',
    label: 'Analyze',
    title: 'Keep the bioinformatics rerunnable.',
    copy: 'Python workflows, Slurm jobs, and enough metadata to trace a call back to its inputs.',
  },
  {
    index: '04',
    label: 'Show',
    title: 'Put the result in a product.',
    copy: 'A gene-level finding is more useful when it can be opened, searched, and compared in a tool instead of a private notebook.',
  },
];

export const researchChecks: ResearchCheck[] = [
  {
    label: 'Function',
    title: 'TnSeq and essentiality',
    copy: 'Genome-wide disruption data for asking which genes matter under a condition, without pretending one screen answers every question.',
  },
  {
    label: 'Context',
    title: 'Annotation and comparison',
    copy: 'Map results onto H37Rv identifiers, products, and neighboring genes so a hit stays attached to a locus.',
  },
  {
    label: 'Compute',
    title: 'Traceable HPC',
    copy: 'Treat cluster jobs as part of the method: what ran, on which inputs, and whether it can be run again.',
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
    link: 'https://devpost.com/software/alpha-ek9j1u',
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
    link: 'https://devpost.com/software/sign-sensor',
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
    link: 'https://devpost.com/software/prof-finder',
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
    featured: true,
    summary: 'A comparison-first browser for tuberculosis genes, with fast search, multi-gene comparison, and source annotations.',
    question: 'Search by Rv ID, symbol, or product, then pin up to eight genes while carrying annotations, locus, and operon context into comparison.',
    tools: ['Genomics', 'Search', 'Data visualization'],
  },
  {
    code: 'SYS-03',
    title: 'Recall',
    category: 'Research',
    href: '/research/',
    image: '/portfolio/project-captures/sift.png',
    status: 'Study sets from real notes',
    featured: true,
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
    status: 'Local-first to-do',
    summary: 'A local-first to-do list with sections, due dates, priorities, and optional cross-device sync.',
    question: 'Quick-add tokens file tasks into sections with due dates and priorities. Completed work can stay visible or drop out, and everything lives on the device until you sign in.',
    tools: ['Tasks', 'Local-first', 'Optional sync'],
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
    featured: true,
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
