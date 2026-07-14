import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Atom,
  BookOpen,
  Braces,
  BrainCircuit,
  CircleDot,
  Code2,
  Cpu,
  Database,
  Dumbbell,
  Github,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Microscope,
  Network,
  Printer,
  Search,
  ServerCog,
  Sparkles,
  TerminalSquare,
  Trophy,
} from 'lucide-react';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  curiosityThreads,
  experiences,
  labProjects,
  navigation,
  operatingQuestions,
  personalCoordinates,
  personalLenses,
  principles,
  projects,
  proofPoints,
  researchChecks,
  researchStages,
  skillGroups,
  sports,
  type Experience,
  type LabCategory,
  type Project,
  type RouteId,
} from './content';
import { routeHref, useRoute } from './useRoute';

const EMAIL = 'hdav3228@gmail.com';

function AtlasMark() {
  return (
    <svg className="atlas-mark" viewBox="0 0 54 54" aria-hidden="true">
      <circle cx="27" cy="27" r="23" />
      <path d="M9 27h36M27 9c8 8 8 28 0 36M27 9c-8 8-8 28 0 36" />
      <circle className="atlas-mark-dot" cx="36" cy="19" r="3.5" />
    </svg>
  );
}

function SiteHeader({ route }: { route: RouteId }) {
  return (
    <header className="site-header">
      <a className="identity-link" href={routeHref('start')} aria-label="Harsh Dave, home">
        <AtlasMark />
        <span>
          <strong>Harsh Dave</strong>
          <small>CS · Statistics · Research</small>
        </span>
      </a>

      <nav className="primary-nav" aria-label="Portfolio sections">
        {navigation.map((item) => (
          <a
            className={item.id === route ? 'nav-link active' : 'nav-link'}
            href={routeHref(item.id)}
            aria-current={item.id === route ? 'page' : undefined}
            key={item.id}
          >
            <span>{item.index}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-contact" href={'mailto:' + EMAIL}>
        Let&apos;s talk
        <ArrowUpRight aria-hidden="true" />
      </a>
    </header>
  );
}

function RouteLink({ route, children, className }: { route: RouteId; children: ReactNode; className?: string }) {
  return (
    <a href={routeHref(route)} className={className}>
      {children}
    </a>
  );
}

function ThreadDiagram() {
  return (
    <svg className="thread-diagram" viewBox="0 0 520 390" role="img" aria-labelledby="thread-title thread-desc">
      <title id="thread-title">Harsh&apos;s areas of practice</title>
      <desc id="thread-desc">A line connects software, data, and biology around a central question.</desc>
      <path className="thread-path thread-shadow" d="M60 260C85 98 200 75 258 184s124 150 208 36" />
      <path className="thread-path" d="M60 260C85 98 200 75 258 184s124 150 208 36" />
      <g className="thread-node node-code">
        <circle cx="79" cy="205" r="34" />
        <text x="79" y="210">CODE</text>
      </g>
      <g className="thread-node node-data">
        <circle cx="250" cy="171" r="38" />
        <text x="250" y="176">DATA</text>
      </g>
      <g className="thread-node node-bio">
        <circle cx="420" cy="251" r="34" />
        <text x="420" y="256">BIO</text>
      </g>
      <g className="question-node">
        <circle cx="264" cy="284" r="56" />
        <text x="264" y="278">BETTER</text>
        <text x="264" y="298">QUESTIONS</text>
      </g>
      <path className="question-line" d="M264 228v-24" />
      <circle className="orbit-dot orbit-one" cx="133" cy="117" r="7" />
      <circle className="orbit-dot orbit-two" cx="460" cy="204" r="7" />
      <text className="diagram-note" x="48" y="337">ONE THREAD / MANY DISCIPLINES</text>
    </svg>
  );
}

function ProofRibbon() {
  return (
    <section className="proof-ribbon" aria-label="Education and current focus">
      {proofPoints.map((point, index) => (
        <article key={point.value}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{point.value}</strong>
          <p>{point.label}</p>
        </article>
      ))}
    </section>
  );
}

function StartPage() {
  const disciplines = [
    {
      route: 'experience' as const,
      number: '01',
      title: 'Software, end to end',
      copy: 'From an unfinished question to a system people can actually use.',
      icon: Code2,
    },
    {
      route: 'research' as const,
      number: '02',
      title: 'Evidence, not theater',
      copy: 'Reproducible analysis, explicit uncertainty, and results that stay inspectable.',
      icon: Microscope,
    },
    {
      route: 'projects' as const,
      number: '03',
      title: 'Curiosity in public',
      copy: 'Hackathons and side projects where new tools meet practical constraints.',
      icon: Sparkles,
    },
  ];

  return (
    <>
      <section className="start-hero" aria-labelledby="start-heading">
        <div className="hero-copy">
          <p className="eyebrow"><span>Portfolio / 2026</span> Researcher · Builder · Persistent question-asker</p>
          <h1 id="start-heading">
            <span>Inspect systems.</span>
            <em>Find signal.</em>
            <span>Build better.</span>
          </h1>
          <p className="hero-lede">
            I&apos;m Harsh—a computer scientist, statistician, and computational genomics researcher. I like taking complicated systems apart, understanding what the evidence can actually support, and rebuilding them into something useful.
          </p>
          <div className="hero-actions">
            <RouteLink route="projects" className="button button-primary">
              Explore the work <ArrowRight aria-hidden="true" />
            </RouteLink>
            <a className="button button-quiet" href={'mailto:' + EMAIL}>
              <Mail aria-hidden="true" /> Say hello
            </a>
          </div>
        </div>

        <aside className="hero-atlas" aria-label="Current coordinates">
          <div className="atlas-label">
            <span>Current coordinates</span>
            <CircleDot aria-hidden="true" />
          </div>
          <ThreadDiagram />
          <div className="now-note">
            <span>Now</span>
            <p>Pursuing an M.S. in Computer Science while studying positive selection in tuberculosis genomes in the Ioerger Lab.</p>
          </div>
        </aside>
      </section>

      <ProofRibbon />

      <section className="coordinates-section" aria-labelledby="coordinates-heading">
        <header className="coordinates-heading">
          <p className="chapter-label">Current coordinates</p>
          <h2 id="coordinates-heading">Now, next, and the long horizon.</h2>
          <p>A direction of travel, not a perfectly linear plan.</p>
        </header>
        <div className="coordinate-list">
          {personalCoordinates.map((coordinate) => (
            <article key={coordinate.index}>
              <span className="coordinate-index">{coordinate.index}</span>
              <p>{coordinate.horizon}</p>
              <h3>{coordinate.title}</h3>
              <span>{coordinate.copy}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="discipline-section" aria-labelledby="discipline-heading">
        <div className="section-intro">
          <p className="chapter-label">The through line</p>
          <h2 id="discipline-heading">Different disciplines.<br />One standard of care.</h2>
          <p>I like hard problems that reward both technical depth and a clear explanation of what matters.</p>
        </div>

        <div className="discipline-list">
          {disciplines.map(({ route, number, title, copy, icon: Icon }) => (
            <RouteLink route={route} className="discipline-row" key={route}>
              <span className="discipline-number">{number}</span>
              <Icon aria-hidden="true" />
              <span className="discipline-copy">
                <strong>{title}</strong>
                <small>{copy}</small>
              </span>
              <ArrowRight aria-hidden="true" />
            </RouteLink>
          ))}
        </div>
      </section>

      <section className="curiosity-section" aria-labelledby="curiosity-heading">
        <header>
          <p className="chapter-label light">Questions in orbit</p>
          <h2 id="curiosity-heading">The subjects change.<br />The instinct does not.</h2>
          <p>I keep returning to places where the system is complex, the evidence is messy, and a clearer tool could change what someone is able to understand.</p>
        </header>
        <div className="curiosity-grid">
          {curiosityThreads.map((thread) => (
            <article key={thread.index}>
              <span>{thread.index}</span>
              <h3>{thread.title}</h3>
              <p>{thread.copy}</p>
              <div className="signal-line" aria-label="Related subjects">
                {thread.signals.map((signal) => <small key={signal}>{signal}</small>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="question-console" aria-labelledby="questions-heading">
        <div className="console-heading">
          <p className="chapter-label">Operating questions</p>
          <h2 id="questions-heading">My default debugging loop.</h2>
          <p>These questions follow me from genomic pipelines to product decisions, sports arguments, and training plans.</p>
        </div>
        <ol>
          {operatingQuestions.map((question, index) => (
            <li key={question}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{question}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="contact-band">
        <p>Have an interesting system, dataset, or research question?</p>
        <a href={'mailto:' + EMAIL}>Let&apos;s compare notes <ArrowUpRight aria-hidden="true" /></a>
      </section>
    </>
  );
}

function PageHeading({ headingId, chapter, title, lede, aside }: { headingId: string; chapter: string; title: string; lede: string; aside: string }) {
  return (
    <header className="page-heading" aria-labelledby={headingId}>
      <p className="chapter-label">{chapter}</p>
      <div>
        <h1 id={headingId}>{title}</h1>
        <p>{lede}</p>
      </div>
      <p className="heading-aside">{aside}</p>
    </header>
  );
}

function ExperienceEntry({ experience, index }: { experience: Experience; index: number }) {
  return (
    <article className="experience-entry">
      <div className="experience-rail">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <i aria-hidden="true" />
      </div>
      <div className="experience-meta">
        <p>{experience.period}</p>
        <span>{experience.kind}</span>
      </div>
      <div className="experience-body">
        <p className="organization">{experience.organization}</p>
        <h2>{experience.role}</h2>
        <p className="experience-summary">{experience.summary}</p>
        <ul>
          {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
        <div className="tool-line" aria-label="Tools and methods">
          {experience.tools.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
        <div className="experience-translation">
          <ArrowRight aria-hidden="true" />
          <span><strong>What it sharpened</strong>{experience.translation}</span>
        </div>
      </div>
    </article>
  );
}

function ExperiencePage() {
  return (
    <>
      <PageHeading
        headingId="experience-heading"
        chapter="01 / Experience"
        title="Work that crosses boundaries."
        lede="My best work lives between disciplines: software with scientific rigor, research with production discipline, and AI grounded in the system around it. Each role taught me a different way to translate complexity."
        aside="A selected chronology · 2022—Now"
      />
      <section className="experience-list" aria-label="Selected experience">
        {experiences.map((experience, index) => (
          <ExperienceEntry experience={experience} index={index} key={experience.role + experience.organization} />
        ))}
      </section>
      <section className="next-chapter">
        <span>Next chapter</span>
        <RouteLink route="research">Inside the research <ArrowRight aria-hidden="true" /></RouteLink>
      </section>
    </>
  );
}

function ResearchPage() {
  const methods = ['~4,000 genes', 'Cohort comparison', 'Bayesian MCMC', 'GenomegaMap', 'Posterior analysis', 'Python pipelines', 'Slurm arrays', 'HPRC', 'pN/pS', 'Chi-square', 'FDR', 'PAML'];

  return (
    <>
      <section className="research-hero" aria-labelledby="research-heading">
        <div className="research-title-block">
          <p className="chapter-label light">02 / Research</p>
          <span className="research-status"><i aria-hidden="true" /> Active · Ioerger Lab</span>
          <h1 id="research-heading">When cohorts differ,<br /><em>what is the signal?</em></h1>
          <p>
            I study evidence of positive selection in <i>Mycobacterium tuberculosis</i> isolates from patient cohorts with and without diabetes—and build the computational path from sequence data to interpretation so every step can be inspected.
          </p>
        </div>
        <div className="sequence-field" aria-hidden="true">
          <span>ATG CCG TTA GAC</span><span>GGT AAC CTC TGA</span><span>CTA GGC <b>A</b>AT CCG</span><span>TAC GGA TTC AAC</span><span>GCA TTA CCG GAT</span><span>AAC TCG GTA CTA</span><span>CCG ATC TTA GGC</span>
        </div>
      </section>

      <section className="research-framework" aria-label="Research approach">
        <article>
          <span>01 / Question</span>
          <BrainCircuit aria-hidden="true" />
          <h2>Start with the contrast.</h2>
          <p>Define the diabetes versus non-diabetes cohort comparison in a way that can be tested with sequence evidence, then keep confounding, assumptions, and uncertainty visible.</p>
        </article>
        <article>
          <span>02 / System</span>
          <TerminalSquare aria-hidden="true" />
          <h2>Build for repeatability.</h2>
          <p>Automate inputs, genome-wide compute, posterior extraction, statistical checks, and artifact generation so roughly 4,000 gene analyses can be rebuilt—not merely remembered.</p>
        </article>
        <article>
          <span>03 / Story</span>
          <BookOpen aria-hidden="true" />
          <h2>Translate without flattening.</h2>
          <p>Turn technical output into tables, figures, and prose that preserve nuance while helping a biology-first audience see the evidence.</p>
        </article>
      </section>

      <section className="research-pipeline" aria-labelledby="pipeline-heading">
        <header>
          <p className="chapter-label">Analysis trace</p>
          <h2 id="pipeline-heading">From cohort definition to a defensible claim.</h2>
          <p>The workflow is designed as a chain of inspectable decisions. A result is only as trustworthy as the path that produced it.</p>
        </header>
        <ol>
          {researchStages.map((stage) => (
            <li key={stage.index}>
              <div className="pipeline-node"><span>{stage.index}</span><i aria-hidden="true" /></div>
              <article>
                <p>{stage.label}</p>
                <h3>{stage.title}</h3>
                <span>{stage.copy}</span>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section className="methods-band" aria-label="Research methods">
        <p>Methods in motion</p>
        <div>
          {methods.map((method) => <span key={method}>{method}</span>)}
        </div>
      </section>

      <section className="research-detail">
        <div className="research-detail-heading">
          <p className="chapter-label">Current work</p>
          <h2>A pipeline is also an argument.</h2>
        </div>
        <div className="research-detail-copy">
          <p>
            GenomegaMap supplies a Bayesian view of selection, but no single model gets the final word. I compare posterior behavior and intervals between cohorts, then use complementary statistics to ask whether an apparent signal persists under a different lens.
          </p>
          <div className="manuscript-note">
            <Atom aria-hidden="true" />
            <span>
              <strong>Manuscript in preparation</strong>
              Computational genomics research with Dr. Thomas Ioerger at Texas A&M University.
            </span>
          </div>
        </div>
      </section>

      <section className="validation-section" aria-labelledby="validation-heading">
        <header>
          <p className="chapter-label">Triangulation</p>
          <h2 id="validation-heading">Confidence should come from convergence.</h2>
          <p>These checks are validation paths, not claims of a finished biological result. Their purpose is to expose method dependence before interpretation.</p>
        </header>
        <div>
          {researchChecks.map((check, index) => (
            <article key={check.label}>
              <span>{String(index + 1).padStart(2, '0')} / {check.label}</span>
              <h3>{check.title}</h3>
              <p>{check.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="next-chapter dark-next">
        <span>Next chapter</span>
        <RouteLink route="projects">Selected projects <ArrowRight aria-hidden="true" /></RouteLink>
      </section>
    </>
  );
}

function ProjectRow({ project, featured = false }: { project: Project; featured?: boolean }) {
  const content = (
    <>
      <span className="project-index">{project.index}</span>
      <div className="project-title">
        <p>{project.kicker}</p>
        <h2>{project.title}</h2>
      </div>
      <div className="project-story">
        <p>{project.summary}</p>
        <strong>{project.proof}</strong>
        <div className="tool-line">
          {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      </div>
      {project.link ? <ArrowUpRight className="project-arrow" aria-hidden="true" /> : <ArrowRight className="project-arrow" aria-hidden="true" />}
    </>
  );

  if (project.link) {
    return <a className={featured ? 'project-row featured' : 'project-row'} href={project.link} target="_blank" rel="noreferrer">{content}<span className="sr-only"> (opens in a new tab)</span></a>;
  }

  return <article className={featured ? 'project-row featured' : 'project-row'}>{content}</article>;
}

const labFilters: Array<'All' | LabCategory> = ['All', 'Signals', 'Research', 'Life systems'];

function SystemsLab() {
  const [activeFilter, setActiveFilter] = useState<(typeof labFilters)[number]>('All');
  const visibleProjects = activeFilter === 'All'
    ? labProjects
    : labProjects.filter((project) => project.category === activeFilter);

  return (
    <section className="systems-lab" aria-labelledby="systems-lab-heading">
      <header>
        <div>
          <p className="chapter-label light"><Cpu aria-hidden="true" /> Independent systems lab · harsh.bet</p>
          <h2 id="systems-lab-heading">Software for the things I keep trying to understand.</h2>
        </div>
        <p>
          Separate from coursework and hackathons, these are living products I maintain for research, routines, training, nutrition, and sports analysis. Each began with a question I wanted the software to make easier to answer.
        </p>
      </header>

      <div className="lab-controls">
        <div role="group" aria-label="Filter independent projects">
          {labFilters.map((filter) => (
            <button
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              key={filter}
            >
              {filter}
            </button>
          ))}
        </div>
        <p role="status" aria-live="polite">Showing {visibleProjects.length} of {labProjects.length} systems</p>
      </div>

      <div className="lab-grid">
        {visibleProjects.map((project) => (
          <a className="lab-card" href={project.href} target="_blank" rel="noreferrer" key={project.code}>
            <div className="lab-card-meta">
              <span>{project.code}</span>
              <span>{project.category}</span>
            </div>
            <div className="lab-card-title">
              <div>
                <small>{project.status}</small>
                <h3>{project.title}</h3>
              </div>
              <ArrowUpRight aria-hidden="true" />
            </div>
            <p>{project.summary}</p>
            <blockquote>{project.question}</blockquote>
            <div className="tool-line" aria-label="Project focus">
              {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function ProjectsPage() {
  return (
    <>
      <PageHeading
        headingId="projects-heading"
        chapter="03 / Projects"
        title="Proof through making."
        lede="Team projects, coursework, and hackathons taught me how to build under constraints. My independent lab is where the questions become personal and the systems keep evolving after the deadline."
        aside="Selected builds · Team work + independent systems"
      />
      <section className="project-chapter-intro" aria-labelledby="selected-builds-heading">
        <span>Part I / Selected builds</span>
        <div>
          <h2 id="selected-builds-heading">Teams, deadlines, and fast feedback.</h2>
          <p>Work shaped by collaboration, competition, course constraints, and the discipline of shipping a coherent result.</p>
        </div>
      </section>
      <section className="project-list" aria-label="Selected projects">
        {projects.map((project, index) => <ProjectRow project={project} featured={index === 0} key={project.title} />)}
      </section>
      <div className="project-links">
        <a href="https://github.com/Harsh4873" target="_blank" rel="noreferrer"><Github aria-hidden="true" /> More code on GitHub <ArrowUpRight aria-hidden="true" /></a>
        <a href="https://devpost.com/hdav3228" target="_blank" rel="noreferrer"><Sparkles aria-hidden="true" /> Hackathons on Devpost <ArrowUpRight aria-hidden="true" /></a>
      </div>
      <SystemsLab />
      <section className="next-chapter">
        <span>Next chapter</span>
        <RouteLink route="about">Education, tools & interests <ArrowRight aria-hidden="true" /></RouteLink>
      </section>
    </>
  );
}

function AboutPage() {
  const personalLensIcons = [Search, BookOpen, ServerCog, Microscope];
  const principleIcons = [Braces, Layers3, BrainCircuit, Database];

  return (
    <>
      <PageHeading
        headingId="about-heading"
        chapter="04 / About"
        title="I keep asking what is underneath."
        lede="Computer science taught me how to build. Statistics taught me how to ask whether the result is trustworthy. Biology gave those skills harder, more meaningful questions. Curiosity is what keeps pulling the three together."
        aside="Harsh Dave · College Station, Texas"
      />

      <section className="about-manifesto" aria-labelledby="manifesto-heading">
        <div className="manifesto-mark" aria-hidden="true"><Network /></div>
        <div>
          <p className="chapter-label">The connecting instinct</p>
          <h2 id="manifesto-heading">Understand the system. Find the friction. Make it useful.</h2>
        </div>
        <div className="manifesto-copy">
          <p>I am probably an excessive asker of “but how does that actually work?” The subject might be a Bayesian model, an AI request moving through a data center, a training plateau, or a sports statistic whose context feels incomplete.</p>
          <p>The common thread is practical: inspect the machinery, identify what the evidence says, and turn the understanding into a clearer process or product.</p>
        </div>
      </section>

      <section className="education-record" aria-labelledby="education-heading">
        <div className="education-seal"><GraduationCap aria-hidden="true" /><span>TAMU</span></div>
        <div>
          <p className="chapter-label">Education</p>
          <h2 id="education-heading">Texas A&amp;M University</h2>
          <p>Dual B.S. degrees in Computer Science and Statistics · May 2026 · <strong>3.92 GPA · Summa Cum Laude</strong></p>
          <p className="masters-line">Pursuing M.S. Computer Science, Expected 2028</p>
        </div>
        <span className="education-place"><MapPin aria-hidden="true" /> College Station, TX</span>
      </section>

      <section className="skills-section" aria-labelledby="skills-heading">
        <div className="skills-heading">
          <p className="chapter-label">Working vocabulary</p>
          <h2 id="skills-heading">Tools follow the question.</h2>
          <p>I care more about choosing the right abstraction than collecting logos. These are the tools I reach for most often.</p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group, index) => (
            <article key={group.label}>
              <span>{String(index + 1).padStart(2, '0')} / {group.label}</span>
              <p>{group.items.join(' · ')}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="personal-lenses" aria-labelledby="personal-lenses-heading">
        <header>
          <p className="chapter-label light">Four personal lenses</p>
          <h2 id="personal-lenses-heading">The person behind the project list.</h2>
        </header>
        <div>
          {personalLenses.map((lens, index) => {
            const Icon = personalLensIcons[index];
            return (
              <article key={lens.index}>
                <span>{lens.index} / {lens.label}</span>
                <Icon aria-hidden="true" />
                <h3>{lens.title}</h3>
                <p>{lens.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="about-grid">
        <article className="principles-panel">
          <p className="chapter-label">What I optimize for</p>
          <ul>
            {principles.map((principle, index) => {
              const Icon = principleIcons[index];
              return <li key={principle.title}><Icon aria-hidden="true" /><span><strong>{principle.title}</strong>{principle.copy}</span></li>;
            })}
          </ul>
        </article>
        <article className="offscreen-panel">
          <p className="chapter-label light">Away from the keyboard</p>
          <h2>Movement is another system to learn.</h2>
          <p>Lifting gives me measurable progress; badminton and soccer bring out my competitive side. I also make room for basketball, boxing, swimming, cricket, and jump rope—different combinations of technique, conditioning, timing, and adaptation.</p>
          <div className="movement-signals" aria-label="What sport gives me">
            <span><Dumbbell aria-hidden="true" /> Progress</span>
            <span><Trophy aria-hidden="true" /> Competition</span>
            <span><Activity aria-hidden="true" /> Adaptation</span>
          </div>
          <ul className="sport-list" aria-label="Sports and physical interests">
            {sports.map((sport) => <li key={sport}>{sport}</li>)}
          </ul>
          <a href="https://harsh.bet/gym/">Visit the training log <ArrowUpRight aria-hidden="true" /></a>
        </article>
      </section>

      <section className="contact-card">
        <div>
          <p className="chapter-label light">Open line</p>
          <h2>Bring the difficult question.</h2>
          <p>I am especially interested in research engineering, computational biology, trustworthy AI systems, and products that make complex evidence easier to use.</p>
        </div>
        <div className="contact-actions">
          <a href={'mailto:' + EMAIL}><Mail aria-hidden="true" /> {EMAIL}</a>
          <a href="https://github.com/Harsh4873" target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub <ArrowUpRight aria-hidden="true" /></a>
          <button type="button" onClick={() => window.print()}><Printer aria-hidden="true" /> Print portfolio</button>
        </div>
      </section>
    </>
  );
}

function CurrentPage({ route }: { route: RouteId }) {
  if (route === 'experience') return <ExperiencePage />;
  if (route === 'research') return <ResearchPage />;
  if (route === 'projects') return <ProjectsPage />;
  if (route === 'about') return <AboutPage />;
  return <StartPage />;
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div><AtlasMark /><span><strong>Harsh Dave</strong><small>Built with care in College Station.</small></span></div>
      <p>Software · Data · Research</p>
      <div className="footer-links">
        <a href={'mailto:' + EMAIL}>Email</a>
        <a href="https://github.com/Harsh4873" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://devpost.com/hdav3228" target="_blank" rel="noreferrer">Devpost</a>
      </div>
    </footer>
  );
}

export default function App() {
  const route = useRoute();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    mainRef.current?.focus({ preventScroll: true });
  }, [route]);

  return (
    <div className={'site-shell route-' + route}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader route={route} />
      <main
        id="main-content"
        className="page-content"
        tabIndex={-1}
        ref={mainRef}
        key={route}
        aria-label={`${navigation.find((item) => item.id === route)?.label ?? 'Portfolio'} section`}
      >
        <CurrentPage route={route} />
      </main>
      <SiteFooter />
    </div>
  );
}
