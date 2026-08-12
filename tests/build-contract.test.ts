import { existsSync } from 'node:fs';
import { basename, dirname, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { describe, expect, it } from 'vitest';
import {
  experiences,
  labProjects,
  projects,
  researchChecks,
  researchStages,
} from '../src/content';

const repository = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceDirectory = resolve(repository, 'src');

function nonEmpty(value: string) {
  return value.trim().length > 0;
}

describe('Portfolio build contract', () => {
  it('compiles only the application import graph, never macOS duplicate source files', () => {
    const configPath = resolve(repository, 'tsconfig.json');
    const loaded = ts.readConfigFile(configPath, ts.sys.readFile);
    expect(loaded.error).toBeUndefined();

    const parsed = ts.parseJsonConfigFileContent(loaded.config, ts.sys, repository, undefined, configPath);
    expect(parsed.errors).toEqual([]);
    const configuredSourceRoots = parsed.fileNames
      .map((fileName) => resolve(fileName))
      .filter((fileName) => fileName.startsWith(`${sourceDirectory}${sep}`))
      .map((fileName) => relative(repository, fileName).split(sep).join('/'))
      .sort();

    // This assertion remains effective in CI, where ignored macOS duplicate
    // files are absent: broadening the include back to `src` would add App.tsx
    // and content.ts as roots and fail the contract immediately.
    expect(configuredSourceRoots).toEqual(['src/main.tsx', 'src/vite-env.d.ts']);

    const program = ts.createProgram(parsed.fileNames, parsed.options);
    const compiledSourceFiles = program.getSourceFiles()
      .map((sourceFile) => resolve(sourceFile.fileName))
      .filter((fileName) => fileName.startsWith(`${sourceDirectory}/`));

    expect(compiledSourceFiles.map((fileName) => basename(fileName))).toEqual(
      expect.arrayContaining(['main.tsx', 'App.tsx', 'content.ts']),
    );
    expect(compiledSourceFiles.some((fileName) => / \d+\.[cm]?[jt]sx?$/.test(basename(fileName)))).toBe(false);
  });
});

describe('Portfolio content contract', () => {
  it('keeps every lab project address and capture unique and deployable', () => {
    expect(labProjects.length).toBeGreaterThan(0);
    expect(new Set(labProjects.map(({ code }) => code)).size).toBe(labProjects.length);
    expect(new Set(labProjects.map(({ href }) => href)).size).toBe(labProjects.length);
    expect(new Set(labProjects.map(({ image }) => image)).size).toBe(labProjects.length);

    for (const project of labProjects) {
      expect(project.href).toMatch(/^\/[a-z0-9-]+\/$/);
      expect(project.image).toMatch(/^\/portfolio\/project-captures\/[a-z0-9-]+\.png$/);
      expect(existsSync(resolve(repository, 'public', project.image.replace('/portfolio/', '')))).toBe(true);
      expect([
        project.code,
        project.title,
        project.status,
        project.summary,
        project.question,
        ...project.tools,
      ].every(nonEmpty)).toBe(true);
    }
  });

  it('keeps every rendered narrative collection populated and uniquely keyed', () => {
    expect(experiences.length).toBeGreaterThan(0);
    expect(projects.length).toBeGreaterThan(0);
    expect(researchStages.length).toBeGreaterThan(0);
    expect(researchChecks.length).toBeGreaterThan(0);

    expect(new Set(experiences.map(({ role, organization }) => `${role}\0${organization}`)).size)
      .toBe(experiences.length);
    expect(new Set(projects.map(({ title }) => title)).size).toBe(projects.length);
    expect(new Set(researchStages.map(({ index }) => index)).size).toBe(researchStages.length);
    expect(new Set(researchChecks.map(({ title }) => title)).size).toBe(researchChecks.length);
  });
});
