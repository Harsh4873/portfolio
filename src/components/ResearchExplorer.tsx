import { useRef, useState, type KeyboardEvent } from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { coursework, courseworkTerm, profile, researchTopics } from '../content';

export default function ResearchExplorer() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const selectWithKeyboard = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number;
    if (event.key === 'ArrowRight') next = (index + 1) % researchTopics.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + researchTopics.length) % researchTopics.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = researchTopics.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <>
      <div className="research-intro"><p>{profile.researchLead}</p><a href={profile.labHref} target="_blank" rel="noreferrer">Ioerger Lab <ArrowUpRight size={16} aria-hidden="true" /></a></div>
      <div className="research-explorer">
        <div className="research-tabs" role="tablist" aria-label="Research topics">
          {researchTopics.map((topic, index) => <button key={topic.id} ref={element => { tabRefs.current[index] = element; }} type="button" role="tab" id={`tab-${topic.id}`} aria-selected={active === index} aria-controls={`panel-${topic.id}`} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => selectWithKeyboard(event, index)}>{topic.title}</button>)}
        </div>
        {researchTopics.map((topic, index) => <section className="research-panel" key={topic.id} role="tabpanel" id={`panel-${topic.id}`} aria-labelledby={`tab-${topic.id}`} hidden={active !== index} tabIndex={0}>
          <div className="research-question"><p className="eyebrow">The question</p><h3>{topic.question}</h3><p>{topic.summary}</p></div>
          <div className="research-contribution"><h4>What I do</h4><ul>{topic.contributions.map(item => <li key={item}><ChevronRight size={16} aria-hidden="true" /><span>{item}</span></li>)}</ul><div className="tool-tags" aria-label="Methods and tools">{topic.methods.map(method => <span key={method}>{method}</span>)}</div></div>
        </section>)}
      </div>
      <div className="coursework">
        <header><h3>What I’m studying</h3><p>{courseworkTerm}</p></header>
        <div className="course-grid">{coursework.map(course => <details className="course-card" key={course.code}><summary><span><small>{course.code}</small><strong>{course.title}</strong></span><ChevronRight size={18} aria-hidden="true" /></summary><div><p>{course.description}</p><ul>{course.topics.map(topic => <li key={topic}>{topic}</li>)}</ul></div></details>)}</div>
      </div>
    </>
  );
}
