import { useEffect, useRef, useState, type FocusEvent, type RefObject } from 'react';
import {
  experiences,
  labCategories,
  labProjects,
  methodAreas,
  news,
  profile,
  projects,
  researchChecks,
  researchOutputs,
  researchStages,
  sports,
  type Experience,
  type LabCategory,
  type LabProject,
  type Project,
} from './content';

const THEME_KEY = 'harsh-theme';

const sections = [
  { id: 'start', index: '00', label: 'Profile' },
  { id: 'research', index: '01', label: 'Research' },
  { id: 'experience', index: '02', label: 'Work' },
  { id: 'projects', index: '03', label: 'Software' },
  { id: 'about', index: '04', label: 'Contact' },
] as const;

const featuredCodes = ['SYS-02', 'SYS-11', 'SYS-03'] as const;

type Theme = 'light' | 'dark';

function captureLabel(path: string) {
  return path.replace(/^\/portfolio\//, '');
}

function WithOrganism({ text }: { text: string }) {
  const parts = text.split(/(Mycobacterium tuberculosis)/);
  return (
    <>
      {parts.map((part, index) => (
        part === 'Mycobacterium tuberculosis' ? <i key={index}>{part}</i> : <span key={index}>{part}</span>
      ))}
    </>
  );
}

function initialTheme(): Theme {
  const initial = document.documentElement.dataset.theme;
  if (initial === 'light' || initial === 'dark') return initial;
  try {
    const saved = window.localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // Use the operating-system preference when storage is unavailable.
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
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#14110f' : '#500000');
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
      // The selected theme still applies for the current visit.
    }
  };

  return [theme, chooseTheme] as const;
}

interface SiteRailProps {
  theme: Theme;
  mobileOpen: boolean;
  onThemeChange: (theme: Theme) => void;
  onToggleMobile: () => void;
  onNavigate: () => void;
  menuButtonRef: RefObject<HTMLButtonElement>;
}

function SiteRail({ theme, mobileOpen, onThemeChange, onToggleMobile, onNavigate, menuButtonRef }: SiteRailProps) {
  return (
    <aside className="site-rail" data-mobile-open={mobileOpen ? 'true' : 'false'} aria-label="Portfolio navigation">
      <div className="rail-topline">
        <a className="rail-mark" href="#start" onClick={onNavigate} aria-label={profile.name}>
          <span aria-hidden="true">{profile.mark}</span>
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
          <p>{profile.name}</p>
          <span>
            {profile.kicker}
            <br />
            {profile.lab}
          </span>
        </div>

        <nav className="rail-nav" aria-label="Portfolio sections">
          {sections.map((item) => (
            <a className="rail-nav-link" href={`#${item.id}`} onClick={onNavigate} key={item.id}>
              <span className="rail-index">{item.index}</span>
              <span className="rail-detail">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="rail-footer rail-detail">
          <div className="theme-switch" role="group" aria-label="Color theme">
            <button type="button" aria-pressed={theme === 'light'} onClick={() => onThemeChange('light')}>Light</button>
            <span aria-hidden="true">·</span>
            <button type="button" aria-pressed={theme === 'dark'} onClick={() => onThemeChange('dark')}>Dark</button>
          </div>
          <a href={profile.labHref} target="_blank" rel="noreferrer">Lab</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="https://www.linkedin.com/in/hdav" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/Harsh4873" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </aside>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <header className="section-heading">
      <p className="section-code">{label}</p>
      <h2>{title}</h2>
    </header>
  );
}

function useDetailPanel() {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [alwaysOpen, setAlwaysOpen] = useState(false);

  useEffect(() => {
    const touchOnly = window.matchMedia('(hover: none)');
    const updateInteraction = () => setAlwaysOpen(touchOnly.matches);

    updateInteraction();
    touchOnly.addEventListener('change', updateInteraction);
    return () => touchOnly.removeEventListener('change', updateInteraction);
  }, []);

  const open = alwaysOpen || hovered || focused;

  const onBlurCapture = (event: FocusEvent<HTMLElement>) => {
    const nextFocused = event.relatedTarget;
    if (!(nextFocused instanceof Node) || !event.currentTarget.contains(nextFocused)) {
      setFocused(false);
    }
  };

  return {
    open,
    containerProps: {
      'data-open': open ? 'true' : 'false',
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      onFocusCapture: () => setFocused(true),
      onBlurCapture,
    },
  };
}

function ReplaceableImage({
  src,
  fallbackSrc,
  fallbackLabel,
  alt,
}: {
  src: string;
  fallbackSrc?: string;
  fallbackLabel: string;
  alt: string;
}) {
  const [current, setCurrent] = useState(src);

  useEffect(() => {
    setCurrent(src);
  }, [src]);

  if (!current) {
    return (
      <div className="image-slot" aria-hidden="true">
        <span>{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={current}
      alt={alt}
      onError={() => {
        if (fallbackSrc && current !== fallbackSrc) {
          setCurrent(fallbackSrc);
          return;
        }
        setCurrent('');
      }}
    />
  );
}

function Portrait() {
  return (
    <figure className="portrait-slot">
      <ReplaceableImage
        src={profile.portrait}
        fallbackSrc={profile.portraitFallback}
        fallbackLabel="Drop public/portrait.jpg"
        alt={profile.name}
      />
    </figure>
  );
}

function ExperienceEntry({ experience }: { experience: Experience }) {
  const detail = useDetailPanel();

  return (
    <article className="experience-entry" tabIndex={0} {...detail.containerProps}>
      <div className="experience-meta">
        <p className="experience-period">{experience.period}</p>
        <p className="experience-kind">{experience.kind}</p>
      </div>
      <div className="experience-title">
        <h3>{experience.role}</h3>
        <p>{experience.organization}</p>
      </div>
      <div className="experience-copy">
        <p>{experience.summary}</p>
        <small>{experience.tools.join(' · ')}</small>
      </div>
      <div className="experience-details">
        <div className="detail-panel" aria-hidden={!detail.open}>
          <div className="detail-panel-inner experience-detail-inner">
            <ul>
              {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
            <p>{experience.translation}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: LabProject }) {
  const detail = useDetailPanel();

  return (
    <article className="project-card" {...detail.containerProps}>
      <a className="project-card-link" href={project.href}>
        <figure className="project-card-frame">
          <img src={project.image} alt={`${project.title} interface`} />
        </figure>
        <div className="project-card-copy">
          <div className="project-card-meta">
            <span>{project.code}</span>
            <span>{project.category}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
        </div>
      </a>
      <div className="project-card-details">
        <div className="detail-panel" aria-hidden={!detail.open}>
          <div className="detail-panel-inner project-detail-inner">
            <p className="detail-status">{project.status}</p>
            <p>{project.question}</p>
            <small>{project.tools.join(' · ')}</small>
          </div>
        </div>
      </div>
    </article>
  );
}

function OtherProject({ project }: { project: Project }) {
  const detail = useDetailPanel();
  const body = (
    <>
      <figure className="project-card-frame">
        <ReplaceableImage
          src={project.capture}
          fallbackLabel={`Drop ${captureLabel(project.capture)}`}
          alt={`${project.title} capture`}
        />
      </figure>
      <div className="project-card-copy">
        <div className="project-card-meta">
          <span>{project.index}</span>
          <span>{project.kicker}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
      </div>
    </>
  );

  return (
    <article className="project-card" {...detail.containerProps}>
      {project.link ? (
        <a className="project-card-link" href={project.link} target="_blank" rel="noreferrer">{body}</a>
      ) : (
        <div className="project-card-link">{body}</div>
      )}
      <div className="project-card-details">
        <div className="detail-panel" aria-hidden={!detail.open}>
          <div className="detail-panel-inner project-detail-inner">
            <p className="detail-proof">{project.proof}</p>
            <small>{project.tools.join(' · ')}</small>
          </div>
        </div>
      </div>
    </article>
  );
}

function ResearchDetails() {
  return (
    <article className="research-details" data-open="true">
      <ol className="research-stage-index">
        {researchStages.map((stage) => (
          <li key={stage.index}>
            <span>{stage.index}</span>
            {stage.label}
          </li>
        ))}
      </ol>
      <div className="research-detail-inner">
        <div>
          <p className="detail-status">Workflow</p>
          <ol>
            {researchStages.map((stage) => (
              <li key={stage.index}>
                <strong>{stage.title}</strong>
                <span>{stage.copy}</span>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p className="detail-status">Cross-checks</p>
          <ul>
            {researchChecks.map((check) => (
              <li key={check.label}>
                <strong>{check.title}</strong>
                <span>{check.copy}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function NewsList() {
  return (
    <section className="news-section" aria-labelledby="news-heading">
      <div className="news-heading">
        <p className="section-code">News</p>
        <h2 id="news-heading">Recent</h2>
      </div>
      <ol className="news-list">
        {news.map((item) => (
          <li key={item.title}>
            <span className="news-date">{item.date}</span>
            <span className="news-kind">{item.kind}</span>
            <div>
              <strong>{item.title}</strong>
              <p>{item.copy}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function MethodAreas() {
  return (
    <div className="method-grid">
      {methodAreas.map((area) => (
        <article key={area.index}>
          <p className="section-code">{area.index} / {area.label}</p>
          <h3>{area.title}</h3>
          <p>{area.copy}</p>
          <small>{area.tags.join(' · ')}</small>
        </article>
      ))}
    </div>
  );
}

function ResearchOutputs() {
  return (
    <div className="research-outputs">
      <p className="section-code">Selected software</p>
      <ul>
        {researchOutputs.map((output) => (
          <li key={output.title}>
            <a href={output.href}>
              <span>{output.kind}</span>
              <strong>{output.title}</strong>
              <p>{output.note}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PortfolioPage() {
  const [category, setCategory] = useState<'All' | LabCategory>('All');
  const featuredProjects = featuredCodes
    .map((code) => labProjects.find((project) => project.code === code))
    .filter((project): project is LabProject => Boolean(project));
  const visibleProjects = category === 'All'
    ? [...featuredProjects, ...labProjects.filter((project) => !project.featured)]
    : labProjects.filter((project) => project.category === category);

  return (
    <>
      <section className="profile-intro" id="start" aria-labelledby="profile-heading">
        <Portrait />
        <div>
          <p className="section-code">Computational genomics</p>
          <h1 id="profile-heading">{profile.name}</h1>
          <p className="profile-kicker">{profile.kicker}</p>
          <p className="profile-degree">{profile.lab}</p>
          <p className="profile-advisor">
            Advised by <a href={profile.labHref} target="_blank" rel="noreferrer">{profile.advisor}</a>
          </p>
          <p className="profile-summary"><WithOrganism text={profile.thesis} /></p>
          <p className="profile-aside">{profile.summary}</p>
          <dl className="profile-now">
            {profile.now.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <nav className="profile-links" aria-label="Profile links">
            <a href={profile.labHref} target="_blank" rel="noreferrer">Lab</a>
            {profile.links.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : link.href.startsWith('/') ? 'noopener noreferrer' : 'noreferrer'}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <NewsList />

      <section className="content-section research-section" id="research" aria-labelledby="research-heading">
        <SectionHeading label="01 / Research" title="Research" />
        <div className="research-summary">
          <p>I study positive selection in <i>Mycobacterium tuberculosis</i> isolates from patient cohorts with and without diabetes.</p>
          <dl>
            {profile.researchFacts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.label === 'Lab' ? (
                  <a href={profile.labHref} target="_blank" rel="noreferrer">{fact.value}</a>
                ) : fact.label === 'Organism' ? (
                  <WithOrganism text={fact.value} />
                ) : fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <MethodAreas />
        <ResearchDetails />
        <ResearchOutputs />
      </section>

      <section className="content-section" id="experience" aria-labelledby="work-heading">
        <SectionHeading label="02 / Work" title="Work" />
        <div className="experience-list">
          {experiences.map((experience) => <ExperienceEntry experience={experience} key={experience.role + experience.organization} />)}
        </div>
      </section>

      <section className="content-section projects-section" id="projects" aria-labelledby="projects-heading">
        <SectionHeading label="03 / Software" title="Software" />
        <p className="section-lede">Selected research tools, then the rest of the systems lab.</p>
        <div className="project-filters" role="group" aria-label="Project category">
          <button type="button" aria-pressed={category === 'All'} onClick={() => setCategory('All')}>All systems</button>
          {labCategories.map((item) => (
            <button type="button" aria-pressed={category === item} onClick={() => setCategory(item)} key={item}>
              {item}
            </button>
          ))}
        </div>
        {visibleProjects.length > 0 ? (
          <div className="project-grid">
            {visibleProjects.map((project) => <ProjectCard project={project} key={project.code} />)}
          </div>
        ) : null}
        <div className="other-projects">
          <p className="section-code">Other work</p>
          <div className="project-grid">
            {projects.map((project) => <OtherProject project={project} key={project.title} />)}
          </div>
        </div>
      </section>

      <section className="content-section about-section" id="about" aria-labelledby="about-heading">
        <SectionHeading label="04 / About" title="About & contact" />
        <div className="about-grid">
          <article>
            <p className="section-code">Now</p>
            <h3>Ioerger Lab</h3>
            <p>Graduate assistant in computational genomics, advised by {profile.advisor}. Building MtbScope, Radar, Recall, and a private systems lab around the same work.</p>
            <a href={profile.labHref} target="_blank" rel="noreferrer">Faculty page</a>
          </article>
          <article>
            <p className="section-code">Education</p>
            <h3>Texas A&amp;M University</h3>
            {profile.education.map((item) => (
              <p key={item.program}>
                {item.program}
                <br />
                {item.detail}
              </p>
            ))}
          </article>
          <article>
            <p className="section-code">Outside work</p>
            <h3>Sports and training</h3>
            <p>{sports.join(' · ')}</p>
            <a href="/gym/">Training log</a>
          </article>
          <article>
            <p className="section-code">Contact</p>
            <div className="contact-links">
              {profile.links.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : link.href.startsWith('/') ? 'noopener noreferrer' : 'noreferrer'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <a href="/">harsh.bet</a>
      <a href="#start">Back to top</a>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const contentFrameRef = useRef<HTMLDivElement>(null);
  const restoreMenuFocus = useRef(false);

  useEffect(() => {
    const oldRoute = window.location.hash.replace(/^#\/?/, '');
    if (sections.some((section) => section.id === oldRoute)) {
      window.history.replaceState(null, '', `#${oldRoute}`);
    }
    document.title = profile.name;
  }, []);

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

  const closeAfterNavigation = () => {
    restoreMenuFocus.current = false;
    setMobileOpen(false);
  };

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteRail
        theme={theme}
        mobileOpen={mobileOpen}
        onThemeChange={setTheme}
        onToggleMobile={() => {
          if (mobileOpen) restoreMenuFocus.current = true;
          setMobileOpen((open) => !open);
        }}
        onNavigate={closeAfterNavigation}
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
        <main id="main-content" className="page-content" tabIndex={-1} aria-label={`${profile.name} portfolio`}>
          <PortfolioPage />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
