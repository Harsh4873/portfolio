export const atmospheres = [
  { version: '1', id: 'ink', label: 'Ink', href: '/portfolio/v1/' },
  { version: '2', id: 'paper', label: 'Paper', href: '/portfolio/v2/' },
  { version: '3', id: 'fields', label: 'Fields', href: '/portfolio/v3/' },
  { version: '4', id: 'darkroom', label: 'Darkroom', href: '/portfolio/v4/' },
  { version: '5', id: 'hero', label: 'Hero', href: '/portfolio/v5/' },
] as const;

export type AtmosphereId = (typeof atmospheres)[number]['id'];

const atmosphereByVersion: Record<string, AtmosphereId> = {
  '1': 'ink',
  '2': 'paper',
  '3': 'fields',
  '4': 'darkroom',
  '5': 'hero',
};

export function atmosphereFromPath(pathname: string): AtmosphereId | null {
  const match = pathname.match(/\/v([1-5])(?:\/index\.html)?\/?$/);
  return match ? atmosphereByVersion[match[1]] ?? null : null;
}
