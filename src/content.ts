export interface Experience {
  period: string;
  role: string;
  organization: string;
  kind: string;
  summary: string;
  highlights: string[];
  tools: string[];
}

export interface Project {
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

export interface LabProject {
  title: string;
  href: string;
  image: string;
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

export const profile = {
  name: 'Harsh Dave',
  mark: 'HD',
  kicker: 'Computational genomics · software',
  degree: 'M.S. Computer Science, Texas A&M',
  thesis:
    'I study Mycobacterium tuberculosis gene function using TnSeq and genome-scale analysis.',
  summary:
    'Graduate research assistant at the Ioerger Lab. I also build apps for research, studying, and everyday use.',
  advisor: 'Thomas R. Ioerger',
  lab: 'Ioerger Lab, Texas A&M University',
  labHref: 'https://people.engr.tamu.edu/ioerger/index.html',
  now: [
    { label: 'Now', value: 'Graduate Assistant Research, Ioerger Lab' },
    { label: 'Focus', value: 'TB genes, TnSeq, and bioinformatics' },
    { label: 'Projects', value: 'MtbScope, Radar, and Recall' },
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
    { label: 'CV', href: '/portfolio/cv.pdf' },
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
    copy: 'A math-learning app with interactive explanations and visualizations.',
  },
  {
    date: '2024',
    kind: 'Hackathon',
    title: 'TAMU Datathon, 2nd of 50 teams',
    copy: 'Used web scraping and AI tools to investigate clues during the competition.',
  },
];

export const methodAreas: MethodArea[] = [
  {
    label: 'TnSeq',
    title: 'Gene function at genome scale',
    copy: 'Use transposon sequencing to study TB gene function and essentiality.',
    tags: ['TnSeq', 'Essentiality', 'Gene function'],
  },
  {
    label: 'Genes',
    title: 'Gene annotation and comparison',
    copy: 'Compare genome-wide results using H37Rv gene identifiers and annotations.',
    tags: ['H37Rv', 'Annotation', 'Comparative genomics'],
  },
  {
    label: 'Compute',
    title: 'High-performance computing',
    copy: 'Run genome-scale analyses with Python and Slurm on Texas A&M HPRC.',
    tags: ['Python', 'Slurm', 'HPRC'],
  },
  {
    label: 'Software',
    title: 'Research and study apps',
    copy: 'MtbScope is a TB gene browser. Radar collects papers, events, and paid studies. Recall turns notes into study sets.',
    tags: ['MtbScope', 'Radar', 'Recall'],
  },
];

export const researchOutputs: ResearchOutput[] = [
  {
    title: 'MtbScope',
    href: '/genes/',
    kind: 'Project',
    note: 'H37Rv gene browser for search, multi-gene comparison, and source annotations.',
  },
  {
    title: 'Radar',
    href: '/radar/',
    kind: 'Project',
    note: 'Research papers, campus events, and paid studies in one place.',
  },
  {
    title: 'Recall',
    href: '/research/',
    kind: 'Project',
    note: 'Flashcards and quizzes made from notes and papers.',
  },
];

export const experiences: Experience[] = [
  {
    period: 'Jun 2026 - present',
    role: 'Graduate Assistant Research (Computational Genomics)',
    organization: 'Ioerger Lab · Texas A&M University',
    kind: 'Research',
    summary:
      'Study Mycobacterium tuberculosis gene function using TnSeq and genome-scale bioinformatics.',
    highlights: [
      'Analyze TB gene function with bioinformatics methods, including TnSeq and genome-wide datasets.',
      'Run Python and Slurm workflows on Texas A&M HPRC so genome-scale jobs stay reproducible.',
      'Record gene identifiers, annotations, and analysis parameters with each result.',
    ],
    tools: ['Python', 'R', 'Slurm', 'TnSeq', 'Bioinformatics', 'HPC'],
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
    summary: 'Tracks sports picks, their sources, and results over time.',
    question: 'Collects picks daily, compares source records, and grades results using ESPN data.',
    tools: ['Sports data', 'Automated grading', 'Source records'],
  },
  {
    title: 'MtbScope',
    href: '/genes/',
    image: '/portfolio/project-captures/mtbscope.png',
    featured: true,
    summary: 'Search and compare tuberculosis genes, with annotations and links to sources.',
    question: 'Search by gene ID, symbol, or product. Compare up to eight genes with their annotations, locations, and operons.',
    tools: ['Genomics', 'Search', 'Data visualization'],
  },
  {
    title: 'Recall',
    href: '/research/',
    image: '/portfolio/project-captures/sift.png',
    featured: true,
    summary: 'Turns notes and papers into flashcards, quizzes, and other study exercises.',
    question: 'Create flashcards, quizzes, fill-in-the-blank questions, and matching exercises from markdown. Review the original material alongside each study set.',
    tools: ['Flashcards', 'Quizzes', 'PDFs'],
  },
  {
    title: 'Daymark',
    href: '/daymark/',
    image: '/portfolio/project-captures/daymark.png',
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
    title: 'Fare',
    href: '/fare/',
    image: '/portfolio/project-captures/fare.png',
    summary: 'Track calories and macros with saved foods, barcode search, and meal history.',
    question: 'Find frequently logged foods quickly. Past entries keep their original nutrition values when a saved food changes.',
    tools: ['Nutrition', 'Barcode search', 'Private data'],
  },
  {
    title: 'Gym',
    href: '/gym/',
    image: '/portfolio/project-captures/gym.png',
    summary: 'Log workouts, follow training programs, and track progress.',
    question: 'Reusable programs track sets, reps, rest, supersets, calendar history, volume trends, and PRs without breaking old workout records when programs change.',
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
    summary: 'Analyze basketball shooting form from a video and compare shots with previous makes.',
    question: 'Estimates body position and shooting phases on the device. The release frame can be adjusted manually. It does not track the ball or detect makes automatically.',
    tools: ['Pose estimation', 'On-device inference', 'Outcome comparison'],
  },
  {
    title: 'Degree Canvas',
    href: '/degree/',
    image: '/portfolio/project-captures/degree.png',
    summary: 'Plan a graduate degree by moving courses between terms and checking catalog requirements.',
    question: 'Checks credit totals, breadth requirements, and research-hour limits as courses move between terms. Plans are saved on the device, with optional Google account sync.',
    tools: ['Rule evaluation', 'Drag and drop', 'Optional sync'],
  },
  {
    title: 'Radar',
    href: '/radar/',
    image: '/portfolio/project-captures/radar.png',
    featured: true,
    summary: 'Browse research papers, Texas A&M events, and paid studies.',
    question: 'Combines listings from multiple sources, removes duplicates, and tracks changes. Paid studies are ranked by guaranteed hourly pay, with unknown rates listed separately.',
    tools: ['Papers', 'Campus events', 'Paid studies'],
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
