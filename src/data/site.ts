export const siteConfig = {
  name: 'W3TI',
  legalName: 'W3TI',
  description:
    'A W3TI cria produtos de software para pessoas, empresas, desenvolvedores e profissionais criativos.',
  siteUrl: 'https://www.w3ti.com.br/',
  officialDomain: 'www.w3ti.com.br',
  contactEmail: 'rodrigo@w3ti.com.br',
  githubUrl: 'https://github.com/britors',
  lyraUrl: 'https://lyraos.com.br',
  ogImage: 'og-image.svg',
  logoImage: 'brand/w3ti.png',
  definitiveLogo: 'brand/w3ti.png',
  locale: 'pt-BR',
} as const;

export type SiteConfig = typeof siteConfig;
