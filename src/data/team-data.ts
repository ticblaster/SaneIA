export interface TeamMember {
  name: string;
  role: string;
  bullets: string[];
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Marcelo Ribeiro de Oliveira Mello',
    role: 'Idealizador e líder do projeto | Produto, Dados e Inteligência Artificial',
    bullets: [
      'Cientista da Computação e Mestre em Modelagem Computacional.',
      'Servidor público desde 2003, com experiência em tecnologia, processos organizacionais e transformação digital.',
      'Professor universitário entre 2004 e 2025, com atuação na UFT, UNITINS e Faculdade Objetivo, nas modalidades presencial e a distância.',
      'MBA em Inteligência Artificial e Machine Learning em andamento.',
      'Experiência em desenvolvimento de software, arquitetura de sistemas, dados, automação e projetos tecnológicos.',
      'Responsável pela visão do produto, coordenação do projeto, desenvolvimento do MVP, pipeline de dados e aplicação de Inteligência Artificial.',
    ],
  },
  {
    name: 'Honório Henrique de Carvalho Lima',
    role: 'Estratégia, Arquitetura de Software e Validação de Mercado',
    bullets: [
      'Engenheiro de Software com mais de 10 anos de experiência em multinacionais e instituições públicas.',
      'Especialista em arquitetura de software, modernização de sistemas, APIs, microsserviços e transformação digital.',
      'Líder técnico com experiência na condução de equipes e projetos de alta complexidade.',
      'MBA em Arquitetura Full Cycle e pós-graduação em Telemática.',
      'Experiência em planejamento estratégico, definição de soluções, arquitetura corporativa e apoio à tomada de decisão em projetos de tecnologia.',
      'Responsável por apoiar a arquitetura da solução, a validação de mercado, a estratégia comercial e a articulação institucional.',
    ],
  },
];
