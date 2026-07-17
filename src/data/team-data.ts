export interface TeamMember {
  name: string;
  role: string;
  bullets: string[];
  editable?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Marcelo Ribeiro de Oliveira Mello',
    role: 'Idealizador e líder do projeto',
    bullets: [
      'Cientista da computação',
      'Mestre em Modelagem Computacional',
      'Responsável por produto, arquitetura, desenvolvimento, dados, Inteligência Artificial e Machine Learning',
      'Formação em andamento na área de IA e Machine Learning',
    ],
  },
  {
    name: 'Honório Henrique',
    role: 'Validação de mercado e estratégia comercial',
    bullets: [
      'Relacionamento com potenciais clientes',
      'Estratégia comercial',
      'Modelo de negócios',
      'Articulação institucional',
      '[ espaço reservado para nome completo e currículo detalhado ]',
    ],
    editable: true,
  },
];
