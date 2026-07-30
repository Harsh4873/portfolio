import { useEffect, useRef, useState, type ReactNode, type RefObject } from 'react';
import {
  experiences,
  labProjects,
  navigation,
  operatingQuestions,
  personalCoordinates,
  personalLenses,
  principles,
  projects,
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
const THEME_KEY = 'harsh-theme';

type Theme = 'light' | 'dark';

const railLabels: Record<RouteId, string> = {
  start: 'Index',
  experience: 'Work',
  research: 'Research',
  projects: 'Projects',
  about: 'About',
};

function initialTheme(): Theme {
  const initial = document.documentElement.dataset.theme;
  if (initial === 'light' || initial === 'dark') return initial;
  try {
    const saved = window.localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // Fall through to the operating-system preference when storage is unavailable.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function storedTheme(): Theme | null {
  try {
    const saved = window.localStorage.getItem(THEME_KEY);
    return saved === 'light' || saved === 'dark' ? saved : null;
  } catch {
    return null;
  }
}

function useTheme() {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#11110f' : '#f3f1ec');
  }, [theme]);

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    const followSystemTheme = (event: MediaQueryListEvent) => {
      if (!storedTheme()) setTheme(event.matches ? 'dark' : 'light');
    };

    systemTheme.addEventListener('change', followSystemTheme);
    return () => systemTheme.removeEventListener('change', followSystemTheme);
  }, []);

  const chooseTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);
    try {
      window.localStorage.setItem(THEME_KEY, nextTheme);
    } catch {
      // The chosen theme still applies for the current visit.
    }
  };

  return [theme, chooseTheme] as const;
}

interface SiteRailProps {
  route: RouteId;
  theme: Theme;
  mobileOpen: boolean;
  onThemeChange: (theme: Theme) => void;
  onToggleMobile: () => void;
  onNavigate: (route: RouteId) => void;
  menuButtonRef: RefObject<HTMLButtonElement>;
}

function SiteRail({ route, theme, mobileOpen, onThemeChange, onToggleMobile, onNavigate, menuButtonRef }: SiteRailProps) {
  return (
    <aside className="site-rail" data-mobile-open={mobileOpen ? 'true' : 'false'} aria-label="Portfolio identity and navigation">
      <div className="rail-topline">
        <a className="rail-mark" href={routeHref('start')} onClick={() => onNavigate('start')} aria-label="Harsh Dave, portfolio index">
          <img src="/portfolio/favicon.svg" alt="" />
        </a>
        <button
          ref={menuButtonRef}
          className="mobile-menu-button"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="portfolio-rail-content"
          onClick={onToggleMobile}
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <div className="rail-content" id="portfolio-rail-content">
        <div className="rail-identity rail-detail">
          <p>Harsh Dave</p>
          <span>Computer scientist, statistician, researcher, builder.</span>
          <small>College Station, Texas</small>
        </div>

        <nav className="rail-nav" aria-label="Portfolio sections">
          {navigation.map((item) => (
            <a
              className={item.id === route ? 'rail-nav-link active' : 'rail-nav-link'}
              href={routeHref(item.id)}
              aria-label={railLabels[item.id]}
              aria-current={item.id === route ? 'page' : undefined}
              onClick={() => onNavigate(item.id)}
              key={item.id}
            >
              <span className="rail-index">{item.index}</span>
              <span className="rail-detail">{railLabels[item.id]}</span>
            </a>
          ))}
        </nav>

        <div className="rail-footer rail-detail">
          <div className="theme-switch" role="group" aria-label="Color theme">
            <button type="button" aria-pressed={theme === 'light'} onClick={() => onThemeChange('light')}>Light</button>
            <span aria-hidden="true">·</span>
            <button type="button" aria-pressed={theme === 'dark'} onClick={() => onThemeChange('dark')}>Dark</button>
          </div>
          <a href="/">harsh.bet</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
    </aside>
  );
}

function RouteLink({ route, children }: { route: RouteId; children: ReactNode }) {
  return <a href={routeHref(route)}>{children}</a>;
}

function PageHeading({ id, chapter, title, lede, aside }: { id: string; chapter: string; title: string; lede: string; aside: string }) {
  return (
    <header className="page-heading" aria-labelledby={id}>
      <p className="section-code">{chapter}</p>
      <h1 id={id}>{title}</h1>
      <p className="page-lede">{lede}</p>
      <p className="page-aside">{aside}</p>
    </header>
  );
}

function StartPage() {
  const featuredSystems = [labProjects[1], labProjects[0], labProjects[6]];

  return (
    <>
      <section className="profile-intro" aria-labelledby="index-heading">
        <div>
          <p className="section-code">Portfolio / 2026</p>
          <h1 id="index-heading">Harsh Dave</h1>
          <p className="profile-degree">M.S. Computer Science at Texas A&amp;M</p>
          <p className="profile-role">Graduate Research Assistant · Computational genomics</p>
          <p className="profile-summary">I work on reproducible genomics research, build software for questions that keep bothering me, and spend a lot of time lifting, playing sports, and making tools for the rest of life.</p>
        </div>
        <dl className="profile-facts" aria-label="A quick introduction">
          <div><dt>Right now</dt><dd>Positive selection in <i>Mycobacterium tuberculosis</i></dd></div>
          <div><dt>Background</dt><dd>B.S. Computer Science + Statistics · 2026</dd></div>
          <div><dt>Usually building</dt><dd>Research tools, personal systems, and sports data projects</dd></div>
        </dl>
      </section>

      <section className="personal-snapshot" aria-label="Current work and interests">
        <article>
          <p className="section-code">In the lab</p>
          <h2>Making the checks part of the work.</h2>
          <p>I am studying positive selection across patient cohorts, then building scripts that catch the quiet problems before they turn into a result.</p>
          <RouteLink route="research">See the research notes</RouteLink>
        </article>
        <article>
          <p className="section-code">What I make</p>
          <h2>Tools I wanted to have myself.</h2>
          <p>Some started as research interfaces. Others started because I wanted a better way to remember, plan, log, train, or keep a record.</p>
          <RouteLink route="projects">See the project shelf</RouteLink>
        </article>
        <article>
          <p className="section-code">Outside the screen</p>
          <h2>Movement, competition, and teaching.</h2>
          <p>Lifting, badminton, soccer, basketball, and helping people find the mental model behind a stubborn bug.</p>
          <RouteLink route="about">A little more about me</RouteLink>
        </article>
      </section>

      <section className="featured-work" aria-labelledby="featured-heading">
        <header>
          <p className="section-code">A few things I keep open</p>
          <h2 id="featured-heading">The work is more convincing when you can actually see it.</h2>
        </header>
        <div>
          {featuredSystems.map((project) => (
            <a className="project-preview" href={project.href} key={project.code}>
              <img src={project.image} alt={`${project.title} interface`} />
              <span>{project.category}</span>
              <strong>{project.title}</strong>
              <p>{project.summary}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="now-section" aria-labelledby="now-heading">
        <p className="section-code">This month</p>
        <div>
          <h2 id="now-heading">I am learning that a script beats a reminder.</h2>
          <p>My research has made me picky about silent failures. When a job, input, or cohort can drift without announcing itself, the fix is usually a check I can run again, not a note to remember later.</p>
        </div>
      </section>

      <section className="question-section" aria-labelledby="questions-heading">
        <header>
          <p className="section-code">Questions I keep asking</p>
          <h2 id="questions-heading">The same questions show up everywhere.</h2>
          <p>Research pipelines, product decisions, sports arguments, and training plans all get better when I slow down long enough to ask them.</p>
        </header>
        <ol>
          {operatingQuestions.map((question, index) => (
            <li key={question}><span>{String(index + 1).padStart(2, '0')}</span>{question}</li>
          ))}
        </ol>
      </section>

      <section className="coordinate-section" aria-labelledby="coordinates-heading">
        <header>
          <p className="section-code">What I am working toward</p>
          <h2 id="coordinates-heading">A direction, not a slogan.</h2>
        </header>
        <div>
          {personalCoordinates.map((coordinate) => (
            <article key={coordinate.index}>
              <span>{coordinate.index}</span>
              <p>{coordinate.horizon}</p>
              <h3>{coordinate.title}</h3>
              <p>{coordinate.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ExperienceEntry({ experience, index }: { experience: Experience; index: number }) {
  return (
    <article className="experience-entry">
      <div className="experience-meta">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <p>{experience.period}</p>
        <small>{experience.kind}</small>
      </div>
      <div className="experience-title">
        <h2>{experience.role}</h2>
        <p>{experience.organization}</p>
      </div>
      <div className="experience-copy">
        <p>{experience.summary}</p>
        <ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
        <p className="translation"><strong>What it sharpened</strong>{experience.translation}</p>
        <p className="text-tools" aria-label="Tools and methods">{experience.tools.join(' · ')}</p>
      </div>
    </article>
  );
}

function ExperiencePage() {
  return (
    <>
      <PageHeading
        id="experience-heading"
        chapter="01 / Work"
        title="Places where I learned to build with other people."
        lede="The throughline in my work is simple: I like being close to the messy part. That might be a scientific workflow, a teaching conversation, a model pipeline, or the infrastructure that has to work before the interesting thing can happen."
        aside="Selected work · 2021 - present"
      />
      <section className="experience-list" aria-label="Selected experience">
        {experiences.map((experience, index) => <ExperienceEntry experience={experience} index={index} key={experience.role + experience.organization} />)}
      </section>
      <nav className="next-route" aria-label="Next portfolio section">
        <span>Next</span><RouteLink route="research">Research</RouteLink>
      </nav>
    </>
  );
}

function ResearchPage() {
  const methods = ['~4,000 genes', 'Two patient cohorts', 'GenomegaMap', 'Bayesian MCMC', 'Posterior comparison', 'Python', 'Slurm', 'HPRC', 'pN/pS', 'Chi-square', 'FDR', 'PAML'];

  return (
    <>
      <PageHeading
        id="research-heading"
        chapter="02 / Research"
        title="Research, while it is still messy."
        lede="I study evidence of positive selection in Mycobacterium tuberculosis isolates from patient cohorts with and without diabetes. The results are still in motion, so I am more interested in making the workflow inspectable than pretending the story is finished."
        aside="Active work · Ioerger Lab · Manuscript in preparation"
      />

      <section className="research-facts" aria-label="Research at a glance">
        <article><span>Question</span><p>Does the evidence for evolutionary selection differ between the two patient cohorts?</p></article>
        <article><span>Scale</span><p>Approximately 4,000 gene-level analyses, coordinated on Texas A&amp;M high-performance computing systems.</p></article>
        <article><span>Standard</span><p>Keep uncertainty, provenance, model assumptions, and complementary checks visible before interpretation.</p></article>
      </section>

      <section className="methods-line" aria-labelledby="methods-heading">
        <h2 id="methods-heading">Methods in motion</h2>
        <p>{methods.join(' · ')}</p>
      </section>

      <section className="process-section" aria-labelledby="process-heading">
        <header>
          <p className="section-code">Analysis trace</p>
          <h2 id="process-heading">What the work looks like in practice.</h2>
          <p>Every transformation changes what the final evidence can honestly say, so I keep trying to make the next question easy to find.</p>
        </header>
        <ol>
          {researchStages.map((stage) => (
            <li key={stage.index}>
              <span>{stage.index}</span>
              <p>{stage.label}</p>
              <h3>{stage.title}</h3>
              <p>{stage.copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="validation-section" aria-labelledby="validation-heading">
        <header>
          <p className="section-code">Triangulation</p>
          <h2 id="validation-heading">Ways I try to check myself.</h2>
          <p>These are validation paths, not a claim that a biological result is final.</p>
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

      <section className="manuscript-section" aria-labelledby="manuscript-heading">
        <p className="section-code">Current status</p>
        <div>
          <h2 id="manuscript-heading">Still in progress.</h2>
          <p>Computational genomics research with Dr. Thomas Ioerger at Texas A&amp;M University. This page describes the question, workflow, and validation approach without turning unfinished findings into a finished story.</p>
        </div>
      </section>

      <nav className="next-route" aria-label="Next portfolio section">
        <span>Next</span><RouteLink route="projects">Projects</RouteLink>
      </nav>
    </>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="project-row">
      <span>{project.index}</span>
      <div><p>{project.kicker}</p><h2>{project.title}</h2></div>
      <div><p>{project.summary}</p><strong>{project.proof}</strong><small>{project.tools.join(' · ')}</small></div>
    </article>
  );
}

const labFilters: Array<'All' | LabCategory> = ['All', 'Signals', 'Research', 'Life systems'];

function SystemsLab() {
  const [activeFilter, setActiveFilter] = useState<(typeof labFilters)[number]>('All');
  const visibleProjects = activeFilter === 'All' ? labProjects : labProjects.filter((project) => project.category === activeFilter);

  return (
    <section className="systems-lab" aria-labelledby="systems-heading">
      <header>
        <p className="section-code">The project shelf · harsh.bet</p>
        <h2 id="systems-heading">The projects I keep coming back to.</h2>
        <p>Research, sports analysis, planning, habits, nutrition, and training. These are the things I still use, adjust, and argue with after the original deadline is gone.</p>
      </header>
      <div className="lab-controls">
        <div role="group" aria-label="Filter independent projects">
          {labFilters.map((filter) => (
            <button type="button" aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)} key={filter}>{filter}</button>
          ))}
        </div>
        <p role="status" aria-live="polite">{visibleProjects.length} of {labProjects.length} systems</p>
      </div>
      <div className="lab-list">
        {visibleProjects.map((project) => (
          <article className="lab-row" key={project.code}>
            <span>{project.code}</span>
            <a className="lab-preview" href={project.href}><img src={project.image} alt={`${project.title} interface`} /></a>
            <div><a href={project.href}>{project.title}</a><small>{project.status}</small></div>
            <div><p>{project.summary}</p><blockquote>{project.question}</blockquote></div>
            <div><p>{project.category}</p><small>{project.tools.join(' · ')}</small></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsPage() {
  return (
    <>
      <PageHeading
        id="projects-heading"
        chapter="03 / Projects"
        title="Things I have made and kept working on."
        lede="Some projects came from teams, classes, and hackathons. The ones below stayed with me because I either kept using them or kept finding a better question to ask of them."
        aside="AI · data · full stack · research tools"
      />
      <section className="project-section" aria-labelledby="selected-heading">
        <header><p className="section-code">Selected builds</p><h2 id="selected-heading">Built with other people, under real constraints.</h2></header>
        <div>{projects.map((project) => <ProjectRow project={project} key={project.title} />)}</div>
        <nav className="project-source-links" aria-label="More project sources">
          <a href="https://github.com/Harsh4873" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://devpost.com/hdav3228" target="_blank" rel="noreferrer">Devpost</a>
        </nav>
      </section>
      <SystemsLab />
      <nav className="next-route" aria-label="Next portfolio section">
        <span>Next</span><RouteLink route="about">About</RouteLink>
      </nav>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHeading
        id="about-heading"
        chapter="04 / About"
        title="A little more context."
        lede="I studied computer science because I liked building things, statistics because I wanted to know if they were telling the truth, and biology because the questions got more interesting."
        aside="M.S. Computer Science · Texas A&amp;M"
      />

      <section className="education-section" aria-labelledby="education-heading">
        <p className="section-code">Education</p>
        <div><h2 id="education-heading">Texas A&amp;M University</h2><p>B.S. degrees in Computer Science and Statistics · May 2026 · <strong>Summa Cum Laude</strong></p><p>Pursuing M.S. Computer Science · Expected 2028</p></div>
      </section>

      <section className="about-statement" aria-labelledby="connection-heading">
        <p className="section-code">How I tend to work</p>
        <h2 id="connection-heading">I usually start by getting curious about the annoying part.</h2>
        <div><p>The subject might be a Bayesian model, an AI request moving through a data center, a training plateau, or a sports statistic whose context feels incomplete. I want to know how it works before I decide how much to trust it.</p><p>Then I try to make that understanding useful: a cleaner script, a better interface, a tighter explanation, or a tool I would actually come back to tomorrow.</p></div>
      </section>

      <section className="lens-section" aria-labelledby="lenses-heading">
        <header><p className="section-code">Personal notes</p><h2 id="lenses-heading">The parts that do not fit in a resume.</h2></header>
        <div>
          {personalLenses.map((lens) => (
            <article key={lens.index}><span>{lens.index} / {lens.label}</span><h3>{lens.title}</h3><p>{lens.copy}</p></article>
          ))}
        </div>
      </section>

      <section className="skills-section" aria-labelledby="skills-heading">
        <header><p className="section-code">Working vocabulary</p><h2 id="skills-heading">Things I use a lot.</h2><p>I care more about choosing the right abstraction than collecting logos.</p></header>
        <div>{skillGroups.map((group, index) => <article key={group.label}><span>{String(index + 1).padStart(2, '0')} / {group.label}</span><p>{group.items.join(' · ')}</p></article>)}</div>
      </section>

      <section className="principles-section" aria-labelledby="principles-heading">
        <header><p className="section-code">What I do not want to skip</p><h2 id="principles-heading">A few standards I keep around.</h2></header>
        <ol>{principles.map((principle, index) => <li key={principle.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{principle.title}</h3><p>{principle.copy}</p></li>)}</ol>
      </section>

      <section className="movement-section" aria-labelledby="movement-heading">
        <p className="section-code">Away from the keyboard</p>
        <div><h2 id="movement-heading">What I do after I close the laptop.</h2><p>Lifting gives me measurable progress. Badminton and soccer bring out my competitive side. Basketball, boxing, swimming, cricket, and jump rope keep giving me different reasons to learn timing, technique, conditioning, and adaptation.</p><p className="sports-line">{sports.join(' · ')}</p><a href="/gym/">Open the training log</a></div>
      </section>

      <section className="contact-section" aria-labelledby="contact-heading">
        <p className="section-code">Open line</p>
        <div><h2 id="contact-heading">Say hello.</h2><p>I am especially interested in research engineering, computational biology, trustworthy AI systems, and products that make complex evidence easier to use.</p></div>
        <a href={'mailto:' + EMAIL}>{EMAIL}</a>
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
      <p>College Station, Texas</p>
      <nav aria-label="Contact and profile links">
        <a href="/">harsh.bet</a>
        <a href="https://github.com/Harsh4873" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://devpost.com/hdav3228" target="_blank" rel="noreferrer">Devpost</a>
        <a href="https://www.linkedin.com/in/hdav" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <a href={'mailto:' + EMAIL}>Email</a>
      </nav>
    </footer>
  );
}

export default function App() {
  const route = useRoute();
  const [theme, setTheme] = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const contentFrameRef = useRef<HTMLDivElement>(null);
  const restoreMenuFocus = useRef(false);
  const previousRoute = useRef<RouteId>(route);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setMobileOpen(false);
    if (previousRoute.current !== route) {
      mainRef.current?.focus({ preventScroll: true });
    }
    previousRoute.current = route;
  }, [route]);

  useEffect(() => {
    const desktopLayout = window.matchMedia('(min-width: 821px)');
    const closeMobileMenu = (event: MediaQueryListEvent) => {
      if (event.matches) {
        restoreMenuFocus.current = false;
        setMobileOpen(false);
      }
    };

    desktopLayout.addEventListener('change', closeMobileMenu);
    return () => desktopLayout.removeEventListener('change', closeMobileMenu);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileOpen) {
        restoreMenuFocus.current = true;
        setMobileOpen(false);
        return;
      }

      if (event.key === 'Tab' && mobileOpen) {
        const focusable = Array.from(
          document.querySelectorAll<HTMLElement>('.site-rail a, .site-rail button'),
        ).filter((element) => element.getClientRects().length > 0 && !element.hasAttribute('disabled'));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    document.body.classList.toggle('mobile-menu-open', mobileOpen);

    const contentFrame = contentFrameRef.current;
    let focusFrame = 0;
    if (mobileOpen) {
      contentFrame?.setAttribute('inert', '');
      focusFrame = window.requestAnimationFrame(() => {
        document.querySelector<HTMLAnchorElement>('.rail-nav-link')?.focus();
      });
    } else {
      contentFrame?.removeAttribute('inert');
      if (restoreMenuFocus.current) {
        focusFrame = window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        restoreMenuFocus.current = false;
      }
    }

    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      document.body.classList.remove('mobile-menu-open');
      window.cancelAnimationFrame(focusFrame);
      contentFrame?.removeAttribute('inert');
    };
  }, [mobileOpen]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteRail
        route={route}
        theme={theme}
        mobileOpen={mobileOpen}
        onThemeChange={setTheme}
        onToggleMobile={() => {
          if (mobileOpen) restoreMenuFocus.current = true;
          setMobileOpen((open) => !open);
        }}
        onNavigate={(nextRoute) => {
          restoreMenuFocus.current = mobileOpen && nextRoute === route;
          setMobileOpen(false);
        }}
        menuButtonRef={menuButtonRef}
      />
      <button
        className="rail-scrim"
        type="button"
        aria-label="Close menu"
        onClick={() => {
          restoreMenuFocus.current = true;
          setMobileOpen(false);
        }}
        tabIndex={-1}
      />
      <div className="content-frame" ref={contentFrameRef}>
        <main
          id="main-content"
          className="page-content"
          tabIndex={-1}
          ref={mainRef}
          key={route}
          aria-label={`${railLabels[route]} section`}
        >
          <CurrentPage route={route} />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
