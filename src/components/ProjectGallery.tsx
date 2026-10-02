import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { ArrowUpRight, ExternalLink, Grid2X2, Heart, List, Maximize2, RotateCcw, Search, X } from 'lucide-react';
import { labProjects, projects, type ProjectDetail } from '../content';

export interface GalleryProject {
  title: string;
  image: string;
  images?: string[];
  summary: string;
  description: string;
  tools: string[];
  details?: ProjectDetail[];
  href?: string;
  context?: string;
  personal: boolean;
}

function shotsOf(project: { image: string; images?: string[] }) {
  const extra = project.images?.filter(Boolean) ?? [];
  return extra.length ? extra : [project.image];
}

const galleryProjects: GalleryProject[] = [
  ...labProjects.map(project => ({ ...project, description: project.question, personal: true })),
  ...projects.map(project => ({ ...project, image: project.capture, description: project.proof, href: project.link, context: project.kicker, personal: false })),
];

const SWIPE_COMMIT_PX = 110;

export function filterProjects(query: string) {
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return galleryProjects.filter(project => {
    const text = [project.title, project.summary, project.description, project.context ?? '', ...project.tools].join(' ').toLowerCase();
    return words.every(word => text.includes(word));
  });
}

function ShotFrame({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const src = images[index] ?? images[0];
  return (
    <>
      <a className="dialog-image" href={src} target="_blank" rel="noreferrer" aria-label={`Open full screenshot of ${title}`}>
        <img src={src} alt={`${title} interface`} />
        <span><Maximize2 size={14} aria-hidden="true" /> Open screenshot</span>
      </a>
      {images.length > 1 && (
        <div className="shot-strip" role="group" aria-label={`${title} screenshots`}>
          {images.map((image, shotIndex) => (
            <button key={image} type="button" aria-pressed={shotIndex === index} aria-label={`Show screenshot ${shotIndex + 1} of ${title}`} onClick={() => setIndex(shotIndex)}>
              <img src={image} alt="" />
            </button>
          ))}
        </div>
      )}
    </>
  );
}

function ProjectDialog({ project, onDismiss }: { project: GalleryProject | null; onDismiss: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [project]);

  return (
    <dialog ref={dialogRef} className="project-dialog" aria-labelledby={project ? 'project-dialog-title' : undefined} onClose={onDismiss} onClick={event => {
      if (event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close();
    }}>
      {project && <>
        <header className="dialog-header">
          <div><p>{project.context ?? 'Independent project'}</p><h2 id="project-dialog-title">{project.title}</h2></div>
          <button ref={closeRef} type="button" className="icon-button dialog-close" aria-label="Close project details" onClick={() => dialogRef.current?.close()}><X size={20} aria-hidden="true" /></button>
        </header>
        <div className="dialog-body">
          <ShotFrame images={shotsOf(project)} title={project.title} />
          <p className="dialog-lede">{project.summary}</p>
          <div className="dialog-sections">
            {(project.details ?? [{ heading: project.personal ? 'What it does' : 'About the work', copy: project.description }]).map(detail => (
              <section key={detail.heading}><h3>{detail.heading}</h3><p>{detail.copy}</p></section>
            ))}
          </div>
          <div className="tool-tags" aria-label="Tools and features">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
        </div>
        <footer className="dialog-footer">
          <button type="button" className="text-button" onClick={() => dialogRef.current?.close()}>Back to projects</button>
          {project.href && <a className="solid-button" href={project.href} target="_blank" rel="noreferrer">{project.personal ? 'Open project' : 'View project'} <ArrowUpRight size={16} aria-hidden="true" /></a>}
        </footer>
      </>}
    </dialog>
  );
}

function ProjectDeck({
  projects,
  onOpen,
}: {
  projects: readonly GalleryProject[];
  onOpen: (project: GalleryProject, trigger: HTMLElement) => void;
}) {
  const [index, setIndex] = useState(0);
  const [shot, setShot] = useState(0);
  const [kept, setKept] = useState<readonly string[]>([]);
  const [freshKeeps, setFreshKeeps] = useState<readonly string[]>([]);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const origin = useRef<{ x: number; pointerId: number } | null>(null);
  const project = projects[index];
  const shots = project ? shotsOf(project) : [];

  useEffect(() => {
    setShot(0);
  }, [project?.title]);

  const advance = (direction: 'left' | 'right') => {
    if (!project) return;
    if (direction === 'right' && !kept.includes(project.title)) {
      setKept((current) => [...current, project.title]);
      setFreshKeeps((current) => [...current, project.title]);
    }
    setDragX(0);
    setDragging(false);
    setIndex((current) => current + 1);
  };

  const undo = () => {
    const previous = projects[index - 1];
    if (previous && freshKeeps.includes(previous.title)) {
      setKept((current) => current.filter((title) => title !== previous.title));
      setFreshKeeps((current) => current.filter((title) => title !== previous.title));
    }
    setDragX(0);
    setIndex((current) => Math.max(0, current - 1));
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.button !== 0) return;
    if ((event.target as HTMLElement).closest('a, button')) return;
    origin.current = { x: event.clientX, pointerId: event.pointerId };
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    const start = origin.current;
    if (!start || start.pointerId !== event.pointerId) return;
    setDragX(event.clientX - start.x);
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLElement>) => {
    const start = origin.current;
    origin.current = null;
    setDragging(false);
    if (!start || start.pointerId !== event.pointerId) return;
    const distance = event.clientX - start.x;
    if (distance >= SWIPE_COMMIT_PX) advance('right');
    else if (distance <= -SWIPE_COMMIT_PX) advance('left');
    else setDragX(0);
  };

  if (!project) {
    return (
      <div className="deck-end">
        <h3>That is the deck.</h3>
        <p>{kept.length} kept, {Math.max(projects.length - kept.length, 0)} passed.</p>
        <button type="button" className="text-button" onClick={() => setIndex(0)}>Start over</button>
      </div>
    );
  }

  const likeOpacity = Math.min(1, Math.max(0, dragX / SWIPE_COMMIT_PX));
  const nopeOpacity = Math.min(1, Math.max(0, -dragX / SWIPE_COMMIT_PX));

  return (
    <div className="project-deck">
      <p className="deck-count">{projects.length - index} left{kept.length ? ` · ${kept.length} kept` : ''}</p>
      <div className="deck-stage">
        {projects[index + 1] ? <div className="deck-back" aria-hidden="true" /> : null}
        <article
          className={dragging ? 'deck-card is-dragging' : 'deck-card'}
          style={{ transform: `translateX(${dragX}px) rotate(${dragX / 18}deg)` }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={() => { origin.current = null; setDragging(false); setDragX(0); }}
        >
          <div className="deck-photo">
            <img src={shots[shot] ?? shots[0]} alt={`${project.title} interface`} draggable={false} />
            <span className="deck-stamp deck-stamp-like" style={{ opacity: likeOpacity }}>Like</span>
            <span className="deck-stamp deck-stamp-nope" style={{ opacity: nopeOpacity }}>Nope</span>
            {shots.length > 1 && (
              <div className="deck-dots" role="group" aria-label={`${project.title} screenshots`}>
                {shots.map((image, shotIndex) => (
                  <button
                    key={image}
                    type="button"
                    className={shotIndex === shot ? 'is-on' : undefined}
                    aria-label={`Photo ${shotIndex + 1} of ${project.title}`}
                    aria-pressed={shotIndex === shot}
                    onPointerDown={(event) => event.stopPropagation()}
                    onClick={() => setShot(shotIndex)}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="deck-bio">
            {project.context && <p className="gallery-context">{project.context}</p>}
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            {kept.includes(project.title) ? <p className="deck-kept">Kept</p> : null}
            <button type="button" className="text-button" aria-label={`Read about ${project.title}`} onPointerDown={(event) => event.stopPropagation()} onClick={(event) => onOpen(project, event.currentTarget)}>Read about it <span aria-hidden="true">→</span></button>
          </div>
        </article>
      </div>
      <div className="deck-actions">
        <button type="button" className="deck-round deck-round-undo" aria-label="Undo" onClick={undo} disabled={index === 0}><RotateCcw size={18} aria-hidden="true" /></button>
        <button type="button" className="deck-round deck-round-nope" aria-label="Pass" onClick={() => advance('left')}><X size={26} aria-hidden="true" /></button>
        <button type="button" className="deck-round deck-round-like" aria-label="Like" onClick={() => advance('right')}><Heart size={28} aria-hidden="true" /></button>
      </div>
    </div>
  );
}

export default function ProjectGallery() {
  const [query, setQuery] = useState('');
  const [layout, setLayout] = useState<'swipe' | 'cards' | 'list'>('swipe');
  const [selected, setSelected] = useState<GalleryProject | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const visible = filterProjects(query);
  const openDetails = (project: GalleryProject, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setSelected(project);
  };
  const dismiss = () => {
    setSelected(null);
    triggerRef.current?.focus();
  };

  return (
    <>
      <div className="gallery-toolbar">
        <label className="project-search"><Search size={18} aria-hidden="true" /><span className="sr-only">Search projects</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search projects or tools" />{query && <button type="button" className="icon-button" aria-label="Clear project search" onClick={() => setQuery('')}><X size={16} aria-hidden="true" /></button>}</label>
        <div className="view-switch" role="group" aria-label="Project layout">
          <button type="button" aria-pressed={layout === 'swipe'} onClick={() => setLayout('swipe')}>Swipe</button>
          <button type="button" aria-pressed={layout === 'cards'} onClick={() => setLayout('cards')}><Grid2X2 size={16} aria-hidden="true" /> Cards</button>
          <button type="button" aria-pressed={layout === 'list'} onClick={() => setLayout('list')}><List size={18} aria-hidden="true" /> List</button>
        </div>
      </div>
      <p className="gallery-count" role="status">{query ? `${visible.length} of ${galleryProjects.length}` : galleryProjects.length} projects</p>
      {layout === 'swipe' && visible.length > 0 && <ProjectDeck key={query} projects={visible} onOpen={openDetails} />}
      {layout !== 'swipe' && <div className="project-gallery" data-layout={layout}>
        {visible.map(project => (
          <article className="gallery-card" key={project.title}>
            <button type="button" className="gallery-image" aria-label={`View ${project.title} details`} onClick={event => openDetails(project, event.currentTarget)}>
              <img src={project.image} alt={`${project.title} interface`} loading="lazy" decoding="async" width={1600} height={900} />
              <span className="image-action"><Maximize2 size={15} aria-hidden="true" /> View details</span>
            </button>
            <div className="gallery-copy">
              {project.context && <p className="gallery-context">{project.context}</p>}
              <h3>{project.title}</h3><p className="gallery-summary">{project.summary}</p>
              <div className="gallery-actions">
                <button type="button" className="text-button" onClick={event => openDetails(project, event.currentTarget)} aria-label={`Read about ${project.title}`}>Read about it <span aria-hidden="true">→</span></button>
                {project.href && <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>Open project <ExternalLink size={14} aria-hidden="true" /></a>}
              </div>
            </div>
          </article>
        ))}
      </div>}
      {!visible.length && <div className="gallery-empty"><h3>No projects found</h3><p>Try a project name or a tool such as Python or React.</p><button type="button" className="text-button" onClick={() => setQuery('')}>Show all projects</button></div>}
      <ProjectDialog project={selected} onDismiss={dismiss} />
    </>
  );
}
