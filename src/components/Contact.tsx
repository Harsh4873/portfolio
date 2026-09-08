import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { profile, sports } from '../content';

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('');
  const email = profile.links.find(link => link.href.startsWith('mailto:'));
  const copyEmail = async () => {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email.href.slice('mailto:'.length));
      setCopyStatus('Email copied');
    } catch {
      setCopyStatus('Could not copy. Use the email link to get in touch.');
    }
  };
  return (
    <>
      <div className="contact-intro"><p>{profile.contact}</p><div className="contact-actions">
        {email && <><a className="solid-button" href={email.href}><Mail size={17} aria-hidden="true" /> Get in touch</a><button type="button" className="text-button" onClick={copyEmail}>{copyStatus === 'Email copied' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />} Copy email</button></>}
        <span className="copy-status" role="status">{copyStatus}</span>
      </div></div>
      <div className="contact-bottom">
        <div><h3>Education</h3>{profile.education.map(item => <p key={item.program}>{item.program}<small>{item.detail}</small></p>)}</div>
        <div><h3>Elsewhere</h3><div className="contact-links">{profile.links.filter(link => !link.href.startsWith('mailto:')).map(link => <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>{link.label}<ArrowUpRight size={14} aria-hidden="true" /></a>)}</div></div>
        <div><h3>Outside work</h3><p>{sports.join(', ')}.</p></div>
      </div>
    </>
  );
}
