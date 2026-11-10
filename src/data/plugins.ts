export interface Plugin {
  name: string;
  slug: string;
  summary: string;
  features: string[];
  components: string[];
  url: string;
  accent: string;
  symbol: string;
}

export const plugins: Plugin[] = [
  {
    name: 'Estimar Tokens',
    slug: 'estimar-tokens',
    summary:
      'Estima quantos tokens e quantos dólares cada etapa de uma tarefa vai gastar e compara com o saldo real dos seus limites de uso antes de executar, para a sessão não parar no meio.',
    features: [
      'Lê o percentual usado dos limites de 5 horas e de 7 dias e o tamanho do contexto.',
      'Estima cada etapa com custos medidos no seu próprio histórico e mostra o custo real da sessão.',
      'Quebra a tarefa em etapas seguras e pede confirmação nas caras.',
    ],
    components: ['Skill', 'Hook'],
    url: 'https://github.com/britors/estimar-tokens',
    accent: 'orange',
    symbol: 'E',
  },
  {
    name: 'Contexto Enxuto',
    slug: 'contexto-enxuto',
    summary:
      'Mantém o contexto enxuto. Cada resultado de ferramenta é relido em todas as respostas seguintes, então um log grande lido cedo multiplica o custo da sessão inteira.',
    features: [
      'Avisa quando um resultado passa de ~8 mil tokens, com a dica certa para a ferramenta.',
      'Alerta ao cruzar 60% e 80% da janela e propõe compactar a tempo.',
      'Mostra no seu histórico o que mais pesou, por ferramenta e comando.',
    ],
    components: ['Hook', 'Skill'],
    url: 'https://github.com/britors/contexto-enxuto',
    accent: 'cyan',
    symbol: 'C',
  },
  {
    name: 'Diário de Sessão',
    slug: 'diario-de-sessao',
    summary:
      'Grava ao fim de cada sessão um diário em Markdown com o que foi feito. Na sessão seguinte, /retomar lê o último diário e continua de onde você parou.',
    features: [
      'Registra pedidos, arquivos alterados, commits, decisões e pendências.',
      'Inclui o custo da sessão por modelo, com os subagentes, em tokens e US$.',
      'Guarda os diários fora do repositório, um arquivo por sessão.',
    ],
    components: ['Hook', 'Skill'],
    url: 'https://github.com/britors/diario-de-sessao',
    accent: 'violet',
    symbol: 'D',
  },
  {
    name: 'Foco',
    slug: 'foco',
    summary:
      'Mantém o Claude no que foi pedido: faz tudo o que você pediu, só o que você pediu, e deixa as outras ideias anotadas para você decidir depois.',
    features: [
      'Registra a demanda como lista fiel ao pedido e, se quiser, o escopo de arquivos.',
      'Avisa quando o Claude edita fora do escopo e anota as ideias extras em vez de executá-las.',
      'Não deixa encerrar com item pendente sem concluir, adiar ou perguntar a você.',
    ],
    components: ['Hook', 'Skill'],
    url: 'https://github.com/britors/foco',
    accent: 'blue',
    symbol: 'F',
  },
  {
    name: 'Guarda-commit',
    slug: 'guarda-commit',
    summary:
      'Revisa cada git commit e git push do Claude antes de rodar e bloqueia o que não deve ir para o repositório. A revisão é local e não gasta tokens do modelo.',
    features: [
      'Bloqueia segredos nas linhas novas, arquivos sensíveis como .env e arquivos acima de 5 MB.',
      'Impede force push ou remoção de branch protegido, como main e master.',
      'Confere o padrão de mensagem de commit, se você definir um.',
    ],
    components: ['Hook'],
    url: 'https://github.com/britors/guarda-commit',
    accent: 'green',
    symbol: 'G',
  },
  {
    name: 'Revisor pt-BR',
    slug: 'pt-br-revisor',
    summary:
      'Revisa o português dos arquivos Markdown. Sempre que o Claude escreve ou edita um .md, aponta o que soa americano ou descuidado, com a linha e a sugestão.',
    features: [
      'Aponta anglicismos desnecessários e palavras sem acento.',
      'Corrige datas, números e moeda no formato americano.',
      'Padroniza termos inconsistentes, com lista de termos por projeto.',
    ],
    components: ['Hook', 'Skill'],
    url: 'https://github.com/britors/pt-br-revisor',
    accent: 'pink',
    symbol: 'R',
  },
  {
    name: 'Orçamento Freelance',
    slug: 'orcamento-freelance',
    summary:
      'Orça projetos de software sob encomenda com preço fechado. Você cola o briefing do cliente e recebe o cálculo interno numa planilha e a proposta comercial.',
    features: [
      'Decompõe o escopo em tarefas e estima as horas em três pontos.',
      'Soma overhead, contingência por risco, impostos (MEI, Simples ou Lucro Presumido) e margem.',
      'Entrega a planilha .xlsx com fórmulas e a proposta com preço único.',
    ],
    components: ['Skill'],
    url: 'https://github.com/britors/orcamento-freelance',
    accent: 'violet',
    symbol: 'O',
  },
];
