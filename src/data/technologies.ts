export interface Technology {
  name: string;
  note: string;
  tone: 'blue' | 'violet' | 'green' | 'orange' | 'neutral' | 'red';
}

export const technologies: Technology[] = [
  { name: 'TypeScript', note: 'interfaces precisas', tone: 'blue' },
  { name: 'Angular', note: 'aplicações web estruturadas', tone: 'red' },
  { name: 'React', note: 'interfaces flexíveis', tone: 'blue' },
  { name: 'Electron', note: 'produtos desktop', tone: 'violet' },
  { name: 'Rust', note: 'performance nativa', tone: 'orange' },
  { name: 'Tauri', note: 'desktop eficiente', tone: 'green' },
  { name: 'Astro', note: 'sites rápidos', tone: 'orange' },
  { name: '.NET', note: 'aplicações empresariais', tone: 'violet' },
  { name: 'SQL Server', note: 'dados empresariais', tone: 'blue' },
  { name: 'PostgreSQL', note: 'dados confiáveis', tone: 'blue' },
  { name: 'SQLite', note: 'simplicidade local', tone: 'green' },
  { name: 'Oracle', note: 'integrações robustas', tone: 'neutral' },
  { name: 'Linux', note: 'liberdade para criar', tone: 'green' },
  { name: 'Windows', note: 'ecossistema corporativo', tone: 'violet' },
  { name: 'IA', note: 'assistência contextual', tone: 'orange' },
];
