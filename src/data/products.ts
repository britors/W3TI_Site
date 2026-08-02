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
    summary: 'Editor SQL moderno para PostgreSQL com inteligência artificial integrada.',
    status: 'available',
    modalId: 'draco-installation',
    technologies: ['PostgreSQL', 'Linux', 'Inteligência artificial'],
    featured: true,
    accent: 'violet',
    symbol: 'D',
  },
  {
    name: 'OpenBase',
    slug: 'openbase',
    category: 'Desenvolvimento e bancos de dados',
    summary: 'Ferramentas para acelerar o desenvolvimento de aplicações .NET.',
    status: 'available',
    modalId: 'openbase-installation',
    technologies: ['.NET', 'PostgreSQL', 'Oracle'],
    accent: 'blue',
    symbol: 'O',
  },
  {
    name: 'Fina',
    slug: 'fina',
    category: 'Finanças e produtividade',
    summary:
      'Aplicação de gestão financeira pessoal criada para tornar o controle das finanças mais simples e claro.',
    status: 'available',
    modalId: 'fina-installation',
    accent: 'green',
    symbol: 'F',
  },
  {
    name: 'Prosa',
    slug: 'prosa',
    category: 'Criação e produtividade',
    summary:
      'Processador de texto desktop nativo para Linux/GNOME, construído em Rust sobre GTK4 e libadwaita — leve, integrado ao tema do sistema e sem a pegada de memória de uma casca Electron.',
    status: 'available',
    modalId: 'prosa-installation',
    technologies: ['Rust', 'GTK4', 'libadwaita', 'Linux/GNOME'],
    accent: 'orange',
    symbol: 'P',
  },
  {
    name: 'Griffin',
    slug: 'griffin',
    category: 'Música e criação',
    summary:
      'Editor de música com recursos inteligentes para análise, estudo e manipulação de áudio.',
    status: 'available',
    modalId: 'griffin-installation',
    accent: 'pink',
    symbol: 'G',
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
    summary: 'ERP modular para micro e pequenas empresas.',
    status: 'development',
    accent: 'blue',
    symbol: 'O',
  },
  {
    name: 'Gero',
    slug: 'gero',
    category: 'Produtos em desenvolvimento',
    summary: 'Sistema de gestão de Recursos Humanos.',
    status: 'development',
    accent: 'violet',
    symbol: 'G',
  },
  {
    name: 'Kraken',
    slug: 'kraken',
    category: 'Produtos em desenvolvimento',
    summary: 'Estação de trabalho de áudio digital voltada à produção musical profissional.',
    status: 'development',
    accent: 'pink',
    symbol: 'K',
  },
  {
    name: 'Torven',
    slug: 'torven',
    category: 'Produtos em desenvolvimento',
    summary: 'Sistema de gestão para oficinas mecânicas.',
    status: 'development',
    accent: 'orange',
    symbol: 'T',
  },
];

export const catalogProducts = products.filter(
  (product) => product.category !== 'Produtos em desenvolvimento',
);
export const developmentProducts = products.filter((product) => product.status === 'development');
