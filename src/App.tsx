import { useEffect, useRef, useState, type RefObject } from 'react';
import {
  experiences,
  news,
  profile,
  type Experience,
} from './content';
import ProjectGallery from './components/ProjectGallery';
import ResearchExplorer from './components/ResearchExplorer';
import Contact from './components/Contact';

const THEME_KEY = 'harsh-theme';

const sections = [
  { id: 'start', label: 'Profile' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'Contact' },
] as const;

type Theme = 'light' | 'dark';

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
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#290d15' : '#450c18');
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
  activeSection: string;
  onThemeChange: (theme: Theme) => void;
  onToggleMobile: () => void;
  onNavigate: () => void;
  menuButtonRef: RefObject<HTMLButtonElement>;
}

function SiteRail({ theme, mobileOpen, activeSection, onThemeChange, onToggleMobile, onNavigate, menuButtonRef }: SiteRailProps) {
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
            <a className="rail-nav-link" aria-current={activeSection === item.id ? 'location' : undefined} aria-label={item.label} href={`#${item.id}`} onClick={onNavigate} key={item.id}>
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
          <a href="/portfolio/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="/portfolio/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
          <a href="https://www.linkedin.com/in/hdav" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/Harsh4873" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </aside>
  );
}

function SectionHeading({ title, id }: { title: string; id: string }) {
  return (
    <header className="section-heading">
      <h2 id={id}>{title}</h2>
    </header>
  );
}

function ReplaceableImage({
  src,
  fallbackSrc,
  fallbackLabel,
  alt,
  priority = false,
}: {
  src: string;
  fallbackSrc?: string;
  fallbackLabel: string;
  alt: string;
  priority?: boolean;
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
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
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
        priority
        src={profile.portrait}
        fallbackSrc={profile.portraitFallback}
        fallbackLabel="Portrait unavailable"
        alt={profile.name}
      />
    </figure>
  );
}

function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <article className="experience-entry">
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
        <details className="detail-panel">
          <summary>Read more <span aria-hidden="true">+</span></summary>
          <div className="detail-panel-inner experience-detail-inner">
            <ul>
              {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </div>
        </details>
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

function PortfolioPage() {
  return (
    <>
      <div className="page-topline"><span>Research & software</span><a href="#projects">Explore the work <span aria-hidden="true">↘</span></a></div>
      <section className="profile-intro" id="start" aria-labelledby="profile-heading">
        <div className="profile-copy">
          <p className="section-code">{profile.role}</p>
          <h1 id="profile-heading">{profile.name}</h1>
          <p className="profile-degree">{profile.degree}</p>
          <p className="profile-summary"><WithOrganism text={profile.thesis} /></p>
          <p className="profile-aside">{profile.summary}</p>
          <nav className="hero-actions" aria-label="Explore portfolio">
            <a className="primary-action" href="#research">Explore research <span aria-hidden="true">↗</span></a>
          </nav>
          <nav className="profile-links" aria-label="Profile links">
            {profile.links.filter(link => ['Resume', 'CV', 'GitHub', 'Email'].includes(link.label)).map((link) => (
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
        <div className="profile-visual"><Portrait /></div>
      </section>

      <section className="content-section research-section" id="research" aria-labelledby="research-heading">
        <SectionHeading title="Research" id="research-heading" />
        <ResearchExplorer />
      </section>

      <section className="content-section" id="experience" aria-labelledby="work-heading">
        <SectionHeading title="Work" id="work-heading" />
        <div className="experience-list">
          {experiences.map((experience) => <ExperienceEntry experience={experience} key={experience.role + experience.organization} />)}
        </div>
        <details className="past-updates"><summary>Past updates <span aria-hidden="true">+</span></summary><NewsList /></details>
      </section>

      <section className="content-section projects-section" id="projects" aria-labelledby="projects-heading">
        <SectionHeading title="Projects" id="projects-heading" />
        <p className="section-lede">Apps I have built for research, campus life, sports, training, and everyday use.</p>
        <ProjectGallery />
      </section>

      <section className="content-section about-section" id="about" aria-labelledby="about-heading">
        <SectionHeading title="Contact" id="about-heading" />
        <Contact />
      </section>
    </>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <a href="/">harsh.bet</a>
      <a href="/apps/">Apps</a>
      <a href="#start">Back to top</a>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('start');
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

  useEffect(() => {
    let frame = 0;
    const updateSection = () => {
      const marker = Math.min(window.innerHeight * 0.3, 240);
      const current = [...sections].reverse().find((section) => {
        const element = document.getElementById(section.id);
        return element && element.getBoundingClientRect().top <= marker;
      });
      setActiveSection(current?.id ?? 'start');
      frame = 0;
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateSection);
    };
    updateSection();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, []);

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
        activeSection={activeSection}
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
