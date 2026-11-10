export type ProductStatus = 'available' | 'development' | 'external';

export interface Product {
  name: string;
  slug: string;
  category: string;
  summary: string;
  status: ProductStatus;
  url?: string;
  modalId?: string;
  technologies?: string[];
  featured?: boolean;
  accent: string;
  symbol: string;
}

export const products: Product[] = [
  {
    name: 'Draco',
    slug: 'draco',
    category: 'Desenvolvimento e bancos de dados',
    summary:
      'Cliente PostgreSQL gratuito e de código aberto para Linux e Windows: editor SQL, explorador de schemas, ERD, administração e backup.',
    status: 'available',
    url: 'https://dracodb.com.br',
    modalId: 'draco-installation',
    technologies: ['PostgreSQL', 'Rust', 'Tauri'],
    featured: true,
    accent: 'violet',
    symbol: 'D',
  },
  {
    name: 'OpenBase',
    slug: 'openbase',
    category: 'Desenvolvimento e bancos de dados',
    summary:
      'CLI, templates hexagonais e extensão para VS Code que aceleram APIs .NET com PostgreSQL, SQL Server e Oracle.',
    status: 'available',
    modalId: 'openbase-installation',
    technologies: ['.NET', 'PostgreSQL', 'SQL Server', 'Oracle'],
    accent: 'blue',
    symbol: 'O',
  },
  {
    name: 'Fina',
    slug: 'fina',
    category: 'Finanças e produtividade',
    summary:
      'Gestão financeira pessoal para enxergar sua situação, planejar a saída das dívidas e fazer o patrimônio crescer.',
    status: 'available',
    url: 'https://fina.net.br',
    modalId: 'fina-installation',
    technologies: ['Electron', 'TypeScript', 'SQLite'],
    accent: 'green',
    symbol: 'F',
  },
  {
    name: 'Estimar Tokens',
    slug: 'estimar-tokens',
    category: 'Desenvolvimento e bancos de dados',
    summary:
      'Skill para o Claude Code que estima o custo em tokens de cada etapa antes de executá-la, evitando que a sessão pare no meio por limite de uso.',
    status: 'available',
    url: 'https://github.com/britors/estimar-tokens',
    technologies: ['Claude Code', 'IA'],
    accent: 'orange',
    symbol: 'E',
  },
  {
    name: 'Lyrnova',
    slug: 'lyrnova',
    category: 'Produtos em desenvolvimento',
    summary:
      'IDE desktop multiplataforma, extensível e seguro, com Git, terminal, depuração e plugins de linguagens e IA.',
    status: 'development',
    url: 'https://github.com/w3ti/Lyrnova',
    technologies: ['Rust', 'Tauri'],
    accent: 'violet',
    symbol: 'L',
  },
  {
    name: 'Filo',
    slug: 'filo',
    category: 'Produtos em desenvolvimento',
    summary:
      'CRM desktop para pequenas e médias empresas, construído com Electron e TypeScript, com suporte a SQLite e PostgreSQL.',
    status: 'development',
    technologies: ['Electron', 'TypeScript', 'SQLite', 'PostgreSQL'],
    accent: 'cyan',
    symbol: 'F',
  },
  {
    name: 'Orbi',
    slug: 'orbi',
    category: 'Produtos em desenvolvimento',
    summary:
      'ERP desktop modular para micro e pequenas empresas: estoque, compras, vendas, notas fiscais, RH e financeiro.',
    status: 'development',
    technologies: ['Electron', 'TypeScript', 'PostgreSQL'],
    accent: 'blue',
    symbol: 'O',
  },
  {
    name: 'Gero',
    slug: 'gero',
    category: 'Produtos em desenvolvimento',
    summary: 'Sistema de gestão de recursos humanos para empresas de todos os portes.',
    status: 'development',
    url: 'https://github.com/britors/Gero',
    technologies: ['Electron', 'TypeScript', 'PostgreSQL'],
    accent: 'green',
    symbol: 'G',
  },
  {
    name: 'Torven',
    slug: 'torven',
    category: 'Produtos em desenvolvimento',
    summary: 'ERP para oficinas mecânicas, oferecido por assinatura.',
    status: 'development',
    accent: 'orange',
    symbol: 'T',
  },
  {
    name: 'Indício',
    slug: 'indicio',
    category: 'Produtos em desenvolvimento',
    summary:
      'RPG narrativo de investigação para Android, leve e sem violência, pensado para ser confortável também para idosos.',
    status: 'development',
    url: 'https://github.com/britors/Indicio',
    technologies: ['Android', 'Kotlin'],
    accent: 'pink',
    symbol: 'I',
  },
];

export const catalogProducts = products.filter(
  (product) => product.category !== 'Produtos em desenvolvimento',
);
export const developmentProducts = products.filter((product) => product.status === 'development');
