import { useEffect, useId, useRef, useState, type FocusEvent, type RefObject } from 'react';
import { experiences, labProjects, projects, researchChecks, researchStages, sports, type Experience, type Project } from './content';

const EMAIL = 'hdav4873@gmail.com';
const THEME_KEY = 'harsh-theme';

const sections = [
  { id: 'start', index: '00', label: 'Profile' },
  { id: 'experience', index: '01', label: 'Work' },
  { id: 'research', index: '02', label: 'Research' },
  { id: 'projects', index: '03', label: 'Projects' },
  { id: 'about', index: '04', label: 'Contact' },
] as const;

type Theme = 'light' | 'dark';

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
        <a className="rail-mark" href="#start" onClick={onNavigate} aria-label="Harsh Dave">
          <span aria-hidden="true">HD</span>
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
          <span>M.S. Computer Science<br />Texas A&amp;M University</span>
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
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="https://www.linkedin.com/in/hdav" target="_blank" rel="noreferrer">LinkedIn</a>
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
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const panelId = useId();
  const open = pinned || hovered || focused;

  const onBlurCapture = (event: FocusEvent<HTMLElement>) => {
    const nextFocused = event.relatedTarget;
    if (!(nextFocused instanceof Node) || !event.currentTarget.contains(nextFocused)) {
      setFocused(false);
    }
  };

  return {
    open,
    panelId,
    containerProps: {
      'data-open': open ? 'true' : 'false',
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      onFocusCapture: () => setFocused(true),
      onBlurCapture,
    },
    toggle: () => setPinned((isPinned) => !isPinned),
  };
}

function DetailTrigger({
  item,
  expanded,
  controlsId,
  onToggle,
}: {
  item: string;
  expanded: boolean;
  controlsId: string;
  onToggle: () => void;
}) {
  return (
    <button
      className="detail-trigger"
      type="button"
      aria-controls={controlsId}
      aria-expanded={expanded}
      aria-label={`${expanded ? 'Hide' : 'Show'} details for ${item}`}
      onClick={onToggle}
    >
      <span>More</span>
      <span className="detail-trigger-mark" aria-hidden="true">+</span>
    </button>
  );
}

function ExperienceEntry({ experience }: { experience: Experience }) {
  const detail = useDetailPanel();

  return (
    <article className="experience-entry" {...detail.containerProps}>
      <p className="experience-period">{experience.period}</p>
      <div className="experience-title">
        <h3>{experience.role}</h3>
        <p>{experience.organization}</p>
      </div>
      <div className="experience-copy">
        <p>{experience.summary}</p>
        <small>{experience.tools.join(' · ')}</small>
      </div>
      <div className="experience-details">
        <DetailTrigger
          item={experience.role}
          expanded={detail.open}
          controlsId={detail.panelId}
          onToggle={detail.toggle}
        />
        <div className="detail-panel" id={detail.panelId} aria-hidden={!detail.open}>
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

function ProjectCard({ project }: { project: (typeof labProjects)[number] }) {
  const detail = useDetailPanel();

  return (
    <article className="project-card" {...detail.containerProps}>
      <a className="project-card-link" href={project.href}>
        <img src={project.image} alt={`${project.title} interface`} />
        <div className="project-card-copy">
          <span>{project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
        </div>
      </a>
      <div className="project-card-details">
        <DetailTrigger
          item={project.title}
          expanded={detail.open}
          controlsId={detail.panelId}
          onToggle={detail.toggle}
        />
        <div className="detail-panel" id={detail.panelId} aria-hidden={!detail.open}>
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

  return (
    <article className="other-project" {...detail.containerProps}>
      <span>{project.index}</span>
      <div>
        <h3>{project.title}</h3>
        <p>{project.kicker}</p>
      </div>
      <small>{project.tools.join(' · ')}</small>
      <div className="other-project-details">
        <DetailTrigger
          item={project.title}
          expanded={detail.open}
          controlsId={detail.panelId}
          onToggle={detail.toggle}
        />
        <div className="detail-panel" id={detail.panelId} aria-hidden={!detail.open}>
          <div className="detail-panel-inner other-project-detail-inner">
            <p>{project.summary}</p>
            <p className="detail-proof">{project.proof}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

function ResearchDetails() {
  const detail = useDetailPanel();

  return (
    <article className="research-details" {...detail.containerProps}>
      <div className="research-details-topline">
        <p>~4,000 genes · 900+ clinical isolates</p>
        <DetailTrigger
          item="the genomics research"
          expanded={detail.open}
          controlsId={detail.panelId}
          onToggle={detail.toggle}
        />
      </div>
      <div className="detail-panel" id={detail.panelId} aria-hidden={!detail.open}>
        <div className="detail-panel-inner research-detail-inner">
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
      </div>
    </article>
  );
}

function PortfolioPage() {
  return (
    <>
      <section className="profile-intro" id="start" aria-labelledby="profile-heading">
        <div>
          <p className="section-code">Portfolio</p>
          <h1 id="profile-heading">Harsh Dave</h1>
          <p className="profile-degree">M.S. Computer Science, Texas A&amp;M</p>
          <p className="profile-summary">Graduate research assistant working in computational genomics. I also build software for research, sports, training, and everyday life.</p>
        </div>
        <nav className="profile-links" aria-label="Profile links">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="https://www.linkedin.com/in/hdav" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/Harsh4873" target="_blank" rel="noreferrer">GitHub</a>
          <a href={'mailto:' + EMAIL}>Email</a>
        </nav>
      </section>

      <section className="content-section" id="experience" aria-labelledby="work-heading">
        <SectionHeading label="01 / Work" title="Work" />
        <div className="experience-list">
          {experiences.map((experience) => <ExperienceEntry experience={experience} key={experience.role + experience.organization} />)}
        </div>
      </section>

      <section className="content-section research-section" id="research" aria-labelledby="research-heading">
        <SectionHeading label="02 / Research" title="Research" />
        <div className="research-summary">
          <p>I study positive selection in <i>Mycobacterium tuberculosis</i> isolates from patient cohorts with and without diabetes.</p>
          <dl>
            <div><dt>Lab</dt><dd>Ioerger Lab, Texas A&amp;M</dd></div>
            <div><dt>Tools</dt><dd>Python, GenomegaMap, Slurm, HPRC, PAML</dd></div>
            <div><dt>Focus</dt><dd>Reproducible genome-wide analysis and validation</dd></div>
          </dl>
        </div>
        <ResearchDetails />
      </section>

      <section className="content-section projects-section" id="projects" aria-labelledby="projects-heading">
        <SectionHeading label="03 / Projects" title="Projects" />
        <div className="project-grid">
          {labProjects.map((project) => <ProjectCard project={project} key={project.code} />)}
        </div>
        <div className="other-projects">
          <p className="section-code">Other work</p>
          {projects.map((project) => <OtherProject project={project} key={project.title} />)}
        </div>
      </section>

      <section className="content-section about-section" id="about" aria-labelledby="about-heading">
        <SectionHeading label="04 / About" title="About & contact" />
        <div className="about-grid">
          <article>
            <p className="section-code">Education</p>
            <h3>Texas A&amp;M University</h3>
            <p>B.S. in Computer Science and Statistics, 2026<br />Summa Cum Laude</p>
            <p>M.S. in Computer Science, expected 2028</p>
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
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
              <a href="https://www.linkedin.com/in/hdav" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/Harsh4873" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://devpost.com/hdav3228" target="_blank" rel="noreferrer">Devpost</a>
              <a href={'mailto:' + EMAIL}>Email</a>
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
    document.title = 'Harsh Dave';
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
        <main id="main-content" className="page-content" tabIndex={-1} aria-label="Harsh Dave portfolio">
          <PortfolioPage />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
