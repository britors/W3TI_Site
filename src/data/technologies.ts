export interface Technology {
  name: string;
  note: string;
  tone: 'blue' | 'violet' | 'green' | 'orange' | 'neutral';
}

export const technologies: Technology[] = [
  { name: 'TypeScript', note: 'interfaces precisas', tone: 'blue' },
  { name: 'Electron', note: 'produtos desktop', tone: 'violet' },
  { name: 'Astro', note: 'sites rápidos', tone: 'orange' },
  { name: '.NET', note: 'aplicações empresariais', tone: 'violet' },
  { name: 'PostgreSQL', note: 'dados confiáveis', tone: 'blue' },
  { name: 'SQLite', note: 'simplicidade local', tone: 'green' },
  { name: 'Oracle', note: 'integrações robustas', tone: 'neutral' },
  { name: 'Linux', note: 'liberdade para criar', tone: 'green' },
  { name: 'IA', note: 'assistência contextual', tone: 'orange' },
];
