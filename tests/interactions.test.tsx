// @vitest-environment jsdom
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ProjectGallery, { filterProjects } from '../src/components/ProjectGallery';
import ResearchExplorer from '../src/components/ResearchExplorer';
import Contact from '../src/components/Contact';

let container: HTMLDivElement;
let root: Root;
Object.defineProperty(globalThis, 'IS_REACT_ACT_ENVIRONMENT', { value: true, configurable: true });

beforeEach(() => {
  container = document.createElement('div');
  document.body.append(container);
  root = createRoot(container);
  Object.defineProperty(HTMLDialogElement.prototype, 'showModal', { configurable: true, value: function (this: HTMLDialogElement) { this.open = true; } });
  Object.defineProperty(HTMLDialogElement.prototype, 'close', { configurable: true, value: function (this: HTMLDialogElement) {
    this.open = false;
    this.dispatchEvent(new Event('close'));
  } });
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
  document.body.style.overflow = '';
  vi.restoreAllMocks();
});

function click(element: Element | null) {
  expect(element).not.toBeNull();
  act(() => (element as HTMLElement).click());
}

function search(value: string) {
  const input = container.querySelector('input')!;
  const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!;
  act(() => {
    setter.call(input, value);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  });
}

describe('Project browsing', () => {
  it('matches all search words across names, descriptions, and tools', () => {
    expect(filterProjects('  REACT genomics ').map(project => project.title)).toEqual(['MtbScope']);
    expect(filterProjects('')).toHaveLength(20);
    expect(filterProjects('unmatched-project-name')).toEqual([]);
  });

  it('switches layouts, reports empty results, and restores the project list', () => {
    act(() => root.render(<ProjectGallery />));
    expect(container.querySelectorAll('.gallery-card')).toHaveLength(20);
    click(container.querySelectorAll('.view-switch button')[1]);
    expect(container.querySelector('.project-gallery')?.getAttribute('data-layout')).toBe('list');
    search('unmatched-project-name');
    expect(container.querySelectorAll('.gallery-card')).toHaveLength(0);
    expect(container.querySelector('[role="status"]')?.textContent).toBe('0 of 20 projects');
    click(container.querySelector('.gallery-empty button'));
    expect(container.querySelectorAll('.gallery-card')).toHaveLength(20);
  });

  it('opens project details and restores focus and scrolling when closed', () => {
    document.body.style.overflow = 'scroll';
    act(() => root.render(<ProjectGallery />));
    const trigger = container.querySelector<HTMLButtonElement>('[aria-label="Read about MtbScope"]')!;
    trigger.focus();
    click(trigger);
    const dialog = container.querySelector('dialog')!;
    expect(dialog.open).toBe(true);
    expect(dialog.querySelector('h2')?.textContent).toBe('MtbScope');
    expect(dialog.querySelectorAll('.dialog-sections section')).toHaveLength(3);
    expect(document.activeElement).toBe(dialog.querySelector('.dialog-close'));
    expect(document.body.style.overflow).toBe('hidden');
    expect(dialog.querySelector('.solid-button')?.getAttribute('href')).toBe('/genes/');
    click(dialog.querySelector('.dialog-close'));
    expect(dialog.open).toBe(false);
    expect(document.body.style.overflow).toBe('scroll');
    expect(document.activeElement).toBe(trigger);
  });

  it('handles the native dialog close event and can open another project', () => {
    act(() => root.render(<ProjectGallery />));
    click(container.querySelector('[aria-label="Read about Research"]'));
    act(() => container.querySelector('dialog')!.close());
    expect(document.body.style.overflow).toBe('');
    click(container.querySelector('[aria-label="Read about Radar"]'));
    expect(container.querySelector('#project-dialog-title')?.textContent).toBe('Radar');
    click(container.querySelector('.dialog-close'));
  });
});

describe('Research', () => {
  it('shows the manuscript and the analysis repositories, without topic tabs', () => {
    act(() => root.render(<ResearchExplorer />));
    expect(container.querySelector('[role="tab"]')).toBeNull();
    expect(container.textContent).toContain('In preparation');
    expect(container.textContent).toContain('Shatby');
    const links = [...container.querySelectorAll('a')].map((link) => link.getAttribute('href'));
    expect(links).toContain('https://github.com/ioerger/TB_diabetes_positive_selection');
    expect(links).toContain('https://github.com/danny-wilson/genomegaMap');
    expect(links).toContain('https://github.com/abacus-gene/paml');
  });
});

describe('Contact', () => {
  it('confirms successful copying and leaves the email link usable after failure', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } });
    act(() => root.render(<Contact />));
    await act(async () => container.querySelector<HTMLButtonElement>('.contact-actions button')!.click());
    expect(writeText).toHaveBeenCalledWith(expect.any(String));
    expect(container.querySelector('[role="status"]')?.textContent).toBe('Email copied');
    writeText.mockRejectedValueOnce(new Error('Unavailable'));
    await act(async () => container.querySelector<HTMLButtonElement>('.contact-actions button')!.click());
    expect(container.querySelector('[role="status"]')?.textContent).toContain('Could not copy');
    expect(container.querySelector('a[href^="mailto:"]')).not.toBeNull();
  });
});
