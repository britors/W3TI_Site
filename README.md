# W3TI — site institucional

Site institucional estático da W3TI, empresa brasileira que cria produtos de software para usuários, desenvolvedores, profissionais criativos e pequenas e médias empresas.

## Stack

- Astro com renderização estática;
- TypeScript em modo estrito;
- CSS próprio, sem Bootstrap ou Tailwind;
- GitHub Pages por GitHub Actions;
- conteúdo centralizado em arquivos TypeScript.

Não há backend, servidor Node.js em produção, banco de dados, tracker ou biblioteca de UI pesada.

## Requisitos

- Node.js 22 ou superior;
- npm 10 ou superior.

## Desenvolvimento local

```bash
npm install
npm run dev
```

O servidor local fica disponível no endereço informado pelo Astro, normalmente `http://localhost:4321/`.

## Verificação, formatação e build

```bash
npm run check
npm run format:check
npm run build
npm run preview
```

`npm run build` gera o site final em `dist/`.

## GitHub Pages

O workflow [`deploy.yml`](.github/workflows/deploy.yml) executa em todo push para `main` e também pode ser iniciado manualmente. Ele instala dependências com `npm ci`, executa `check`, valida a formatação, gera `dist` e publica usando as actions oficiais do GitHub Pages.

A configuração atual considera o domínio personalizado:

```text
https://www.w3ti.com.br/
```

O `base` está centralizado em `astro.config.mjs` como `/`, e o arquivo `public/CNAME` aponta para `www.w3ti.com.br`. Se o site também precisar ser servido em uma URL de projeto, altere `base` para o subdiretório correspondente e mantenha os links baseados em `import.meta.env.BASE_URL`. Não é necessário adicionar tokens ao repositório: o workflow usa as permissões mínimas para Pages.

## Estrutura

```text
src/
  components/     componentes visuais reutilizáveis
  data/           empresa, navegação, produtos e tecnologias
  layouts/        metadados e estrutura base da página
  pages/          rotas Astro
  styles/         design system CSS
public/
  brand/          ativos públicos da marca
  favicon.svg
  manifest.webmanifest
  og-image.svg
  robots.txt
  sitemap.xml
.github/workflows/deploy.yml
```

## Conteúdo e configuração

Os produtos são mantidos em `src/data/products.ts`. Para adicionar ou atualizar um produto, edite esse arquivo e forneça um `slug`, categoria, descrição, status e, quando confirmado, as tecnologias relacionadas. Produtos em desenvolvimento usam explicitamente o status `development`.

Configurações que ainda precisam de dados oficiais estão em `src/data/site.ts`:

- `contactEmail`: atualmente `rodrigo@w3ti.com.br`;
- `officialDomain`: atualmente `www.w3ti.com.br`;
- `definitiveLogo` e `logoImage`: usam `logo/w3ti.png`, publicado em `public/brand/w3ti.png`;
- `ogImage`: usa o SVG social atual e pode ser substituído por uma imagem definitiva, se necessário;
- `siteUrl`: manter sincronizado com a URL canônica pública.

O CTA de contato usa `mailto:rodrigo@w3ti.com.br`. O GitHub da empresa está configurado em `https://github.com/britors` e o Lyra OS é tratado como projeto externo em `https://lyraos.com.br`.

## Novas páginas

Para criar páginas individuais de produtos ou artigos, adicione uma rota em `src/pages/` e reutilize `BaseLayout`, os dados tipados e os componentes existentes. O `base` deve ser respeitado em links estáticos; links internos da landing page usam `import.meta.env.BASE_URL` para funcionar tanto no domínio raiz quanto em um subdiretório.

## Acessibilidade

A página usa HTML semântico, link de salto, foco visível, menu mobile com estado acessível, contraste reforçado, links externos identificados, dimensões explícitas para o logo e suporte a `prefers-reduced-motion`. A revisão futura deve continuar validando teclado, leitores de tela e contraste ao alterar o design.

## Histórico e decisões

O `HEAD` recebido estava vazio depois de um commit de limpeza. O histórico anterior continha uma aplicação Express, PDFs e imagens de guias do Filo; eles não foram restaurados porque a nova arquitetura é um catálogo institucional estático e esses recursos não fazem parte da página solicitada. O histórico Git foi preservado. O logo fornecido em `logo/w3ti.png` foi mantido como fonte, integrado ao cabeçalho e rodapé e copiado para `public/brand/w3ti.png` para publicação.

Não há licença definida no repositório; nenhuma foi adicionada.
