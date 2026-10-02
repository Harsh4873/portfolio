import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { coursework, courseworkTerm, manuscript, profile, researchCode, researchStudies } from '../content';

export default function ResearchExplorer() {
  return (
    <>
      <div className="research-intro"><p>{profile.researchLead}</p><a href={profile.labHref} target="_blank" rel="noreferrer">Ioerger Lab <ArrowUpRight size={16} aria-hidden="true" /></a></div>
      <div className="research-studies">
        {researchStudies.map(study => (
          <article key={study.heading}>
            <h3>{study.heading}</h3>
            <p>{study.copy}</p>
          </article>
        ))}
      </div>
      <article className="manuscript">
        <p className="eyebrow">{manuscript.status}</p>
        <p>{manuscript.authors} {manuscript.title}</p>
      </article>
      <details className="research-methods detail-panel">
        <summary>Research software &amp; methods <span aria-hidden="true">+</span></summary>
        <ul className="research-code">
          {researchCode.map((item) => (
            <li key={item.name}>
              <a href={item.href} target="_blank" rel="noreferrer">{item.name} <ArrowUpRight size={14} aria-hidden="true" /></a>
              <p>{item.copy}{item.source && <> Source: <a href={item.source.href} target="_blank" rel="noreferrer">{item.source.label}</a>.</>}</p>
            </li>
          ))}
        </ul>
      </details>
      <div className="coursework">
        <header><h3>What I’m studying</h3><p>{courseworkTerm}</p></header>
        <div className="course-grid">{coursework.map(course => <details className="course-card" key={course.code}><summary><span><small>{course.code}</small><strong>{course.title}</strong></span><ChevronRight size={18} aria-hidden="true" /></summary><div><p>{course.description}</p><ul>{course.topics.map(topic => <li key={topic}>{topic}</li>)}</ul></div></details>)}</div>
      </div>
    </>
  );
}
